import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="site-header">
        <Navbar />
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="site-footer">
        2026 Aula+ . Desarrollo de aplicaciones web - IX Semestre - Asturimac Medina Richard Favio
      </footer>
    </div>
  )
}

export default Layout