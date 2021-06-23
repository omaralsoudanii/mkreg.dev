import * as React from 'react'
import Image from 'next/image'

const NextImage = ({
  src,
  width,
  height,
  alt = 'Omar Alsoudani',
  layout = 'responsive',
  quality = 75,
}: {
  src: string
  width: number
  height: number
  alt?: string
  layout?: 'intrinsic' | 'fixed' | 'responsive'
  quality?: number
}): JSX.Element => (
  <Image
    alt={alt}
    src={src}
    width={width}
    height={height}
    sizes={`(max-width: 640px) 33vw,(max-width: 764px) 500vw, 100vw`}
    layout={layout}
    quality={quality}
  />
)

export default NextImage
