import { PSDB } from 'planetscale-node'

const db = new PSDB(process.env.PLANETSCALE_BRANCH)

export const insertView = async (slug: string | string[]) => {
  const date = Date.now()

  const [rows] = await db.query('SELECT count FROM views WHERE slug = ?;', [
    slug,
  ])

  if (rows.length == 0) {
    await db.query(
      'INSERT INTO views (slug, count, created_at, updated_at) VALUES (?,?,?,?);',
      [slug, 1, date, date]
    )

    return { total: 1 }
  } else {
    await db.query(
      'UPDATE views SET count = count + 1, updated_at = ? WHERE slug = ?;',
      [date, slug]
    )

    const total = rows.length ? rows[0].count + 1 : 0
    return { total: total }
  }
}

export const getViews = async (slug: string | string[]) => {
  const [rows] = await db.query('SELECT count FROM views WHERE slug = ?;', [
    slug,
  ])

  const total = rows.length ? rows[0].count : 0
  return { total: total }
}
