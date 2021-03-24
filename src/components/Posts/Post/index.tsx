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
        <div className="flex flex-col py-4">
          <div className="flex flex-col space-y-2">
            <h1 className="py-2 text-heading-1">{frontMatter.title}</h1>
            <p className="px-2 py-2 text-right text-p-3">
              {`${dayjs(new Date(frontMatter.publishedAt)).format(
                'MMMM DD, YYYY'
              )}`}
            </p>
          </div>
          <div className="my-4 hr-stroke" />
          <div className="w-full my-4 prose dark:prose-dark lg:prose-lg max-w-none">
            {children}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}