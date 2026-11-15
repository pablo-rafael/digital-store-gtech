import { Link } from 'react-router-dom'
import { ArrowLongIcon } from './Icons'

export default function Section({ title, titleAlign = 'left', link, children }) {
  const content = link && (
    <>
      {link.text}
      <ArrowLongIcon />
    </>
  )

  return (
    <section className="section">
      <div className={`section__header section__header--${titleAlign}`}>
        <h2>{title}</h2>
        {link && (
          link.href.startsWith('/')
            ? <Link className="section__link" to={link.href}>{content}</Link>
            : <a className="section__link" href={link.href}>{content}</a>
        )}
      </div>
      {children}
    </section>
  )
}
