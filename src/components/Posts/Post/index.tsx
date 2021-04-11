import dayjs from 'dayjs'
import Image from 'next/image'
import Tag from '@/components/Tag'
import { SEO } from '@/components/Seo/seo'
import { Environment } from '@/lib/environment'
import { resolveUrl } from '@/lib/routing'
import { RenderContent } from '@/components/RenderContent'
export default function PostContainer({ data }) {
  const { post, seoImage } = data
  const { meta_description, excerpt, title } = post
  const description = meta_description || excerpt

  const {
    nextImages,
    ghost: { apiUrl },
  } = Environment

  const featImg = post.featureImage

  const htmlAst = post.htmlAst
  if (htmlAst === undefined) {
    throw Error('Post.tsx: htmlAst must be defined.')
  }

  return (
    <div className="flex flex-col py-4">
      <SEO {...{ description, seoImage, article: post, title }} />
      <div className="flex flex-col space-y-4">
        <h1 className="font-extrabold text-primary">{title}</h1>
        <div className="flex flex-wrap">
          {post.tags.map((tag) => (
            <Tag
              key={tag.slug}
              text={tag.name}
              url={resolveUrl({ apiUrl, slug: tag.slug, url: tag.url })}
            />
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          {`${dayjs(new Date(post.published_at)).format('MMMM DD, YYYY')}`}
        </p>
      </div>
      <div className="my-4 hr-stroke" />
      {featImg &&
        (nextImages.feature && featImg.dimensions ? (
          <div
            className="max-w-full my-4"
            style={{ contentVisibility: 'auto' }}
          >
            <Image
              src={featImg.url}
              alt={title}
              quality={nextImages.quality}
              layout="responsive"
              sizes={`(min-width: 1024px) 50vw, (min-width: 768px) 66.666667vw, 83.333333vw`}
              {...featImg.dimensions}
            />
          </div>
        ) : (
          post.feature_image && (
            <div
              className="max-w-full my-4"
              style={{ contentVisibility: 'auto' }}
            >
              <img src={post.feature_image} alt={title} />
            </div>
          )
        ))}
      <article className="w-full my-4 prose !max-w-none dark:prose-dark">
        <RenderContent htmlAst={htmlAst} />
      </article>
    </div>
  )
}
