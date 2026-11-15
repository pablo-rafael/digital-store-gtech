import ProductCard from './ProductCard'

export default function ProductListing({ products = [], className = '' }) {
  return (
    <div className={`product-listing ${className}`}>
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  )
}
