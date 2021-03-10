import { GhostPostOrPage } from '@/ghost/api'
import Link from 'next/link'
import WritingList from '@/components/Writing/List'

interface Props {
  posts: GhostPostOrPage[]
}

export default function FeaturedPosts({ posts }: Props) {
  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="px-2 py-2">Recent</h1>
      <WritingList posts={posts} />
      <Link href="/writing">
        <a>
          <p className="py-1 text-lg text-center text-blue-500 dark:text-blue-400">
            See all posts &rarr;
          </p>
        </a>
      </Link>
    </div>
  )
}
