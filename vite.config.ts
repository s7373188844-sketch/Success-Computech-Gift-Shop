import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';
import dotenv from 'dotenv';
import {GoogleGenAI} from '@google/genai';
import {retrieveContext} from './src/data/askMitraKnowledge';
import {ASK_MITRA_SYSTEM_PROMPT} from './src/data/askMitraSystemPrompt';
import {appendLog, readLogs} from './server/askMitraStore';
import {login, isValidToken} from './server/adminAuth';

dotenv.config();

interface ChatTurn {
  role: 'user' | 'model';
  text: string;
}

async function readJsonBody(req: any): Promise<any> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk as Buffer);
  const raw = Buffer.concat(chunks).toString('utf-8');
  return raw ? JSON.parse(raw) : {};
}

function getBearerToken(req: any): string | null {
  const header = req.headers['authorization'] || '';
  const match = /^Bearer\s+(.+)$/i.exec(header);
  return match ? match[1] : null;
}

// Serves the Ask Mitra chat API + a small admin API from within the Vite dev
// server so the Gemini API key and stored Q&A logs stay server-side only.
function askMitraApiPlugin(): Plugin {
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey && apiKey !== 'MY_GEMINI_API_KEY' ? new GoogleGenAI({apiKey}) : null;

  return {
    name: 'ask-mitra-api',
    configureServer(server) {
      server.middlewares.use('/api/ask-mitra', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        res.setHeader('Content-Type', 'application/json');

        try {
          const body = await readJsonBody(req);

          const message: string = (body.message || '').toString().slice(0, 2000).trim();
          const history: ChatTurn[] = Array.isArray(body.history) ? body.history : [];
          const lang: string = (body.lang || 'en').toString();
          const customerName: string = (body.customer?.name || 'Guest').toString().slice(0, 120).trim() || 'Guest';
          const customerMobile: string = (body.customer?.mobile || '').toString().slice(0, 20).trim();

          if (!message) {
            res.statusCode = 400;
            res.end(JSON.stringify({error: 'Empty message'}));
            return;
          }

          if (!ai) {
            const reply =
              'Ask Mitra setup ippo mudiyala (GEMINI_API_KEY .env file-la illa). Shop-a nerudiya contact/visit pannunga: 15/12, PN Rd, opposite AK Motors, Kamaraj Nagar, Tiruppur, Tamil Nadu 641602. (Mon-Sat 9:30AM-9:00PM, Sun 9:30AM-2:30PM)';
            appendLog({customerName, customerMobile, question: message, answer: reply, lang});
            res.statusCode = 200;
            res.end(JSON.stringify({reply}));
            return;
          }

          const contextChunks = retrieveContext(message);
          const contextBlock = contextChunks
            .map((c, i) => `--- CONTEXT CHUNK ${i + 1} ---\n${c}`)
            .join('\n\n');

          const contents = [
            ...history.slice(-8).map((h) => ({role: h.role, parts: [{text: h.text}]})),
            {
              role: 'user' as const,
              parts: [{text: `CONTEXT:\n${contextBlock}\n\nCUSTOMER MESSAGE:\n${message}`}],
            },
          ];

          const response = await ai.models.generateContent({
            model: 'gemini-3.6-flash',
            contents,
            config: {systemInstruction: ASK_MITRA_SYSTEM_PROMPT, temperature: 0.3},
          });

          const reply =
            response.text?.trim() ||
            'Mannikkanum, ippo reply generate panna mudiyala. Shop-a nerudiya contact pannunga.';

          appendLog({customerName, customerMobile, question: message, answer: reply, lang});

          res.statusCode = 200;
          res.end(JSON.stringify({reply}));
        } catch (err) {
          console.error('[Ask Mitra] error:', err);
          res.statusCode = 500;
          res.end(
            JSON.stringify({
              error: 'Something went wrong. Please try again or contact the shop directly.',
            })
          );
        }
      });

      // Admin dashboard auth: exchanges ADMIN_DASHBOARD_PASSWORD for a session token.
      server.middlewares.use('/api/admin/login', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }
        res.setHeader('Content-Type', 'application/json');
        try {
          const body = await readJsonBody(req);
          const token = login((body.password || '').toString());
          if (!token) {
            res.statusCode = 401;
            res.end(JSON.stringify({error: 'Incorrect password'}));
            return;
          }
          res.statusCode = 200;
          res.end(JSON.stringify({token}));
        } catch {
          res.statusCode = 400;
          res.end(JSON.stringify({error: 'Bad request'}));
        }
      });

      // Admin dashboard data: all stored Ask Mitra Q&A logs.
      server.middlewares.use('/api/admin/ask-mitra-logs', async (req, res) => {
        if (req.method !== 'GET') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }
        res.setHeader('Content-Type', 'application/json');
        if (!isValidToken(getBearerToken(req))) {
          res.statusCode = 401;
          res.end(JSON.stringify({error: 'Unauthorized'}));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify({logs: readLogs()}));
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), askMitraApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
