import { useState } from 'react'
import Swal from 'sweetalert2'

function Form() {
  const [formData, setFormData] = useState({ nombre: '', email: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (name, value) => {
    switch (name) {
      case 'nombre':
        if (!value.trim()) return 'El nombre es requerido'
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres'
        return ''
      case 'email':
        if (!value.trim()) return 'El correo es requerido'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'El correo no es válido'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: validate(name, value) }))
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setTouched((previous) => ({ ...previous, [name]: true }))
    setErrors((previous) => ({ ...previous, [name]: validate(name, value) }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)

    const newErrors = Object.fromEntries(
      Object.entries(formData)
        .map(([name, value]) => [name, validate(name, value)])
        .filter(([, error]) => error),
    )
    setErrors(newErrors)
    setTouched({ nombre: true, email: true })

    if (Object.keys(newErrors).length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Revisa tus datos',
        text: 'Completa correctamente los campos marcados para continuar.',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#659414',
      })
      return
    }

    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido a Aula!',
      text: `Gracias, ${formData.nombre}. Tu registro está listo para continuar.`,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#659414',
      timer: 3000,
      timerProgressBar: true,
    })
    setFormData({ nombre: '', email: '' })
    setErrors({})
    setTouched({})
    setSubmitted(false)
  }

  const getInputClass = (name) => {
    const hasError = touched[name] && errors[name]
    const isValid = submitted && !errors[name] && formData[name]
    return `form-input ${hasError ? 'error' : ''} ${isValid ? 'success' : ''}`
  }

  return (
    <section className="form-section">
      <aside className="form-aside">
        <div>
          <p className="eyebrow">Tu aprendizaje comienza aquí</p>
          <h2>Abre la puerta a nuevas ideas.</h2>
          <p>Crea tu cuenta gratis y descubre cursos para llevar tus habilidades al siguiente nivel.</p>
        </div>
        <img
          className="form-aside__image"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85"
          alt="Estudiantes compartiendo una experiencia de aprendizaje"
          loading="lazy"
        />
      </aside>

      <div className="form-content">
        <header className="form-header">
          <p className="eyebrow">Empieza gratis</p>
          <h1>Crea tu cuenta</h1>
          <p className="form-subtitle">Deja tus datos y empieza a aprender a tu ritmo.</p>
        </header>

        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              <svg className="form-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClass('nombre')}
              placeholder="Alex Rivera"
              autoComplete="name"
              aria-invalid={touched.nombre && !!errors.nombre}
              aria-describedby={touched.nombre && errors.nombre ? 'nombre-error' : undefined}
            />
            {touched.nombre && errors.nombre && (
              <span id="nombre-error" className="form-error" role="alert">
                <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {errors.nombre}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <svg className="form-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClass('email')}
              placeholder="alex@ejemplo.com"
              autoComplete="email"
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
            />
            {touched.email && errors.email && (
              <span id="email-error" className="form-error" role="alert">
                <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {errors.email}
              </span>
            )}
          </div>

          <button type="submit" className="button form-submit">
            <svg className="submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Crear mi cuenta
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
