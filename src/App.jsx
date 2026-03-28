import { useState, useEffect } from 'react'
import profileImg from './assets/profile.png'
import './App.css'

const SI = 'https://cdn.simpleicons.org'

const contact = {
  github:       { href: 'https://github.com/ratiranjan-das',          label: 'GitHub',    sub: '@ratiranjan-das' },
  linkedin:     { href: 'https://www.linkedin.com/in/ratiranjan-das-4b14041ab/', label: 'LinkedIn',  sub: 'Ratiranjan Das' },
  whatsapp:     { href: 'https://wa.me/916370295447',                 label: 'WhatsApp',  sub: '+91 63702 95447' },
  email:        { href: 'mailto:dasratiranjan65@gmail.com',           label: 'Email',     sub: 'dasratiranjan65@gmail.com' },
  resume:       { href: '/Das_Resume.pdf' },
}

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

const UNSPLASH = 'https://images.unsplash.com'

const projects = [
  {
    title: 'Portfolio Site',
    category: 'Personal Project',
    desc: 'A personal portfolio built with React & Vite showcasing projects, skills and contact info with dark/light mode support.',
    tags: ['React', 'Vite', 'CSS'],
    preview: `${UNSPLASH}/photo-1507238691740-187a5b1d37b8?w=600&q=80`,
    comingSoon: false,
  },
  {
    title: 'UI Component Library',
    category: 'Open Source',
    desc: 'A reusable collection of accessible React components with zero dependencies, built for scalability and design consistency.',
    tags: ['React', 'TypeScript', 'Storybook'],
    preview: `${UNSPLASH}/photo-1555066931-4365d14bab8c?w=600&q=80`,
    comingSoon: false,
  },
  {
    title: 'Grid UI',
    category: 'Frontend Tool',
    desc: 'A responsive grid layout system with drag-to-resize panels and customizable widget components for dashboard use cases.',
    tags: ['React', 'CSS Grid', 'TypeScript'],
    preview: `${UNSPLASH}/photo-1551288049-bebda4e38f71?w=600&q=80`,
    comingSoon: false,
  },
  {
    title: 'LeetCode Clone',
    category: 'AI-Powered Platform',
    desc: 'A LeetCode-inspired platform with a special AI-powered hints feature and real-time code execution environment.',
    tags: ['Next.js', 'TypeScript', 'Claude AI'],
    preview: `${UNSPLASH}/photo-1515879218367-8466d910aaa4?w=600&q=80`,
    comingSoon: true,
  },
  {
    title: 'V0 Clone',
    category: 'AI UI Generator',
    desc: 'An AI-driven UI component generator that turns natural language prompts into production-ready React components instantly.',
    tags: ['React', 'Claude AI', 'Tailwind'],
    preview: `${UNSPLASH}/photo-1677442135703-1787eea5ce01?w=600&q=80`,
    comingSoon: true,
  },
  {
    title: 'Kanban View',
    category: 'Productivity Tool',
    desc: 'A drag-and-drop Kanban board for task management with real-time collaboration support and customizable workflows.',
    tags: ['React', 'Redux', 'RTK Query'],
    preview: `${UNSPLASH}/photo-1611224923853-80b023f02d71?w=600&q=80`,
    comingSoon: true,
  },
]

const FULL_NAME = 'Ratiranjan Das'

export default function App() {
  const [dark, setDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  const [displayName, setDisplayName] = useState('')
  const [typing, setTyping] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    if (done) return
    if (displayName.length < FULL_NAME.length) {
      const t = setTimeout(() => {
        setDisplayName(FULL_NAME.slice(0, displayName.length + 1))
      }, 150)
      return () => clearTimeout(t)
    } else {
      setTyping(false)
      setDone(true)
    }
  }, [displayName, done])

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
            <h1 className="hero-name">
              {displayName}
              {!done && <span className="cursor">|</span>}
            </h1>
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
              <img src={profileImg} alt="Ratiranjan Das" className="avatar-img" />
            </div>
            <div className="avatar-badge react-badge">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFA500" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="hero-socials">
              <a href={contact.github.href} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
                <img src={`${SI}/github/181717`} alt="GitHub" />
              </a>
              <a href={contact.linkedin.href} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href={contact.whatsapp.href} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <img src={`${SI}/whatsapp/25D366`} alt="WhatsApp" />
              </a>
              <a href={contact.email.href} className="social-icon-btn" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
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

          <div className="timeline">
            <div className="timeline-line" />
            {projects.map((p, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={p.title} className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'} ${p.comingSoon ? 'timeline-item--soon' : ''}`}>

                  {/* Text card */}
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <span className="timeline-category">{p.category}</span>
                      {p.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
                    </div>
                    <h3 className="timeline-title">{p.title}</h3>
                    <p className="timeline-desc">{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="timeline-dot">
                    <div className="timeline-dot-inner" />
                  </div>

                  {/* Preview image */}
                  <div className="timeline-preview">
                    <div className="timeline-preview-browser">
                      <div className="browser-bar">
                        <span /><span /><span />
                      </div>
                      <img src={p.preview} alt={p.title} className="browser-img" />
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </section>

        {/* ── Contact ────────────────────────────────── */}
        <section className="section contact-section" id="contact">
          <div className="section-label">Let's talk</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-sub">
            Open to new opportunities, collaborations, or just a friendly chat about web tech.
          </p>

          <div className="contact-grid">
            {/* GitHub */}
            <a href={contact.github.href} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-card-icon" style={{ background: 'rgba(24,23,23,0.08)' }}>
                <img src={`${SI}/github/181717`} alt="GitHub" />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.github.label}</span>
                <span className="contact-card-sub">{contact.github.sub}</span>
              </div>
              <svg className="contact-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href={contact.linkedin.href} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-card-icon" style={{ background: 'rgba(10,102,194,0.1)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.linkedin.label}</span>
                <span className="contact-card-sub">{contact.linkedin.sub}</span>
              </div>
              <svg className="contact-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href={contact.whatsapp.href} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-card-icon" style={{ background: 'rgba(37,211,102,0.1)' }}>
                <img src={`${SI}/whatsapp/25D366`} alt="WhatsApp" />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.whatsapp.label}</span>
                <span className="contact-card-sub">{contact.whatsapp.sub}</span>
              </div>
              <svg className="contact-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </a>

            {/* Email */}
            <a href={contact.email.href} className="contact-card">
              <div className="contact-card-icon" style={{ background: 'rgba(170,59,255,0.1)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.email.label}</span>
                <span className="contact-card-sub">{contact.email.sub}</span>
              </div>
              <svg className="contact-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </a>
          </div>

          {/* Resume */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href={contact.resume.href} download className="resume-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
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
