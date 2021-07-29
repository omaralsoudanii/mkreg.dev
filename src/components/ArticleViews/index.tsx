import * as React from 'react'

import { useCurrentViews } from '@/lib/hooks'

export default function ArticleViews({ slug }) {
  const data = useCurrentViews(slug)
  const views = new Number(data?.total)

  return (
    <React.Fragment>
      {views > 0 ? views.toLocaleString() : '–––'} views
    </React.Fragment>
  )
}
