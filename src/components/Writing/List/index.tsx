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
          className="flex flex-col px-4 py-6 space-y-4 bg-white rounded-md shadow-cardHover dark:bg-gray-900"
          key={frontMatter.slug}
        >
          <p className="p-small">
            {`${dayjs(new Date(frontMatter.publishedAt)).format(
              'MMMM DD, YYYY'
            )}`}
          </p>
          <Link href={`${href}/${frontMatter.slug}`} passHref>
            <a>
              <p className="text-3xl font-bold text-black dark:text-white hover:underline">
                {frontMatter.title}
              </p>
            </a>
          </Link>
          {frontMatter.description && (
            <p className="text-base font-medium text-gray-800 dark:text-white clamp-3">
              {frontMatter.description}
            </p>
          )}
          <Link href={`${href}/${frontMatter.slug}`} passHref>
            <a>
              <p className="text-base text-blue-500 dark:text-blue-400">
                Read more &rarr;
              </p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
