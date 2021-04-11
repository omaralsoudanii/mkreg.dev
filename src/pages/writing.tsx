import PostsList from '@/components/Posts/List'
import { GetStaticProps } from 'next'
import Heading from '@/components/Heading'
import { Environment } from '@/lib/environment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SEO } from '@/components/Seo/seo'
import { getAllPosts, GhostPostsOrPages } from '@/lib/ghost'
import { seoImage } from '@/components/Seo/seoImage'
/**
 * Main writing page
 *
 * Loads all posts from MDX
 *
 */

export default function Writing({ data }) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  const meta = {
    title: 'Omar Alsoudani - Writing',
    description: 'Writing about programming, software & Vim vs Emacs.',
    seoImage: data.seoImage,
  }

  return (
    <article>
      <SEO {...meta} />
      <div className="flex flex-col items-start space-y-8">
        <Heading
          title="Writing"
          subTitle="Writing about programming, software & Vim vs Emacs."
        />
        <Link href="/tags">
          <a className="text-base text-link sm:text-lg">Tags &rarr;</a>
        </Link>
        <div className=" hr-stroke" />
        <PostsList posts={data.posts} />
      </div>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let posts: GhostPostsOrPages | []

  try {
    posts = await getAllPosts()
  } catch (error) {
    console.log(error)
    // throw new Error('Writing creation failed.')
  }

  const data = {
    posts,
    seoImage: await seoImage({ siteUrl: Environment.siteUrl }),
  }

  return {
    props: {
      data,
    },
    ...(Environment.isr.enable && { revalidate: Environment.isr.revalidate }),
  }
}
