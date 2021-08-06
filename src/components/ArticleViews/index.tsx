import * as React from 'react'

import useSWR from 'swr'

import Fetcher from '@/lib/fetcher'

export default function ArticleViews({ slug }) {
  const encodedSlug = encodeURIComponent(slug)
  const fetch = () => Fetcher(`/api/views/${encodedSlug}`, { method: 'GET' })

  const { data } = useSWR(['/api/views/', encodedSlug], fetch)
  const views = new Number(data?.total)

  return (
    <React.Fragment>
      {views > 0 ? views.toLocaleString() : '–––'} views
    </React.Fragment>
  )
}
