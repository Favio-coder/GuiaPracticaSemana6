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
    let cancelled = false

    async function loadUsers() {
      setLoading(true)
      setError(null)

      try {
        const data = await fetchUsers()
        if (!cancelled) {
          setUsers(data)
        }
      } catch {
        if (!cancelled) {
          setError('Error al cargar los usuarios. Por favor, intente de nuevo.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadUsers()

    return () => {
      cancelled = true
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
