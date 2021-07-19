import dynamic from 'next/dynamic'

import Pre from '@/components/CodePre'
import NextImage from '@/components/NextImage'
import NextLink from '@/components/NextLink'

const MDXComponents = {
  Card: dynamic(() => import('../Card')),
  Image: NextImage,
  pre: Pre,
  a: NextLink,
}

export default MDXComponents
