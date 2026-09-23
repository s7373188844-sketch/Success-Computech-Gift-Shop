import { SERVICE_CATEGORIES } from './servicesData.js';
import { ServiceItem } from '../types.js';

export const BUSINESS_INFO_CHUNK = `BUSINESS INFO
Name: Success Computech & Gift Shop
Type: Online digital services shop (government, documentation, booking, insurance, tax, education and other digital services assistance)
Location: 15/12, PN Rd, opposite AK Motors, Kamaraj Nagar, Tiruppur, Tamil Nadu 641602
Working hours: Monday to Saturday 9:30 AM - 9:00 PM, Sunday 9:30 AM - 2:30 PM
WhatsApp: 7373188844
Note: Success Computech provides application/process assistance only. Government departments, banks, insurers and ticket providers make their own final decisions.`;

// Informal / Tanglish / abbreviation aliases -> canonical keywords used in the data
const ALIASES: Record<string, string> = {
  aadhar: 'aadhaar', adhar: 'aadhaar', aadhaar: 'aadhaar',
  dl: 'driving licence', license: 'driving licence', licence: 'driving licence', llr: 'driving licence learner',
  pan: 'pan card',
  voter: 'voter id', epic: 'voter id',
  ration: 'smart card ration', rationcard: 'smart card ration', smartcard: 'smart card',
  gst: 'gst',
  pf: 'epfo pf uan', uan: 'epfo pf uan', epfo: 'epfo pf uan',
  pension: 'life certificate pension epfo', jeevan: 'life certificate pension',
  patta: 'patta chitta ec', chitta: 'patta chitta ec', ec: 'patta chitta ec encumbrance',
  rc: 'rc vehicle formalities', fastag: 'rc vehicle formalities fastag', insurance: 'rc vehicle formalities insurance',
  birth: 'birth death legal certificate', death: 'birth death legal certificate', heir: 'birth death legal certificate',
  tnpsc: 'tnpsc exam hall ticket', hallticket: 'tnpsc exam hall ticket', hall: 'tnpsc exam hall ticket',
  msme: 'udyam msme', udyam: 'udyam msme',
  fssai: 'fssai food licence',
  darshan: 'temple darshan', temple: 'temple darshan', sabarimala: 'temple darshan', tirupati: 'temple darshan',
  gift: 'gift pvc card printing', pvc: 'pvc id cards printing',
};

function buildSearchText(s: ServiceItem): string {
  return [
    s.name_en, s.name_ta, s.tag_en, s.tag_ta,
    s.shortDesc_en, s.shortDesc_ta,
    ...(s.subServices_en || []), ...(s.subServices_ta || []),
    ...(s.requiredDocuments_en || []), ...(s.requiredDocuments_ta || []),
    s.processingTime_en, s.processingTime_ta,
    ...(s.steps_en || []), ...(s.steps_ta || []),
    ...(s.faqs || []).flatMap((f) => [f.q_en, f.q_ta, f.a_en, f.a_ta]),
  ]
    .filter(Boolean)
    .join(' | ')
    .toLowerCase();
}

function formatServiceChunk(s: ServiceItem): string {
  const lines = [`SERVICE: ${s.name_en} (${s.name_ta})`];
  if (s.shortDesc_en) lines.push(`Description: ${s.shortDesc_en}`);
  if (s.requiredDocuments_en?.length) lines.push(`Required Documents (may vary by case): ${s.requiredDocuments_en.join('; ')}`);
  if (s.processingTime_en) lines.push(`Processing Time as listed (can vary, needs confirmation): ${s.processingTime_en}`);
  if (s.steps_en?.length) lines.push(`Process Steps: ${s.steps_en.join(' -> ')}`);
  if (s.subServices_en?.length) lines.push(`Sub-services covered: ${s.subServices_en.join('; ')}`);
  if (s.faqs?.length) {
    for (const f of s.faqs) lines.push(`FAQ - Q: ${f.q_en} A: ${f.a_en}`);
  }
  return lines.join('\n');
}

interface IndexedChunk {
  searchText: string;
  chunkText: string;
}

let INDEX: IndexedChunk[] | null = null;

function getIndex(): IndexedChunk[] {
  if (INDEX) return INDEX;
  INDEX = [];
  for (const cat of SERVICE_CATEGORIES) {
    for (const s of cat.services) {
      INDEX.push({ searchText: buildSearchText(s), chunkText: formatServiceChunk(s) });
    }
  }
  return INDEX;
}

// Tamil unicode block: U+0B80-U+0BFF, kept intact by the negated character class below
function tokenize(query: string): string[] {
  const lower = query.toLowerCase();
  const raw = lower.split(/[^a-z0-9஀-௿]+/).filter((t) => t.length >= 2);
  const expanded = new Set<string>();
  for (const t of raw) {
    expanded.add(t);
    if (ALIASES[t]) {
      for (const w of ALIASES[t].split(' ')) expanded.add(w);
    }
  }
  return Array.from(expanded);
}

/**
 * Lightweight keyword-overlap retrieval over the services knowledge base.
 * Always includes business info; adds up to `maxChunks` best-matching service chunks.
 */
export function retrieveContext(query: string, maxChunks = 3): string[] {
  const tokens = tokenize(query);
  const index = getIndex();

  const scored = index
    .map((entry) => {
      let score = 0;
      for (const tok of tokens) {
        if (entry.searchText.includes(tok)) score += 1;
      }
      return { entry, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const top = scored.slice(0, maxChunks).map((x) => x.entry.chunkText);
  return [BUSINESS_INFO_CHUNK, ...top];
}
