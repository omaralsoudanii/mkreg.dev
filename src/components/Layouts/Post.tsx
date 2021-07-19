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
        className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"
      >
        <header className="pb-4 xl:pb-8">
          <div className="space-y-3 text-center">
            <p className="font-medium text-base lg:text-lg  text-gray-500 dark:text-gray-400">
              <span className="px-2 !font-medium">{`${FormatDate(date)}`}</span>
              {`    •    `}
              <span className="px-2 !font-medium">
                <ArticleViews slug={slug} />
              </span>
            </p>
            <h1 className="page-heading mb-4 xl:mb-8">{title}</h1>
          </div>
        </header>
        <div
          className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="xl:pb-4 xl:col-span-3 xl:col-start-2 xl:row-span-2">
            <div className="xl:pt-10 xl:pb-8 pb-4 pt-5 prose dark:prose-dark lg:prose-lg w-full !max-w-none">
              {children}
            </div>
          </div>
          <div className="divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 pt-8 xl:pt-12  xl:row-start-2">
            <div className="pb-2 xl:pb-4 flex flex-col xl:flex-row xl:block xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
              <div className="flex flex-col">
                <p className="!font-medium text-display text-base  py-1">
                  {Environment.ogTitle}
                </p>
                {lastmod && (
                  <p className="!font-medium  text-tertiary text-base py-1">
                    {`Modified ${FormatDate(lastmod)}`}
                  </p>
                )}
              </div>
            </div>
            <div className="py-4 xl:py-8">
              <h2 className="text-base py-1 !tracking-normal !font-medium  text-tertiary">
                Article
              </h2>
              <div className="flex xl:block justify-between">
                <p className="py-2">
                  <NextLink
                    className="primary-link text-base"
                    href={editUrl(fullPath)}
                  >
                    {'Edit on GitHub'}
                  </NextLink>
                </p>
                <p className="py-2">
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
              <div className="py-4 xl:py-8">
                <h2 className="text-base py-2 !tracking-normal !font-medium  text-tertiary">
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
              <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                {prev && (
                  <div>
                    <h2 className="text-base pb-2 !tracking-normal !font-medium  text-tertiary">
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
                    <h2 className="text-base pb-2 !font-medium  text-tertiary">
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
              <div className="flex flex-col py-4 xl:block xl:space-y-8 xl:py-8">
                <h2 className="text-base pb-2 !tracking-normal !font-medium  text-tertiary">
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
