import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

export default Layout