import dayjs from 'dayjs'
import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'

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
        <div className="flex flex-col py-8">
          <div className="flex flex-col space-y-2 text-center">
            <h1>{frontMatter.title}</h1>
            <p className="p-small">
              {`${dayjs(new Date(frontMatter.publishedAt)).format(
                'MMMM DD, YYYY'
              )}`}
            </p>
          </div>
          <div className="w-full prose dark:prose-dark lg:prose-lg max-w-none">
            {children}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
