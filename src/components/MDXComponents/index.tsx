import NextLink from '@/components/NextLink'
import NextImage from '@/components/NextImage'
import CopyCode from '@/components/CopyCode'
import Card from '@/components/Card'

const MDXComponents = {
  a: NextLink,
  Card: Card,
  Image: NextImage,
  pre: CopyCode,
}

export default MDXComponents
