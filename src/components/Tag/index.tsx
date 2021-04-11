import Link from 'next/link'

const Tag = ({ url, text }) => {
  return (
    <Link href={url}>
      <a className="mr-3 text-link">{text}</a>
    </Link>
  )
}

export default Tag
