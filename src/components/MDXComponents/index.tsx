import NextLink from '@/components/NextLink'
import dynamic from 'next/dynamic'
import NextImage from '../NextImage'

const MDXComponents = {
  a: NextLink,
  Card: dynamic(() => import('../Card')),
  Image: NextImage,
}

export default MDXComponents
