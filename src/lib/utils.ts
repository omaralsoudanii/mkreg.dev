/* eslint-disable no-useless-escape */
export const slugify = (str: string) =>
  str &&
  str
    .trim()
    .replace(/[^\.a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()

export const unSlugify = (slug: string) =>
  slug &&
  slug
    .replace(/\-/g, ' ')
    .replace(
      /\w\S*/g,
      (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )

export const dateSortDesc = (a, b) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export const formatSlug = (slug: string) => slug.replace(/\.mdx/, '')

export const FormatDate = (value: string | number | Date): string => {
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
