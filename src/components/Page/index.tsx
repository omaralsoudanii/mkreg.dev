import Head from 'next/head'
import { Environment } from '@/lib/environment'
import React from 'react'
import { useRouter } from 'next/router'

export default function Page(props) {
  const { children, extraMeta } = props
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
    ...extraMeta,
  }

  return (
    <React.Fragment>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="googlebot" content="index,follow" />
        <meta name="viewport" content="width=device-width" />
        <meta
          property="og:url"
          content={`${Environment.siteUrl}${router.asPath}`}
        />
        <link rel="canonical" href={`${Environment.siteUrl}${router.asPath}`} />
        <meta property="description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:image" content={meta.image.url} />
        <meta property="og:image:alt" content={meta.image.alt} />
        <meta property="og:locale" content={meta.locale} />
        <meta property="og:site_name" content={meta.site_name} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@omaralsoudani" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image.url} />
      </Head>
      <div className="px-4 pt-24 pb-16">{children}</div>
    </React.Fragment>
  )
}
