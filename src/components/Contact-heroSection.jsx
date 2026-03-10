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
      "linear-gradient(180deg, rgba(53, 40, 32, 0.12) 0%, rgba(30, 23, 19, 0.68) 58%, rgba(18, 15, 12, 0.92) 100%), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80')",
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
    alignItems: 'stretch',
  },
  primaryAction: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '3.25rem',
    maxWidth: '100%',
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    backgroundColor: '#d9bf8d',
    color: '#1f1813',
    textDecoration: 'none',
    fontWeight: 700,
    textAlign: 'center',
  },
  secondaryAction: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '3.25rem',
    maxWidth: '100%',
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    border: '1px solid rgba(247, 241, 232, 0.42)',
    color: '#f7f1e8',
    textDecoration: 'none',
    backgroundColor: 'rgba(247, 241, 232, 0.08)',
    fontWeight: 600,
    textAlign: 'center',
  },
  highlights: {
    marginTop: '1.5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
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
    label: 'Service area',
    text: 'Torino and surrounding areas for weddings, private events, and premium corporate evenings.',
  },
  {
    label: 'What to share',
    text: 'Event date, guest count, venue, and the atmosphere you want to create.',
  },
  {
    label: 'Planning style',
    text: 'Clear communication, thoughtful timing, and proposals shaped around your occasion.',
  },
]

export default function ContactHeroSection() {
  return (
    <section
      id="contact-hero"
      aria-labelledby="contatti-title"
      style={heroStyles.section}
    >
      <div style={heroStyles.panel}>
        <p style={heroStyles.eyebrow}>Start the conversation</p>
        <h1 id="contatti-title" style={heroStyles.title}>
          Plan your event with a hospitality team that knows how to host beautifully
        </h1>
        <p style={heroStyles.body}>
          Share the occasion, the atmosphere you want to create, and the guests you are welcoming. We will shape a
          tailored catering and bar proposal for refined celebrations in Torino and the surrounding area.
        </p>

        <div style={heroStyles.actions}>
          <a href="mailto:hello@casaaureaevents.it" style={heroStyles.primaryAction}>
            Request your event proposal
          </a>
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
