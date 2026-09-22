import fs from 'fs';
import path from 'path';

const DATA_DIR = path.resolve(process.cwd(), 'data');
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
  ensureFile();
  try {
    const raw = fs.readFileSync(LOG_FILE, 'utf-8');
    const parsed = JSON.parse(raw || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendLog(entry: Omit<AskMitraLogEntry, 'id' | 'timestamp'>): AskMitraLogEntry {
  ensureFile();
  const logs = readLogs();
  const full: AskMitraLogEntry = {
    ...entry,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
  };
  logs.push(full);
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2), 'utf-8');
  return full;
}
