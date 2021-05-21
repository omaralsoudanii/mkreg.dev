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
        <div className="flex flex-col my-12" key={frontMatter.slug}>
          <h3 className="!my-2 !font-semibold">
            <Link href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}>
              <a className="link-unstyled !font-semibold">
                {frontMatter.title}
              </a>
            </Link>
          </h3>
          <p className="text-secondary text-base lg:text-lg !my-0 clamp-2 lg:clamp-3">
            {frontMatter.summary}
          </p>
          <p className="!my-0 text-base lg:text-lg !font-medium text-tertiary">
            <time>{`${dayjs(new Date(frontMatter.date)).format(
              'MMMM DD, YYYY'
            )}`}</time>
          </p>
        </div>
      ))}
    </div>
  )
}
