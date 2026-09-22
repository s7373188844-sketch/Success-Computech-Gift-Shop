import crypto from 'crypto';

// Stateless signed tokens (timestamp + HMAC signature) instead of an in-memory
// session set, since serverless functions (e.g. on Vercel) don't share memory
// across invocations/instances.
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

function getSecret(): string {
  return process.env.ADMIN_DASHBOARD_PASSWORD || '';
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', getSecret()).update(payload).digest('hex');
}

export function login(password: string): string | null {
  const expected = getSecret();
  if (!expected || password !== expected) return null;
  const issuedAt = Date.now().toString();
  const signature = sign(issuedAt);
  return Buffer.from(`${issuedAt}.${signature}`).toString('base64url');
}

export function isValidToken(token: string | undefined | null): boolean {
  if (!token || !getSecret()) return false;
  try {
    const decoded = Buffer.from(token, 'base64url').toString('utf-8');
    const [issuedAt, signature] = decoded.split('.');
    if (!issuedAt || !signature) return false;
    if (Date.now() - Number(issuedAt) > TOKEN_TTL_MS) return false;
    const expected = sign(issuedAt);
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}
