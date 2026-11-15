import { Link } from 'react-router-dom'
import Section from './Section'
import { categoryIcons } from './Icons'
import { categoryShortcuts } from '../data/content'

export default function CategoryShortcuts() {
  return (
    <Section title="Coleções em destaque" titleAlign="center">
      <nav className="shortcuts">
        {categoryShortcuts.map((item) => {
          const Icon = categoryIcons[item.icon]
          return (
            <Link key={item.label} to={`/products?category=${encodeURIComponent(item.category)}`} className="shortcut">
              <span className="shortcut__circle"><Icon /></span>
              <span className="shortcut__label">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </Section>
  )
}
