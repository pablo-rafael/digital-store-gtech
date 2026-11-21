import PageLinks from '../components/PageLinks'

export default function AboutPage() {
  return (
    <div className="container content-page">
      <h1>Sobre a Digital Store</h1>
      <p>
        A Digital Store é uma loja virtual de tênis, roupas e acessórios esportivos criada como
        projeto do curso Full Stack da Digital College.
      </p>
      <p>
        Nosso objetivo é oferecer uma experiência de compra simples: encontrar o produto,
        conferir os detalhes e escolher tamanho e cor em poucos cliques.
      </p>
      <PageLinks current="/about" />
    </div>
  )
}
