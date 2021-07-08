import Image from 'next/image'

const NextImage = ({
  src,
  width,
  height,
  alt = 'Omar Alsoudani',
  layout = 'responsive',
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
