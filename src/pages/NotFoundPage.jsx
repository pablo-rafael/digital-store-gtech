import { Link, useLocation } from 'react-router-dom'

// Exibida pela rota path="*" (qualquer endereço que não existe)
export default function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <div className="container not-found">
      <p className="not-found__code">404</p>
      <h1>Página não encontrada</h1>
      <p>O endereço <code>{pathname}</code> não existe.</p>
      <div className="not-found__links">
        <Link to="/" className="btn-primary">Voltar para a Home</Link>
        <Link to="/products" className="not-found__link">Ver produtos</Link>
      </div>
    </div>
  )
}
