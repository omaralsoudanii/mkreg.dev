import Link from 'next/link'

const Tag = ({ name, slug }) => {
  return (
    <Link href={`/tags/${slug}`}>
      <a className="mr-3 link-unstyled">{name}</a>
    </Link>
  )
}

export default Tag
