import { format } from 'date-fns'
import { GhostPostOrPage } from '@/ghost/api'
import Link from 'next/link'

interface Props {
  posts: GhostPostOrPage[]
}

export default function WritingList({ posts }: Props) {
  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-5">
      {posts.map((post) => (
        <div className="flex flex-col space-y-1" key={post.id}>
          <Link href="/writing/[slug]" as={`/writing/${post.slug}`} passHref>
            <a className="text-lg text-blue-600 dark:text-blue-500">
              {post.title}
            </a>
          </Link>
          {post.excerpt && <p className="text-base clamp-2">{post.excerpt}</p>}
          <p className="p-small">
            {`${format(new Date(post.updated_at), 'MMMM dd, yyyy')}`}
          </p>
        </div>
      ))}
    </div>
  )
}
