function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert">
      <p className="error-message__text">{message}</p>
      {onRetry && (
        <button className="error-message__retry" onClick={onRetry} type="button">
          Reintentar
        </button>
      )}
    </div>
  )
}

export default ErrorMessage