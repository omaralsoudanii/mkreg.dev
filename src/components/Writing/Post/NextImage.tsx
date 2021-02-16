import Image from 'next/image'
import { ComponentPropsWithNode } from 'rehype-react'
import { Dimensions } from '@/ghost/images'

interface PropertyProps {
  src: string
  className?: string[]
}

export const NextImage = (props: ComponentPropsWithNode) => {
  const { node } = props
  if (!node) return null
  const imageDimensions = node.imageDimensions as Dimensions
  const { src } = node.properties as PropertyProps

  return (
    <div>
      <Image src={src} {...imageDimensions} />
    </div>
  )
}
