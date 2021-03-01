import { format } from 'date-fns'
import { GhostPostOrPage } from '@/ghost/api'
import Link from 'next/link'

interface Props {
  posts: GhostPostOrPage[]
}

export default function WritingList({ posts }: Props) {
  if (!posts || posts.length === 0)
    return (
      <p className="mt-4 text-xl">
        There seems to be no posts at the moment. But let's not kid each other.
        I probably pushed something buggy.
      </p>
    )

  return (
    <div className="flex flex-col space-y-6">
      {posts.map((post) => (
        <div
          className="flex flex-col px-4 py-4 space-y-4 bg-white shadow-cardHover dark:bg-gray-950"
          key={post.id}
        >
          <Link href="/writing/[slug]" as={`/writing/${post.slug}`} passHref>
            <a className="text-lg text-blue-500 dark:text-blue-400">
              {post.title}
            </a>
          </Link>
          {post.excerpt && (
            <p className="text-base text-gray-700 dark:text-gray-200 clamp-3">
              {post.excerpt}
            </p>
          )}
          <p className="p-small">
            {`${format(new Date(post.updated_at), 'MMMM dd, yyyy')}`}
          </p>
        </div>
      ))}
    </div>
  )
}
