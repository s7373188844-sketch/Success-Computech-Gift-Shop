import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';
import dotenv from 'dotenv';
import {handleAskMitra, handleAdminLogin, handleAdminLogs} from './server/askMitraHandlers';

dotenv.config();

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

// Mirrors the /api/* Vercel serverless functions (see api/) so the same
// Ask Mitra chat + admin dashboard endpoints work under `npm run dev` too.
function askMitraApiPlugin(): Plugin {
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
          const {status, body: result} = await handleAskMitra(body);
          res.statusCode = status;
          res.end(JSON.stringify(result));
        } catch (err) {
          console.error('[Ask Mitra] error:', err);
          res.statusCode = 500;
          res.end(JSON.stringify({error: 'Something went wrong. Please try again or contact the shop directly.'}));
        }
      });

      server.middlewares.use('/api/admin/login', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }
        res.setHeader('Content-Type', 'application/json');
        try {
          const body = await readJsonBody(req);
          const {status, body: result} = await handleAdminLogin(body);
          res.statusCode = status;
          res.end(JSON.stringify(result));
        } catch {
          res.statusCode = 400;
          res.end(JSON.stringify({error: 'Bad request'}));
        }
      });

      server.middlewares.use('/api/admin/ask-mitra-logs', async (req, res) => {
        if (req.method !== 'GET') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }
        res.setHeader('Content-Type', 'application/json');
        const {status, body: result} = await handleAdminLogs(getBearerToken(req));
        res.statusCode = status;
        res.end(JSON.stringify(result));
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
