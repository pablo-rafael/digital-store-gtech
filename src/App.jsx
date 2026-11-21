import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'

// Lazy loading: cada página só é baixada quando o usuário acessa a rota.
// O <Suspense> fica dentro do Layout, então Header e Footer não somem durante o carregamento.
const HomePage = lazy(() => import('./pages/HomePage'))
const ProductListingPage = lazy(() => import('./pages/ProductListingPage'))
const ProductViewPage = lazy(() => import('./pages/ProductViewPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const SoonPage = lazy(() => import('./pages/SoonPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <Routes>
      {/* Rota de layout: Header + Footer compartilhados; as páginas aparecem no <Outlet /> */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListingPage />} />
        <Route path="produtos" element={<Navigate to="/products" replace />} />
        <Route path="product/:id" element={<ProductViewPage />} /> {/* parâmetro de URL */}
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Páginas ainda sem conteúdo (links do menu, rodapé e cabeçalho) */}
        <Route path="categories" element={<SoonPage title="Categorias" />} />
        <Route path="orders" element={<SoonPage title="Meus Pedidos" />} />
        <Route path="security" element={<SoonPage title="Segurança" />} />
        <Route path="wishlist" element={<SoonPage title="Wishlist" />} />
        <Route path="blog" element={<SoonPage title="Blog" />} />
        <Route path="jobs" element={<SoonPage title="Trabalhe conosco" />} />
        <Route path="login" element={<SoonPage title="Entrar" />} />
        <Route path="signup" element={<SoonPage title="Cadastre-se" />} />

        {/* Rota inválida: página 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
