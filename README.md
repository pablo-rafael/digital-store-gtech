# Digital Store (Drip Store) – Projeto Front-end

Aplicação em React com 3 páginas: Home, Listagem de Produtos e Visualização do Produto.
Deploy (Vercel): https://digital-store-gtech.vercel.app/

## Tecnologias
React, Vite, React Router DOM, CSS puro.

## Como rodar
```bash
npm install
npm run dev
```
Acesse http://localhost:5173

## Rotas
- `/` – Home
- `/products` – Listagem (aceita `?filter=termo`; `/produtos` redireciona para cá)
- `/product/:id` – Visualização do produto

## Funcionalidades
- Busca no cabeçalho (Enter ou clique na lupa) redireciona para `/products?filter=...`
- Galeria de imagens com setas e miniaturas
- Ordenação por preço e filtros (marca, categoria, gênero, estado) funcionando
- Seleção de tamanho e cor na página do produto

## Estrutura
```
src/
├── components/  (Header, Footer, Logo, Section, ProductCard, ProductListing,
│                 Gallery, FilterGroup, ProductOptions, BuyBox, InfoList)
├── pages/       (Layout, HomePage, ProductListingPage, ProductViewPage)
├── data/        (dados mockados)
└── utils/
```
