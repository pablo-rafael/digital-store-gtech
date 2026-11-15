const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const SearchIcon = ({ color = '#B5B5B5' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
)

export const CartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Carrinho">
    <circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
    <path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H6" />
  </svg>
)

export const MenuIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

export const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#474747" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
  </svg>
)

export const FilterIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4h18l-7 8.5V20l-4-2v-5.5L3 4z" />
  </svg>
)

export const ArrowLeftIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 4 7 12 15 20" />
  </svg>
)

export const ArrowRightIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 4 17 12 9 20" />
  </svg>
)

export const ArrowLongIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
)

export const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
    <polygon points="12 2 15 9 22 9.5 16.5 14.5 18.3 22 12 18 5.7 22 7.5 14.5 2 9.5 9 9" />
  </svg>
)

// ----- Redes sociais (rodapé) -----
export const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" aria-label="Facebook">
    <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.8v8h3.2z" />
  </svg>
)

export const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-label="Instagram">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="#fff" stroke="none" />
  </svg>
)

export const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" aria-label="Twitter">
    <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.8-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.9-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
  </svg>
)

// ----- Ícones das categorias (Home) -----
export const ShirtIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...stroke} aria-hidden="true">
    <path d="M14 6 6 10l3 6 3-2v20h16V14l3 2 3-6-8-4c-1 3-11 3-12 0z" />
  </svg>
)

export const PantsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...stroke} aria-hidden="true">
    <path d="M12 5h16l2 30h-8l-2-19-2 19h-8z" />
    <path d="M12 9h16" />
  </svg>
)

export const CapIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...stroke} aria-hidden="true">
    <path d="M8 24c0-9 6-14 13-14s11 6 11 14" />
    <path d="M6 24h28q4 0 2 4H10z" />
    <path d="M21 10v14" />
  </svg>
)

export const HeadphonesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...stroke} aria-hidden="true">
    <path d="M8 26v-5c0-8 5-13 12-13s12 5 12 13v5" />
    <rect x="6" y="22" width="7" height="12" rx="3" />
    <rect x="27" y="22" width="7" height="12" rx="3" />
  </svg>
)

export const SneakerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...stroke} aria-hidden="true">
    <path d="M5 27v-8l7-2 4 4 6-2 12 5c3 1 3 6-1 6H7c-2 0-2-2-2-3z" />
    <path d="M5 27h31" />
  </svg>
)

export const categoryIcons = {
  shirt: ShirtIcon,
  pants: PantsIcon,
  cap: CapIcon,
  headphones: HeadphonesIcon,
  sneaker: SneakerIcon,
}
