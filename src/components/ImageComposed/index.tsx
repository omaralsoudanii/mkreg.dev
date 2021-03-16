import { useEffect, useRef, useState } from 'react'

const Image = ({
  src,
  width,
  height,
  extraStyles,
  alt,
  fixed,
}: {
  src: string
  width: number
  height: number
  extraStyles?: string
  alt: string
  fixed?: boolean
}): JSX.Element => {
  const urlResolver = (src: string, width = 640, q = 75) =>
    `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${q}`

  const imageSizes = (fixed
    ? [16, 32, 48, 64, 96, 128, 256, 384]
    : [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  ).filter((a) => a <= width)

  const [loaded, setLoaded] = useState(false)

  const imgRef = useRef<HTMLImageElement>()

  useEffect(() => {
    if (imgRef && imgRef.current) {
      if (imgRef.current.complete) {
        setLoaded(true)
      }
    }
  }, [])

  return (
    <div
      style={{
        display: 'relative',
        contentVisibility: 'auto',
      }}
    >
      <img
        alt={alt}
        src={urlResolver(src, imageSizes[imageSizes.length - 1])}
        width={width}
        height={height}
        srcSet={imageSizes
          .map((size) => {
            return `${urlResolver(src, size)} ${size}w`
          })
          .join(', ')}
        sizes={
          fixed
            ? `${width}px`
            : '(min-width: 1024px) 50vw, (min-width: 768px) 66.666667vw, 83.333333vw'
        }
        loading="lazy"
        decoding="async"
        className={`z-10 transition-opacity ${
          loaded ? 'opacity-100' : 'opacity-0'
        }${extraStyles ? ` ${extraStyles}` : ''}`}
        onLoad={() => {
          setLoaded(true)
        }}
        ref={imgRef}
      />
    </div>
  )
}

export default Image
