import { useState } from 'react'
import PageLinks from '../components/PageLinks'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true) // simulação: nenhuma mensagem é enviada de verdade
  }

  return (
    <div className="container content-page">
      <h1>Contato</h1>
      <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE · (85) 3051-3411</p>

      {sent ? (
        <p className="contact-thanks">Obrigado, {form.name}! Recebemos a sua mensagem.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            E-mail
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Mensagem
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn-primary">Enviar</button>
        </form>
      )}

      <PageLinks current="/contact" />
    </div>
  )
}
