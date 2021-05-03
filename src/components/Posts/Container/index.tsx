import PostsList from '@/components/Posts/List'

export default function PostsContainer({ posts, href, name }) {
  if (!posts || posts.length === 0) return null
  return (
    <section className="mt-4">
      <h2>{name}</h2>
      <PostsList href={href} posts={posts} />
    </section>
  )
}
