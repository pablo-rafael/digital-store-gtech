import { Link } from 'react-router-dom'

// items
export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb" aria-label="Você está em">
      {items.map((item, i) => (
        <span key={item.text}>
          {item.to ? <Link to={item.to}>{item.text}</Link> : item.text}
          {i < items.length - 1 && <span className="breadcrumb__sep"> / </span>}
        </span>
      ))}
    </nav>
  )
}
