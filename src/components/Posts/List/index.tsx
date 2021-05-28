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
    <div key={frontMatter.title} className="flex flex-col">
      <h2 className="!text-2xl  lg:!text-3xl !leading-none !pt-0 !my-0">
        <Link href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}>
          <a className="link-unstyled  !font-semibold">{frontMatter.title}</a>
        </Link>
      </h2>
      <p className="clamp-3 text-base !leading-normal lg:text-lg text-secondary !mb-3 !mt-1">
        {frontMatter.summary}
      </p>
      <p className="text-base !text-display !my-0">
        <Link href={`${frontMatter.page ? '' : href}/${frontMatter.slug}`}>
          <a className="link-unstyled">Read more &rarr; </a>
        </Link>
      </p>
    </div>
  ))
}
