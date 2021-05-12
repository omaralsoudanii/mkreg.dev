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
        <div className="w-full my-12" key={frontMatter.slug}>
          <div className="flex flex-col items-start justify-between md:items-center md:flex-row">
            <h2 className="md:!my-3 !my-2">
              <Link
                href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}
              >
                <a className="link-unstyled">{frontMatter.title} </a>
              </Link>
            </h2>
            <p className="text-left !my-0 ! md:!mt-2  md:text-lg md:!leading-relaxed text-gray-600 dark:text-gray-400 md:text-right">
              <time>{`${dayjs(new Date(frontMatter.date)).format(
                'MMMM DD, YYYY'
              )}`}</time>
            </p>
          </div>
          <p className="text-secondary !font-normal md:text-lg !leading-normal  !my-2 md:!my-0 clamp-3">
            {frontMatter.summary}
          </p>
        </div>
      ))}
    </div>
  )
}
