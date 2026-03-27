import reactLogo from './assets/react.svg'
import heroImg from './assets/hero.png'
import './App.css'

const skills = [
  { name: 'React', icon: reactLogo },
  { name: 'Next.js', icon: null },
  { name: 'TypeScript', icon: null },
  { name: 'JavaScript', icon: null },
  { name: 'HTML', icon: null },
  { name: 'CSS', icon: null },
  { name: 'Redux', icon: null },
  { name: 'RTK Query', icon: null },
  { name: 'Figma', icon: null },
  { name: 'Git CLI', icon: null },
  { name: 'GitHub', icon: null },
  { name: 'Bitbucket', icon: null },
  { name: 'JIRA', icon: null },
  { name: 'Ant Design', icon: null },
  { name: 'Material UI', icon: null },
  { name: 'Tailwind', icon: null },
  { name: 'SCSS', icon: null },
  { name: 'Claude AI', icon: null },
]

const projects = [
  {
    title: 'Portfolio Site',
    desc: 'A personal portfolio built with React & Vite showcasing projects and skills.',
    tags: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'UI Component Library',
    desc: 'A reusable collection of accessible React components with zero dependencies.',
    tags: ['React', 'TypeScript', 'Storybook'],
  },
  {
    title: 'Dev Blog',
    desc: 'A markdown-powered blog covering web development tips and tutorials.',
    tags: ['Next.js', 'MDX', 'Tailwind'],
  },
]

export default function App() {
  return (
    <>
      {/* ── Navbar ─────────────────────────────────── */}
      <header className="navbar">
        <span className="navbar-logo">RD</span>
        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* ── Hero ───────────────────────────────────── */}
        <section className="hero-section" id="about">
          <div className="hero-text">
            <p className="hero-eyebrow">Hey there, I'm</p>
            <h1 className="hero-name">Ratiranjan Das</h1>
            <p className="hero-tagline">
              Frontend Developer crafting fast, beautiful web experiences with
              React &amp; modern tooling.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="avatar-ring">
              <img src={heroImg} alt="Ratiranjan Das" className="avatar-img" />
            </div>
            <div className="avatar-badge react-badge">
              <img src={reactLogo} alt="React" />
            </div>
          </div>
        </section>

        {/* ── Skills ─────────────────────────────────── */}
        <section className="section skills-section" id="skills">
          <div className="section-label">What I work with</div>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name} className="skill-card">
                {s.icon
                  ? <img src={s.icon} alt={s.name} className="skill-icon" />
                  : <span className="skill-initial">{s.name[0]}</span>}
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ───────────────────────────────── */}
        <section className="section projects-section" id="projects">
          <div className="section-label">What I've built</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.title} className="project-card">
                <div className="project-card-top" />
                <div className="project-card-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ────────────────────────────────── */}
        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div className="section-label">Let's talk</div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-sub">
              Open to new opportunities, collaborations, or just a friendly chat
              about web tech.
            </p>
            <a href="mailto:hello@ratiranjandas.dev" className="btn btn-primary">
              Send a Message
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────── */}
      <footer className="footer">
        <span>© 2026 Ratiranjan Das</span>
        <span className="footer-dot">·</span>
        <span>Built with React &amp; Vite</span>
      </footer>
    </>
  )
}
