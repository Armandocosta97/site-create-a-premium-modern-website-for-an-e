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
      "linear-gradient(180deg, rgba(52, 38, 31, 0.12) 0%, rgba(31, 23, 18, 0.66) 56%, rgba(20, 15, 12, 0.92) 100%), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.18)',
  },
  panel: {
    width: 'min(100%, 47rem)',
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
    maxWidth: '35rem',
    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
    lineHeight: 1.75,
    color: 'rgba(247, 241, 232, 0.88)',
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
    label: 'Approach',
    text: 'Tailored hospitality shaped around the rhythm, setting, and guest list of each event.',
  },
  {
    label: 'Standard',
    text: 'Presentation, timing, and service flow are treated with the same care as the menu itself.',
  },
  {
    label: 'Atmosphere',
    text: 'Warm Italian refinement designed to feel polished, welcoming, and quietly memorable.',
  },
]

export default function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      aria-labelledby="chi-siamo-title"
      style={heroStyles.section}
    >
      <div style={heroStyles.panel}>
        <p style={heroStyles.eyebrow}>Casa Aurea Events</p>
        <h1 id="chi-siamo-title" style={heroStyles.title}>
          Hospitality shaped with care, timing, and a refined Italian eye
        </h1>
        <p style={heroStyles.body}>
          We design catering and bar experiences that feel effortless for the
          host and memorable for every guest, from the first welcome glass to
          the final toast.
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
