import * as React from 'react'

import Image from 'next/image'

const NextImage = ({
  src,
  width,
  height,
  alt = 'Omar Alsoudani',
}: {
  src: string
  width: number
  height: number
  alt?: string
}): JSX.Element => <Image alt={alt} src={src} width={width} height={height} />

export default NextImage
