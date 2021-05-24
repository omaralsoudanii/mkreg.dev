import Link from 'next/link'

const Tag = ({ name, slug, count }) => {
  return (
    <div className="mt-2 mb-2 mr-5 link-unstyled">
      <Link href={`/tags/${slug}`}>
        <a className="mr-3">
          {name}
          {` `}
          {`(${count})`}
        </a>
      </Link>
    </div>
  )
}

export default Tag
