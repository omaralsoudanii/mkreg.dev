import { PSDB } from 'planetscale-node'

const DBBranch: string = process.env.PLANETSCALE_BRANCH
const db = new PSDB(DBBranch)

export const insertView = async (slug: string | string[]) => {
  const date = Date.now()

  const [rows] = await db.query('SELECT count FROM views WHERE slug = ?;', [slug])

  if (rows.length == 0) {
    await db.query('INSERT INTO views (slug, count, created_at, updated_at) VALUES (?,?,?,?);', [
      slug,
      1,
      date,
      date,
    ])

    return { total: 1 }
  } else {
    await db.query('UPDATE views SET count = count + 1, updated_at = ? WHERE slug = ?;', [
      date,
      slug,
    ])

    const total = rows.length ? rows[0].count + 1 : 0
    return { total: total }
  }
}

export const getViews = async (slug: string | string[]) => {
  const [rows] = await db.query('SELECT count FROM views WHERE slug = ?;', [slug])

  const total = rows.length ? rows[0].count : 0
  return { total: total }
}

type Bookmark = { title: string; desc: string; url: string; icon: string }

export const getBookmarks = async (): Promise<Bookmark[]> => {
  const [rows] = await db.query(`SELECT * from bookmarks ORDER BY updated_at ASC LIMIT ?;`, [100])

  // Serialize the data
  const entries: Bookmark[] = Object.values(JSON.parse(JSON.stringify(rows)))
  return entries
}
