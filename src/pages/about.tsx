import * as React from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticProps } from 'next'

import ProseContainer from '@/components/Layouts/ProseContainer'
import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import { getFileBySlug } from '@/lib/mdx'

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
  const { revalidate, enable } = Environment.isr
  return {
    props: post,
    revalidate: enable ? revalidate : 0,
  }
}

export default About
