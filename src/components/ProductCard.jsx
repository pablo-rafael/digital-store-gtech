import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/format'

export default function ProductCard({ id, image, name, category, price, priceDiscount }) {
  const discount = priceDiscount ? Math.round((1 - priceDiscount / price) * 100) : 0

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card__media">
        <img src={image} alt={name} />
        {discount > 0 && <span className="badge product-card__badge">{discount}% OFF</span>}
      </div>
      <p className="product-card__category">{category}</p>
      <h3>{name}</h3>
      <p className="product-card__prices">
        {priceDiscount ? (
          <>
            <span className="price price--old">{formatPrice(price)}</span>
            <span className="price">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="price">{formatPrice(price)}</span>
        )}
      </p>
    </Link>
  )
}
