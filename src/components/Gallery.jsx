import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from './Icons'
import { toCss } from '../utils/format'

export default function Gallery({
  className = '',
  width = 700,
  height = 570,
  radius = '0px',
  showThumbs = false,
  images = [],
}) {
  const [index, setIndex] = useState(0)
  const last = images.length - 1

  return (
    <div className={`gallery ${className}`} style={{ width: '100%', maxWidth: toCss(width) }}>
      <div
        className="gallery__slide"
        style={{ aspectRatio: `${parseFloat(width)} / ${parseFloat(height)}`, borderRadius: radius }}
      >
        <div className="gallery__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <img key={img.src} src={img.src} alt={`Imagem ${i + 1}`} />
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
          aria-label="Imagem anterior"
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          onClick={() => setIndex((i) => i + 1)}
          disabled={index === last}
          aria-label="Próxima imagem"
        >
          <ArrowRightIcon />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={`gallery__thumb ${i === index ? 'gallery__thumb--selected' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => setIndex(i)}
              aria-label={`Ver imagem ${i + 1}`}
            >
              <img src={img.src} alt="" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
