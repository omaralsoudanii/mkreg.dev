import useSWR from 'swr'

import Fetcher from '@/lib/fetcher'

export const useCurrentViews = (slug: string) => {
  const encodedSlug = encodeURIComponent(slug)
  const fetch = (url: string) => {
    const fullUrl = url.concat(encodedSlug)
    return Fetcher(fullUrl, { method: 'GET' })
  }
  const { data } = useSWR(['/api/views/', encodedSlug], fetch)
  return data
}
