import { useEffect } from 'react'

import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export default function Views({ encodedSlug }: { encodedSlug: string }): JSX.Element {
  const { data } = useSWR(`/api/views/${encodedSlug}`, fetcher)
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${encodedSlug}`, {
        method: 'POST',
      })

    registerView()
  }, [encodedSlug])

  return <>{views > 0 ? `${views.toLocaleString()} views` : '––– views'}</>
}
