import dayjs from 'dayjs'
import Link from 'next/link'

export default function PostsList({ posts, href }) {
  if (!posts || posts.length === 0)
    return (
      <p>
        There seems to be no posts at the moment. But let's not kid each other.
        I probably pushed something buggy.
      </p>
    )

  return (
    <ul className="space-y-4 leading-relaxed">
      {posts.map((frontMatter) => (
        <li key={frontMatter.slug}>
          <Link
            href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}
            passHref
          >
            <a className="text-link">
              <span>{frontMatter.title}</span>
            </a>
          </Link>
          <time className="w-full ml-2 text-gray-600 dark:text-gray-400 sm:ml-4 sm:w-24">
            {`${dayjs(new Date(frontMatter.publishedAt)).format(
              'MMMM DD, YYYY'
            )}`}
          </time>
        </li>
      ))}
    </ul>
  )
}
