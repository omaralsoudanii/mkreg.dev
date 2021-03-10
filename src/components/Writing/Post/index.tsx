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
    <CenteredColumn>
      <div className="flex flex-col mb-8 space-y-8">
        {featImg &&
          (Environment.nextImages?.feature && featImg?.dimensions ? (
            <Image
              src={featImg.url}
              alt={post.title}
              quality={Environment.nextImages.quality}
              layout="responsive"
              {...featImg.dimensions}
            />
          ) : null)}
        <div className="flex flex-col space-y-4">
          <h1>{post.title}</h1>
          <p className="p-small">
            {`Published at ${format(
              new Date(post.updated_at),
              'MMMM dd, yyyy'
            )}`}
          </p>
        </div>
      </div>
      <div className="prose dark:prose-dark max-w-none lg:prose-lg">
        <Body htmlAst={htmlAst} />
      </div>
    </CenteredColumn>
  )
}
