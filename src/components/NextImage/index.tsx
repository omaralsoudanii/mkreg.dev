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
      sizes={`(min-width: 65ch) 50vw, 100vw`}
      quality={quality}
      className="!pb-8"
    />
  )
}

export default NextImage
