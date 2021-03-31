import copypasta from '@/data/copypasta'
import type { NextApiRequest, NextApiResponse } from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id)
  if (id > copypasta.length) {
    res.status(400).json('ID Invalid')
  } else {
    res.status(200).json(copypasta[id])
  }
}
