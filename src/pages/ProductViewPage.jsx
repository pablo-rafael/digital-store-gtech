import { useParams } from 'react-router-dom'
import Layout from './Layout'
import Gallery from '../components/Gallery'
import BuyBox from '../components/BuyBox'
import ProductOptions from '../components/ProductOptions'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import Breadcrumb from '../components/Breadcrumb'
import { productImages, products } from '../data/products'

export default function ProductViewPage() {
  const { id } = useParams()
  const product = products.find((p) => String(p.id) === id)

  if (!product) {
    return (
      <Layout>
        <div className="container empty"><h2>Produto não encontrado</h2></div>
      </Layout>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const crumbs = [
    { text: 'Home', to: '/' },
    { text: 'Produtos', to: '/products' },
    { text: product.category, to: `/products?category=${encodeURIComponent(product.category)}` },
    { text: product.brand },
    { text: product.name },
  ]

  return (
    <Layout>
      <div className="container">
        <Breadcrumb items={crumbs} />

        <div className="product-view">
          <Gallery width={700} height={570} radius="4px" showThumbs images={productImages} />

          <BuyBox
            name={product.name}
            reference={`${product.category} | ${product.brand} | REF:3841${product.id}711`}
            stars={4.7}
            rating={90}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          >
            <p className="buybox__label">Tamanho</p>
            <ProductOptions options={['39', '40', '41', '42', '43']} shape="square" radius="4px" type="text" />
            <p className="buybox__label">Cor</p>
            <ProductOptions options={['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']} shape="circle" type="color" />
          </BuyBox>
        </div>

        <Section title="Produtos Relacionados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={related} className="product-listing--related" />
        </Section>
      </div>
    </Layout>
  )
}
