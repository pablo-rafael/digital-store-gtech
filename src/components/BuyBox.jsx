import { StarIcon } from './Icons'
import { formatPrice } from '../utils/format'

export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
  return (
    <div className="buybox">
      <h1>{name}</h1>
      <p className="buybox__ref">{reference}</p>

      <div className="buybox__rating">
        <span className="buybox__stars">{stars} <StarIcon /></span>
        <span className="buybox__reviews">({rating} avaliações)</span>
      </div>

      <p className="buybox__prices">
        {priceDiscount ? (
          <>
            <span className="buybox__price buybox__price--old">{formatPrice(price)}</span>
            <span className="buybox__price">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="buybox__price">{formatPrice(price)}</span>
        )}
      </p>

      <p className="buybox__desc-label">Descrição do produto</p>
      <p className="buybox__desc">{description}</p>

      {children}

      <button type="button" className="buybox__cta">COMPRAR</button>
    </div>
  )
}
