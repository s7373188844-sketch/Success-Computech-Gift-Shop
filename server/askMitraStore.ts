import fs from 'fs';
import path from 'path';
import os from 'os';

// On Vercel (and most serverless hosts) the project directory is read-only;
// only /tmp is writable, and it's wiped between cold starts/instances.
// This keeps things working without crashing, but logs won't survive
// reliably in that environment -- see README note for a real DB when ready.
const DATA_DIR = process.env.VERCEL
  ? path.join(os.tmpdir(), 'ask-mitra-data')
  : path.resolve(process.cwd(), 'data');
const LOG_FILE = path.join(DATA_DIR, 'ask-mitra-logs.json');

export interface AskMitraLogEntry {
  id: string;
  customerName: string;
  customerMobile: string;
  question: string;
  answer: string;
  lang: string;
  timestamp: string;
}

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, {recursive: true});
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '[]', 'utf-8');
}

export function readLogs(): AskMitraLogEntry[] {
  try {
    ensureFile();
    const raw = fs.readFileSync(LOG_FILE, 'utf-8');
    const parsed = JSON.parse(raw || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendLog(entry: Omit<AskMitraLogEntry, 'id' | 'timestamp'>): AskMitraLogEntry | null {
  const full: AskMitraLogEntry = {
    ...entry,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
  };
  try {
    ensureFile();
    const logs = readLogs();
    logs.push(full);
    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2), 'utf-8');
    return full;
  } catch (err) {
    console.error('[Ask Mitra] failed to persist log entry:', err);
    return null;
  }
}
