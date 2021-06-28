import NextLink from '@/components/NextLink'
import NextImage from '@/components/NextImage'
import dynamic from 'next/dynamic'

const MDXComponents = {
  a: NextLink,
  Card: dynamic(() => import('../Card')),
  Image: NextImage,
}

export default MDXComponents
