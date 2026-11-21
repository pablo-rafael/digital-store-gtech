import { Link } from 'react-router-dom'

const pages = [
  { to: '/', text: 'Home' },
  { to: '/products', text: 'Produtos' },
  { to: '/about', text: 'Sobre' },
  { to: '/contact', text: 'Contato' },
]

// Links para as outras páginas (a página atual não aparece na lista)
export default function PageLinks({ current }) {
  return (
    <nav className="page-links" aria-label="Outras páginas">
      {pages.filter((p) => p.to !== current).map((p) => (
        <Link key={p.to} to={p.to}>{p.text}</Link>
      ))}
    </nav>
  )
}
