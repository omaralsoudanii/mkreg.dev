import MDXComponents from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import Seo from '@/components/Seo'

function Home({ mdxSource, frontMatter }) {
  const meta = {
    title: `Omar Alsoudani - ${frontMatter.title}`,
    description: frontMatter.summary,
    image: {
      url: frontMatter?.image,
      alt: frontMatter.title,
    },
    tags: frontMatter?.tags,
    JsonLd: true,
  }
  return (
    <article>
      <Seo data={meta} />
      <div className="divide-y divide-gray-300 dark:divide-gray-700 mx-auto">
        <header id="skip" className="pb-4">
          <h1 className="text-h3 font-bold">Hi, I'm Omar</h1>
        </header>
        <div className="items-start space-y-2 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark lg:prose-lg !max-w-[80ch]">
            <MDXRemote {...mdxSource} components={MDXComponents} />
          </div>
        </div>
      </div>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getFileBySlug('about')
  return { props: post }
}

export default Home
