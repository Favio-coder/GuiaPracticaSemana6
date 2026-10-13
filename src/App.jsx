import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import List from './pages/List'
import Form from './pages/Form'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<List />} />
        <Route path="/formulario" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
