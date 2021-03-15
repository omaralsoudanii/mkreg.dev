import Link from 'next/link'
import WritingList from '@/components/Writing/List'

export default function PostsList({ posts, href, name }) {
  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="px-2 py-2">{name}</h1>
      <WritingList href={`/${href}`} posts={posts} />
      <Link href={`/${href}`}>
        <a>
          <p className="py-1 text-lg text-center text-blue-500 dark:text-blue-400">
            See all posts &rarr;
          </p>
        </a>
      </Link>
    </div>
  )
}
