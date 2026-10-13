import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">Ups, nos perdimos</p>
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link className="button" to="/">Volver al inicio</Link>
    </section>
  )
}

export default NotFound
