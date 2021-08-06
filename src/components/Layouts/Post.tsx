import * as React from 'react'

import ArticleViews from '@/components/ArticleViews'
import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import { FormatDate, slugify } from '@/lib/utils'

const editUrl = (slug: string) =>
  `${Environment.social.github}/mkreg.dev/edit/main/src/data/${slug}.mdx`
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${Environment.siteUrl}/${slug}`
  )}`
export default function PostLayout({
  children,
  frontMatter,
  prev = null,
  next = null,
  parentPost = null,
}) {
  const { date, title, tags, lastmod, summary, slug } = frontMatter
  const encodedSlug = encodeURIComponent(slug)
  const fullUrl = `/api/views/${encodedSlug}`
  React.useEffect(() => {
    const registerView = () =>
      fetch(fullUrl, {
        method: 'POST',
      })

    registerView()
  }, [fullUrl])

  const fullPath =
    parentPost && parentPost?.path
      ? parentPost.path.concat(`/${slug}`)
      : `writing/${slug}`

  const meta = {
    title: `Omar Alsoudani - ${title}`,
    description: summary,
    image: {
      url: frontMatter?.image,
      alt: title,
    },
    tags: tags,
    JsonLd: true,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <article
        id="skip"
        className="lg:divide-y lg:divide-gray-200 lg:dark:divide-gray-700"
      >
        <header className="pb-4 lg:pb-8">
          <div className="space-y-3 text-center">
            <p className="text-base lg:text-lg  text-tertiary">
              <span className="px-2 !font-medium">{`${FormatDate(date)}`}</span>
              {`    •    `}
              <span className="px-2 !font-medium">
                <ArticleViews slug={slug} />
              </span>
            </p>
            <h1 className="page-heading mb-4 lg:mb-8">{title}</h1>
          </div>
        </header>
        <div
          className=" divide-y divide-gray-200 lg:divide-y-0 dark:divide-gray-700 lg:grid lg:gap-4 lg:grid-cols-4"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="py-6 lg:col-span-3 lg:col-start-2 lg:row-span-3">
            <div className="prose dark:prose-dark lg:prose-lg w-full mx-auto !max-w-none">
              {children}
            </div>
          </div>
          <div className="divide-gray-200  lg:divide-y dark:divide-gray-700 lg:row-start-1 py-4 lg:col-start-1">
            <div className="flex flex-col lg:flex-row lg:block lg:border-b lg:border-gray-200 lg:dark:border-gray-700">
              <div className="flex py-4 lg:py-8 flex-col">
                <h2 className="!font-medium !tracking-normal  text-tertiary text-base py-1">
                  {Environment.ogTitle}
                </h2>
                <div className="flex flex-wrap py-1">
                  <p className="pr-4">
                    <NextLink
                      href={Environment.social.github}
                      className="primary-link inline-block text-base "
                    >
                      Github
                    </NextLink>
                  </p>
                  <p>
                    <NextLink
                      href={Environment.social.twitter}
                      className="primary-link inline-block text-base "
                    >
                      Twitter
                    </NextLink>
                  </p>
                </div>
                {lastmod && (
                  <h2 className="!font-medium !tracking-normal  text-tertiary text-base py-1">
                    {`Modified ${FormatDate(lastmod)}`}
                  </h2>
                )}
              </div>
            </div>
            <div className="py-4 lg:py-8">
              <h2 className="text-base py-1 !tracking-normal !font-medium  text-tertiary">
                See also
              </h2>
              <div className="flex lg:block justify-between">
                <p className="py-1">
                  <NextLink
                    className="primary-link text-base"
                    href={editUrl(fullPath)}
                  >
                    {'Edit on GitHub'}
                  </NextLink>
                </p>
                <p className="py-1">
                  <NextLink
                    href={discussUrl(fullPath)}
                    className="primary-link text-base"
                  >
                    {'Discuss on Twitter'}
                  </NextLink>
                </p>
              </div>
            </div>

            {tags && (
              <div className="py-4 lg:py-8">
                <h2 className="text-base py-1 !tracking-normal !font-medium  text-tertiary">
                  Tagged with
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((t: string) => (
                    <NextLink
                      className="mr-4 my-2 !text-base  primary-link"
                      key={t}
                      href={`/tags/${slugify(t)}`}
                    >
                      {t}
                    </NextLink>
                  ))}
                </div>
              </div>
            )}
            {(next || prev) && !parentPost && (
              <div className="flex justify-between py-4 lg:block lg:space-y-8 lg:py-8">
                {prev && (
                  <div>
                    <h2 className="text-base py-1 !tracking-normal !font-medium  text-tertiary">
                      Previous Article
                    </h2>
                    <NextLink
                      className="text-base primary-link"
                      href={`${prev.path}/${prev.slug}`}
                    >
                      {prev.title}
                    </NextLink>
                  </div>
                )}
                {next && (
                  <div>
                    <h2 className="text-base py-1 !font-medium !tracking-normal text-tertiary">
                      Next Article
                    </h2>
                    <NextLink
                      className="primary-link text-base"
                      href={`${next.path}/${next.slug}`}
                    >
                      {next.title}
                    </NextLink>
                  </div>
                )}
              </div>
            )}
            {!next && !prev && parentPost && (
              <div className="flex flex-col py-4 lg:block lg:space-y-8 lg:py-8">
                <h2 className="text-base py-1 !tracking-normal !font-medium  text-tertiary">
                  Continue reading
                </h2>
                <NextLink
                  className="text-base primary-link"
                  href={`/${parentPost.path}`}
                >
                  {parentPost.title}
                </NextLink>
              </div>
            )}
          </div>
        </div>
      </article>
    </React.Fragment>
  )
}
