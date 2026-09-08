import './App.css'

const instagramUrl = 'https://www.instagram.com/melanie.event/'

function Brand({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand${small ? ' brand--small' : ''}`}>
      <span className="brand-name">Melanie</span>
      <span className="brand-caption">EVENTS</span>
    </span>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-link" href="#hem" aria-label="Melanie Events – Hem">
          <Brand />
        </a>
        <nav aria-label="Huvudmeny">
          <a className="nav-link nav-link--active" href="#hem" aria-current="page">Hem</a>
          {['Prislista', 'Portfölj', 'Kontakt'].map((label) => (
            <span className="nav-link nav-link--pending" key={label} aria-disabled="true" title="Kommer snart">
              {label}
            </span>
          ))}
        </nav>
        <a className="header-instagram" href={instagramUrl} target="_blank" rel="noreferrer">
          Instagram <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="hem">
        <div className="hero-layout">
          <img className="hero-background" src="/images/butterfly-event.jpg" alt="" width="1536" height="1024" fetchPriority="high" />
        <section className="welcome" aria-labelledby="welcome-title">
          <div className="hero-arch" aria-hidden="true" />
          <p className="eyebrow">Med kärlek för detaljer · Stockholm</p>
          <div className="monogram" aria-hidden="true">
            <span className="monogram-letter">M</span>
            <span className="monogram-script">Melanie</span>
            <span className="monogram-caption">EVENTS</span>
          </div>
          <h1 id="welcome-title">Här börjar <em>något fint.</em></h1>
          <p className="intro">
            En plats för nya idéer, möten och minnesvärda evenemang.
          </p>
          <div className="hero-divider" aria-hidden="true"><span>✧</span></div>
          <p className="status">Personlig dekoration. Oförglömliga ögonblick.</p>
          <a className="instagram-button" href="#inspiration">
            Upptäck vår värld <span aria-hidden="true">↗</span>
          </a>
          <p className="instagram-handle">@melanie.event</p>
        </section>
        </div>
        <div className="occasion-strip" aria-label="Tillfällen att fira">
          <span>Babyshower</span><span aria-hidden="true">✧</span>
          <span>Födelsedagar</span><span aria-hidden="true">✧</span>
          <span>Picknick</span><span aria-hidden="true">✧</span>
          <span>Stora & små ögonblick</span>
        </div>
        <section className="inspiration-section" id="inspiration" aria-labelledby="inspiration-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Det vi skapar</p>
              <h2 id="inspiration-title">Vackra stunder.<br /><em>Minnen för livet.</em></h2>
            </div>
            <p>Med genomtänkt dekoration och personliga detaljer skapar vi en varm inramning för livets firanden. Från det dukade bordet till en fotohörna där nya minnen får ta plats.</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <img src="/images/table-styling.jpg" alt="Inspirationsdukning med rosor, levande ljus, linneservetter och guldfärgade bestick." width="1536" height="1024" loading="lazy" />
              <div className="service-copy">
                <span className="service-number">01 / DEKORATION</span>
                <h3>En personlig inramning</h3>
                <p>Blommor, färger och små detaljer som gör bröllopet, födelsedagen eller babyshowern till något alldeles eget.</p>
              </div>
            </article>
            <article className="service-card">
              <img src="/images/photo-experience.jpg" alt="Inspirationsmiljö för fotografering med en stor cremefärgad ram, blommor och en salviagrön bakgrund." width="1536" height="1024" loading="lazy" />
              <div className="service-copy">
                <span className="service-number">02 / FOTOUPPLEVELSER</span>
                <h3>Fånga känslan</h3>
                <p>Vackra fotomiljöer och kreativa bakgrunder som bjuder in till skratt, gemenskap och bilder att spara.</p>
              </div>
            </article>
          </div>
          <p className="image-note">AI-genererade inspirationsbilder som visar känslan vi vill skapa.</p>
          <div className="closing-note">
            <span className="closing-star" aria-hidden="true">✧</span>
            <h2>Varje detalj har en tanke.<br /><em>Varje firande en egen historia.</em></h2>
            <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">Se mer på Instagram <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="brand-link" href="#hem" aria-label="Melanie Events – Hem"><Brand small /></a>
          <p>Små detaljer. Stora minnen.</p>
        </div>
        <p className="footer-location">Evenemang med omtanke<br /><span>Stockholm, Sverige</span></p>
        <a className="footer-social" href={instagramUrl} target="_blank" rel="noreferrer">Följ oss på Instagram <span aria-hidden="true">↗</span></a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Melanie Events</span>
          <span>Skapat med kärlek</span>
        </div>
      </footer>
    </div>
  )
}

export default App
