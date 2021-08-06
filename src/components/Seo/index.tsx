import Head from 'next/head'
import { useRouter } from 'next/router'

import { Environment } from '@/lib/environment'

interface JsonLd {
  '@context': string
  '@type': string
  headline?: any
  keywords?: Array<string>
  url: string
  datePublished?: any
  description: string
  sameAs: Array<string>
  image: string
  author: { '@type': string; name: string } | { '@type': string; name: string }
  name?: string
}

export default function Seo({ data }) {
  const router = useRouter()
  const canonical = `${Environment.siteUrl}${router.asPath}`
  const meta = {
    title: Environment.ogTitle,
    description: Environment.ogDescription,
    type: 'article',
    locale: 'en_US',
    image: {
      url: Environment.ogImage,
      alt: Environment.ogTitle,
    },
    ...data,
  }

  let JsonLd: JsonLd

  if (meta.JsonLd) {
    JsonLd = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      headline: meta.title,
      keywords: meta.tags?.length
        ? meta.tags.join(' ,')
        : [Environment.ogTitle],
      url: canonical,
      datePublished: meta.date,
      description: meta.description,
      image: Environment.siteUrl.concat(meta.image.url),
      author: {
        '@type': 'Person',
        name: Environment.ogTitle,
      },
      sameAs: [
        Environment.social.github,
        Environment.social.twitter,
        Environment.social.linkedin,
      ],
    }
  } else {
    meta.type = 'website'
    JsonLd = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: canonical,
      name: Environment.ogTitle,
      headline: meta.title,
      author: {
        '@type': 'Person',
        name: Environment.ogTitle,
      },
      image: Environment.siteUrl.concat(meta.image.url),
      description: meta.description,
      sameAs: [
        Environment.social.github,
        Environment.social.twitter,
        Environment.social.linkedin,
      ],
    }
  }

  return (
    <Head>
      <title key="title">{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="googlebot" content="index,follow" />
      <meta property="og:url" content={canonical} />
      <link rel="canonical" href={canonical} />

      <meta key="ogTitle" property="og:title" content={meta.title} />
      <meta key="twTitle" name="twitter:title" content={meta.title} />
      <meta property="og:site_name" content={meta.title} />

      <meta key="description" name="description" content={meta.description} />
      <meta key="ogDesc" property="og:description" content={meta.description} />
      <meta
        key="twDesc"
        name="twitter:description"
        content={meta.description}
      />

      <meta key="type" property="og:type" content={meta.type} />
      <meta property="og:locale" content={meta.locale} />

      <meta
        key="ogImg"
        property="og:image"
        content={`${Environment.siteUrl}${meta.image.url}`}
      />
      <meta
        key="twitImg"
        name="twitter:image"
        content={`${Environment.siteUrl}${meta.image.url}`}
      />
      <meta key="imgAlt" property="og:image:alt" content={meta.image.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@omaralsoudani" />

      {JsonLd && (
        <script
          key="jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLd) }}
        ></script>
      )}
    </Head>
  )
}
