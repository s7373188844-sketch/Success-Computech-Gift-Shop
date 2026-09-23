import {handleAdminLogs} from '../../server/askMitraHandlers.js';

function getBearerToken(req: any): string | null {
  const header = req.headers['authorization'] || '';
  const match = /^Bearer\s+(.+)$/i.exec(header);
  return match ? match[1] : null;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({error: 'Method Not Allowed'});
    return;
  }
  const {status, body} = await handleAdminLogs(getBearerToken(req));
  res.status(status).json(body);
}
