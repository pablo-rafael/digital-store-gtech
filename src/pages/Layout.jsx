import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../pages.css'

// Layout compartilhado por todas as rotas.
// <Outlet /> é o lugar onde a página da rota atual é renderizada.
export default function Layout() {
  const { pathname } = useLocation()

  // volta ao topo a cada troca de página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={`layout ${pathname === '/' ? 'layout--flush' : ''}`}>
      <Header />
      <main>
        <Suspense fallback={<p className="page-loading">Carregando...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
