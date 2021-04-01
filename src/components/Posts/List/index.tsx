import dayjs from 'dayjs'
import Link from 'next/link'
import Tag from '@/components/Tag'

export default function PostsList({ posts, href }) {
  if (!posts || posts.length === 0)
    return (
      <p className="flex flex-col mt-4 space-y-6 text-xl">
        There seems to be no posts at the moment. But let's not kid each other.
        I probably pushed something buggy.
      </p>
    )

  return (
    <div className="flex flex-col w-full space-y-6">
      {posts.map((frontMatter) => (
        <div
          className="flex flex-col items-start px-4 py-6 space-y-2 bg-gray-100 dark:bg-gray-900"
          key={frontMatter.slug}
        >
          <p className="text-p-3">
            {`${dayjs(new Date(frontMatter.publishedAt)).format(
              'MMMM DD, YYYY'
            )}`}
          </p>
          <Link href={`${href}/${frontMatter.slug}`} passHref>
            <a>
              <h2 className="hover:underline text-heading-2">
                {frontMatter.title}
              </h2>
            </a>
          </Link>

          {frontMatter.description && (
            <p className="text-p-3">{frontMatter.description}</p>
          )}
          <div className="flex flex-wrap py-2">
            {frontMatter.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
