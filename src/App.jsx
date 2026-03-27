import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const SI = 'https://cdn.simpleicons.org'

const skills = [
  { name: 'React',        logo: `${SI}/react/61DAFB` },
  { name: 'Next.js',      logo: `${SI}/nextdotjs/000000` },
  { name: 'TypeScript',   logo: `${SI}/typescript/3178C6` },
  { name: 'JavaScript',   logo: `${SI}/javascript/F7DF1E` },
  { name: 'HTML',         logo: `${SI}/html5/E34F26` },
  { name: 'CSS',          logo: `${SI}/css/1572B6` },
  { name: 'Redux',        logo: `${SI}/redux/764ABC` },
  { name: 'RTK Query',    logo: `${SI}/redux/764ABC` },
  { name: 'Figma',        logo: `${SI}/figma/F24E1E` },
  { name: 'Git CLI',      logo: `${SI}/git/F05032` },
  { name: 'GitHub',       logo: `${SI}/github/181717` },
  { name: 'Bitbucket',    logo: `${SI}/bitbucket/0052CC` },
  { name: 'JIRA',         logo: `${SI}/jira/0052CC` },
  { name: 'Ant Design',   logo: `${SI}/antdesign/0170FE` },
  { name: 'Material UI',  logo: `${SI}/mui/007FFF` },
  { name: 'Tailwind',     logo: `${SI}/tailwindcss/06B6D4` },
  { name: 'SCSS',         logo: `${SI}/sass/CC6699` },
  { name: 'Claude AI',    logo: `${SI}/anthropic/191919` },
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
  const [dark, setDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      {/* ── Navbar ─────────────────────────────────── */}
      <header className="navbar">
        <span className="navbar-logo">RD</span>
        <div className="navbar-right">
          <nav className="navbar-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
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
              <img src={`${SI}/react/61DAFB`} alt="React" />
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
                <img src={s.logo} alt={s.name} className="skill-icon" />
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
