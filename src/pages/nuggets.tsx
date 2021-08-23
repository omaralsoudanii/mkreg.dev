import { GetStaticProps } from 'next'

import Seo from '@/components/Seo'
import { Bookmarks, BookmarkIcon } from '@/lib/bookmarks'

function Nuggets({ posts }) {
  const meta = {
    title: 'Omar Alsoudani - Nuggets',
    description: 'Resources and bookmarks for the readers',
    JsonLd: false,
  }
  const iconStyle = 'w-12 h-12 md:w-14 md:h-14  min-w-sm svg-fill'

  return (
    <article
      id="skip"
      className="prose dark:prose-dark md:prose-lg w-full max-w-none md:max-w-[75ch] mx-auto"
    >
      <Seo data={meta} />

      <section className="mb-8 md:mb-16">
        <header>
          <h1 className="page-heading !mb-4">Nuggets</h1>
        </header>
        <p>
          Some stuff I bookmark to read later, or a tool I find useful to use.
          These recommendations are based on my opinion. Feel free to peek into
          what might interest you. If you happen to see something misleading or
          plain wrong, please contact me
        </p>
      </section>
      <section>
        {posts.map((post) => {
          const Icon = BookmarkIcon(post.Icon)
          return (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center py-2 px-4 my-8 border border-gray-200 rounded md:py-4 md:px-8 dark:border-opacity-40 dark:border-gray-700">
                <div className={`${iconStyle} ml-0 mr-4 md:ml-2 md:mr-8`}>
                  <span className="sr-only">{post.title}</span>
                  <Icon className={iconStyle} />
                </div>
                <div>
                  <h2 className="!my-1 !font-medium  !text-lg md:!text-xl">
                    {post.title}
                  </h2>
                  <p className="!my-1  !text-secondary !text-[0.9rem] md:!text-base !leading-snug !font-normal clamp clamp-5">
                    {post.desc}
                  </p>
                </div>
              </div>
            </a>
          )
        })}
      </section>
    </article>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await Bookmarks()
  const posts = data.map((bookmark) => {
    return {
      title: bookmark.title,
      desc: bookmark.desc,
      url: new URL(bookmark.url).toString(),
      Icon: bookmark.Icon,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
export default Nuggets
