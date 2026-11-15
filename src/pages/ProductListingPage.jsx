import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Layout from './Layout'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import FilterGroup from '../components/FilterGroup'
import { CloseIcon, FilterIcon } from '../components/Icons'
import { products } from '../data/products'

const unique = (key) => [...new Set(products.map((p) => p[key]))].map((v) => ({ text: v, value: v }))
const finalPrice = (p) => p.priceDiscount ?? p.price

export default function ProductListingPage() {
  const [params] = useSearchParams()
  const term = (params.get('filter') ?? '').trim()
  const categoryParam = params.get('category')

  const [sort, setSort] = useState('relevant')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    brand: [],
    category: categoryParam ? [categoryParam] : [],
    gender: [],
    state: [],
  })

  // atalhos da Home / rodapé
  useEffect(() => {
    setFilters((f) => ({ ...f, category: categoryParam ? [categoryParam] : [] }))
  }, [categoryParam])

  // filtros aberto (mobile)
  useEffect(() => {
    document.body.style.overflow = filtersOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [filtersOpen])

  const toggle = (group) => (value) =>
    setFilters((f) => ({
      ...f,
      [group]: f[group].includes(value) ? f[group].filter((v) => v !== value) : [...f[group], value],
    }))

  const choose = (group) => (value) => setFilters((f) => ({ ...f, [group]: [value] }))

  const result = useMemo(() => {
    const text = term.toLowerCase()
    const list = products.filter(
      (p) =>
        (!text || p.name.toLowerCase().includes(text)) &&
        Object.entries(filters).every(([key, values]) => values.length === 0 || values.includes(p[key]))
    )
    if (sort === 'menor') list.sort((a, b) => finalPrice(a) - finalPrice(b))
    if (sort === 'maior') list.sort((a, b) => finalPrice(b) - finalPrice(a))
    return list
  }, [term, filters, sort])

  const count = `${result.length} ${result.length === 1 ? 'produto' : 'produtos'}`
  const title = term ? `Resultados para “${term}” - ${count}` : `${count} encontrados`

  return (
    <Layout>
      <div className="container listing-page">
        {/* Filtros*/}
        <aside className={`filters ${filtersOpen ? 'filters--open' : ''}`}>
          <div className="filters__head">
            <h3>Filtrar por</h3>
            <button type="button" className="icon-btn filters__close" onClick={() => setFiltersOpen(false)} aria-label="Fechar filtros">
              <CloseIcon />
            </button>
          </div>
          <hr />
          <FilterGroup title="Marca" inputType="checkbox" options={unique('brand')} selected={filters.brand} onChange={toggle('brand')} />
          <FilterGroup title="Categoria" inputType="checkbox" options={unique('category')} selected={filters.category} onChange={toggle('category')} />
          <FilterGroup title="Gênero" inputType="checkbox" options={unique('gender')} selected={filters.gender} onChange={toggle('gender')} />
          <FilterGroup title="Estado" inputType="radio" options={unique('state')} selected={filters.state} onChange={choose('state')} />
        </aside>
        {filtersOpen && <div className="overlay overlay--visible" onClick={() => setFiltersOpen(false)} />}

        <div className="listing-page__main">
          <div className="toolbar">
            <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Ordenar por">
              <option value="relevant">Ordenar por: mais relevantes</option>
              <option value="menor">Ordenar por: menor preço</option>
              <option value="maior">Ordenar por: maior preço</option>
            </select>
            <button type="button" className="filter-btn" onClick={() => setFiltersOpen(true)} aria-label="Abrir filtros">
              <FilterIcon />
            </button>
          </div>

          <Section title={title} titleAlign="left">
            {result.length ? <ProductListing products={result} /> : <p className="empty">Nenhum produto encontrado.</p>}
          </Section>
        </div>
      </div>
    </Layout>
  )
}
