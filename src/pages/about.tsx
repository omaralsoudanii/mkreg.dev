import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import ProseLayout from '@/components/Layouts/ProseLayout'

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
    <ProseLayout>
      <Seo data={meta} />
      <article>
        <header>
          <h1 className="post-title !mb-2">About</h1>
        </header>
        <div>
          <MDXRemote {...mdxSource} components={{ a: NextLink }} />
        </div>
      </article>
    </ProseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { revalidate } = Environment.isr
  const post = await getFileBySlug('about')
  return { props: post, revalidate: revalidate }
}

export default About
