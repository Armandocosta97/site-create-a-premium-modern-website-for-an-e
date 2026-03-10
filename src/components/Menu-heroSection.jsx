import { Link } from 'react-router-dom'

const heroStyles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '32px',
    minHeight: 'clamp(30rem, 72vh, 42rem)',
    padding: 'clamp(1.5rem, 4vw, 3rem)',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage:
      "linear-gradient(180deg, rgba(49, 36, 28, 0.16) 0%, rgba(31, 23, 18, 0.72) 58%, rgba(22, 17, 14, 0.92) 100%), url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.18)',
  },
  panel: {
    width: 'min(100%, 46rem)',
    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
    borderRadius: '28px',
    backgroundColor: 'rgba(19, 15, 13, 0.52)',
    backdropFilter: 'blur(10px)',
    textAlign: 'left',
  },
  eyebrow: {
    margin: 0,
    fontSize: '0.8rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#d9bf8d',
  },
  title: {
    margin: '1rem 0 0',
    fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
    lineHeight: 1.02,
    fontFamily: 'Georgia, \"Times New Roman\", serif',
    fontWeight: 600,
  },
  body: {
    margin: '1.25rem 0 0',
    maxWidth: '35rem',
    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
    lineHeight: 1.75,
    color: 'rgba(247, 241, 232, 0.88)',
  },
  actions: {
    marginTop: '1.75rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.875rem',
  },
  primaryAction: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '3.25rem',
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    backgroundColor: '#d9bf8d',
    color: '#1f1813',
    textDecoration: 'none',
    fontWeight: 700,
  },
  secondaryAction: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '3.25rem',
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    border: '1px solid rgba(247, 241, 232, 0.42)',
    color: '#f7f1e8',
    textDecoration: 'none',
    backgroundColor: 'rgba(247, 241, 232, 0.08)',
    fontWeight: 600,
  },
  highlights: {
    marginTop: '1.5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
    gap: '0.875rem',
  },
  highlightCard: {
    padding: '0.95rem 1rem',
    borderRadius: '20px',
    backgroundColor: 'rgba(247, 241, 232, 0.08)',
    border: '1px solid rgba(247, 241, 232, 0.12)',
  },
  highlightLabel: {
    display: 'block',
    fontSize: '0.78rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(217, 191, 141, 0.92)',
  },
  highlightText: {
    display: 'block',
    marginTop: '0.4rem',
    fontSize: '0.98rem',
    lineHeight: 1.5,
    color: '#f7f1e8',
  },
}

const highlights = [
  {
    label: 'Drink direction',
    text: 'Signature cocktails, aperitivo classics, and elevated alcohol-free serves.',
  },
  {
    label: 'Designed for',
    text: 'Wedding welcome drinks, long-table dinners, and late-evening celebrations.',
  },
  {
    label: 'Service feel',
    text: 'Balanced flavor, refined presentation, and bar pacing that suits the room.',
  },
]

export default function MenuHeroSection() {
  return (
    <section
      id="menu-hero"
      aria-labelledby="menu-title"
      style={heroStyles.section}
    >
      <div style={heroStyles.panel}>
        <p style={heroStyles.eyebrow}>Curated event bar program</p>
        <h1 id="menu-title" style={heroStyles.title}>
          Drink selections designed for elegant celebrations
        </h1>
        <p style={heroStyles.body}>
          Explore a bar menu shaped for weddings, private dinners, and refined
          corporate evenings, with signature cocktails, aperitivo rituals, and
          premium pours that complement the atmosphere of the event.
        </p>

        <div style={heroStyles.actions}>
          <Link to="/contatti" style={heroStyles.primaryAction}>
            Request your event proposal
          </Link>
          <Link to="/servizi" style={heroStyles.secondaryAction}>
            Explore our services
          </Link>
        </div>

        <div style={heroStyles.highlights}>
          {highlights.map((item) => (
            <div key={item.label} style={heroStyles.highlightCard}>
              <span style={heroStyles.highlightLabel}>{item.label}</span>
              <span style={heroStyles.highlightText}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
