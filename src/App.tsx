import { useEffect, useState } from 'react'

const githubUrl = 'https://github.com/olarinoyeakinloye4-wq'
const emailAddress = 'olarinoyeakinloye4@gmail.com'
const whatsappUrl = 'https://wa.me/2347039863378'
const linkedInUrl = 'https://www.linkedin.com/'

const navigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Responsive Web Design'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Server-side JavaScript', 'API integration', 'Backend development'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Netlify'],
  },
  {
    title: 'Design & workflow',
    skills: ['Figma', 'UI implementation', 'Responsive design', 'AI-assisted development'],
  },
]

type Project = {
  name: string
  description: string
  technologies: string[]
  image?: string
  imageAlt?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  future?: boolean
}

const projects: Project[] = [
  {
    name: 'Study Flow',
    description: 'A modern study-management web application built to help students organize their academic activities and manage their study workflow.',
    technologies: ['React', 'TypeScript'],
    featured: true,
  },
  {
    name: 'Hannie Collections',
    description: 'A responsive e-commerce/collection website designed to showcase products and provide customers with a simple way to explore and place orders.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/image/menu hannie.jpg',
    imageAlt: 'Hannie Collections website preview',
    liveUrl: 'https://hanniecollections.netlify.app',
    githubUrl,
  },
  {
    name: 'D Bomibam Exquisite Confectionaries',
    description: 'A responsive confectionery website designed to showcase bakery products and provide customers with an easy way to explore the brand.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/image/home page dbecc.jpg',
    imageAlt: 'D Bomibam Exquisite Confectionaries website preview',
    liveUrl: 'https://dbecc1.netlify.app',
    githubUrl,
  },
  {
    name: 'Elite Barbershop',
    description: 'A modern barbershop website designed to showcase grooming services and provide customers with a convenient booking experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/image/home page elite.jpg',
    imageAlt: 'Elite Barbershop website preview',
    liveUrl: 'https://elitehaircut2.netlify.app',
    githubUrl,
  },
  {
    name: 'DripCore',
    description: 'A modern streetwear brand website designed to showcase products and create a clean shopping experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/image/home page dripcore.jpg',
    imageAlt: 'DripCore website preview',
    liveUrl: 'https://dripcore6.netlify.app',
    githubUrl,
  },
  {
    name: 'Simple House Restaurant',
    description: 'A responsive restaurant website designed to showcase meals, provide useful restaurant information and make ordering more convenient.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/image/home age simple huse resturant.jpg',
    imageAlt: 'Simple House Restaurant website preview',
    liveUrl: 'https://simple-house-restaurant1.netlify.app',
    githubUrl,
  },
  {
    name: 'Future e-commerce project',
    description: 'Project details coming soon.',
    technologies: [],
    future: true,
  },
]

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  )
}

