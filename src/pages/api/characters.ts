import { NextApiRequest, NextApiResponse } from 'next';
import { fetchCharacters } from '../../lib/swapi';



export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // strengur getur ekki verið null breytum in indefined
  const after = req.query?.after as string | undefined;
  let resultsfromcatch = null;
  // TODO sækja næstu síðu af gögnum hér
  resultsfromcatch  = await fetchCharacters(after);

  res.status(200).json(resultsfromcatch );
};
