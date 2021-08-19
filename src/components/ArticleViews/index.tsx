import { Fragment } from 'react'

import useSWR from 'swr'

import Fetcher from '@/lib/fetcher'

export default function ArticleViews({ slug }: { slug: string }): JSX.Element {
  const fetch = () => Fetcher(`/api/views/${slug}`, { method: 'GET' })

  const { data } = useSWR(`/api/views/${slug}`, fetch)
  const views = new Number(data?.total)

  return <Fragment>{views > 0 ? views.toLocaleString() : '–––'} views</Fragment>
}
