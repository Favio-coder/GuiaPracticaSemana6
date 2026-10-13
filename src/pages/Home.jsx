import { Link } from 'react-router-dom'

const courses = [
  {
    category: 'Desarrollo web',
    title: 'Fundamentos de desarrollo web',
    description: 'Construye tus primeras experiencias para internet desde cero.',
    duration: '18 horas',
    level: 'Principiante',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
    alt: 'Equipo aprendiendo y colaborando frente a una laptop',
  },
  {
    category: 'Programacion',
    title: 'JavaScript: de cero a proyectos',
    description: 'Aprende a programar creando proyectos que sí puedes mostrar.',
    duration: '24 horas',
    level: 'Todos los niveles',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=85',
    alt: 'Código de programación en una pantalla',
  },
  {
    category: 'Diseno UX/UI',
    title: 'Disena productos digitales',
    description: 'Transforma ideas en interfaces simples y centradas en personas.',
    duration: '12 horas',
    level: 'Principiante',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85',
    alt: 'Herramientas y bocetos para crear una interfaz digital',
  },
]

function Home() {
  return (
    <div className="home-page">
      {/* IA: una portada plana no comunicaba una plataforma de cursos → Solución manual: se creó una jerarquía con hero, catálogo visual y beneficios usando CSS tradicional. */}
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Aprende algo nuevo hoy</p>
          <h1>Tu siguiente oportunidad <span>empieza aquí.</span></h1>
          <p className="hero__description">
            Cursos practicos para desarrollar habilidades digitales y llevar tus ideas mas lejos.
            Aprende a tu ritmo, con una comunidad que te impulsa.
          </p>
          <Link className="button" to="/list">Explorar la comunidad <span aria-hidden="true">→</span></Link>
        </div>
        <div className="hero__visual">
          <img
            className="hero__image"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
            alt="Estudiantes colaborando en un espacio de aprendizaje"
          />
          <div className="hero__badge"><strong>100%</strong> aprende a tu ritmo</div>
        </div>
      </section>

      <section className="course-section" aria-labelledby="courses-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Aprendizaje para tu futuro</p>
            <h2 id="courses-title" className="section-heading__title">Cursos para empezar</h2>
            <p className="section-heading__text">Contenido practico para aprender haciendo.</p>
          </div>
          <Link className="text-link" to="/formulario">Unirme gratis <span aria-hidden="true">→</span></Link>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <img className="course-card__image" src={course.image} alt={course.alt} loading="lazy" />
              <div className="course-card__body">
                <span className="course-card__category">{course.category}</span>
                <h3>{course.title}</h3>
                <p className="course-card__description">{course.description}</p>
                <div className="course-card__meta">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="benefit-strip" aria-label="Beneficios de aprender en Aula">
        <div className="benefit">
          <span className="benefit__icon" aria-hidden="true">✦</span>
          <div><strong>Aprende haciendo</strong><span>Proyectos para practicar desde el dia uno.</span></div>
        </div>
        <div className="benefit">
          <span className="benefit__icon" aria-hidden="true">◷</span>
          <div><strong>A tu propio ritmo</strong><span>Avanza cuando y donde quieras.</span></div>
        </div>
        <div className="benefit">
          <span className="benefit__icon" aria-hidden="true">♡</span>
          <div><strong>Crece en comunidad</strong><span>Conoce a otros estudiantes como tu.</span></div>
        </div>
      </section>
    </div>
  )
}

export default Home
