import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand" end aria-label="Aula, inicio">
        <span className="brand-mark" aria-hidden="true">a.</span>
        <span>aula<span>+</span></span>
      </NavLink>
      <div className="navbar__links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) => `nav-link ${isActive || pathname === '/usuarios' ? 'active' : ''}`}
        >
          Comunidad
        </NavLink>
        <NavLink
          to="/formulario"
          className={({ isActive }) => `nav-link nav-link--cta ${isActive ? 'active' : ''}`}
        >
          Crear cuenta
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar