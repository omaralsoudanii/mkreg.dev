import { GhostPostOrPage } from '@/ghost/api'
import Link from 'next/link'
import WritingList from '@/components/Writing/List'

interface Props {
  posts: GhostPostOrPage[]
}

export default function FeaturedPosts({ posts }: Props) {
  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-4">
      <h1>Featured</h1>
      {posts && <WritingList posts={posts} />}

      <div className="flex flex-col space-y-1">
        <Link href="/writing" as="/writing" passHref>
          <a className="text-blue-600 dark:text-blue-400">
            See all posts &rarr;
          </a>
        </Link>

        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400"
        >
          RSS Feed &rarr;
        </a>
      </div>
    </div>
  )
}
