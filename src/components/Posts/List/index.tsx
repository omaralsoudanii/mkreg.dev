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

  return posts.map((frontMatter) => (
    <div
      key={frontMatter.title}
      className="flex flex-col px-6 py-4 border border-gray-300 rounded border-opacity-70 dark:bg-dark dark:border-gray-400 dark:border-opacity-10"
    >
      <Link
        passHref
        href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}
      >
        <a className="w-full">
          <span className="!my-0  text-sm text-tertiary">
            <time>{`${dayjs(new Date(frontMatter.date)).format(
              'MMMM DD, YYYY'
            )}`}</time>
          </span>
          <h2 className="lg:!text-2xl !text-xl !pt-0 !mt-0 !mb-3">
            {frontMatter.title}
          </h2>
          <p className="clamp-3 text-base lg:text-lg !font-normal text-secondary !mb-0 !mt-1">
            {frontMatter.summary}
          </p>
        </a>
      </Link>
    </div>
  ))
}
