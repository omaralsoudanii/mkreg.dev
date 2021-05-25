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
    <div className="space-y-8">
      {posts.map((frontMatter) => (
        <div
          key={frontMatter.slug}
          className="flex flex-col items-start px-4 py-4 border border-gray-300 rounded dark:bg-dark dark:border-gray-700"
        >
          <Link
            key={frontMatter.slug}
            passHref
            href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}
          >
            <a className="w-full">
              <div className="flex flex-wrap">
                {frontMatter.tags.map((t: string) => (
                  <span className="inline-block !pt-1 mr-2 text-[15px] font-medium text-tertiary">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="lg:!text-2xl !text-xl !pt-2 !font-semibold !text-heading !my-2">
                {frontMatter.title}
              </h2>
              <p className="!leading-normal !text-base !font-normal text-secondary !my-2">
                {frontMatter.summary}
              </p>
              <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-tertiary">
                <time>{`${dayjs(new Date(frontMatter.date)).format(
                  'MMMM DD, YYYY'
                )}`}</time>
              </span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
