import * as React from 'react'
import Image from 'next/image'

const NextImage = ({
  src,
  width,
  height,
  alt = 'Omar Alsoudani',
  className,
  layout = 'responsive',
  quality = 75,
}: {
  src: string
  width: number
  height: number
  alt?: string
  layout?: 'intrinsic' | 'fixed' | 'responsive'
  quality?: number
  className?: string
}): JSX.Element => {
  return className ? (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      layout={layout}
      quality={quality}
      sizes={`(max-width: 640px) 66vw,(max-width: 1200px) 50vw, 100vw`}
      className={className}
    />
  ) : (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      layout={layout}
      sizes={`(max-width: 640px) 66vw,(max-width: 1200px) 50vw, 100vw`}
      quality={quality}
    />
  )
}

export default NextImage
