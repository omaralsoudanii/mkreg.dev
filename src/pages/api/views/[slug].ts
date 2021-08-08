import { NextApiRequest, NextApiResponse } from 'next'

import db from '@/lib/planetscale'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const [rows] = await db.query(
      `
      SELECT count FROM views
      WHERE slug = ?;
    `,
      [req.query.slug]
    )
    if (req.method === 'POST') {
      const date = Date.now()
      if (rows.length == 0) {
        await db.query(
          `
          INSERT INTO views (slug, count, created_at, updated_at)
          VALUES (?,?,?,?);
        `,
          [req.query.slug, 1, date, date]
        )
        return res.status(200).json({
          total: 1,
        })
      } else {
        await db.query(
          `
          UPDATE views
          SET count = count + 1, updated_at = ?
          WHERE slug = ?;
        `,
          [date, req.query.slug]
        )
        const total = rows.length ? rows[0].count + 1 : 0
        return res.json({
          total: total,
        })
      }
    }

    if (req.method === 'GET') {
      const total = rows.length ? rows[0].count : 0
      return res.json({ total: total })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
}
export default handler
