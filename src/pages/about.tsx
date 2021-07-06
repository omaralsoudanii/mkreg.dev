import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import ProseContainer from '@/components/Layouts/ProseContainer'
import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

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
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = React.useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return (
    <ProseContainer>
      <Seo data={meta} />
      <article>
        <header>
          <h1 className="page-heading !mb-2">About</h1>
        </header>
        <div>
          <Component {...mdxSource} components={{ a: NextLink }} />
        </div>
      </article>
    </ProseContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getFileBySlug('about')
  return { props: post }
}

export default About
