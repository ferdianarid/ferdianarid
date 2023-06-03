import Image from "next/image"
import React, { useRef, useState, useEffect } from "react"

interface LazyImageInterfaces {
  src: string
  placeholderImage: string
  classNames?: string
  alt?: string | any
  onClick?: any
}

const LazyImage: React.FC<LazyImageInterfaces> = ({ src, placeholderImage, classNames, alt, onClick }) => {
  const rootRef = useRef<HTMLElement | any>()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const defaultIntersectionOptions = {
      threshold: 0,
      rootMargin: "0px",
    }

    const checkIntersections = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }

    if (!isVisible) {
      const newIO = new IntersectionObserver(checkIntersections, defaultIntersectionOptions)
      newIO.observe(rootRef.current)
      return () => newIO.disconnect()
    }
  }, [isVisible])

  return (
    <Image onClick={onClick} src={isVisible ? src : placeholderImage} layout="fill" ref={rootRef} className={classNames} alt={alt} />
  )
}

export default LazyImage