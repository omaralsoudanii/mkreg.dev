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
          <div className="flex flex-col space-y-4">
            <h1 className="py-2">{frontMatter.title}</h1>
            <p className="py-2 text-2xl font-medium">
              {frontMatter.description}
            </p>

            <p className="px-2 py-4 text-lg font-medium text-right text-gray-800 dark:text-white">
              {`Published ${dayjs(new Date(frontMatter.publishedAt)).format(
                'MMMM DD, YYYY'
              )}`}
            </p>
          </div>
          <div className="my-4 hr-stroke" />
          <div className="w-full my-4 prose dark:prose-dark lg:text-lg lg:prose-lg max-w-none">
            {children}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
