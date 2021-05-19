import * as React from 'react'
import Image from 'next/image'

const NextImage = ({
  src,
  width,
  height,
  alt,
  layout = 'intrinsic',
  quality = 75,
}: {
  src: string
  width: number
  height: number
  alt: string
  layout?: 'intrinsic' | 'fixed' | 'responsive'
  quality?: number
}): JSX.Element => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      layout={layout}
      quality={quality}
    />
  )
}

export default NextImage
