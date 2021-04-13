import Link from 'next/link'
import { unSlugify } from '@/lib/utils'

const Tag = ({ slug }) => {
  return (
    <Link href={`/tags/${slug}`}>
      <a className="mr-3 text-link">{unSlugify(slug)}</a>
    </Link>
  )
}

export default Tag
