import * as React from 'react'
import Image from 'next/image'

const NextImage = ({
  src,
  width,
  height,
  alt,
  quality = 75,
}: {
  src: string
  width: number
  height: number
  alt: string
  quality?: number
}): JSX.Element => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      layout="responsive"
      quality={quality}
    />
  )
}

export default NextImage
