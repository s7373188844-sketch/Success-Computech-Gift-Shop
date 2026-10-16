import { SERVICE_CATEGORIES } from '../data/servicesData';
import type { Language, ServiceCategory, ServiceItem } from '../types';

export const ALL_SERVICES: ServiceItem[] = SERVICE_CATEGORIES.flatMap((c) => c.services);
export const POPULAR_SERVICES: ServiceItem[] = ALL_SERVICES.filter((s) => s.popular);

export function getService(id: string): ServiceItem | undefined {
  return ALL_SERVICES.find((s) => s.id === id);
}

export function getCategory(id: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.id === id);
}

export function serviceName(s: ServiceItem, lang: Language) {
  return lang === 'ta' ? s.name_ta : s.name_en;
}

export function categoryTitle(c: ServiceCategory, lang: Language) {
  return lang === 'ta' ? c.title_ta : c.title_en;
}

/** Common spellings and shorthand people type, mapped to words in the data. */
const ALIASES: Record<string, string> = {
  aadhar: 'aadhaar', adhar: 'aadhaar', adhaar: 'aadhaar', uidai: 'aadhaar',
  dl: 'driving licence', license: 'licence', llr: 'learner licence',
  voter: 'voter', epic: 'voter',
  ration: 'smart card ration', rationcard: 'smart card', smartcard: 'smart card',
  pf: 'pf epfo', uan: 'pf epfo', epfo: 'pf epfo', pension: 'life certificate pension',
  patta: 'patta chitta', chitta: 'patta chitta', ec: 'encumbrance',
  tnpsc: 'exam', hallticket: 'hall ticket', exam: 'exam',
  msme: 'udyam msme', udyam: 'udyam', fssai: 'fssai food',
  darshan: 'darshan temple', temple: 'temple', sabarimala: 'sabarimala', tirupati: 'tirupati',
  train: 'train', bus: 'bus', flight: 'flight', ticket: 'ticket',
  fastag: 'fastag', rc: 'rc vehicle', insurance: 'insurance',
  print: 'print', xerox: 'print', lamination: 'lamination', banner: 'banner', visiting: 'visiting card',
  jathagam: 'jathagam horoscope', horoscope: 'horoscope', nalavariyam: 'welfare board',
  certificate: 'certificate', income: 'certificate', caste: 'certificate', community: 'certificate',
};

function normalise(text: string) {
  return text.toLowerCase().normalize('NFC').replace(/[^\p{L}\p{M}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
}

const INDEX = new Map<string, { name: string; body: string }>(
  ALL_SERVICES.map((s) => [
    s.id,
    {
      name: normalise(`${s.name_en} ${s.name_ta} ${s.id.replace(/-/g, ' ')}`),
      body: normalise(
        [s.shortDesc_en, s.shortDesc_ta, ...s.subServices_en, ...s.subServices_ta, s.tag_en, s.tag_ta].join(' ')
      ),
    },
  ])
);

export function searchServices(query: string, pool: ServiceItem[] = ALL_SERVICES): ServiceItem[] {
  const q = normalise(query);
  if (!q) return pool;
  const terms = q.split(' ').flatMap((t) => (ALIASES[t] ? [t, ...ALIASES[t].split(' ')] : [t]));
  const scored = pool
    .map((s) => {
      const idx = INDEX.get(s.id)!;
      let score = 0;
      if (idx.name.includes(q)) score += 20;
      for (const t of terms) {
        if (t.length < 2) continue;
        if (idx.name.includes(t)) score += 5;
        else if (idx.body.includes(t)) score += 2;
      }
      return { s, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.map((x) => x.s);
}
