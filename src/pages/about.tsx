import * as React from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticProps } from 'next'

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
    <div className="prose dark:prose-dark md:prose-lg w-full max-w-none md:max-w-[75ch] mx-auto">
      <Seo data={meta} />
      <article id="skip">
        <header>
          <h1 className="page-heading !mb-2">About</h1>
        </header>
        <div>
          <Component {...mdxSource} components={{ a: NextLink }} />
        </div>
      </article>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getFileBySlug('about')
  return { props: post, revalidate: Environment.isr.revalidate }
}

export default About
