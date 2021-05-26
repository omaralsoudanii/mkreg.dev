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
      className="flex flex-col px-6 py-4 border border-gray-300 rounded border-opacity-70 dark:bg-dark dark:border-gray-400 dark:border-opacity-20"
    >
      <Link
        passHref
        href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}
      >
        <a className="w-full">
          <span className="!my-0  text-sm leading-none text-secondary">
            <time>{`${dayjs(new Date(frontMatter.date)).format(
              'MMMM DD, YYYY'
            )}`}</time>
          </span>
          <h2 className="lg:!text-2xl !leading-snug !text-xl !pt-0 !font-bold !text-heading !mt-0 !mb-3">
            {frontMatter.title}
          </h2>
          <p className="clamp-3 text-base !leading-normal  !font-normal text-tertiary !mb-0 !mt-1">
            {frontMatter.summary}
          </p>
        </a>
      </Link>
    </div>
  ))
}
