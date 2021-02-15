import * as React from 'react'
import { DefaultSeo } from 'next-seo'
import { Environment } from '@/environment'

const SeoConfig = {
  title: Environment.ogTitle,
  description: Environment.ogDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: Environment.siteUrl,
    site_name: Environment.ogTitle,
    images: [
      {
        url: `${Environment.siteUrl}${Environment.ogImage}`,
        alt: Environment.ogTitle,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

export default function SEO() {
  return (
    <React.Fragment>
      <DefaultSeo {...SeoConfig} />
    </React.Fragment>
  )
}
