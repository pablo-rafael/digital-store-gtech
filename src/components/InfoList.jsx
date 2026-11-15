import { Link } from 'react-router-dom'

export default function InfoList({ title, informations = [], className = '' }) {
  return (
    <div className={`info-list ${className}`}>
      <h3>{title}</h3>
      <ul>
        {informations.map((info) => (
          <li key={info.text}>
            {info.link.startsWith('/') ? <Link to={info.link}>{info.text}</Link> : <a href={info.link}>{info.text}</a>}
          </li>
        ))}
      </ul>
    </div>
  )
}
