import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { SearchIcon } from './Icons'

export default function SearchBar({ className = '' }) {
  const [params] = useSearchParams()
  const [term, setTerm] = useState(params.get('filter') ?? '')
  const navigate = useNavigate()

  const search = () => navigate(`/products?filter=${encodeURIComponent(term.trim())}`)

  return (
    <div className={`search ${className}`}>
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && search()}
      />
      <button type="button" onClick={search} aria-label="Buscar"><SearchIcon /></button>
    </div>
  )
}
