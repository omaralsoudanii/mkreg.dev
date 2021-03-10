import { format } from 'date-fns'
import { GhostPostOrPage } from '@/ghost/api'
import Link from 'next/link'

interface Props {
  posts: GhostPostOrPage[]
}

export default function WritingList({ posts }: Props) {
  if (!posts || posts.length === 0)
    return (
      <p className="flex flex-col mt-4 space-y-6 text-xl">
        There seems to be no posts at the moment. But let's not kid each other.
        I probably pushed something buggy.
      </p>
    )

  return (
    <div className="flex flex-col space-y-6">
      {posts.map((post) => (
        <div
          className="flex flex-col space-y-4 bg-white rounded-md shadow-cardHover dark:bg-gray-900"
          key={post.id}
        >
          <Link href={`/writing/${post.slug}`}>
            <a className="px-4 py-4 space-y-4">
              <h2 className="text-2xl text-gray-1000 dark:text-gray-50">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-base font-normal text-gray-1000 dark:text-gray-50 clamp-3">
                  {post.excerpt}
                </p>
              )}
              <p className="p-small">
                {`Published at ${format(
                  new Date(post.updated_at),
                  'MMMM dd, yyyy'
                )}`}
              </p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
