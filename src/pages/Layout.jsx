import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children, flush = false }) {
  return (
    <div className={`layout ${flush ? 'layout--flush' : ''}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
