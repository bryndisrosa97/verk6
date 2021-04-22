import { NextApiRequest, NextApiResponse } from 'next';
import { fetchCharacters } from '../../lib/swapi';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // strengur getur ekki verið null breytum +i indefined
  const after = req.query?.after as string | undefined;
  let resultsfromcatch = null;

  // Sækir nástu síðu af gögnum af karakterum
  resultsfromcatch = await fetchCharacters(after);

  res.status(200).json(resultsfromcatch);
};
