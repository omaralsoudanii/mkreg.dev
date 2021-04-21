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
