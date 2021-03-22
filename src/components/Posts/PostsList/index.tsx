import Link from 'next/link'
import PostsList from '@/components/Posts/List'

export default function PostsContainer({ posts, href, name }) {
  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="px-2 py-2 text-heading-1">{name}</h1>
      <PostsList href={`/${href}`} posts={posts} />
      <Link href={`/${href}`}>
        <a>
          <p className="py-1 text-base text-center text-red-600 dark:text-red-400">
            See all posts &rarr;
          </p>
        </a>
      </Link>
    </div>
  )
}
