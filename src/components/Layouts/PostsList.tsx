import { FormatDate } from '@/lib/utils'
import Link from 'next/link'
export default function PostsList({ posts, href }) {
  return (
    <div className="mt-8">
      {posts.map((frontMatter) => (
        <Link
          key={frontMatter.slug}
          href={`${href}/${frontMatter.slug}`}
          passHref
        >
          <a className="inline-block py-6 lg:py-8 w-full">
            <div className="w-full">
              <div className="flex flex-col justify-between lg:flex-row">
                <h2 className="!text-xl lg:!text-2xl !mb-0 w-full !mt-0 text-display">
                  {frontMatter.title}
                </h2>
                <p className="w-32 !font-normal !text-base text-left text-tertiary lg:text-right !mb-1 lg:!mb-0">
                  {`${FormatDate(frontMatter.date)}`}
                </p>
              </div>
              <p className="!font-normal lg:!py-1 !my-0 !text-base text-tertiary clamp clamp-3">
                {frontMatter.summary}
              </p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
