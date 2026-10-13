import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import UserCard from '../components/UserCard'
import { fetchUsers } from '../services/userService'

function List() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    let retrying = false

    async function loadUsers() {
      try {
        const data = await fetchUsers(controller.signal)
        setUsers(data)
      } catch (err) {
        if (controller.signal.aborted || err.name === 'AbortError') {
          return
        }

        setError(err.message || 'No se pudieron cargar los usuarios.')
        const result = await Swal.fire({
          icon: 'error',
          title: 'No pudimos cargar la comunidad',
          text: 'Revisa tu conexión e intenta nuevamente.',
          confirmButtonText: 'Reintentar',
          confirmButtonColor: '#659414',
          showCancelButton: true,
          cancelButtonText: 'Ahora no',
        })

        if (result.isConfirmed && !controller.signal.aborted) {
          retrying = true
          setLoading(true)
          setError(null)
          setRetryCount((count) => count + 1)
        }
      } finally {
        if (!controller.signal.aborted && !retrying) {
          setLoading(false)
        }
      }
    }

    loadUsers()
    return () => controller.abort()
  }, [retryCount])

  if (loading) {
    return <Loading message="Preparando la comunidad..." />
  }

  return (
    <section className="users-section">
      <header className="section-header">
        <div>
          <p className="eyebrow">Aprendemos mejor juntos</p>
          <h1>Comunidad</h1>
          <p className="section-subtitle">
            Conoce a {users.length} estudiante{users.length !== 1 ? 's' : ''} de nuestra comunidad.
          </p>
        </div>
      </header>
      {error && (
        <ErrorMessage
          message="No se pudo cargar la comunidad. Comprueba tu conexión e inténtalo de nuevo."
          onRetry={() => {
            setLoading(true)
            setError(null)
            setRetryCount((count) => count + 1)
          }}
        />
      )}
      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {users.length === 0 && !error && (
        <div className="empty-state">
          <p>No hay estudiantes para mostrar todavía.</p>
        </div>
      )}
    </section>
  )
}

export default List
