export const slugify = (str: string): string =>
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

export const dateSortDesc = (
  a: number | string | Date,
  b: number | string | Date
): number => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export const dateSortAsc = (
  a: number | string | Date,
  b: number | string | Date
): number => {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}

export const formatSlug = (slug: string): string => slug.replace(/\.mdx/, '')

export const FormatDate = (value: string | number | Date): string => {
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// export const setLocalStorage = (key: string, value: any, ttl: number): void => {
//   const now = new Date()

//   // `item` is an object which contains the original value
//   // as well as the time when it's supposed to expire
//   const item = {
//     value: value,
//     expiry: now.getTime() + ttl,
//   }
//   localStorage.setItem(key, JSON.stringify(item))
// }

// export const getLocalStorage = (key: string): void => {
//   const now = new Date()
//   const itemStr = localStorage.getItem(key)

//   // if the item doesn't exist, return null
//   if (!itemStr) {
//     return null
//   }

//   const item = JSON.parse(itemStr)

//   // compare the expiry time of the item with the current time
//   if (now.getTime() > item.expiry) {
//     // If the item is expired, delete the item from storage
//     // and return null
//     localStorage.removeItem(key)
//     return null
//   }
//   return item.value
// }
