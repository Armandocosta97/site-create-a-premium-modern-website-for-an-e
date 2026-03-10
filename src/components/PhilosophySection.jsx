import { Link } from 'react-router-dom'

const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5rem)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    alignItems: 'stretch',
  },
  contentPanel: {
    display: 'grid',
    gap: '1.15rem',
    padding: 'clamp(1.5rem, 4vw, 2.75rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(248, 242, 233, 0.96) 0%, rgba(238, 227, 212, 0.92) 100%)',
    boxShadow: '0 20px 50px rgba(78, 59, 44, 0.12)',
    textAlign: 'left',
  },
  eyebrow: {
    margin: 0,
    color: '#9f7a4b',
    fontSize: '0.8rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  title: {
    margin: 0,
    maxWidth: '13ch',
    color: '#221914',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(2rem, 5vw, 3.3rem)',
    lineHeight: 1.08,
    fontWeight: 600,
  },
  intro: {
    margin: 0,
    maxWidth: '38rem',
    color: 'rgba(34, 25, 20, 0.82)',
    fontSize: '1rem',
    lineHeight: 1.85,
  },
  body: {
    display: 'grid',
    gap: '0.95rem',
  },
  paragraph: {
    margin: 0,
    color: 'rgba(34, 25, 20, 0.78)',
    fontSize: '0.98rem',
    lineHeight: 1.85,
  },
  detailPanel: {
    position: 'relative',
    overflow: 'hidden',
    display: 'grid',
    gap: '1.15rem',
    alignContent: 'start',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    backgroundColor: '#241c17',
    color: '#f6efe4',
    boxShadow: '0 24px 60px rgba(36, 28, 23, 0.18)',
  },
  detailGlow: {
    position: 'absolute',
    inset: 'auto -6rem -6rem auto',
    width: '14rem',
    height: '14rem',
    borderRadius: '999px',
    background:
      'radial-gradient(circle, rgba(217, 191, 141, 0.24) 0%, rgba(217, 191, 141, 0) 72%)',
    pointerEvents: 'none',
  },
  detailTitle: {
    margin: 0,
    maxWidth: '14ch',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
    lineHeight: 1.15,
    fontWeight: 600,
  },
  detailText: {
    margin: 0,
    color: 'rgba(246, 239, 228, 0.78)',
    lineHeight: 1.8,
  },
  principles: {
    display: 'grid',
    gap: '0.85rem',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  principle: {
    paddingBottom: '0.85rem',
    borderBottom: '1px solid rgba(217, 191, 141, 0.18)',
  },
  principleTitle: {
    display: 'block',
    marginBottom: '0.3rem',
    color: '#f6efe4',
    fontSize: '1rem',
    fontWeight: 700,
  },
  principleText: {
    color: 'rgba(246, 239, 228, 0.74)',
    lineHeight: 1.7,
  },
  action: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    minHeight: '3.1rem',
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    backgroundColor: '#d9bf8d',
    color: '#221914',
    textDecoration: 'none',
    fontWeight: 700,
  },
}

const philosophyParagraphs = [
  'We believe the strongest events are never defined by volume or excess. They are remembered because every detail feels intentional, from the welcome moment to the final service pass.',
  'That is why Casa Aurea approaches catering, drinks, and styling as one continuous experience. Menus, bar rhythm, table presentation, and guest flow are shaped together so the atmosphere feels composed rather than assembled.',
  'Our role is to bring calm confidence behind the scenes while creating a setting that feels polished, generous, and fully aligned with the client’s taste.',
]

const philosophyPrinciples = [
  {
    title: 'Care in the details',
    text: 'Presentation, glassware, service timing, and finishing touches are treated as part of the experience itself.',
  },
  {
    title: 'Hospitality with grace',
    text: 'Guests should feel genuinely looked after, with service that is attentive, elegant, and never intrusive.',
  },
  {
    title: 'Atmosphere with purpose',
    text: 'Every proposal is shaped to support the tone of the event, whether intimate, celebratory, or distinctly formal.',
  },
]

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-title"
      style={sectionStyles.section}
    >
      <div style={sectionStyles.contentPanel}>
        <p style={sectionStyles.eyebrow}>Our philosophy</p>
        <h2 id="philosophy-title" style={sectionStyles.title}>
          Refined hospitality should feel seamless, not staged
        </h2>
        <p style={sectionStyles.intro}>
          We shape each event around how people gather, dine, toast, and move
          through the space so the result feels elegant from every angle.
        </p>

        <div style={sectionStyles.body}>
          {philosophyParagraphs.map((paragraph) => (
            <p key={paragraph} style={sectionStyles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <aside aria-label="Casa Aurea philosophy details" style={sectionStyles.detailPanel}>
        <div style={sectionStyles.detailGlow} aria-hidden="true" />
        <h3 style={sectionStyles.detailTitle}>
          What guides every Casa Aurea event
        </h3>
        <p style={sectionStyles.detailText}>
          Our standard is simple: guests should feel the quality immediately,
          while the host feels the ease of working with a team that has already
          thought through the rhythm of the day.
        </p>

        <ul style={sectionStyles.principles}>
          {philosophyPrinciples.map((principle) => (
            <li key={principle.title} style={sectionStyles.principle}>
              <span style={sectionStyles.principleTitle}>{principle.title}</span>
              <span style={sectionStyles.principleText}>{principle.text}</span>
            </li>
          ))}
        </ul>

        <Link to="/contatti" style={sectionStyles.action}>
          Book a discovery call
        </Link>
      </aside>
    </section>
  )
}
