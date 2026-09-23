import {GoogleGenAI} from '@google/genai';
import {retrieveContext} from '../src/data/askMitraKnowledge.js';
import {ASK_MITRA_SYSTEM_PROMPT} from '../src/data/askMitraSystemPrompt.js';
import {appendLog, readLogs} from './askMitraStore.js';
import {login, isValidToken} from './adminAuth.js';

export interface ChatTurn {
  role: 'user' | 'model';
  text: string;
}

export interface HandlerResult {
  status: number;
  body: Record<string, unknown>;
}

function getClient(): InstanceType<typeof GoogleGenAI> | null {
  const apiKey = process.env.GEMINI_API_KEY;
  return apiKey && apiKey !== 'MY_GEMINI_API_KEY' ? new GoogleGenAI({apiKey}) : null;
}

function isRetryableStatus(err: any): boolean {
  const status = err?.status ?? err?.error?.code;
  return status === 503 || status === 429;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateWithRetry(
  ai: InstanceType<typeof GoogleGenAI>,
  params: Parameters<InstanceType<typeof GoogleGenAI>['models']['generateContent']>[0],
  attempts = 3
) {
  let lastErr: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await ai.models.generateContent(params);
    } catch (err) {
      lastErr = err;
      if (!isRetryableStatus(err) || i === attempts - 1) throw err;
      await sleep(500 * (i + 1)); // 500ms, 1000ms backoff
    }
  }
  throw lastErr;
}

export async function handleAskMitra(body: any): Promise<HandlerResult> {
  const message: string = (body?.message || '').toString().slice(0, 2000).trim();
  const history: ChatTurn[] = Array.isArray(body?.history) ? body.history : [];
  const lang: string = (body?.lang || 'en').toString();
  const customerName: string = (body?.customer?.name || 'Guest').toString().slice(0, 120).trim() || 'Guest';
  const customerMobile: string = (body?.customer?.mobile || '').toString().slice(0, 20).trim();

  if (!message) {
    return {status: 400, body: {error: 'Empty message'}};
  }

  const ai = getClient();

  if (!ai) {
    const reply =
      'Ask Mitra setup ippo mudiyala (GEMINI_API_KEY .env file-la illa). Shop-a nerudiya contact/visit pannunga: 15/12, PN Rd, opposite AK Motors, Kamaraj Nagar, Tiruppur, Tamil Nadu 641602. (Mon-Sat 9:30AM-9:00PM, Sun 9:30AM-2:30PM)';
    appendLog({customerName, customerMobile, question: message, answer: reply, lang});
    return {status: 200, body: {reply}};
  }

  try {
    const contextChunks = retrieveContext(message);
    const contextBlock = contextChunks.map((c, i) => `--- CONTEXT CHUNK ${i + 1} ---\n${c}`).join('\n\n');

    const contents = [
      ...history.slice(-8).map((h) => ({role: h.role, parts: [{text: h.text}]})),
      {
        role: 'user' as const,
        parts: [{text: `CONTEXT:\n${contextBlock}\n\nCUSTOMER MESSAGE:\n${message}`}],
      },
    ];

    const response = await generateWithRetry(ai, {
      model: 'gemini-3.6-flash',
      contents,
      config: {systemInstruction: ASK_MITRA_SYSTEM_PROMPT, temperature: 0.3},
    });

    const reply =
      response.text?.trim() || 'Mannikkanum, ippo reply generate panna mudiyala. Shop-a nerudiya contact pannunga.';

    appendLog({customerName, customerMobile, question: message, answer: reply, lang});

    return {status: 200, body: {reply}};
  } catch (err) {
    console.error('[Ask Mitra] error:', err);
    const reply = isRetryableStatus(err)
      ? lang === 'ta'
        ? 'Ask Mitra ippo busy-a irukku (high demand). Konjam neram kalichu try pannunga, illa shop-a WhatsApp (7373188844) pannunga.'
        : "Ask Mitra is a bit busy right now (high demand). Please try again shortly, or WhatsApp the shop at 7373188844."
      : lang === 'ta'
        ? 'ஏதோ தவறு நடந்தது. Konjam neram kalichu try pannunga, illa shop-a WhatsApp (7373188844) pannunga.'
        : 'Something went wrong. Please try again, or WhatsApp the shop at 7373188844.';
    return {status: 200, body: {reply}};
  }
}

export async function handleAdminLogin(body: any): Promise<HandlerResult> {
  const token = login((body?.password || '').toString());
  if (!token) {
    return {status: 401, body: {error: 'Incorrect password'}};
  }
  return {status: 200, body: {token}};
}

export async function handleAdminLogs(bearerToken: string | null): Promise<HandlerResult> {
  if (!isValidToken(bearerToken)) {
    return {status: 401, body: {error: 'Unauthorized'}};
  }
  return {status: 200, body: {logs: readLogs()}};
}
