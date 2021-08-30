import { useMemo } from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticProps } from 'next'

import NextLink from '@/components/NextLink'
import Seo from '@/components/Seo'
import { getFileBySlug } from '@/lib/mdx'

function About({ code, frontMatter }) {
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
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <article className="prose dark:prose-dark lg:prose-lg w-full max-w-none lg:max-w-[75ch] mx-auto">
      <Seo data={meta} />
      <header id="skip">
        <h1 className="page-heading !mb-2">About</h1>
      </header>
      <div>
        <Component components={{ a: NextLink }} />
      </div>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getFileBySlug('about')
  return { props: post }
}

export default About
