import { Link } from 'react-router-dom'

export default function CollectionCard({ title, discount, image, alt, to = '/products' }) {
  return (
    <div className="collection-card">
      <div className="collection-card__text">
        <span className="badge">{discount}</span>
        <h3>{title}</h3>
        <Link to={to} className="btn-white">Comprar</Link>
      </div>
      <img src={image} alt={alt || title} />
    </div>
  )
}
