import Link from 'next/link'
import useSWR from 'swr'

import Fetcher from '@/lib/fetcher'
import { FormatDate } from '@/lib/utils'

type frontMatter = {
  title: string
  date: string | number | Date
  summary: string
  slug: string
}

export default function PostsList({ posts, href }) {
  return (
    <div className="mt-8">
      {posts.map((frontMatter: frontMatter) => {
        return (
          <Row key={frontMatter.title} href={href} frontMatter={frontMatter} />
        )
      })}
    </div>
  )
}

const Row = ({ href, frontMatter }) => {
  const { data } = useSWR(
    `/api/views/${encodeURIComponent(frontMatter.slug)}`,
    Fetcher
  )
  const views = new Number(data?.total)
  return (
    <Link key={frontMatter.slug} href={`${href}/${frontMatter.slug}`} passHref>
      <a className="inline-block my-4 py-2 md:my-6 w-full">
        <div className="w-full">
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <h2 className="!text-xl md:!text-2xl !font-semibold !mb-0 w-full !mt-0 text-display">
              {frontMatter.title}
            </h2>
            <p className="w-56 !font-medium !text-base md:!text-lg !pt-1 md:!pt-0 text-left text-tertiary md:text-right !my-0">
              {`${FormatDate(frontMatter.date)}`}
            </p>
          </div>
          <p className="!font-medium !text-base md:!text-lg text-left !py-1 text-tertiary !my-0">
            {views > 0 ? views.toLocaleString() : '–––'} views
          </p>
          <p className="!font-normal md:!py-0 md:!text-lg !my-0 !text-base text-tertiary clamp clamp-3">
            {frontMatter.summary}
          </p>
        </div>
      </a>
    </Link>
  )
}
