import Head from 'next/head'
import { Environment } from '@/lib/environment'
import { useRouter } from 'next/router'
import React from 'react'

export default function Page({ children }) {
  const router = useRouter()

  const meta = {
    title: Environment.ogTitle,
    description: Environment.ogDescription,
    type: 'website',
    locale: 'en_US',
    url: Environment.siteUrl,
    site_name: Environment.ogTitle,
    image: {
      url: `${Environment.siteUrl}${Environment.ogImage}`,
      alt: Environment.ogTitle,
    },
  }

  return (
    <React.Fragment>
      <Head>
        <title key="title">{meta.title}</title>
        <meta key="description" name="description" content={meta.description} />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta name="googlebot" content="index,follow" />
        <meta
          property="og:url"
          content={`${Environment.siteUrl}${router.asPath}`}
        />
        <link rel="canonical" href={`${Environment.siteUrl}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:locale" content={meta.locale} />
        <meta property="og:site_name" content={meta.site_name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@omaralsoudani" />
      </Head>
      <div className="px-4 pt-24 pb-16">{children}</div>
    </React.Fragment>
  )
}
