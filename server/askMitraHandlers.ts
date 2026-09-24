import {GoogleGenAI} from '@google/genai';
import {retrieveContext} from '../src/data/askMitraKnowledge.js';
import {ASK_MITRA_SYSTEM_PROMPT} from '../src/data/askMitraSystemPrompt.js';
import {appendLog, readLogs} from './askMitraStore.js';
import {login, isValidToken} from './adminAuth.js';

export interface ChatTurn {
  role: 'user' | 'model';
  text: string;
}

interface ContentPart {
  role: 'user' | 'model';
  parts: {text: string}[];
}

export interface HandlerResult {
  status: number;
  body: Record<string, unknown>;
}

function getGeminiClient(): InstanceType<typeof GoogleGenAI> | null {
  const apiKey = process.env.GEMINI_API_KEY;
  return apiKey && apiKey !== 'MY_GEMINI_API_KEY' ? new GoogleGenAI({apiKey}) : null;
}

interface OpenAIConfig {
  apiKey: string;
  model: string;
}

function getOpenAIConfig(): OpenAIConfig | null {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey === 'MY_OPENAI_API_KEY') return null;
  return {apiKey, model: process.env.OPENAI_MODEL || 'gpt-4o-mini'};
}

function isRetryableStatus(err: any): boolean {
  const status = err?.status ?? err?.error?.code;
  return status === 503 || status === 429;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateWithGeminiRetry(
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

async function callOpenAI(config: OpenAIConfig, systemPrompt: string, contents: ContentPart[]): Promise<string> {
  const messages = [
    {role: 'system', content: systemPrompt},
    ...contents.map((c) => ({
      role: c.role === 'model' ? 'assistant' : 'user',
      content: c.parts.map((p) => p.text).join('\n'),
    })),
  ];

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({model: config.model, messages, temperature: 0.3}),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new Error(`OpenAI ${res.status}: ${errText.slice(0, 300)}`);
  }

  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error('OpenAI returned no content');
  return text;
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

  const contextChunks = retrieveContext(message);
  const contextBlock = contextChunks.map((c, i) => `--- CONTEXT CHUNK ${i + 1} ---\n${c}`).join('\n\n');

  const contents: ContentPart[] = [
    ...history.slice(-8).map((h) => ({role: h.role, parts: [{text: h.text}]})),
    {
      role: 'user' as const,
      parts: [{text: `CONTEXT:\n${contextBlock}\n\nCUSTOMER MESSAGE:\n${message}`}],
    },
  ];

  let reply: string | null = null;
  let lastErr: unknown = null;
  let answeredBy: 'gemini' | 'openai' | null = null;

  const gemini = getGeminiClient();
  if (gemini) {
    try {
      const response = await generateWithGeminiRetry(gemini, {
        model: 'gemini-3.6-flash',
        contents,
        config: {systemInstruction: ASK_MITRA_SYSTEM_PROMPT, temperature: 0.3},
      });
      reply = response.text?.trim() || null;
      if (reply) answeredBy = 'gemini';
    } catch (err) {
      lastErr = err;
      console.error('[Ask Mitra] Gemini failed:', err);
    }
  }

  if (!reply) {
    const openaiConfig = getOpenAIConfig();
    if (openaiConfig) {
      try {
        reply = await callOpenAI(openaiConfig, ASK_MITRA_SYSTEM_PROMPT, contents);
        answeredBy = 'openai';
      } catch (err) {
        lastErr = err;
        console.error('[Ask Mitra] OpenAI fallback failed:', err);
      }
    }
  }

  if (!reply) {
    reply = isRetryableStatus(lastErr)
      ? lang === 'ta'
        ? 'Ask Mitra ippo busy-a irukku (high demand). Konjam neram kalichu try pannunga, illa shop-a WhatsApp (7373188844) pannunga.'
        : 'Ask Mitra is a bit busy right now (high demand). Please try again shortly, or WhatsApp the shop at 7373188844.'
      : lang === 'ta'
        ? 'ஏதோ தவறு நடந்தது. Konjam neram kalichu try pannunga, illa shop-a WhatsApp (7373188844) pannunga.'
        : 'Something went wrong. Please try again, or WhatsApp the shop at 7373188844.';
  } else {
    console.log(`[Ask Mitra] Answered via ${answeredBy}`);
  }

  appendLog({customerName, customerMobile, question: message, answer: reply, lang});

  return {status: 200, body: {reply}};
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
