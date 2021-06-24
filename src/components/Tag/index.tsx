import Link from 'next/link'

const Tag = ({ name, slug, count, className }) => {
  return (
    <Link href={`/tags/${slug}`} passHref>
      <a className="primary-link">
        <p className={className}>
          {name}
          {` `}
          {`(${count})`}
        </p>
      </a>
    </Link>
  )
}

export default Tag
