import { parse as urlParse } from 'url'
import GhostContentAPI, {
  Params,
  PostOrPage,
  Pagination,
  PostsOrPages,
  Tag,
} from '@tryghost/content-api'
import { normalizePost } from '@/ghost/ghost-normalize'
import { Node } from 'unist'
import { routes } from '@/ghost/routes'
import { Collections } from '@/ghost/collections'

import { ghostAPIUrl, ghostAPIKey, Environment } from '@/environment'
import { imageDimensions, normalizedImageUrl, Dimensions } from '@/ghost/images'

export interface NextImage {
  url: string
  dimensions: Dimensions
}

interface BrowseResults<T> extends Array<T> {
  meta: { pagination: Pagination }
}

export interface GhostPostOrPage extends PostOrPage {
  featureImage?: NextImage | null
  htmlAst?: Node | null
}

export type GhostPostsOrPages = BrowseResults<GhostPostOrPage>

const api = new GhostContentAPI({
  url: ghostAPIUrl,
  key: ghostAPIKey,
  version: 'v3',
})

const postAndPageFetchOptions: Params = {
  limit: 'all',
  order: ['featured DESC', 'updated_at DESC'],
}

const postAndPageSlugOptions: Params = {
  limit: 'all',
  fields: 'slug',
}

// helpers
export const createNextImage = async (
  url?: string | null
): Promise<NextImage | undefined> => {
  if (!url) return undefined
  const normalizedUrl = await normalizedImageUrl(url)
  const dimensions = await imageDimensions(normalizedUrl)
  return (dimensions && { url: normalizedUrl, dimensions }) || undefined
}

async function createNextFeatureImages(
  nodes: BrowseResults<Tag | PostOrPage>
): Promise<PostsOrPages> {
  const { meta } = nodes
  const images = await Promise.all(
    nodes.map((node) => createNextImage(node.feature_image))
  )
  const results = nodes.map((node, i) => ({
    ...node,
    ...(images[i] && { featureImage: images[i] }),
  }))
  return Object.assign(results, { meta })
}

export async function getAllPosts(props?: {
  limit: number
}): Promise<GhostPostsOrPages> {
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(posts)
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await api.posts.browse(postAndPageSlugOptions)
  return posts.map((p) => p.slug)
}

export async function getPostBySlug(
  slug: string
): Promise<GhostPostOrPage | null> {
  let result: GhostPostOrPage
  try {
    const post = await api.posts.read({
      ...postAndPageFetchOptions,
      slug,
    })
    // older Ghost versions do not throw error on 404
    if (!post) return null

    result = await normalizePost(
      post,
      (Environment.siteUrl && urlParse(Environment.siteUrl)) || undefined
    )
  } catch (error) {
    if (error.response?.status !== 404) throw new Error(error)
    return null
  }
  return result
}

// Collections
export const collections = new Collections<PostOrPage>(routes)
