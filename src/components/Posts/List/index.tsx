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
    <ul className="leading-relaxed space-y-4">
      {posts.map((frontMatter) => (
        <li key={frontMatter.slug}>
          <Link href={`${href}/${frontMatter.slug}`} passHref>
            <a>
              <span className="border-b border-dotted border-lt-darker dark:border-dk-darker hover:border-none hover:bg-lt-black hover:text-lt-white dark:hover:bg-dk-black dark:hover:text-dk-white">
                {frontMatter.title}
              </span>
              <time className="w-full ml-2 text-lt-darkest dark:text-dk-darkest sm:ml-4 sm:w-24">
                {`${dayjs(new Date(frontMatter.publishedAt)).format(
                  'MMMM DD, YYYY'
                )}`}
              </time>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
