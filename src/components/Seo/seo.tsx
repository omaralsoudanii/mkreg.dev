import { useRouter } from 'next/router'
import Head from 'next/head'
import url from 'url'

import { PostOrPage, Tag } from '@tryghost/content-api'
import { ISeoImage } from '@/components/Seo/seoImage'
import { Environment } from '@/lib/environment'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  seoImage?: ISeoImage
  article?: PostOrPage
}

const getPublicTags = (tags: Tag[] | undefined) =>
  tags ? tags.filter((tag) => tag.name?.substr(0, 5) !== 'hash-') : []

export const SEO = (props: SEOProps) => {
  const { title: t, description: d, seoImage, article } = props

  const {
    og_title,
    og_description,
    published_at,
    updated_at,
    primary_tag,
    twitter_title,
    twitter_description,
  } = article || {}
  const type = article ? 'article' : 'website'

  const router = useRouter()
  const { ogTitle, ogDescription, ogAuthor, social, siteUrl } = Environment
  const github = social.github
  const canonical = url.resolve(siteUrl, router.asPath)

  const title = og_title || t || ogTitle
  const description = og_description || d || ogDescription

  const jsonLd = getJsonLd({ ...props, title, description, seoImage })

  return (
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="follow, index" />
      <meta name="googlebot" content="index,follow" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={ogTitle} />
      <meta property="og:url" content={canonical} />
      {published_at && (
        <meta property="article:published_time" content={published_at} />
      )}
      {updated_at && (
        <meta property="article:modified_time" content={updated_at} />
      )}
      {getPublicTags(article?.tags).map(({ name: keyword }, i) => (
        <meta property="article:tag" content={keyword} key={i} />
      ))}
      {github && <meta property="article:author" content={github} />}
      <meta property="twitter:title" content={twitter_title || title} />
      <meta
        property="twitter:description"
        content={twitter_description || description}
      />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:label1" content="Written by" />
      <meta property="twitter:data1" content={ogAuthor} />
      <meta property="twitter:label2" content="Filed under" />
      <meta property="twitter:data2" content={primary_tag?.name} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={social.twitterHandle} />
      <meta property="twitter:site" content={social.twitter} />
      {seoImage && <meta name="twitter:image" content={seoImage.url} />}
      {seoImage && <meta property="og:image" content={seoImage.url} />}
      {seoImage && (
        <meta
          property="og:image:width"
          content={`${seoImage.dimensions.width}`}
        />
      )}
      {seoImage && (
        <meta
          property="og:image:height"
          content={`${seoImage.dimensions.height}`}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></script>
    </Head>
  )
}

const getJsonLd = ({
  title,
  description,
  canonical,
  seoImage,
  article,
}: SEOProps) => {
  const { siteUrl, ogImage, social } = Environment
  const authorProfiles = [
    social.github,
    social.linkedin,
    social.twitter,
    siteUrl,
  ].join(', ')

  const pubLogoUrl = url.resolve(siteUrl, ogImage)
  const type = article ? 'Article' : 'WebSite'

  return {
    '@context': `https://schema.org/`,
    '@type': type,
    authorProfiles,
    url: canonical,
    ...(article && { ...getArticleJsonLd(article) }),
    image: {
      ...(seoImage && {
        '@type': `ImageObject`,
        url: seoImage.url,
        ...seoImage.dimensions,
      }),
    },
    publisher: {
      '@type': `Organization`,
      name: title,
      logo: {
        '@type': `ImageObject`,
        url: pubLogoUrl,
        width: 60,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': `WebPage`,
      '@id': siteUrl,
    },
    description,
  }
}

const getArticleJsonLd = (article: PostOrPage) => {
  const { published_at, updated_at, tags, meta_title, title } = article
  const { siteUrl, ogImage, ogAuthor, social } = Environment
  const authorProfiles = [
    social.github,
    social.linkedin,
    social.twitter,
    siteUrl,
  ].join(', ')
  const publicTags = getPublicTags(tags)
  const keywords = publicTags?.length ? publicTags.join(`, `) : undefined
  const headline = meta_title || title

  return {
    datePublished: published_at,
    dateModified: updated_at,
    author: {
      '@type': 'Article',
      ogAuthor,
      ogImage,
      authorProfiles,
    },
    keywords,
    headline,
  }
}