function StudyFlowPreview() {
  return (
    <div className="study-preview" aria-label="Study Flow project preview illustration">
      <div className="preview-topbar">
        <span className="preview-mark">s.</span>
        <span>STUDY FLOW</span>
        <span className="preview-menu">•••</span>
      </div>
      <div className="preview-content">
        <div className="preview-sidebar" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <div className="preview-dashboard">
          <span className="preview-kicker">YOUR STUDY SPACE</span>
          <div className="preview-heading" />
          <div className="preview-subheading" />
          <div className="preview-panels">
            <div className="preview-panel preview-panel-wide">
              <i /><i /><i /><i />
            </div>
            <div className="preview-panel preview-panel-tall"><i /><i /><i /></div>
            <div className="preview-panel preview-panel-short"><i /><i /></div>
          </div>
        </div>
      </div>
      <div className="preview-caption">A study-management web application</div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return (
      <article className="featured-project" data-reveal>
        <div className="featured-visual"><StudyFlowPreview /></div>
        <div className="featured-copy">
          <div className="project-overline"><span>FEATURED PROJECT</span><span>01 / 06</span></div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="technology-list" aria-label="Technologies used">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <div className="project-actions">
            <span className="link-pending">Live demo coming soon</span>
            <span className="link-pending">GitHub link coming soon</span>
          </div>
        </div>
      </article>
    )
  }

  if (project.future) {
    return (
      <article className="project-card future-card" data-reveal>
        <div className="future-art" aria-hidden="true"><span>+</span></div>
        <div className="project-card-copy">
          <p className="project-overline"><span>UP NEXT</span><span>07</span></p>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p className="future-note">A space for a future full-stack shopping application.</p>
        </div>
      </article>
    )
  }

  return (
    <article className="project-card" data-reveal>
      <a className="project-image-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live demo`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
        <span className="image-open" aria-hidden="true">↗</span>
      </a>
      <div className="project-card-copy">
        <p className="project-overline"><span>WEBSITE</span><span>0{projects.indexOf(project) + 1}</span></p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="technology-list" aria-label="Technologies used">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-actions">
          {project.liveUrl && <ExternalLink href={project.liveUrl}>Live demo</ExternalLink>}
          {project.githubUrl && <ExternalLink href={project.githubUrl}>GitHub</ExternalLink>}
        </div>
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="navigation" aria-label="Main navigation">
          <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)}>OM<span>.</span></a>
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <ul id="primary-navigation" className={`navigation-links${menuOpen ? ' is-open' : ''}`}>
            {navigation.map(([label, href]) => (
              <li key={label}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
            ))}
            <li className="nav-location">NIGERIA <span aria-hidden="true">·</span> 2026</li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <section className="hero page-shell" id="home">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="status-dot" /> HELLO, I'M</p>
            <h1>Olarinoye<br />Akinloye<br /><span>Mathew.</span></h1>
            <p className="hero-role">Full-Stack Web Developer</p>
            <p className="hero-intro">I build modern, responsive websites and full-stack web applications that turn ideas into functional digital experiences.</p>
            <p className="hero-detail">From polished frontend interfaces to backend logic, APIs and data-driven functionality.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">View My Work <span aria-hidden="true">↘</span></a>
              <a className="button button-outline" href="#contact">Let's Work Together <span aria-hidden="true">↗</span></a>
            </div>
            <div className="social-links" aria-label="Social links">
              <ExternalLink href={githubUrl}>GitHub</ExternalLink>
              <ExternalLink href={linkedInUrl}>LinkedIn</ExternalLink>
              <a href={`mailto:${emailAddress}`}>Email <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Selected project previews" data-reveal>
            <div className="hero-art-label"><span>BUILDING FOR THE WEB</span><span>01 — 06</span></div>
            <div className="hero-image hero-image-main"><img src="/image/home page dripcore.jpg" alt="DripCore streetwear website preview" fetchPriority="high" /></div>
            <div className="hero-image hero-image-small"><img src="/image/home page dbecc.jpg" alt="D Bomibam confectionery website preview" loading="lazy" /></div>
            <div className="hero-stamp"><span>IDEA</span><span className="stamp-arrow">↘</span><span>INTERFACE</span><span className="stamp-arrow">↘</span><span>APPLICATION</span></div>
            <span className="hero-coordinate">NIGERIA</span>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a>
        </section>

        <section className="about section-shell" id="about" data-reveal>
          <div className="section-heading"><p className="eyebrow">01 / ABOUT</p><h2>Thoughtful builds.<br /><span>Useful by design.</span></h2></div>
          <div className="about-copy">
            <p className="about-lead">I'm a Full-Stack Web Developer who enjoys turning ideas into functional, modern digital products.</p>
            <p>I build responsive interfaces and work across the frontend and backend to create complete web experiences, from clear user journeys to the logic and APIs behind them.</p>
            <div className="education-line"><span className="education-mark">EE</span><span><strong>Electrical & Electronics Engineering</strong><br />Student at the University of Ilorin, Nigeria</span></div>
          </div>
        </section>

        <section className="skills section-shell" id="skills" data-reveal>
          <div className="section-heading section-heading-row"><div><p className="eyebrow">02 / TOOLKIT</p><h2>Technologies &<br /><span>ways of working.</span></h2></div><p className="section-aside">A practical toolkit for designing, building and shipping complete web experiences.</p></div>
          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.title}</h3></div>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
            <div className="skill-group skill-group-note"><div className="skill-group-heading"><span>05</span><h3>Database</h3></div><p>No database technology listed.</p></div>
          </div>
        </section>

        <section className="projects section-shell" id="projects">
          <div className="section-heading section-heading-row" data-reveal><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Real projects.<br /><span>Built for people.</span></h2></div><p className="section-aside">A selection of web experiences built around real brands, products and everyday needs.</p></div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
        </section>

        <section className="contact section-shell" id="contact" data-reveal>
          <div className="contact-topline"><p className="eyebrow">04 / CONTACT</p><span>LET'S TALK ABOUT YOUR PROJECT <i aria-hidden="true" /></span></div>
          <div className="contact-content"><h2>Have an idea?<br /><span>Let's build it.</span></h2><div className="contact-copy"><p>Whether you need a website, web application or a complete digital product, let's discuss what you're looking to build.</p><a className="button button-lime" href={`mailto:${emailAddress}`}>Send Me an Email <span aria-hidden="true">↗</span></a></div></div>
          <div className="contact-links"><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a><ExternalLink href={githubUrl}>GitHub</ExternalLink><ExternalLink href={linkedInUrl}>LinkedIn</ExternalLink></div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-name" href="#home">Olarinoye Akinloye Mathew<span>.</span></a>
        <p>Full-Stack Web Developer <span>·</span> Nigeria</p>
        <div className="footer-socials"><ExternalLink href={githubUrl}>GitHub</ExternalLink><ExternalLink href={linkedInUrl}>LinkedIn</ExternalLink><a href={`mailto:${emailAddress}`}>Email</a></div>
        <small>© 2026 Olarinoye Akinloye Mathew</small>
      </footer>
    </>
  )
}

export default App