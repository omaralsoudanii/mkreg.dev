import PostsList from '@/components/Posts/List'

export default function PostsContainer({ posts, href }) {
  return (
    <div className="mt-16 space-y-4 lg:space-y-6">
      <PostsList href={href} posts={posts} />
    </div>
  )
}
