import Link from 'next/link'
import PostsList from '@/components/Posts/List'

export default function PostsContainer({ posts, href, name }) {
  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="py-2 text-primary font-extrabold">{name}</h1>
      <PostsList href={href} posts={posts} />
      <Link href={href}>
        <a className="py-1 text-base text-center text-link">
          See all posts &rarr;
        </a>
      </Link>
    </div>
  )
}
