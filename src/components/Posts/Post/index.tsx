import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import { FormatDate, slugify } from '@/lib/utils'

export default function Post({
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
    <article id="skip" className="px-2">
      <Seo data={meta} />
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="xl:pb-6">
          <div className="space-y-3 xl:space-y-8 text-center">
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
            <h1 className="post-title mb-8 sm:mb-16">{title}</h1>
          </div>
        </header>
        <div
          className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-4 xl:col-span-3 xl:col-start-2 xl:row-span-2">
            <div className="pt-10 pb-8 default-prose">{children}</div>
          </div>
          <div>
            <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-2 xl:row-start-2">
              <dl className="pt-6 pb-2 xl:pb-8  flex flex-col xl:flex-row xl:block xl:pt-12 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
                <dt className="sr-only">Updated on</dt>
                <dd className=" font-medium text-base pb-4 leading-6 text-secondary">
                  <time dateTime={lastmod}>
                    {`Modified ${FormatDate(lastmod)}`}
                  </time>
                </dd>
              </dl>

              <dl className="pb-3 pt-1 xl:py-6">
                <dt className="sr-only">Author</dt>
                <dd>
                  <div className="flex xl:block">
                    <dl className="whitespace-nowrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-display text-base  leading-5 font-semibold pb-2">
                        {Environment.ogTitle}
                      </dd>
                      <div className="flex flex-wrap">
                        <dt className="sr-only">Github</dt>
                        <dd className="mr-3 py-1 text-sm font-medium">
                          <NextLink
                            href={Environment.social.github}
                            className="text-link text-base  leading-5"
                          >
                            Github
                          </NextLink>
                        </dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd className="mr-3 py-1 text-sm font-medium">
                          <NextLink
                            href={Environment.social.twitter}
                            className="text-link text-base  leading-5"
                          >
                            Twitter
                          </NextLink>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </dd>
              </dl>
              {tags && (
                <div className="py-3 xl:py-6">
                  <h2 className="text-base  pb-2  text-secondary">Tags</h2>
                  <div className="flex flex-wrap">
                    {tags.map((t: string) => (
                      <NextLink
                        className="mr-4 py-1 text-sm text-link"
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
                      <h2 className="text-base pb-2 text-secondary">
                        Previous Post
                      </h2>
                      <div>
                        <NextLink
                          className=" text-base text-link"
                          href={`/writing/${prev.slug}`}
                        >
                          {prev.title}
                        </NextLink>
                      </div>
                    </div>
                  )}
                  {next && (
                    <div>
                      <h2 className="text-base pb-2 text-secondary">
                        Next Post
                      </h2>
                      <div>
                        <NextLink
                          className="text-link text-base"
                          href={`/writing/${next.slug}`}
                        >
                          {next.title}
                        </NextLink>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="pt-4 xl:pt-8">
              <NextLink href="/writing" className="link-unstyled">
                &larr; Browse all Writing
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
