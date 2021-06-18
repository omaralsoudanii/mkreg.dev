import NextLink from '@/components/NextLink'
import NextImage from '@/components/NextImage'
import CopyCode from '@/components/CopyCode'
import dynamic from 'next/dynamic'

const MDXComponents = {
  a: NextLink,
  Card: dynamic(() => import('../Card')),
  Image: NextImage,
  pre: CopyCode,
}

export default MDXComponents
