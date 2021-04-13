import Head from 'next/head'
import { Environment } from '@/lib/environment'
import { useRouter } from 'next/router'

export default function Seo({ data }) {
  const router = useRouter()
  const canonical = `${Environment.siteUrl}${router.asPath}`
  const meta = {
    title: Environment.ogTitle,
    description: Environment.ogDescription,
    type: 'article',
    locale: 'en_US',
    image: {
      url: `${Environment.siteUrl}${Environment.ogImage}`,
      alt: Environment.ogTitle,
    },
    ...data,
  }

  let JsonLd
  if (meta.JsonLd) {
    JsonLd = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      headline: meta.title,
      keywords: meta.tags?.length
        ? meta.tags.join(' ,')
        : [Environment.ogTitle],
      url: canonical,
      datePublished: meta.publishedAt,
      description: meta.description,
      author: {
        '@type': 'Person',
        name: Environment.ogTitle,
      },
    }
  } else {
    meta.type = 'website'
    JsonLd = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: canonical,
      name: meta.title,
      author: {
        '@type': 'Person',
        name: Environment.ogTitle,
      },
      description: meta.description,
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

      <meta key="ogImg" property="og:image" content={meta.image.url} />
      <meta key="twitImg" name="twitter:image" content={meta.image.url} />
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
