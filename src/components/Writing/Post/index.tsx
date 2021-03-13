import { format } from 'date-fns'
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
        <div className="flex flex-col mb-8 space-y-8">
          <div className="flex flex-col space-y-4">
            <h1>{frontMatter.title}</h1>
            <p className="p-small">
              {`Published at ${format(
                new Date(frontMatter.publishedAt),
                'MMMM dd, yyyy'
              )}`}
            </p>
          </div>
          <div className="prose dark:prose-dark lg:prose-lg">{children}</div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
