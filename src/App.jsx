import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Form from './pages/Form'
import NotFound from './pages/NotFound'
import './App.css'

function NavMenu() {
  return (
    <nav className="nav-menu">
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

function App() {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<List />} />
          <Route path="/formulario" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
