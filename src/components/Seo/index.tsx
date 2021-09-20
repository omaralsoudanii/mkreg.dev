import Head from 'next/head'
import { useRouter } from 'next/router'

import { Environment } from '@/lib/environment'

type JsonLd = {
  '@context': string
  '@type'?: string
  headline: any
  keywords?: Array<string>
  url: string
  datePublished?: any
  description: string
  sameAs: Array<string>
  image: string
  author: { '@type': string; name: string }
  name?: string
}

export default function Seo({ data }) {
  const {
    siteUrl,
    ogTitle,
    ogDescription,
    ogImage,
    social: { github, linkedin, twitter },
  } = Environment
  const router = useRouter()
  const canonical = `${siteUrl}${router.asPath}`
  const meta = {
    title: ogTitle,
    description: ogDescription,
    type: 'article',
    locale: 'en_US',
    image: {
      url: ogImage,
      alt: ogTitle,
    },
    ...data,
  }

  const imageUrl = `${siteUrl}${meta.image.url}`

  const JsonLd: JsonLd = {
    '@context': 'http://schema.org',
    sameAs: [github, twitter, linkedin],
    url: canonical,
    description: meta.description,
    headline: meta.title,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: ogTitle,
    },
  }

  if (meta.JsonLd) {
    JsonLd['@type'] = 'Article'
    JsonLd['keywords'] = meta.tags?.length ? meta.tags.join(' ,') : [ogTitle]
    JsonLd['datePublished'] = meta.date
  } else {
    meta.type = 'website'
    JsonLd['@type'] = 'WebSite'
    JsonLd['name'] = ogTitle
  }

  return (
    <Head>
      <title key='title'>{meta.title}</title>
      <meta name='robots' content='follow, index' />
      <meta name='googlebot' content='follow, index' />
      <meta property='og:url' content={canonical} />
      <link rel='canonical' href={canonical} />

      <meta key='ogTitle' property='og:title' content={meta.title} />
      <meta key='twTitle' name='twitter:title' content={meta.title} />
      <meta property='og:site_name' content={meta.title} />

      <meta key='description' name='description' content={meta.description} />
      <meta key='ogDesc' property='og:description' content={meta.description} />
      <meta key='twDesc' name='twitter:description' content={meta.description} />

      <meta key='type' property='og:type' content={meta.type} />
      <meta property='og:locale' content={meta.locale} />

      <meta key='ogImg' property='og:image' content={imageUrl} />
      <meta key='twitImg' name='twitter:image' content={imageUrl} />
      <meta key='imgAlt' property='og:image:alt' content={meta.image.alt} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@omaralsoudani' />

      {JsonLd && (
        <script
          key='jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLd) }}
        ></script>
      )}
    </Head>
  )
}
