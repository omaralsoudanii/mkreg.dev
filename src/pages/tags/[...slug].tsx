import { Environment } from '@/lib/environment'
import PostsList from '@/components/Posts/List'
import Heading from '@/components/Heading'
import Link from 'next/link'
import { seoImage } from '@/components/Seo/seoImage'
import { getTagBySlug, getPostsByTag, getAllTags } from '@/lib/ghost'
import { GetStaticPaths, GetStaticProps } from 'next'
import { resolveUrl } from '@/lib/routing'
import { SEO } from '@/components/Seo/seo'
import { useRouter } from 'next/router'
/**
 *
 * Renders a single post by tag and loads all content.
 *
 */

export default function Tag({ data }) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { tag, posts, seoImage } = data
  const { meta_title, meta_description } = tag
  const title = meta_title ?? tag.name
  const description = meta_description ?? tag.description

  return (
    <div className="flex flex-col items-start space-y-8">
      <SEO {...{ title, description, seoImage }} />
      <Heading title={title} subTitle={description} />
      <Link href="/writing">
        <a className="text-base sm:text-lg text-link">&larr; Writing</a>
      </Link>
      <div className=" hr-stroke" />
      <PostsList posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug)))
    throw Error('getStaticProps: wrong parameters.')
  const [slug] = params.slug.reverse()

  const tag = await getTagBySlug(slug)
  const posts = await getPostsByTag(slug)

  const { enable, revalidate } = Environment.isr
  return {
    props: {
      data: {
        tag,
        posts,
        seoImage: await seoImage({ siteUrl: Environment.siteUrl }),
      },
    },
    ...(enable && { revalidate: revalidate }),
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags()
  const { apiUrl } = Environment.ghost

  const paths = tags
    .map(({ slug, url }) => resolveUrl({ apiUrl, slug, url }))
    .filter((path) => path.startsWith(`/tag/`))

  return {
    paths,
    fallback: Environment.isr.enable,
  }
}
