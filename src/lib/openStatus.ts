import { SITE } from '../site';

export interface OpenStatus {
  open: boolean;
  until?: string;
  nextOpenDay?: number;
  nextOpenTime?: string;
}

function nowInIST(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const dayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { day: dayMap[get('weekday')] ?? 0, minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute')) };
}

const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));

function hoursFor(day: number) {
  return SITE.hours.find((h) => (h.days as readonly number[]).includes(day));
}

export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = nowInIST(date);
  const today = hoursFor(day);
  if (today && minutes >= toMin(today.open) && minutes < toMin(today.close)) {
    return { open: true, until: today.close };
  }
  if (today && minutes < toMin(today.open)) {
    return { open: false, nextOpenDay: day, nextOpenTime: today.open };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = hoursFor(d);
    if (h) return { open: false, nextOpenDay: d, nextOpenTime: h.open };
  }
  return { open: false };
}

export function formatTime(t: string, lang: 'en' | 'ta'): string {
  const h = Number(t.slice(0, 2));
  const m = t.slice(3, 5);
  const h12 = ((h + 11) % 12) + 1;
  if (lang === 'ta') {
    const part = h < 12 ? 'காலை' : h < 16 ? 'மதியம்' : h < 19 ? 'மாலை' : 'இரவு';
    return `${part} ${h12}:${m}`;
  }
  return `${h12}:${m} ${h < 12 ? 'AM' : 'PM'}`;
}

export function currentISTDay(date = new Date()): number {
  return nowInIST(date).day;
}
