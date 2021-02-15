import { NextApiRequest, NextApiResponse } from 'next'
import { generateRSSFeed } from '@/ghost/rss'
import fs from 'fs'
import { getAllPosts, GhostPostsOrPages } from '@/ghost/api'

const NewRSS = async (req: NextApiRequest, res: NextApiResponse) => {
  const { key } = req.query

  if (!key || key !== process.env.FE_API_KEY) {
    return res.status(500).json({ error: 'Invalid key' })
  }

  let posts: GhostPostsOrPages | []

  try {
    posts = await getAllPosts()
  } catch (error) {
    return res.status(500).json({ error: 'Invalid key' })
  }

  if (!posts.length) {
    return {
      notFound: true,
    }
  }

  const rss = generateRSSFeed({ posts })
  fs.writeFileSync('./public/rss.xml', rss)
  return res.status(200).json({ error: '' })
}

export default NewRSS
