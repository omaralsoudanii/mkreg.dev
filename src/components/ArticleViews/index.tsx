import * as React from 'react'

import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export default function ArticleViews({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = new Number(data?.total)

  React.useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    registerView()
  }, [slug])

  return (
    <React.Fragment>
      {views > 0 ? views.toLocaleString() : '–––'} views
    </React.Fragment>
  )
}
