import * as React from 'react'
import Head from 'next/head'
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
      <Head>
        <meta name="theme-color" content={'#fefefe'} />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/static/meta/manifest.json" />
      </Head>
    </React.Fragment>
  )
}
