const sectionStyles = {
  section: {
    marginTop: 'clamp(2rem, 5vw, 3.5rem)',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(135deg, rgba(35, 27, 22, 0.98) 0%, rgba(62, 48, 36, 0.96) 100%)',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.16)',
  },
  inner: {
    display: 'grid',
    gap: '1rem',
  },
  eyebrow: {
    margin: 0,
    color: '#d9bf8d',
    fontSize: '0.82rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  title: {
    margin: 0,
    maxWidth: '18ch',
    color: '#f7f1e8',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(1.9rem, 4.8vw, 3.1rem)',
    lineHeight: 1.05,
  },
  text: {
    margin: 0,
    maxWidth: '42rem',
    color: 'rgba(247, 241, 232, 0.78)',
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
    backgroundColor: '#1c6c4c',
    color: '#f7f1e8',
    textDecoration: 'none',
    fontWeight: 700,
    boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
    textAlign: 'center',
  },
  supportText: {
    margin: 0,
    color: 'rgba(247, 241, 232, 0.7)',
    lineHeight: 1.7,
  },
}

const whatsappHref =
  'https://wa.me/39011000000?text=Hello%20Casa%20Aurea%20Events%2C%20I%20would%20like%20to%20discuss%20my%20event.'

export default function ContactWhatsAppCta() {
  return (
    <section aria-label="WhatsApp contact option" style={sectionStyles.section}>
      <div style={sectionStyles.inner}>
        <p style={sectionStyles.eyebrow}>WhatsApp</p>
        <h2 style={sectionStyles.title}>Prefer a direct message for your first event conversation?</h2>
        <p style={sectionStyles.text}>
          Send a WhatsApp message with your event date, venue, and guest count if you would like a quick first exchange
          before we prepare the right proposal path.
        </p>
        <div style={sectionStyles.actions}>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Write to Casa Aurea Events on WhatsApp"
            style={sectionStyles.primaryLink}
          >
            Message us on WhatsApp
          </a>
          <p style={sectionStyles.supportText}>Available for weddings, private celebrations, and premium corporate evenings.</p>
        </div>
      </div>
    </section>
  )
}
