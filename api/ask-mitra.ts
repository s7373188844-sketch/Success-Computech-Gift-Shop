import {handleAskMitra} from '../server/askMitraHandlers';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({error: 'Method Not Allowed'});
    return;
  }
  const {status, body} = await handleAskMitra(req.body);
  res.status(status).json(body);
}
