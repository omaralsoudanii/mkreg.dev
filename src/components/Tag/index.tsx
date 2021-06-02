import Link from 'next/link'

const Tag = ({ name, slug, count, className }) => {
  return (
    <Link href={`/tags/${slug}`}>
      <a className="!my-3 mr-6  link-unstyled">
        <span className={className}>
          {name}
          {` `}
          {`(${count})`}
        </span>
      </a>
    </Link>
  )
}

export default Tag
