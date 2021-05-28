import PostsList from '@/components/Posts/List'

export default function PostsContainer({ posts, href }) {
  return (
    <div className="mt-24 space-y-16">
      <PostsList href={href} posts={posts} />
    </div>
  )
}
