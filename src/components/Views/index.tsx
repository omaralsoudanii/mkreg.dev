import * as React from 'react'

import useSWR from 'swr'
export default function Views({
  encodedSlug,
}: {
  encodedSlug: string
}): JSX.Element {
  const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())
  const API = `/api/views/${encodedSlug}`
  const { data } = useSWR(API, fetcher)
  const views = new Number(data?.total)
  return (
    <React.Fragment>
      {views > 0 ? `${views.toLocaleString()} views` : '––– views'}
    </React.Fragment>
  )
}
