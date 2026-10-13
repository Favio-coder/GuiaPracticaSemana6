function Loading({ message = 'Cargando...' }) {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loading__spinner"></div>
      <p className="loading__message">{message}</p>
    </div>
  )
}

export default Loading