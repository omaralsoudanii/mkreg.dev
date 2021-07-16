import { FormatDate } from '@/lib/utils'
import Link from 'next/link'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export default function PostsList({ posts, href }) {
  return (
    <div className="mt-8">
      {posts.map((frontMatter) => {
        return (
          <Row key={frontMatter.title} href={href} frontMatter={frontMatter} />
        )
      })}
    </div>
  )
}

const Row = ({ href, frontMatter }) => {
  const { data } = useSWR(`/api/views/${frontMatter.slug}`, fetcher)
  const views = data?.total
  return (
    <Link key={frontMatter.slug} href={`${href}/${frontMatter.slug}`} passHref>
      <a className="inline-block my-4 py-2 lg:my-6 w-full">
        <div className="w-full">
          <div className="flex flex-col justify-between lg:flex-row">
            <h2 className="!text-xl lg:!text-2xl !mb-0 w-full !mt-0 text-display">
              {frontMatter.title}
            </h2>
            <p className="w-32 !font-medium !text-base text-left text-tertiary lg:text-right !mb-0">
              {`${FormatDate(frontMatter.date)}`}
            </p>
          </div>
          <p className="!font-medium text-tertiary !text-base text-left !py-1 !mt-0 !mb-1">
            {`${views > 0 ? views.toLocaleString() : '–––'} Views`}
          </p>
          <p className="!font-normal lg:!py-2 !my-0 !text-base text-tertiary clamp clamp-3">
            {frontMatter.summary}
          </p>
        </div>
      </a>
    </Link>
  )
}
