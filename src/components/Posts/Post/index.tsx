import dayjs from 'dayjs'
import { CenteredColumn } from '@/components/CenteredColumn'
import Page from '@/components/Page'
import Tag from '@/components/Tag'

export default function PostContainer({ children, frontMatter }) {
  const extraMeta = {
    title: frontMatter.title,
    description: frontMatter.description,
    image: {
      url: frontMatter?.featuredImage,
      alt: frontMatter.title,
    },
  }
  return (
    <Page extraMeta={extraMeta}>
      <CenteredColumn>
        <div className="flex flex-col py-4">
          <div className="flex flex-col space-y-4">
            <h1 className="font-extrabold text-primary">{frontMatter.title}</h1>
            <div className="flex flex-wrap">
              {frontMatter.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {`${dayjs(new Date(frontMatter.publishedAt)).format(
                'MMMM DD, YYYY'
              )}`}
            </p>
          </div>
          <div className="my-4 hr-stroke" />
          <article className="w-full my-4 prose dark:prose-dark sm:prose">
            {children}
          </article>
        </div>
      </CenteredColumn>
    </Page>
  )
}
