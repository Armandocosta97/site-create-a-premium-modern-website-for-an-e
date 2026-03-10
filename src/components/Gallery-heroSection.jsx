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
      "linear-gradient(180deg, rgba(48, 36, 29, 0.12) 0%, rgba(30, 23, 19, 0.68) 56%, rgba(18, 15, 12, 0.92) 100%), url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1600&q=80')",
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
    label: 'Events captured',
    text: 'Wedding dinners, cocktail bars, styled tablescapes, and luminous celebration moments.',
  },
  {
    label: 'Visual direction',
    text: 'Warm editorial imagery with polished presentation, soft light, and a hospitality-first feel.',
  },
  {
    label: 'What it shows',
    text: 'How Casa Aurea balances food, service, and atmosphere for refined gatherings.',
  },
]

export default function GalleryHeroSection() {
  return (
    <section
      id="gallery-hero"
      aria-labelledby="gallery-title"
      style={heroStyles.section}
    >
      <div style={heroStyles.panel}>
        <p style={heroStyles.eyebrow}>Casa Aurea Events</p>
        <h1 id="gallery-title" style={heroStyles.title}>
          A curated view of elegant catering and bar moments
        </h1>
        <p style={heroStyles.body}>
          Explore a visual selection of refined tablescapes, signature
          cocktails, plated service, and celebration settings designed for
          weddings, private events, and premium corporate evenings.
        </p>

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
