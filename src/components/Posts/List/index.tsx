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
    <div className="my-2">
      {posts.map((frontMatter) => (
        <div className="flex flex-col my-12" key={frontMatter.slug}>
          <h2 className="!my-0 !font-semibold !text-lg lg:!text-2xl !text-heading">
            <Link href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}>
              <a className="link-unstyled !font-semibold !text-heading">
                {frontMatter.title}
              </a>
            </Link>
          </h2>
          <p className="!my-0 !text-base text-tertiary">
            <time>{`${dayjs(new Date(frontMatter.date)).format(
              'MMMM DD, YYYY'
            )}`}</time>
          </p>

          <p className="text-secondary !text-base !my-2 clamp-2 lg:clamp-3">
            {frontMatter.summary}
          </p>
        </div>
      ))}
    </div>
  )
}
