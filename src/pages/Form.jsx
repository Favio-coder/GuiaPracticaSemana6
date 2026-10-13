import { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  })
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
        if (!value.trim()) return 'El email es requerido'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email inválido'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    const newErrors = {}
    let isValid = true

    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key])
      if (error) {
        newErrors[key] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched({ nombre: true, email: true })

    if (isValid) {
      console.log('Formulario enviado:', formData)
      alert(`Formulario enviado correctamente:\nNombre: ${formData.nombre}\nEmail: ${formData.email}`)
      setFormData({ nombre: '', email: '' })
      setErrors({})
      setTouched({})
      setSubmitted(false)
    }
  }

  const getInputClass = (name) => {
    const hasError = touched[name] && errors[name]
    return `form-input ${hasError ? 'error' : ''} ${submitted && !errors[name] && formData[name] ? 'success' : ''}`
  }

  return (
    <section className="form-section">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass('nombre')}
            placeholder="Ingrese su nombre"
            aria-invalid={touched.nombre && !!errors.nombre}
            aria-describedby={touched.nombre && errors.nombre ? 'nombre-error' : undefined}
          />
          {touched.nombre && errors.nombre && (
            <span id="nombre-error" className="form-error" role="alert">
              {errors.nombre}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass('email')}
            placeholder="ingrese@ejemplo.com"
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <span id="email-error" className="form-error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <button type="submit" className="form-submit">
          Enviar
        </button>

        {submitted && Object.keys(errors).length === 0 && (
          <p className="form-success" role="status">
            ¡Formulario enviado correctamente!
          </p>
        )}
      </form>
    </section>
  )
}

export default Form
