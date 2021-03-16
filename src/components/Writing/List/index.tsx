import dayjs from 'dayjs'
import Link from 'next/link'

export default function WritingList({ posts, href }) {
  if (!posts || posts.length === 0)
    return (
      <p className="flex flex-col mt-4 space-y-6 text-xl">
        There seems to be no posts at the moment. But let's not kid each other.
        I probably pushed something buggy.
      </p>
    )

  return (
    <div className="flex flex-col space-y-6">
      {posts.map((frontMatter) => (
        <div
          className="flex flex-col space-y-4 bg-white rounded-md shadow-cardHover dark:bg-gray-900"
          key={frontMatter.title}
        >
          <Link href={`${href}/${frontMatter.slug}`}>
            <a className="px-4 py-4 space-y-4">
              <h2 className="text-2xl text-gray-1000 dark:text-gray-50">
                {frontMatter.title}
              </h2>
              {frontMatter.description && (
                <p className="text-base font-normal text-gray-1000 dark:text-gray-50 clamp-3">
                  {frontMatter.description}
                </p>
              )}
              <p className="p-small">
                {`Published at ${dayjs(
                  new Date(frontMatter.publishedAt)
                ).format('MMMM DD, YYYY')}`}
              </p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
