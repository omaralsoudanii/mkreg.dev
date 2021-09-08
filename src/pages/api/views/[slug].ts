import { NextApiRequest, NextApiResponse } from 'next'

import { getViews, insertView } from '@/lib/planetscale'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    if (req.method === 'POST') {
      const result = await insertView(req.query.slug)
      return res.json(result)
    } else if (req.method === 'GET') {
      const result = await getViews(req.query.slug)
      return res.json(result)
    } else {
      return res.status(404).json({ message: 'not found' })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
}
export default handler
