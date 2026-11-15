import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { CartIcon, MenuIcon, SearchIcon } from './Icons'

const navLinks = [
  { text: 'Home', to: '/' },
  { text: 'Produtos', to: '/products' },
  { text: 'Categorias', to: '/categories' },
  { text: 'Meus Pedidos', to: '/orders' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  // trava de rolagem para o menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="header">
      <div className="container header__top">
        <button type="button" className="icon-btn header__menu-btn" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
          <MenuIcon />
        </button>

        <Link to="/" className="header__logo" aria-label="Página inicial"><Logo /></Link>

        <SearchBar className="search--desktop" />

        <div className="header__actions">
          <Link to="/signup" className="link-signup">Cadastre-se</Link>
          <Link to="/login" className="btn-login">Entrar</Link>
          <button
            type="button"
            className="icon-btn header__search-btn"
            onClick={() => setSearchOpen((open) => !open)}
            aria-label="Pesquisar"
            aria-expanded={searchOpen}
          >
            <SearchIcon />
          </button>
          <span className="icon-btn"><CartIcon /></span>
        </div>
      </div>

      {searchOpen && (
        <div className="container search-mobile"><SearchBar /></div>
      )}

      <nav className="container nav">
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'}>{l.text}</NavLink>
        ))}
      </nav>

      {/* Menu retrátil (mobile) */}
      <div className={`overlay ${menuOpen ? 'overlay--visible' : ''}`} onClick={closeMenu} />
      <aside className={`drawer ${menuOpen ? 'drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <h2 className="drawer__title">Páginas</h2>
        <nav className="drawer__nav">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={closeMenu}>{l.text}</NavLink>
          ))}
        </nav>
        <div className="drawer__footer">
          <Link to="/login" className="btn-login btn-login--block" onClick={closeMenu}>Entrar</Link>
          <Link to="/signup" className="link-signup" onClick={closeMenu}>Cadastre-se</Link>
        </div>
      </aside>
    </header>
  )
}
