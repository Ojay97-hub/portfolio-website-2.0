import { useState, useRef, useEffect } from 'react'

const LazyImage = ({ 
  src, 
  srcSet,
  sizes,
  alt, 
  className = '', 
  width,
  height,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)

  // Generate AVIF and WebP sources from the src path
  const getImageSources = (imagePath) => {
    if (!imagePath) return { avif: '', webp: '', jpeg: '' }
    
    const pathWithoutExtension = imagePath.replace(/\.(webp|jpg|jpeg|png)$/i, '')
    return {
      avif: `${pathWithoutExtension}.avif`,
      webp: `${pathWithoutExtension}.webp`,
      jpeg: `${pathWithoutExtension}.jpg`
    }
  }

  const sources = getImageSources(src)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setError(true)
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 animate-pulse"
          aria-hidden="true"
          width={width}
          height={height}
        />
      )}
      
      {/* Actual image with AVIF, WebP, JPEG fallbacks */}
      {isInView && !error && (
        <picture>
          <source srcSet={sources.avif} type="image/avif" />
          <source srcSet={sources.webp} type="image/webp" />
          <img
            src={sources.jpeg}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            width={width}
            height={height}
          />
        </picture>
      )}

      {/* Error fallback */}
      {error && (
        <img
          src={placeholder}
          alt={alt}
          className="w-full h-full object-cover opacity-60"
          width={width}
          height={height}
        />
      )}
    </div>
  )
}

export default LazyImage
