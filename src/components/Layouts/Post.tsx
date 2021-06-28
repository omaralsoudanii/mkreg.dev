import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import { FormatDate, slugify } from '@/lib/utils'

export default function PostLayout({
  children,
  frontMatter,
  prev = null,
  next = null,
}) {
  const { date, title, tags, lastmod, summary } = frontMatter

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
    <div>
      <Seo data={meta} />
      <article
        id="skip"
        className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"
      >
        <header className="pb-6 xl:pb-8">
          <div className="space-y-2 text-center">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd>
                <time dateTime={date}>
                  <p className="font-medium text-base  leading-6 text-secondary">
                    {`${FormatDate(date)}`}
                  </p>
                </time>
              </dd>
            </dl>
            <h1 className="page-heading mb-8 sm:mb-16">{title}</h1>
          </div>
        </header>
        <div
          className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-4 xl:col-span-3 xl:col-start-2 xl:row-span-2">
            <div className="pt-10 pb-8 post-prose">{children}</div>
          </div>
          <aside className="divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 pt-8 xl:pt-12  xl:row-start-2">
            <dl className="pb-2 xl:pb-4 flex flex-col xl:flex-row xl:block xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
              <dt className="sr-only">Author</dt>
              <dd>
                <div className="flex xl:block pb-1">
                  <dl className="whitespace-nowrap">
                    <dt className="sr-only">Name</dt>
                    <dd className="!font-medium  text-display text-base pb-1">
                      {Environment.ogTitle}
                    </dd>
                    <div className="flex flex-wrap">
                      <dt className="sr-only">Github</dt>
                      <dd className="mr-3  py-0">
                        <NextLink
                          href={Environment.social.github}
                          className="primary-link inline-block text-base "
                        >
                          Github
                        </NextLink>
                      </dd>
                      <dt className="sr-only">Twitter</dt>
                      <dd className="mr-3 py-0">
                        <NextLink
                          href={Environment.social.twitter}
                          className="primary-link inline-block text-base "
                        >
                          Twitter
                        </NextLink>
                      </dd>
                    </div>
                  </dl>
                </div>
              </dd>
              <dt className="sr-only">Modified on</dt>
              <dd className=" !font-medium  text-gray-500 dark:text-gray-400 text-sm pb-4">
                <time dateTime={lastmod}>
                  {`Last Modified ${FormatDate(lastmod)}`}
                </time>
              </dd>
            </dl>
            {tags && (
              <div className="py-3 xl:py-6">
                <h2 className="pb-2 text-base !tracking-normal !font-medium  text-gray-500 dark:text-gray-400">
                  Tagged with
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((t: string) => (
                    <NextLink
                      className="mr-4 !text-sm my-1 primary-link"
                      key={t}
                      href={`/tags/${slugify(t)}`}
                    >
                      {t}
                    </NextLink>
                  ))}
                </div>
              </div>
            )}
            {(next || prev) && (
              <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                {prev && (
                  <div>
                    <h2 className="text-base pb-2 !tracking-normal !font-medium  text-gray-500 dark:text-gray-400">
                      Previous Article
                    </h2>
                    <div>
                      <NextLink
                        className=" text-base primary-link"
                        href={`/writing/${prev.slug}`}
                      >
                        {prev.title}
                      </NextLink>
                    </div>
                  </div>
                )}
                {next && (
                  <div>
                    <h2 className="text-base pb-2 !font-medium  text-gray-500 dark:text-gray-400">
                      Next Article
                    </h2>
                    <div>
                      <NextLink
                        className="primary-link text-base"
                        href={`/writing/${next.slug}`}
                      >
                        {next.title}
                      </NextLink>
                    </div>
                  </div>
                )}
              </div>
            )}
          </aside>
        </div>
      </article>
    </div>
  )
}
