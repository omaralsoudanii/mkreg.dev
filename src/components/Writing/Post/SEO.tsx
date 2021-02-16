import { NextSeo } from 'next-seo'
import { GhostPostOrPage } from '@/ghost/api'
import { Environment } from '@/environment'

interface Props {
  post: GhostPostOrPage
}

export default function SEO({ post }: Props) {
  return (
    <NextSeo
      title={post.title}
      description={post.custom_excerpt || post.excerpt}
      openGraph={{
        title: post.title,
        url: `${Environment.writingUrl}/${post.slug}`,
        description: post.custom_excerpt || post.excerpt,
        images: [
          {
            url:
              post.feature_image ||
              `${Environment.siteUrl}${Environment.ogImage}`,
            alt: post.title,
          },
        ],
        site_name: Environment.ogTitle,
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  )
}
