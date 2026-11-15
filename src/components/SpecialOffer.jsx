import { Link } from 'react-router-dom'

export default function SpecialOffer({ image, subtitle, title, text, cta, link }) {
  return (
    <section className="offer">
      <div className="container offer__inner">
        <div className="offer__image">
          <img src={image} alt={title} />
        </div>
        <div className="offer__text">
          <p className="offer__subtitle">{subtitle}</p>
          <h2>{title}</h2>
          <p>{text}</p>
          <Link to={link} className="btn-primary">{cta}</Link>
        </div>
      </div>
    </section>
  )
}
