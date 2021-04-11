import { parse as urlParse } from 'url'
import GhostContentAPI, {
  Params,
  PostOrPage,
  Pagination,
  PostsOrPages,
  Tag,
} from '@tryghost/content-api'
import { normalizePost } from '@/lib/ghostNormalize'
import { Node } from 'unist'
import { collections as config } from '@/lib/routesConfig'
import { Collections } from '@/lib/collections'

import { Environment } from '@/lib/environment'
import { imageDimensions, normalizedImageUrl, Dimensions } from '@/lib/images'

export interface NextImage {
  url: string
  dimensions: Dimensions
}

interface BrowseResults<T> extends Array<T> {
  meta: { pagination: Pagination }
}

export interface GhostTag extends Tag {
  featureImage?: NextImage
}

export interface GhostPostOrPage extends PostOrPage {
  featureImage?: NextImage | null
  htmlAst?: Node | null
}

export type GhostPostsOrPages = BrowseResults<GhostPostOrPage>

export type GhostTags = BrowseResults<GhostTag>

const api = new GhostContentAPI({
  url: Environment.ghost.apiUrl,
  key: Environment.ghost.apiKey,
  version: 'canary',
})

const postAndPageFetchOptions: Params = {
  limit: 'all',
  include: ['tags', 'count.posts'],
  order: ['featured DESC', 'published_at DESC'],
}

const tagFetchOptions: Params = {
  limit: 'all',
  include: 'count.posts',
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
): Promise<GhostTags | PostsOrPages> {
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

export async function getAllTags(): Promise<GhostTags> {
  const tags = await api.tags.browse(tagFetchOptions)
  return await createNextFeatureImages(tags)
}

export async function getAllPosts(props?: {
  limit: number
}): Promise<GhostPostsOrPages> {
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    filter: '',
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(posts)
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await api.posts.browse(postAndPageSlugOptions)
  return posts.map((p) => p.slug)
}

export async function getAllPages(props?: Params): Promise<GhostPostsOrPages> {
  const pages = await api.pages.browse({
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

// specific data by slug
export async function getTagBySlug(slug: string): Promise<Tag> {
  return await api.tags.read({
    ...tagFetchOptions,
    slug,
  })
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
      (Environment.ghost.apiUrl && urlParse(Environment.ghost.apiUrl)) ||
        undefined
    )
  } catch (error) {
    if (error.response?.status !== 404) throw new Error(error)
    return null
  }
  return result
}

export async function getPageBySlug(
  slug: string
): Promise<GhostPostOrPage | null> {
  let result: GhostPostOrPage
  try {
    const page = await api.pages.read({
      ...postAndPageFetchOptions,
      slug,
    })

    // older Ghost versions do not throw error on 404
    if (!page) return null

    result = await normalizePost(
      page,
      (Environment.ghost.apiUrl && urlParse(Environment.ghost.apiUrl)) ||
        undefined
    )
  } catch (error) {
    if (error.response?.status !== 404) throw new Error(error)
    return null
  }
  return result
}

export async function getPostsByTag(
  slug: string,
  limit?: number,
  excludeId?: string
): Promise<GhostPostsOrPages> {
  const exclude = (excludeId && `+id:-${excludeId}`) || ``
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    ...(limit && { limit: `${limit}` }),
    filter: `tags.slug:${slug}${exclude}`,
  })
  return await createNextFeatureImages(posts)
}

// Collections
export const collections = new Collections<PostOrPage>(config)
