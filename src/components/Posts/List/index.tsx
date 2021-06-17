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
    <Link key={frontMatter.slug} href={`${href}/${frontMatter.slug}`} passHref>
      <a className="inline-block w-full">
        <div className="w-full mb-12">
          <div className="flex flex-col justify-between lg:flex-row">
            <h2 className="!text-xl lg:!text-2xl !mb-0 w-full !mt-0 text-display">
              {frontMatter.title}
            </h2>
            <p className="w-32 !font-normal !text-base text-left text-tertiary lg:text-right !mb-1 lg:!mb-0">
              {`${dayjs(new Date(frontMatter.date)).format('MMMM DD, YYYY')}`}
            </p>
          </div>
          <p className="!font-normal lg:!py-1 !my-0 !text-base text-tertiary clamp-3">
            {frontMatter.summary}
          </p>
        </div>
      </a>
    </Link>
  ))
}
