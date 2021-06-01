import Link from 'next/link'

export default function PostsList({ posts, href }) {
  if (!posts || posts.length === 0)
    return (
      <p>
        There seems to be no posts at the moment. But let's not kid each other.
        I probably pushed something buggy.
      </p>
    )

  return posts.map((frontMatter) => (
    <div key={frontMatter.title} className="flex flex-col items-baseline">
      <Link href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}>
        <a className="inline link-unstyled">
          <h3 className="text-primary !pt-0 !my-0">{frontMatter.title}</h3>
        </a>
      </Link>

      <p className="clamp-3 text-secondary !leading-normal  !mb-3 !mt-1">
        {frontMatter.summary}
      </p>

      <Link href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}>
        <a className="link-unstyled">
          <p className="text-tertiary text-base !my-0">Read more &rarr; </p>
        </a>
      </Link>
    </div>
  ))
}
