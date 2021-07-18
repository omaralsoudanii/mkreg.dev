import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import {
  FormatDate,
  getLocalStorage,
  setLocalStorage,
  slugify,
} from '@/lib/utils'
import * as React from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export default function PostLayout({
  children,
  frontMatter,
  prev = null,
  next = null,
  parentPost = null,
}) {
  const { date, title, tags, lastmod, summary, slug } = frontMatter
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = new Number(data?.total)

  // 2 min preventing adding a new view, so i can get a realistic number
  const registerView = async (isNew: boolean) => {
    if (isNew === null) {
      await fetch(`/api/views/${slug}`, {
        method: 'POST',
      })
      setLocalStorage(slug as string, data?.total + 1, 120000)
    }
  }

  React.useEffect(() => {
    const isNew = getLocalStorage(slug as string)
    registerView(isNew)
  }, [slug])

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
        <header className="pb-6 xl:pb-8">
          <div className="space-y-2 text-center">
            <p className="font-medium text-base lg:text-lg  text-gray-500 dark:text-gray-400">
              <span className="px-2 !font-medium">{`${FormatDate(date)}`}</span>
              {`    •    `}
              <span className="px-2 !font-medium">
                {views > 0 ? views.toLocaleString() : '–––'} Views{' '}
              </span>
            </p>
            <h1 className="page-heading mb-4 sm:mb-8">{title}</h1>
          </div>
        </header>
        <div
          className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-4 xl:col-span-3 xl:col-start-2 xl:row-span-2">
            <div className="pt-10 pb-8 prose dark:prose-dark lg:prose-lg w-full max-w-none">
              {children}
            </div>
          </div>
          <div className="divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 pt-8 xl:pt-12  xl:row-start-2">
            <div className="pb-2 xl:pb-4 flex flex-col xl:flex-row xl:block xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
              {lastmod && (
                <p className=" !font-medium  text-gray-500 dark:text-gray-400 text-sm pb-4">
                  {`Last Modified ${FormatDate(lastmod)}`}
                </p>
              )}
              <div className="flex xl:block">
                <div className="whitespace-nowrap  pb-1">
                  <p className="!font-medium text-display text-base pb-1">
                    {Environment.ogTitle}
                  </p>
                  <div className="flex flex-wrap">
                    <p className="mr-3  py-0">
                      <NextLink
                        href={Environment.social.github}
                        className="primary-link inline-block text-base "
                      >
                        Github
                      </NextLink>
                    </p>
                    <p className="mr-3 py-0">
                      <NextLink
                        href={Environment.social.twitter}
                        className="primary-link inline-block text-base "
                      >
                        Twitter
                      </NextLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {tags && (
              <div className="py-3 xl:py-6">
                <h2 className="pb-2 text-base !tracking-normal !font-medium  text-gray-500 dark:text-gray-400">
                  Tagged with
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((t: string) => (
                    <NextLink
                      className="mr-4 !text-base my-2 primary-link"
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
                    <h2 className="text-base pb-2 !tracking-normal !font-medium  text-gray-500 dark:text-gray-400">
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
                    <h2 className="text-base pb-2 !font-medium  text-gray-500 dark:text-gray-400">
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
              <React.Fragment>
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                  <h2 className="text-base pb-2 !tracking-normal !font-medium  text-gray-500 dark:text-gray-400">
                    Main Article
                  </h2>
                  <NextLink
                    className="text-base primary-link"
                    href={`${parentPost.path}`}
                  >
                    {parentPost.title}
                  </NextLink>
                </div>
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                  <NextLink
                    className="primary-link text-base pb-2"
                    href="/writing"
                  >
                    Browse all Writing
                  </NextLink>
                  <NextLink
                    className="primary-link text-base pb-2"
                    href="/tags"
                  >
                    Browse by Tags
                  </NextLink>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </article>
    </React.Fragment>
  )
}
