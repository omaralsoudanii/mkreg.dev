import dayjs from 'dayjs'
import Link from 'next/link'
import Tag from '@/components/Tag'
import { Environment } from '@/lib/environment'
import { collections } from '@/lib/ghost'
import { resolveUrl } from '@/lib/routing'

export default function PostsList({ posts }) {
  if (!posts || posts.length === 0)
    return (
      <p className="flex flex-col mt-4 space-y-6 text-xl">
        There seems to be no posts at the moment. But let's not kid each other.
        I probably pushed something buggy.
      </p>
    )
  const apiUrl = Environment.ghost.apiUrl
  return (
    <div className="flex flex-col w-full space-y-6">
      {posts.map((post) => {
        const collectionPath = collections.getCollectionByNode(post)
        const url = resolveUrl({
          apiUrl,
          collectionPath,
          slug: post.slug,
          url: post.url,
        })
        return (
          <div
            className="flex flex-col items-start px-4 py-6 space-y-4 bg-gray-100 dark:bg-gray-900"
            key={post.slug}
          >
            <Link href={url} passHref>
              <a>
                <h2 className="font-extrabold hover:underline text-secondary">
                  {post.title}
                </h2>
              </a>
            </Link>

            {post.custom_excerpt ? (
              <p>{post.custom_excerpt}</p>
            ) : (
              <p>{post.excerpt}</p>
            )}
            <div className="flex flex-wrap">
              {post.tags.map((tag) => (
                <Tag
                  key={tag.slug}
                  url={resolveUrl({ apiUrl, slug: tag.slug, url: tag.url })}
                  text={tag.name}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              {`${dayjs(new Date(post.published_at)).format('MMMM DD, YYYY')}`}
            </p>
          </div>
        )
      })}
    </div>
  )
}
