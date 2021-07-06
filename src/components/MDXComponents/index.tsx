import NextLink from '@/components/NextLink'
import NextImage from '@/components/NextImage'
import Pre from '@/components/CodePre'
import dynamic from 'next/dynamic'

const MDXComponents = {
  Card: dynamic(() => import('../Card')),
  Image: NextImage,
  pre: Pre,
  a: NextLink,
}

export default MDXComponents
