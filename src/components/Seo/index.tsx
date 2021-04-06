import * as React from 'react'
import Head from 'next/head'
import { Environment } from '@/lib/environment'

export default function Seo({ data }) {
  const meta = {
    title: Environment.ogTitle,
    description: Environment.ogDescription,
    image: {
      url: `${Environment.siteUrl}${Environment.ogImage}`,
      alt: Environment.ogTitle,
    },
    ...data,
  }

  return (
    <Head>
      <title key="title">{meta.title}</title>
      <meta key="description" name="description" content={meta.description} />
      <meta property="og:image" content={meta.image.url} />
      <meta property="og:image:alt" content={meta.image.alt} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image.url} />
    </Head>
  )
}
