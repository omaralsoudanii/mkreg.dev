import Link from 'next/link'
import useSWR from 'swr'

import Fetcher from '@/lib/fetcher'

type frontMatter = {
  title: string
  date: string
  summary: string
  slug: string
}

const GetViews = (slug: string) => {
  const { data } = useSWR(`/api/views/${slug}`, Fetcher)
  const views = new Number(data?.total)
  return views
}

export default function PostsList({ posts, href }) {
  return posts.map((frontMatter: frontMatter) => {
    const views = GetViews(encodeURIComponent(frontMatter.slug))
    return (
      <Link
        key={frontMatter.slug}
        href={`${href}/${frontMatter.slug}`}
        passHref
      >
        <a className="inline-block my-4 py-2 md:my-6 w-full">
          <div className="w-full">
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <h2 className="!text-xl md:!text-2xl !font-semibold !mb-0 w-full !mt-0 text-display">
                {frontMatter.title}
              </h2>
              <p className="w-56 !font-medium !text-base md:!text-lg !pt-1 md:!pt-0 text-left text-tertiary md:text-right !my-0">
                {frontMatter.date}
              </p>
            </div>
            <p className="!font-medium !text-base md:!text-lg text-left !py-1 text-tertiary !my-0">
              {views > 0 ? views.toLocaleString() : '–––'} views
            </p>
            <p className="!font-normal md:!py-0 md:!text-lg !my-0 !text-base text-tertiary clamp clamp-5">
              {frontMatter.summary}
            </p>
          </div>
        </a>
      </Link>
    )
  })
}
