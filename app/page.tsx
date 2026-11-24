const services = [
  {
    number: "01",
    title: "Fisioterapia",
    description: "Atención personalizada para cuidar tu cuerpo y mejorar tu bienestar.",
  },
  {
    number: "02",
    title: "Terapia manual",
    description: "Tratamientos adaptados a tus necesidades y objetivos.",
  },
  {
    number: "03",
    title: "Rehabilitación",
    description: "Acompañamiento en tu proceso de recuperación funcional.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#" className="brand">
          cristina<span>fisio.</span>
        </a>

        <nav className="navigation">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="header-button">
          Pide tu cita
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <span className="eyebrow">FISIOTERAPIA · SALUD · BIENESTAR</span>

          <h1>
            Escucha tu cuerpo.
            <br />
            <span>Cuida de ti.</span>
          </h1>

          <p>
            Un espacio para cuidar tu salud, recuperar tu movimiento
            y sentirte mejor. Atención cercana y personalizada.
          </p>

          <a href="#contacto" className="primary-button">
            Quiero pedir una cita <span>→</span>
          </a>

          <div className="hero-note">
            <span className="note-dot" />
            Tu bienestar, mi prioridad
          </div>
        </div>

        <div className="hero-decoration">
          <div className="hero-circle">
            <span>Tu espacio de</span>
            <strong>bienestar</strong>
            <span>y movimiento</span>
          </div>
          <span className="hero-leaf">✳</span>
        </div>
      </section>

      <section className="intro section" id="sobre-mi">
        <span className="eyebrow">UN TRATO CERCANO</span>
        <h2>
          Cada persona es única.
          <br />
          <span>Tu cuidado también debería serlo.</span>
        </h2>
        <p>
          Soy Cristina y quiero acompañarte en el cuidado de tu salud
          a través de una atención individualizada, cercana y adaptada
          a tus necesidades.
        </p>
        <span className="signature">Cristina</span>
      </section>

      <section className="services section" id="servicios">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CÓMO PUEDO AYUDARTE</span>
            <h2>Mis servicios</h2>
          </div>
          <p>
            Cada tratamiento se adaptará a tus necesidades.
            Próximamente encontrarás aquí todos los servicios.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon">✳</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
        <p className="disclaimer">
          Servicios orientativos. La oferta definitiva está pendiente de confirmar.
        </p>
      </section>

      <section className="contact section" id="contacto">
        <span className="eyebrow">ESTOY AQUÍ PARA AYUDARTE</span>
        <h2>¿Empezamos a cuidar de ti?</h2>
        <p>
          Ponte en contacto conmigo y hablamos sobre cómo puedo ayudarte.
        </p>
        <a href="https://wa.me/" className="primary-button" target="_blank" rel="noreferrer">
          Contactar por WhatsApp <span>→</span>
        </a>
        <p className="contact-note">
          Añadiremos aquí el número de teléfono y el enlace directo de Cristina.
        </p>
      </section>

      <footer className="footer">
        <a href="#" className="brand">
          cristina<span>fisio.</span>
        </a>
        <span>© 2026 Cristina Fisio</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
