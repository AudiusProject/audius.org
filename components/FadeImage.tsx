import { useEffect, useState } from "react"

export const FadeImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const image = new Image()
    image.onload = () => {
      setLoaded(true)
    }
    image.src = src
  }, [])
  return <img className={className} style={{ transition: '1s ease-in-out', opacity: loaded ? 1 : 0 }} src={src} alt={alt} />
}
