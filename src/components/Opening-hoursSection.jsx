const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    backgroundColor: '#231b16',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.16)',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    marginBottom: 'clamp(1.75rem, 4vw, 2.5rem)',
    textAlign: 'left',
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
    maxWidth: '14ch',
    color: '#f7f1e8',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(2rem, 4.8vw, 3.4rem)',
    lineHeight: 1.05,
  },
  intro: {
    margin: 0,
    maxWidth: '44rem',
    color: 'rgba(247, 241, 232, 0.78)',
    fontSize: '1rem',
    lineHeight: 1.8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
    gap: '1rem',
  },
  card: {
    display: 'grid',
    gap: '0.75rem',
    minHeight: '100%',
    padding: '1.4rem',
    borderRadius: '24px',
    backgroundColor: 'rgba(247, 241, 232, 0.08)',
    border: '1px solid rgba(217, 191, 141, 0.16)',
  },
  label: {
    margin: 0,
    color: '#d9bf8d',
    fontSize: '0.78rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  value: {
    margin: 0,
    color: '#f7f1e8',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '1.45rem',
    lineHeight: 1.15,
  },
  description: {
    margin: 0,
    color: 'rgba(247, 241, 232, 0.72)',
    lineHeight: 1.7,
  },
  note: {
    margin: '1.5rem 0 0',
    maxWidth: '44rem',
    color: 'rgba(247, 241, 232, 0.72)',
    lineHeight: 1.7,
  },
}

const availabilityItems = [
  {
    label: 'Inquiry hours',
    value: 'Monday to Saturday',
    description: 'We review new event requests from 09:00 to 19:00 and reply with care, context, and next steps.',
  },
  {
    label: 'Planning calls',
    value: 'By appointment',
    description: 'Consultations are scheduled around venue visits, tastings, and proposal reviews for a calm planning flow.',
  },
  {
    label: 'Response focus',
    value: 'Tailored proposals',
    description: 'Share your date, guest count, venue, and desired atmosphere so we can shape the right hospitality brief.',
  },
]

export default function OpeningHoursSection() {
  return (
    <section
      id="opening-hours"
      aria-labelledby="opening-hours-title"
      style={sectionStyles.section}
    >
      <div style={sectionStyles.header}>
        <p style={sectionStyles.eyebrow}>Availability</p>
        <h2 id="opening-hours-title" style={sectionStyles.title}>
          Clear response windows for thoughtful event planning
        </h2>
        <p style={sectionStyles.intro}>
          We keep inquiries organised and personal, with time set aside for proposal conversations, planning calls, and
          guest-experience details that deserve careful attention.
        </p>
      </div>

      <div style={sectionStyles.grid}>
        {availabilityItems.map((item) => (
          <article key={item.label} style={sectionStyles.card}>
            <p style={sectionStyles.label}>{item.label}</p>
            <p style={sectionStyles.value}>{item.value}</p>
            <p style={sectionStyles.description}>{item.description}</p>
          </article>
        ))}
      </div>

      <p style={sectionStyles.note}>
        For the fastest and most useful reply, include your event type, estimated guest count, venue location, and
        whether you are looking for catering, bar service, or full hospitality support.
      </p>
    </section>
  )
}
