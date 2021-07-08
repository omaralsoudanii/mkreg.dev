import * as React from 'react'
import Image from 'next/image'

const NextImage = ({
  src,
  width,
  height,
  alt = 'Omar Alsoudani',
  layout = 'intrinsic',
}: {
  src: string
  width: number
  height: number
  alt?: string
  layout?: 'intrinsic' | 'fixed' | 'responsive'
}): JSX.Element => (
  <Image alt={alt} src={src} width={width} height={height} layout={layout} />
)

export default NextImage
