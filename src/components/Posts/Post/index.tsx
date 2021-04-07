import dayjs from 'dayjs'
import Tag from '@/components/Tag'
import Seo from '@/components/Seo'

export default function PostContainer({ children, frontMatter }) {
  const meta = {
    title: frontMatter.title,
    description: frontMatter.description,
    image: {
      url: frontMatter?.featuredImage,
      alt: frontMatter.title,
    },
  }
  return (
    <div className="flex flex-col py-4">
      <Seo data={meta} />
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
      <article className="w-full my-4 prose dark:prose-dark sm:prose lg:prose-lg">
        {children}
      </article>
    </div>
  )
}
