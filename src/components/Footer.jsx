import Logo from './Logo'
import InfoList from './InfoList'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'

const columns = [
  {
    title: 'Informação',
    informations: [
      { text: 'Sobre Drip Store', link: '/about' },
      { text: 'Segurança', link: '/security' },
      { text: 'Wishlist', link: '/wishlist' },
      { text: 'Blog', link: '/blog' },
      { text: 'Trabalhe conosco', link: '/jobs' },
      { text: 'Meus Pedidos', link: '/orders' },
    ],
  },
  {
    title: 'Categorias',
    informations: [
      { text: 'Camisetas', link: '/products?category=Camisetas' },
      { text: 'Calças', link: '/products?category=Cal%C3%A7as' },
      { text: 'Bonés', link: '/products?category=Acess%C3%B3rios' },
      { text: 'Headphones', link: '/products?category=Headphones' },
      { text: 'Tênis', link: '/products?category=T%C3%AAnis' },
    ],
  },
  {
    title: 'Contato',
    className: 'info-list--contact',
    informations: [
      { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: '/contact' },
      { text: '(85) 3051-3411', link: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo white />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
            <div className="footer__social">
              <a href="https://facebook.com" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://instagram.com" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://x.com" aria-label="Twitter"><TwitterIcon /></a>
            </div>
          </div>
          {columns.map((c) => <InfoList key={c.title} {...c} />)}
        </div>
        <hr />
        <p className="footer__copy">© {new Date().getFullYear()} Digital College</p>
      </div>
    </footer>
  )
}
