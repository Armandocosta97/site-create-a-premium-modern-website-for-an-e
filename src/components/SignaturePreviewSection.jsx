import { Link } from 'react-router-dom'

const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(246, 239, 228, 0.9) 0%, rgba(239, 228, 210, 0.72) 100%)',
    boxShadow: '0 24px 60px rgba(52, 38, 26, 0.08)',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    alignItems: 'end',
    marginBottom: 'clamp(1.75rem, 4vw, 2.5rem)',
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
    fontSize: 'clamp(2rem, 4.8vw, 3.5rem)',
    lineHeight: 1.05,
  },
  intro: {
    margin: 0,
    maxWidth: '42rem',
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
    gap: '0.85rem',
    minHeight: '100%',
    padding: '1.4rem',
    borderRadius: '24px',
    backgroundColor: 'rgba(255, 252, 247, 0.84)',
    border: '1px solid rgba(159, 123, 75, 0.12)',
  },
  index: {
    color: '#9f7b4b',
    fontSize: '0.78rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  cardTitle: {
    margin: 0,
    color: '#201914',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '1.4rem',
    lineHeight: 1.15,
  },
  cardBody: {
    margin: 0,
    color: 'rgba(32, 25, 20, 0.76)',
    lineHeight: 1.7,
  },
  accent: {
    margin: 0,
    color: '#5a4838',
    fontSize: '0.96rem',
    lineHeight: 1.6,
    fontWeight: 600,
  },
  footer: {
    marginTop: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  note: {
    margin: 0,
    maxWidth: '38rem',
    color: 'rgba(32, 25, 20, 0.72)',
    lineHeight: 1.7,
  },
  action: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '3.15rem',
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    backgroundColor: '#201914',
    color: '#f7f1e8',
    textDecoration: 'none',
    fontWeight: 700,
  },
}

const signatureServices = [
  {
    id: '01',
    title: 'Curated catering',
    description:
      'Plated dinners, aperitivo tables, and elegant service flows designed around the rhythm of your event.',
    accent: 'Tailored menus with refined presentation and confident execution.',
  },
  {
    id: '02',
    title: 'Mobile bar service',
    description:
      'A polished cocktail program with premium spirits, signature serves, and bartenders who understand atmosphere.',
    accent: 'Built for weddings, private celebrations, and brand-hosted evenings.',
  },
  {
    id: '03',
    title: 'Hospitality styling',
    description:
      'Support with table mood, service details, and guest-facing presentation so the entire experience feels cohesive.',
    accent: 'Every touchpoint is considered, from welcome drinks to the final toast.',
  },
]

export default function SignaturePreviewSection() {
  return (
    <section
      id="signature-preview"
      aria-labelledby="signature-preview-title"
      style={sectionStyles.section}
    >
      <div style={sectionStyles.header}>
        <p style={sectionStyles.eyebrow}>Signature services</p>
        <h2 id="signature-preview-title" style={sectionStyles.title}>
          Refined event service with a clear point of view
        </h2>
        <p style={sectionStyles.intro}>
          Casa Aurea pairs premium catering, elevated bar service, and
          intentional hospitality to create celebrations that feel graceful,
          seamless, and distinctly memorable.
        </p>
      </div>

      <div style={sectionStyles.grid}>
        {signatureServices.map((service) => (
          <article key={service.id} style={sectionStyles.card}>
            <span style={sectionStyles.index}>{service.id}</span>
            <h3 style={sectionStyles.cardTitle}>{service.title}</h3>
            <p style={sectionStyles.cardBody}>{service.description}</p>
            <p style={sectionStyles.accent}>{service.accent}</p>
          </article>
        ))}
      </div>

      <div style={sectionStyles.footer}>
        <p style={sectionStyles.note}>
          Each event proposal is shaped around guest experience, service pace,
          and the visual tone you want the day to hold.
        </p>
        <Link to="/menu" style={sectionStyles.action}>
          Discover the offering
        </Link>
      </div>
    </section>
  )
}
