import HeroBanner from '../components/HeroBanner'
import Section from '../components/Section'
import CollectionCard from '../components/CollectionCard'
import CategoryShortcuts from '../components/CategoryShortcuts'
import ProductListing from '../components/ProductListing'
import SpecialOffer from '../components/SpecialOffer'
import { collections, homeSlides, products } from '../data/products'
import { collectionTexts, heroTexts, specialOffer } from '../data/content'

// junta as imagens do banner (products.js) com os textos (content.js)
const slides = homeSlides.map((slide, i) => ({ ...heroTexts[i % heroTexts.length], image: slide.src }))

export default function HomePage() {
  return (
    <>
      <HeroBanner slides={slides} />

      <div className="container">
        <Section title="Coleções em destaque" titleAlign="left">
          <div className="collections">
            {collections.map((c, i) => (
              <CollectionCard key={c.src} image={c.src} alt={c.alt} {...collectionTexts[i % collectionTexts.length]} />
            ))}
          </div>
        </Section>

        <CategoryShortcuts />

        <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>

      <SpecialOffer {...specialOffer} />
    </>
  )
}
