import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// slides
export default function HeroBanner({ slides = [], interval = 6000 }) {
  const [index, setIndex] = useState(0)

  // troca automática de slide
  useEffect(() => {
    if (slides.length < 2) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [slides.length, interval, index])

  const slide = slides[index]
  if (!slide) return null

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__subtitle">{slide.subtitle}</p>
          <h1 className="hero__title">{slide.title}</h1>
          <p className="hero__desc">{slide.text}</p>
          <Link to={slide.link} className="btn-primary">{slide.cta}</Link>
        </div>

        <div className="hero__image">
          <span className="hero__deco" aria-hidden="true" />
          <img src={slide.image} alt={slide.title} />
        </div>
      </div>

      <div className="hero__dots">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            className={i === index ? 'is-active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Ir para o slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
