import Image from 'next/image'

const ImageComposed = ({
  src,
  width,
  height,
  alt,
}: {
  src: string
  width: number
  height: number
  alt: string
}): JSX.Element => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      layout="responsive"
      sizes="(min-width: 65ch) 50vw, 100vw"
    />
  )
}

export default ImageComposed
