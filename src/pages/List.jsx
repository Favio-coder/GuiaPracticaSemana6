import { useState, useEffect } from 'react'
import { fetchUsers } from '../services/userService'
import UserCard from '../components/UserCard'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

function List() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    async function loadUsers() {
      setLoading(true)
      setError(null)

      try {
        const data = await fetchUsers(signal)
        setUsers(data)
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Petición cancelada por desmontaje del componente')
          return
        }
        setError('Error al cargar los usuarios. Por favor, intente de nuevo.')
      } finally {
        setLoading(false)
      }
    }

    loadUsers()

    return () => {
      controller.abort()
    }
  }, [])

  if (loading) {
    return <Loading message="Cargando usuarios..." />
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
      />
    )
  }

  return (
    <section>
      <h1>Usuarios</h1>
      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  )
}

export default List
