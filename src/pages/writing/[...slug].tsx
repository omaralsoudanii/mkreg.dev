import PostContainer from '@/components/Posts/Post'
import { seoImage } from '@/components/Seo/seoImage'
import { Environment } from '@/lib/environment'
import {
  GhostPostsOrPages,
  getAllPosts,
  getPageBySlug,
  getPostBySlug,
  GhostPostOrPage,
  collections,
  getAllPages,
} from '@/lib/ghost'
import { resolveUrl } from '@/lib/routing'
import { GetStaticPaths, GetStaticProps } from 'next'

/**
 *
 * Renders a single post and loads all content.
 *
 */

export default function Post({ data }) {
  return <PostContainer data={data} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug)))
    throw Error('getStaticProps: wrong parameters.')
  const [slug] = params.slug.reverse()

  let post: GhostPostOrPage | null = null
  let page: GhostPostOrPage | null = null

  post = await getPostBySlug(slug)
  const isPost = !!post
  if (!isPost) {
    page = await getPageBySlug(slug)
  }

  if (!post && !page) {
    return {
      notFound: true,
    }
  }

  const siteUrl = Environment.siteUrl
  const imageUrl = (post || page)?.feature_image || undefined
  const image = await seoImage({ siteUrl, imageUrl })

  const { enable, revalidate } = Environment.isr
  return {
    props: {
      data: {
        post,
        page,
        isPost,
        seoImage: image,
      },
    },
    ...(enable && { revalidate: revalidate }),
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { enable, maxNumberOfPosts, maxNumberOfPages } = Environment.isr
  const limitForPosts = (enable && { limit: maxNumberOfPosts }) || undefined
  const limitForPages = (enable && { limit: maxNumberOfPages }) || undefined
  const posts = await getAllPosts(limitForPosts)
  const pages = await getAllPages(limitForPages)
  const apiUrl = Environment.ghost.apiUrl
  const postRoutes = (posts as GhostPostsOrPages).map((post) => {
    const collectionPath = collections.getCollectionByNode(post)
    const { slug, url } = post
    return resolveUrl({
      apiUrl,
      collectionPath,
      slug,
      url,
    })
  })

  const pageRoutes = (pages as GhostPostsOrPages).map(({ slug, url }) =>
    resolveUrl({ apiUrl, slug, url })
  )
  const paths = [...postRoutes, ...pageRoutes]

  return {
    paths,
    fallback: enable ? 'blocking' : false,
  }
}
