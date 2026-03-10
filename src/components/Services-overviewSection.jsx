import { Link } from 'react-router-dom'

const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    display: 'grid',
    gap: '1.5rem',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(238, 227, 211, 0.9) 100%)',
    boxShadow: '0 24px 60px rgba(52, 38, 26, 0.08)',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    maxWidth: '46rem',
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
    color: '#201914',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(2rem, 4.8vw, 3.5rem)',
    lineHeight: 1.05,
  },
  intro: {
    margin: 0,
    color: 'rgba(32, 25, 20, 0.78)',
    lineHeight: 1.8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
  },
  card: {
    display: 'grid',
    gap: '0.9rem',
    minHeight: '100%',
    padding: '1.4rem',
    borderRadius: '24px',
    backgroundColor: 'rgba(255, 252, 247, 0.84)',
    border: '1px solid rgba(159, 123, 75, 0.14)',
  },
  category: {
    margin: 0,
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
    fontSize: '1.45rem',
    lineHeight: 1.15,
  },
  cardText: {
    margin: 0,
    color: 'rgba(32, 25, 20, 0.76)',
    lineHeight: 1.75,
  },
  premiumNote: {
    margin: 0,
    color: '#5a4838',
    fontSize: '0.96rem',
    lineHeight: 1.65,
    fontWeight: 600,
  },
  processPanel: {
    display: 'grid',
    gap: '1rem',
    padding: 'clamp(1.25rem, 3vw, 1.75rem)',
    borderRadius: '28px',
    backgroundColor: '#241c17',
    color: '#f6efe4',
  },
  processTitle: {
    margin: 0,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '1.6rem',
    lineHeight: 1.2,
  },
  processList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '0.9rem',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  processItem: {
    display: 'grid',
    gap: '0.45rem',
    padding: '1rem',
    borderRadius: '20px',
    backgroundColor: 'rgba(246, 239, 228, 0.08)',
    border: '1px solid rgba(217, 191, 141, 0.12)',
  },
  processStep: {
    color: '#d9bf8d',
    fontSize: '0.76rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  processLabel: {
    color: '#f6efe4',
    fontWeight: 700,
    lineHeight: 1.45,
  },
  processText: {
    color: 'rgba(246, 239, 228, 0.74)',
    lineHeight: 1.7,
  },
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    margin: 0,
    maxWidth: '40rem',
    color: 'rgba(32, 25, 20, 0.72)',
    lineHeight: 1.75,
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

const services = [
  {
    category: 'Catering',
    title: 'Tailored dining with polished presentation',
    description:
      'From aperitivo tables to plated dinners, menus are shaped around seasonality, guest flow, and a refined visual tone suited to the occasion.',
    premiumNote:
      'Designed for hosts who want cuisine to feel as considered as the setting itself.',
  },
  {
    category: 'Premium bar',
    title: 'Mobile cocktail service with signature character',
    description:
      'Our bar program pairs elegant classics, house signatures, and premium pours with bartending that complements the rhythm of weddings, private parties, and corporate evenings.',
    premiumNote:
      'Built to create atmosphere without losing precision, pace, or hospitality.',
  },
  {
    category: 'Weddings',
    title: 'Service designed for celebration milestones',
    description:
      'Casa Aurea supports the full wedding experience, from welcome drinks and dinner service to dessert moments, toasts, and a composed open-bar close.',
    premiumNote:
      'Aspirational in feel, but carefully organized so the day remains effortless for the couple.',
  },
  {
    category: 'Private events',
    title: 'Elegant hosting for intimate and social occasions',
    description:
      'Birthday dinners, villa gatherings, anniversaries, and at-home receptions receive the same premium service standard and attention to guest experience.',
    premiumNote:
      'Scaled with care so smaller events still feel generous, elevated, and beautifully hosted.',
  },
  {
    category: 'Corporate evenings',
    title: 'Hospitality that supports brand presence',
    description:
      'For launches, partner dinners, and executive events, we build food and drink service that feels credible, smooth, and aligned with the tone of the brand.',
    premiumNote:
      'Professional enough for business settings, warm enough to remain memorable.',
  },
  {
    category: 'Styling support',
    title: 'Atmosphere guided beyond the menu',
    description:
      'We advise on mise en place, bar presentation, guest-facing details, and service styling so the event reads as one coherent experience.',
    premiumNote:
      'The difference is often in timing, restraint, and the quiet details guests immediately feel.',
  },
]

const process = [
  {
    step: '01',
    label: 'Consultation',
    text: 'We define event style, guest count, and the hospitality tone you want to create.',
  },
  {
    step: '02',
    label: 'Proposal',
    text: 'A tailored service direction is composed around catering, bar format, and presentation priorities.',
  },
  {
    step: '03',
    label: 'Refinement',
    text: 'Menus, signature drinks, and styling details are adjusted until the experience feels fully aligned.',
  },
  {
    step: '04',
    label: 'Service day',
    text: 'Our team delivers with calm coordination, attentive pacing, and a premium standard from first welcome to final toast.',
  },
]

export default function ServicesOverviewSection() {
  return (
    <section
      id="services-overview"
      aria-labelledby="services-overview-title"
      style={sectionStyles.section}
    >
      <div style={sectionStyles.header}>
        <p style={sectionStyles.eyebrow}>Service overview</p>
        <h2 id="services-overview-title" style={sectionStyles.title}>
          A complete event offering shaped around food, drinks, and atmosphere
        </h2>
        <p style={sectionStyles.intro}>
          Casa Aurea Events brings together premium catering, elevated
          bartending, and thoughtful styling support so each occasion feels
          coherent, graceful, and genuinely well hosted. The service structure
          is flexible enough for intimate private events and robust enough for
          larger celebrations with layered hospitality needs.
        </p>
      </div>

      <div style={sectionStyles.grid}>
        {services.map((service) => (
          <article key={service.title} style={sectionStyles.card}>
            <p style={sectionStyles.category}>{service.category}</p>
            <h3 style={sectionStyles.cardTitle}>{service.title}</h3>
            <p style={sectionStyles.cardText}>{service.description}</p>
            <p style={sectionStyles.premiumNote}>{service.premiumNote}</p>
          </article>
        ))}
      </div>

      <div style={sectionStyles.processPanel}>
        <h3 style={sectionStyles.processTitle}>How the service comes together</h3>
        <ul style={sectionStyles.processList}>
          {process.map((item) => (
            <li key={item.step} style={sectionStyles.processItem}>
              <span style={sectionStyles.processStep}>{item.step}</span>
              <span style={sectionStyles.processLabel}>{item.label}</span>
              <span style={sectionStyles.processText}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={sectionStyles.footer}>
        <p style={sectionStyles.footerText}>
          Every proposal is adjusted to the event setting, guest profile, and
          hosting priorities, with clear recommendations on service format,
          beverage flow, and presentation.
        </p>
        <Link to="/contatti" style={sectionStyles.action}>
          Request a tailored proposal
        </Link>
      </div>
    </section>
  )
}
