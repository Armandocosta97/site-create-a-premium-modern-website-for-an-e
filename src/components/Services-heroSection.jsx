import { Link } from 'react-router-dom'

const heroStyles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '32px',
    minHeight: 'clamp(30rem, 74vh, 43rem)',
    padding: 'clamp(1.5rem, 4vw, 3rem)',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage:
      "linear-gradient(180deg, rgba(53, 39, 31, 0.14) 0%, rgba(30, 23, 18, 0.7) 58%, rgba(18, 14, 12, 0.92) 100%), url('https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.18)',
  },
  panel: {
    width: 'min(100%, 48rem)',
    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
    borderRadius: '28px',
    backgroundColor: 'rgba(19, 15, 13, 0.54)',
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
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontWeight: 600,
  },
  body: {
    margin: '1.25rem 0 0',
    maxWidth: '36rem',
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
    label: 'Event formats',
    text: 'Weddings, private celebrations, and corporate evenings shaped with the same polished standard.',
  },
  {
    label: 'Service scope',
    text: 'Catering, premium mobile bar service, styling support, and full hospitality coordination.',
  },
  {
    label: 'Hosting focus',
    text: 'Guest flow, timing, and presentation aligned to the atmosphere of the occasion.',
  },
]

export default function ServicesHeroSection() {
  return (
    <section
      id="services-hero"
      aria-labelledby="servizi-title"
      style={heroStyles.section}
    >
      <div style={heroStyles.panel}>
        <p style={heroStyles.eyebrow}>Casa Aurea services</p>
        <h1 id="servizi-title" style={heroStyles.title}>
          Hospitality services composed for elegant events with a premium, modern touch
        </h1>
        <p style={heroStyles.body}>
          Discover the service offering behind Casa Aurea Events, from tailored
          catering and signature bar experiences to styling support and service
          flow designed to make refined occasions feel effortless.
        </p>

        <div style={heroStyles.actions}>
          <Link to="/contatti" style={heroStyles.primaryAction}>
            Request your event proposal
          </Link>
          <Link to="/menu" style={heroStyles.secondaryAction}>
            Discover the drink list
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
