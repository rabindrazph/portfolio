import { profile } from './data/profile';

const navigation = [
  { label: 'Experience', href: '#experience' },
  { label: 'Toolkit', href: '#skills' },
  { label: 'Project', href: '#projects' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
];

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">{kicker}</div>
      <div className="section-copy">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-shell">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />

      <div className="page">
        <header className="topbar">
          <a className="brand" href="#home" aria-label="Go to top of portfolio">
            <span className="brand-mark">{profile.shortName}</span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <small>{profile.role}</small>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-subtle" href={profile.resumePath} download>
            Download Resume
          </a>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="hero-copy">
              <p className="eyebrow">
                {profile.role} <span>•</span> {profile.location} <span>•</span> Backend Systems
              </p>
              <h1>Backend products that stay fast, observable, and reliable under real load.</h1>
              <p className="hero-text">{profile.summary}</p>

              <div className="hero-actions">
                <a className="button button-primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  View LinkedIn
                </a>
                <a className="button button-ghost" href={`mailto:${profile.email}`}>
                  Email Me
                </a>
              </div>

              <ul className="hero-points">
                {profile.heroBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <aside className="signal-panel" aria-label="Current engineering focus">
              <div className="panel-topline">
                <span className="panel-kicker">Current Signal</span>
                <span className="status-pill">Available to connect</span>
              </div>

              <div className="monogram-panel">
                <div className="monogram">{profile.shortName}</div>
                <div>
                  <p className="panel-label">Where I work best</p>
                  <h2>Secure APIs, event flows, search performance, and production clarity.</h2>
                </div>
              </div>

              <div className="signal-grid">
                {profile.heroStats.map((item) => (
                  <article key={item.label} className="signal-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </aside>
          </section>

          <section className="impact-strip" aria-label="Quick profile overview">
            {profile.impactCards.map((item) => (
              <article key={item.label} className="impact-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </section>

          <section className="section" id="experience">
            <SectionHeading
              kicker="Experience"
              title="Shipping product-facing backend work, not just isolated services."
              text="My recent work spans healthcare analytics, enrollment operations, authentication flows, and performance-sensitive APIs. The common thread is building systems that remain maintainable while serving real product needs."
            />

            <div className="timeline">
              {profile.experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="timeline-card">
                  <div className="timeline-meta">
                    <span className="role-pill">{item.role}</span>
                    <h3>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.company}
                      </a>
                    </h3>
                    <p>{item.location}</p>
                    <small>{item.period}</small>
                  </div>

                  <ul className="timeline-list">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="skills">
            <SectionHeading
              kicker="Toolkit"
              title="A stack shaped for backend depth and production ownership."
              text="The portfolio is Java-centered, but the real value is how the pieces combine: security, search, messaging, delivery, and observability in one coherent workflow."
            />

            <div className="skills-layout">
              {profile.skillGroups.map((group) => (
                <article key={group.title} className="skill-card">
                  <div className="skill-card-head">
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <div className="skill-cloud">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <SectionHeading
              kicker="Featured Project"
              title="Banking Service demonstrates architecture discipline under realistic backend concerns."
              text="This project matters because it brings together security, asynchronous processing, monitoring, and delivery. It reads like a backend engineer’s portfolio piece, not a toy demo."
            />

            <div className="project-layout">
              <article className="project-feature">
                <div className="project-header">
                  <span className="role-pill">Case Study</span>
                  <h3>{profile.project.title}</h3>
                  <p>{profile.project.summary}</p>
                </div>

                <div className="pillar-grid">
                  {profile.project.pillars.map((pillar) => (
                    <article key={pillar.title} className="pillar-card">
                      <h4>{pillar.title}</h4>
                      <p>{pillar.detail}</p>
                    </article>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    className="button button-primary"
                    href={profile.project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repository
                  </a>
                  <a className="button button-ghost" href={profile.resumePath} download>
                    Resume PDF
                  </a>
                </div>
              </article>

              <div className="project-side">
                <article className="board-card">
                  <span className="panel-kicker">Why it stands out</span>
                  <h3>It treats production readiness as part of the build, not a polish step.</h3>
                  <ul className="board-list">
                    {profile.project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </article>

                <article className="board-card board-card-accent">
                  <span className="panel-kicker">Contact</span>
                  <h3>Ready for engineering conversations around backend systems and architecture.</h3>
                  <div className="contact-list">
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
                    <a href={profile.links.githubSecondary} target="_blank" rel="noreferrer">
                      {profile.links.githubSecondary.replace('https://', '')}
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section" id="profiles">
            <SectionHeading
              kicker="Profiles"
              title="Places where the work continues beyond this page."
              text="Public code, writing, and professional presence are linked directly so the portfolio stays useful as a launch point, not just a visual artifact."
            />

            <div className="profiles-grid">
              {profile.profiles.map((item) => (
                <a key={`${item.label}-${item.handle}`} className="profile-card" href={item.href} target="_blank" rel="noreferrer">
                  <span>{item.label}</span>
                  <strong>{item.handle}</strong>
                  <p>{item.note}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="contact-band section" id="contact">
            <div>
              <span className="section-kicker">Contact</span>
              <h2>Let’s build backend software that can survive growth.</h2>
              <p>
                The best fit is product work that values maintainable architecture, reliable integrations,
                search-backed performance, and observability from day one.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="button button-subtle" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="button button-subtle" href={profile.resumePath} download>
                Download Resume
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>
            Built with React 19.2.7 and Vite 8.1.3. Content grounded in the resume dated before July 17, 2026.
          </p>
          <p>
            © {currentYear} {profile.name}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
