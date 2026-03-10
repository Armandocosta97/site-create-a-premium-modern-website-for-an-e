const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(246, 239, 228, 0.96) 0%, rgba(236, 223, 205, 0.92) 100%)',
    boxShadow: '0 24px 60px rgba(52, 38, 26, 0.08)',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    marginBottom: 'clamp(1.75rem, 4vw, 2.5rem)',
    textAlign: 'left',
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
    maxWidth: '14ch',
    color: '#201914',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(2rem, 4.8vw, 3.4rem)',
    lineHeight: 1.05,
  },
  intro: {
    margin: 0,
    maxWidth: '44rem',
    color: 'rgba(32, 25, 20, 0.78)',
    fontSize: '1rem',
    lineHeight: 1.8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
  },
  card: {
    display: 'grid',
    gap: '0.75rem',
    minHeight: '100%',
    padding: '1.4rem',
    borderRadius: '24px',
    backgroundColor: 'rgba(255, 252, 247, 0.86)',
    border: '1px solid rgba(159, 123, 75, 0.14)',
  },
  label: {
    margin: 0,
    color: '#9f7b4b',
    fontSize: '0.78rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  value: {
    margin: 0,
    color: '#201914',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '1.45rem',
    lineHeight: 1.15,
  },
  description: {
    margin: 0,
    color: 'rgba(32, 25, 20, 0.74)',
    lineHeight: 1.7,
  },
  link: {
    color: '#201914',
    textDecoration: 'none',
  },
  note: {
    margin: '1.5rem 0 0',
    maxWidth: '44rem',
    color: 'rgba(32, 25, 20, 0.72)',
    lineHeight: 1.7,
  },
}

const contactItems = [
  {
    label: 'Phone',
    value: '+39 011 000000',
    href: 'tel:+39011000000',
    description: 'For planning calls, event timing questions, and proposal follow-ups during inquiry hours.',
  },
  {
    label: 'Email',
    value: 'hello@casaaureaevents.it',
    href: 'mailto:hello@casaaureaevents.it',
    description: 'Send your date, venue, guest count, and the atmosphere you would like us to create.',
  },
  {
    label: 'Service area',
    value: 'Torino and surrounding areas',
    description: 'Available for elegant weddings, private celebrations, and premium corporate evenings.',
  },
]

export default function ContactDetailsSection() {
  return (
    <section
      id="contact-details"
      aria-labelledby="contact-details-title"
      style={sectionStyles.section}
    >
      <div style={sectionStyles.header}>
        <p style={sectionStyles.eyebrow}>Contact details</p>
        <h2 id="contact-details-title" style={sectionStyles.title}>
          Share the essentials and we will guide the next step
        </h2>
        <p style={sectionStyles.intro}>
          Reach out for weddings, private dinners, brand events, and elevated celebrations that call for warm service
          and polished presentation. We keep the first conversation clear, practical, and tailored to your occasion.
        </p>
      </div>

      <div style={sectionStyles.grid}>
        {contactItems.map((item) => (
          <article key={item.label} style={sectionStyles.card}>
            <p style={sectionStyles.label}>{item.label}</p>
            <p style={sectionStyles.value}>
              {item.href ? (
                <a href={item.href} style={sectionStyles.link}>
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </p>
            <p style={sectionStyles.description}>{item.description}</p>
          </article>
        ))}
      </div>

      <p style={sectionStyles.note}>
        The most helpful first message includes your event date, approximate guest count, venue location, and whether
        you are looking for catering, bar service, or a full hospitality proposal.
      </p>
    </section>
  )
}
