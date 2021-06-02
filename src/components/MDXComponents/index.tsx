import NextLink from '@/components/NextLink'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const MDXComponents = {
  a: NextLink,
  Card: dynamic(() => import('../Card')),
  Image,
}

export default MDXComponents
