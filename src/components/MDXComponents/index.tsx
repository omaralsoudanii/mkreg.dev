import NextLink from '@/components/NextLink'
import dynamic from 'next/dynamic'
import NextImage from '@/components/NextImage'
import CopyCode from '@/components/CopyCode'

const MDXComponents = {
  a: NextLink,
  Card: dynamic(() => import('../Card')),
  Image: NextImage,
  pre: CopyCode,
}

export default MDXComponents
