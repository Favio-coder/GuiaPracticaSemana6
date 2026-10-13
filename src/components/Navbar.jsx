import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Inicio
      </NavLink>
      <NavLink
        to="/usuarios"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Usuarios
      </NavLink>
      <NavLink
        to="/formulario"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Formulario
      </NavLink>
    </nav>
  )
}

export default Navbar