import { useEffect, useState } from 'react'

export const FadeImage = ({
  src,
  alt,
  containerClassName,
  className
}: {
  src: string
  alt: string
  className?: string
  containerClassName?: string
}) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const image = new Image()
    image.onload = () => {
      setLoaded(true)
    }
    image.src = src
  }, [src])
  return (
    <div
      className={containerClassName}
      style={{ transition: '1s ease-in-out', opacity: loaded ? 1 : 0 }}
    >
      <img className={className} src={src} alt={alt} />
    </div>
  )
}
