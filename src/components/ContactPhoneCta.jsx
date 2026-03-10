const sectionStyles = {
  section: {
    marginTop: 'clamp(2rem, 5vw, 3.5rem)',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(246, 239, 228, 0.98) 0%, rgba(239, 229, 214, 0.96) 100%)',
    color: '#201914',
    boxShadow: '0 24px 60px rgba(52, 38, 26, 0.08)',
  },
  inner: {
    display: 'grid',
    gap: '1rem',
  },
  eyebrow: {
    margin: 0,
    color: '#9f7b4b',
    fontSize: '0.82rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  title: {
    margin: 0,
    maxWidth: '16ch',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(1.9rem, 4.8vw, 3.1rem)',
    lineHeight: 1.05,
    color: '#201914',
  },
  text: {
    margin: 0,
    maxWidth: '42rem',
    color: 'rgba(32, 25, 20, 0.78)',
    lineHeight: 1.8,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.9rem',
    alignItems: 'center',
  },
  primaryLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '3.5rem',
    maxWidth: '100%',
    padding: '0.95rem 1.5rem',
    borderRadius: '999px',
    backgroundColor: '#201914',
    color: '#f7f1e8',
    textDecoration: 'none',
    fontWeight: 700,
    boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
    textAlign: 'center',
  },
  supportText: {
    margin: 0,
    color: 'rgba(32, 25, 20, 0.72)',
    lineHeight: 1.7,
  },
}

const phoneHref = 'tel:+39011000000'

export default function ContactPhoneCta() {
  return (
    <section aria-label="Phone contact option" style={sectionStyles.section}>
      <div style={sectionStyles.inner}>
        <p style={sectionStyles.eyebrow}>Phone</p>
        <h2 style={sectionStyles.title}>Prefer to confirm the details over a planning call?</h2>
        <p style={sectionStyles.text}>
          Call us for availability, proposal guidance, or a first conversation about your wedding, private event, or
          corporate evening. We keep the exchange direct, calm, and tailored to your brief.
        </p>
        <div style={sectionStyles.actions}>
          <a href={phoneHref} aria-label="Call Casa Aurea Events" style={sectionStyles.primaryLink}>
            Call +39 011 000000
          </a>
          <p style={sectionStyles.supportText}>Available Monday to Saturday, 09:00 to 19:00, for new inquiries and planning calls.</p>
        </div>
      </div>
    </section>
  )
}
