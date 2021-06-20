import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'

function About({ mdxSource, frontMatter }) {
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
          <h1 className="post-title">About</h1>
        </header>
        <div className="pt-8 pb-8 default-prose">
          <MDXRemote {...mdxSource} components={{ a: NextLink }} />
        </div>
      </div>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getFileBySlug('about')
  return { props: post }
}

export default About
