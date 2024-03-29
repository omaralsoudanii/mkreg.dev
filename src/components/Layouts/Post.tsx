import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import Views from '@/components/Views'
import { Environment } from '@/lib/environment'
import { slugify } from '@/lib/utils'

const TwitterUrl = (path: string) =>
  `https://mobile.twitter.com/search?q=${Environment.siteUrl}/${path}&src=typed_query`

const GithubUrl = (path: string) =>
  `${Environment.social.github}/mkreg.dev/edit/main/src/data/${path}.mdx`

export default function PostLayout({
  children,
  frontMatter: { date, title, tags, lastmod, slug, path },
  meta,
  prev = null,
  next = null,
  parentPost = null,
}) {
  return (
    <article id='skip' className='md:divide-y md:divide-gray-200 md:dark:divide-gray-700'>
      <Seo data={meta} />

      <header className='pb-4 md:pb-8'>
        <div className='space-y-3 text-center'>
          <p className='text-base md:text-lg  text-tertiary'>
            <span className='px-2 !font-medium'>{`${date}`}</span>
            {`    •    `}
            <span className='px-2 !font-medium'>
              <Views encodedSlug={slug} />
            </span>
          </p>
          <h1 className='page-heading mb-4 md:mb-8'>{title}</h1>
        </div>
      </header>
      <div
        className=' divide-y divide-gray-200 md:divide-y-0 dark:divide-gray-700 md:grid md:gap-4 md:grid-cols-4'
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <div className='py-6 md:col-span-3 md:col-start-2 md:row-span-3'>
          <div className='prose dark:prose-dark xl:prose-lg w-full mx-auto !max-w-none'>
            {children}
          </div>
        </div>
        <div className='divide-gray-200  md:divide-y dark:divide-gray-700 md:row-start-1 py-4 md:col-start-1'>
          <div className='flex flex-col md:flex-row md:block md:border-b md:border-gray-200 md:dark:border-gray-700'>
            <div className='flex py-4 md:py-8 flex-col'>
              <h2 className='!font-medium !tracking-normal  text-tertiary text-base py-1'>
                {Environment.ogTitle}
              </h2>
              <div className='flex flex-wrap py-1'>
                <p className='pr-4'>
                  <NextLink
                    href={Environment.social.github}
                    className='primary-link inline-block text-base '
                  >
                    Github
                  </NextLink>
                </p>
                <p>
                  <NextLink
                    href={Environment.social.twitter}
                    className='primary-link inline-block text-base '
                  >
                    Twitter
                  </NextLink>
                </p>
              </div>
              {lastmod && (
                <h2 className='!font-medium !tracking-normal  text-tertiary text-base py-1'>{`Modified ${lastmod}`}</h2>
              )}
            </div>
          </div>
          <div className='py-4 md:py-8'>
            <h2 className='text-base py-1 !tracking-normal !font-medium  text-tertiary'>
              See also
            </h2>
            <div className='flex md:block justify-between'>
              <p className='py-1'>
                <NextLink className='primary-link text-base' href={GithubUrl(path)}>
                  {'Edit on GitHub'}
                </NextLink>
              </p>
              <p className='py-1'>
                <NextLink href={TwitterUrl(path)} className='primary-link text-base'>
                  {'Discuss on Twitter'}
                </NextLink>
              </p>
            </div>
          </div>

          {tags && (
            <div className='py-4 md:py-8'>
              <h2 className='text-base py-1 !tracking-normal !font-medium  text-tertiary'>
                Tagged with
              </h2>
              <div className='flex flex-wrap'>
                {tags.map((t: string) => (
                  <NextLink
                    className='mr-4 my-2 !text-base  primary-link'
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
            <div className='flex justify-between py-4 md:block md:space-y-8 md:py-8'>
              {prev && (
                <div>
                  <h2 className='text-base py-1 !tracking-normal !font-medium  text-tertiary'>
                    Previous Article
                  </h2>
                  <NextLink className='text-base primary-link' href={`${prev.path}`}>
                    {prev.title}
                  </NextLink>
                </div>
              )}
              {next && (
                <div>
                  <h2 className='text-base py-1 !font-medium !tracking-normal text-tertiary'>
                    Next Article
                  </h2>
                  <NextLink className='primary-link text-base' href={`${next.path}`}>
                    {next.title}
                  </NextLink>
                </div>
              )}
            </div>
          )}
          {!next && !prev && parentPost && (
            <div className='flex flex-col py-4 md:block md:space-y-8 md:py-8'>
              <h2 className='text-base py-1 !tracking-normal !font-medium  text-tertiary'>
                Continue reading
              </h2>
              <NextLink className='text-base primary-link' href={`/${parentPost.path}`}>
                {parentPost.title}
              </NextLink>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
