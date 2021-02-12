import * as React from 'react'
import SEO from './SEO'
import Image from 'next/image'
import { format } from 'date-fns'
import { CenteredColumn } from '@/components/Layouts'
import { GhostPostOrPage } from '@/ghost/api'
import { Environment } from '@/environment'
import { Body } from './Body'
interface Props {
  post: GhostPostOrPage
}

export default function PostContainer({ post }: Props) {
  const htmlAst = post?.htmlAst
  if (htmlAst === undefined) throw Error('Post.tsx: htmlAst must be defined.')
  const featImg = post.featureImage
  return (
    <React.Fragment>
      <SEO post={post} />

      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          {featImg &&
            (Environment.nextImages?.feature && featImg?.dimensions ? (
              <figure>
                <Image
                  src={featImg.url}
                  alt={post.title}
                  quality={Environment.nextImages.quality}
                  layout="responsive"
                  sizes={`
                              (max-width: 350px) 350px,
                              (max-width: 530px) 530px,
                              (max-width: 710px) 710px,
                              (max-width: 1170px) 1170px,
                              (max-width: 2110px) 2110px, 2000px
                            `}
                  {...featImg.dimensions}
                />
              </figure>
            ) : (
              post?.feature_image && (
                <img src={post.feature_image} alt={post.title} />
              )
            ))}
          <div className="flex flex-col space-y-4">
            <h1>{post.title}</h1>
            <p className="p-small">
              {`Updated at ${format(
                new Date(post.updated_at),
                'MMMM dd, yyyy'
              )}`}
            </p>
          </div>
        </div>

        <div style={{ marginTop: '16px' }} className="prose lg:prose-lg">
          <Body htmlAst={htmlAst} />
        </div>
      </CenteredColumn>
    </React.Fragment>
  )
}
