import SectionContainer from '@/components/SectionContainer'
import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import dayjs from 'dayjs'
import { slugify } from '@/lib/utils'

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
    <SectionContainer>
      <Seo data={meta} />
      <article id="skip">
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="xl:pb-6">
            <div className="space-y-3 xl:space-y-8 text-center">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd>
                    <time dateTime={date}>
                      <p className="font-medium text-base  leading-6 text-secondary">{`${dayjs(
                        new Date(date)
                      ).format('MMMM DD, YYYY')}`}</p>
                    </time>
                  </dd>
                </div>
              </dl>
              <h1 className="post-title mb-8 sm:mb-16">{title}</h1>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-4 xl:col-span-3 xl:col-start-2 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark lg:prose-lg max-w-none">
                {children}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-2 xl:row-start-2">
                <dl className="pt-6 pb-2 xl:pb-8  xl:pt-12 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
                  <dt className="sr-only">Date</dt>
                  <dd>
                    <div className="flex flex-col xl:flex-row xl:block">
                      <dt className="sr-only">Updated on</dt>
                      <dd className=" font-medium text-base pb-4 leading-6 text-secondary">
                        <time dateTime={lastmod}>
                          {`Modified ${dayjs(new Date(lastmod)).format(
                            'MMMM DD, YYYY'
                          )}`}
                        </time>
                      </dd>
                    </div>
                  </dd>
                </dl>

                <dl className="pb-3 pt-1 xl:py-6">
                  <dt className="sr-only">Author</dt>
                  <dd>
                    <div className="flex xl:block">
                      <dl className="whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-primary text-base  leading-5 font-semibold pb-2">
                          {Environment.ogTitle}
                        </dd>
                        <div className="flex flex-wrap">
                          <dt className="sr-only">Github</dt>
                          <dd className="mr-3 py-1 text-sm font-medium">
                            <NextLink
                              href={Environment.social.github}
                              className="text-blue-500 text-base  leading-5 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                              Github
                            </NextLink>
                          </dd>
                          <dt className="sr-only">Twitter</dt>
                          <dd className="mr-3 py-1 text-sm font-medium">
                            <NextLink
                              href={Environment.social.twitter}
                              className="text-blue-500 text-base  leading-5 hover:text-blue-600 dark:hover:text-blue-400"
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
                          className="mr-4 py-1 text-sm font-medium text-blue-500  hover:text-blue-600 dark:hover:text-blue-400"
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
                        <h2 className="text-base  pb-2  text-secondary">
                          Previous Post
                        </h2>
                        <div>
                          <NextLink
                            className="text-blue-500 text-base font-medium hover:text-blue-600 dark:hover:text-blue-400"
                            href={`/writing/${prev.slug}`}
                          >
                            {prev.title}
                          </NextLink>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-base  pb-2   text-secondary">
                          Next Post
                        </h2>
                        <div>
                          <NextLink
                            className="text-blue-500 text-base font-medium hover:text-blue-600 dark:hover:text-blue-400"
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
                <NextLink
                  href="/writing"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  &larr; Browse all Writing
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
