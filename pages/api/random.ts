import copypasta from '@/data/copypasta'
import type { NextApiRequest, NextApiResponse } from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const idx = Math.floor(Math.random() * copypasta.length + 0)
  res.status(200).json(copypasta[idx])
}
