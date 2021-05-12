import PostsList from '@/components/Posts/List'

export default function PostsContainer({ posts, href }) {
  if (!posts || posts.length === 0) return null
  return (
    <aside>
      <PostsList href={href} posts={posts} />
    </aside>
  )
}
