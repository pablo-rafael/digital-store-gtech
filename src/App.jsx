import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage'
import SoonPage from './pages/SoonPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/produtos" element={<Navigate to="/products" replace />} />
      <Route path="/product/:id" element={<ProductViewPage />} />
      <Route path="/categories" element={<SoonPage title="Categorias" />} />
      <Route path="/orders" element={<SoonPage title="Meus Pedidos" />} />
      <Route path="*" element={<SoonPage title="Página não encontrada" />} />
    </Routes>
  )
}
