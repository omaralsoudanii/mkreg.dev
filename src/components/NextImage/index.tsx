import Image from 'next/image'

const NextImage = ({
  src,
  width,
  height,
  alt = 'Omar Alsoudani',
  layout = 'intrinsic',
}: {
  src: any
  width: number
  height: number
  alt?: string
  layout?: 'responsive' | 'fill' | 'fixed' | 'intrinsic'
}): JSX.Element => <Image layout={layout} alt={alt} src={src} width={width} height={height} />

export default NextImage
