// higher order function
const withPrefixPath = (prefixPath: string) => (path: string) =>
  normalizePath(`/${prefixPath}/${path}/`)

const trimSlash = (text: string) => text.replace(/^\//, '').replace(/\/$/, '')

const normalizePath = (path: string) => {
  const normalize = `/${trimSlash(path)}/`
  return normalize.replace(`////`, `/`).replace(`///`, `/`).replace(`//`, `/`)
}

interface ResolveUrlProps {
  apiUrl?: string
  collectionPath?: string
  slug?: string
  url?: string
}

export const resolveUrl = ({
  apiUrl,
  collectionPath = `/`,
  slug,
  url,
}: ResolveUrlProps) => {
  const resolvePath = withPrefixPath(collectionPath)

  if (!slug || slug.length === 0) return normalizePath(resolvePath(`/`))

  if (!apiUrl || apiUrl.length === 0) return resolvePath(slug)
  if (!url || url.length === 0) return resolvePath(slug)
  if (trimSlash(url) === slug) return resolvePath(slug)
  if (!url.startsWith(apiUrl)) return resolvePath(slug)

  //const { absolute: apiUrl, relative: dirUrl } = splitUrl(url)
  const dirUrl = url.replace(apiUrl, '/writing').replace('//', '/')
  return resolvePath(dirUrl)
}
