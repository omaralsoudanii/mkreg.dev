import Image from 'next/image'

import Pre from '@/components/CodePre'
import NextLink from '@/components/NextLink'

const MDXComponents = {
  Image,
  pre: Pre,
  a: NextLink,
}

export default MDXComponents
