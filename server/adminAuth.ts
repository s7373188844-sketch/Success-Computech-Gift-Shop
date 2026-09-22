import crypto from 'crypto';

// In-memory session tokens. Reset on server restart -- fine for a small local admin dashboard.
const validTokens = new Set<string>();

export function login(password: string): string | null {
  const expected = process.env.ADMIN_DASHBOARD_PASSWORD || '';
  if (!expected || password !== expected) return null;
  const token = crypto.randomBytes(24).toString('hex');
  validTokens.add(token);
  return token;
}

export function isValidToken(token: string | undefined | null): boolean {
  return !!token && validTokens.has(token);
}
