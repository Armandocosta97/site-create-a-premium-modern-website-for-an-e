import { Link } from 'react-router-dom'

const heroStyles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '32px',
    minHeight: 'clamp(32rem, 78vh, 46rem)',
    padding: 'clamp(1.5rem, 4vw, 3rem)',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage:
      "linear-gradient(180deg, rgba(40, 31, 24, 0.18) 0%, rgba(28, 22, 18, 0.72) 62%, rgba(20, 15, 12, 0.9) 100%), url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.18)',
  },
  panel: {
    width: 'min(100%, 42rem)',
    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
    borderRadius: '28px',
    backgroundColor: 'rgba(20, 15, 12, 0.48)',
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
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    lineHeight: 1.02,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontWeight: 600,
  },
  body: {
    margin: '1.25rem 0 0',
    maxWidth: '34rem',
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
  details: {
    marginTop: '1.5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
    gap: '0.875rem',
  },
  detailCard: {
    padding: '0.95rem 1rem',
    borderRadius: '20px',
    backgroundColor: 'rgba(247, 241, 232, 0.08)',
    border: '1px solid rgba(247, 241, 232, 0.12)',
  },
  detailLabel: {
    display: 'block',
    fontSize: '0.78rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(217, 191, 141, 0.92)',
  },
  detailText: {
    display: 'block',
    marginTop: '0.4rem',
    fontSize: '0.98rem',
    lineHeight: 1.5,
    color: '#f7f1e8',
  },
}

const highlights = [
  {
    label: 'Signature events',
    text: 'Weddings, private dinners, brand soirées, and refined celebrations.',
  },
  {
    label: 'Service style',
    text: 'Tailored menus, premium cocktails, and polished on-site hospitality.',
  },
  {
    label: 'Atmosphere',
    text: 'Modern Italian elegance with thoughtful presentation in every detail.',
  },
]

const defaultPrimaryCta = {
  label: 'Request your event proposal',
  to: '/menu',
}

const defaultSecondaryCta = {
  label: 'Explore our services',
  to: '/contatti',
}

export default function HeroSection({
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
}) {
  return (
    <section id="hero" aria-labelledby="home-title" style={heroStyles.section}>
      <div style={heroStyles.panel}>
        <p style={heroStyles.eyebrow}>
          Premium catering &amp; bar service for unforgettable events
        </p>
        <h1 id="home-title" style={heroStyles.title}>
          Elegant catering and cocktail experiences for weddings,
          celebrations, and refined gatherings
        </h1>
        <p style={heroStyles.body}>
          Casa Aurea Events creates tailored food and drink experiences with
          premium hospitality, beautiful presentation, and a modern luxury
          feel.
        </p>

        <div style={heroStyles.actions}>
          <Link to={primaryCta.to} style={heroStyles.primaryAction}>
            {primaryCta.label}
          </Link>
          <Link to={secondaryCta.to} style={heroStyles.secondaryAction}>
            {secondaryCta.label}
          </Link>
        </div>

        <div style={heroStyles.details}>
          {highlights.map((item) => (
            <div key={item.label} style={heroStyles.detailCard}>
              <span style={heroStyles.detailLabel}>{item.label}</span>
              <span style={heroStyles.detailText}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
