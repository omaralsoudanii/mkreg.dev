import * as React from 'react'

import useSWR from 'swr'

import Fetcher from '@/lib/fetcher'

export default function ArticleViews({ slug }) {
  const fetch = () => Fetcher(`/api/views/${slug}`, { method: 'GET' })

  const { data } = useSWR(`/api/views/${slug}`, fetch)
  const views = new Number(data?.total)

  return (
    <React.Fragment>
      {views > 0 ? views.toLocaleString() : '–––'} views
    </React.Fragment>
  )
}
