import Pre from '@/components/CodePre'
import NextImage from '@/components/NextImage'
import NextLink from '@/components/NextLink'

import Card from '../Card'

const MDXComponents = {
  Card: Card,
  Image: NextImage,
  pre: Pre,
  a: NextLink,
}

export default MDXComponents
