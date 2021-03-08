import { format } from 'date-fns'
import { GhostPostOrPage } from '@/ghost/api'
import Link from 'next/link'

interface Props {
  posts: GhostPostOrPage[]
}

export default function WritingList({ posts }: Props) {
  if (!posts || posts.length === 0)
    return (
      <p className="flex flex-col space-y-6 mt-4 text-xl">
        There seems to be no posts at the moment. But let's not kid each other.
        I probably pushed something buggy.
      </p>
    )

  return (
    <div className="flex flex-col space-y-6">
      {posts.map((post) => (
        <div
          className="flex flex-col space-y-4 bg-gray-100 rounded-md shadow-cardHover dark:bg-gray-950"
          key={post.id}
        >
          <Link href="/writing/[slug]" as={`/writing/${post.slug}`} passHref>
            <a className="px-4 py-4 space-y-4">
              <h2 className="text-2xl text-gray-1000 dark:text-gray-50">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-base font-normal text-gray-800 dark:text-gray-100 clamp-2">
                  {post.excerpt}
                </p>
              )}
              <p className="p-small">
                {`${format(new Date(post.updated_at), 'MMMM dd, yyyy')}`}
              </p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
