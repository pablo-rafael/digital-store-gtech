# Digital Store (Drip Store) – Projeto Front-end

Aplicação em React com múltiplas páginas, React Router, layout compartilhado e lazy loading.

**Deploy:** https://digital-store-gtech.vercel.app

## Tecnologias
React, Vite, React Router DOM, CSS puro.

## Como rodar
```bash
npm install
npm run dev
```
Acesse http://localhost:5173

## Rotas
| Rota | Página |
|---|---|
| `/` | Home |
| `/products` | Listagem (aceita `?filter=termo` e `?category=nome`; `/produtos` redireciona para cá) |
| `/product/:id` | Visualização do produto (parâmetro de URL) |
| `/about` | Sobre |
| `/contact` | Contato (formulário simulado) |
| `/categories`, `/orders`, `/security`, `/wishlist`, `/blog`, `/jobs`, `/login`, `/signup` | Páginas "em construção" |
| `*` | Página 404 (rota inválida) |

## Conceitos de React Router aplicados
- **Router** configurado no `main.jsx` (`BrowserRouter`) e rotas definidas no `App.jsx` (`Routes` e `Route`).
- **Navegação** com `Link` e `NavLink` (Header, Footer, cards de produto).
- **Layout compartilhado**: `pages/Layout.jsx` é uma rota de layout; Header e Footer aparecem em todas as páginas e o conteúdo é renderizado no `<Outlet />`.
- **Lazy loading**: páginas carregadas com `React.lazy` e `Suspense` (fallback "Carregando..."), dentro do Layout.
- **Parâmetro de URL**: `/product/:id` lê o id com `useParams` e mostra o produto correspondente.
- **Rota inválida**: `path="*"` exibe `NotFoundPage` (404).
- **Query string**: busca e filtros usam `useSearchParams`.
- `vercel.json` faz o deploy aceitar abrir ou recarregar qualquer rota diretamente.

## Estrutura
```
src/
├── components/  (Header, Footer, Logo, SearchBar, Section, ProductCard, ProductListing,
│                 Gallery, FilterGroup, ProductOptions, BuyBox, InfoList, HeroBanner,
│                 CollectionCard, CategoryShortcuts, SpecialOffer, Breadcrumb, PageLinks)
├── pages/       (Layout, HomePage, ProductListingPage, ProductViewPage,
│                 AboutPage, ContactPage, SoonPage, NotFoundPage)
├── data/        (dados mockados)
└── utils/
```
