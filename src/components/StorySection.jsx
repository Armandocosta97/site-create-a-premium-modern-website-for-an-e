import { Link } from 'react-router-dom'

const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5rem)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
    gap: '1.5rem',
    padding: 'clamp(1.4rem, 4vw, 2.75rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(248, 242, 233, 0.96) 0%, rgba(239, 228, 213, 0.92) 100%)',
    boxShadow: '0 20px 50px rgba(78, 59, 44, 0.12)',
  },
  content: {
    display: 'grid',
    gap: '1.1rem',
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
    maxWidth: '12ch',
    color: '#221914',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(2rem, 5vw, 3.4rem)',
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
    gap: '1rem',
  },
  paragraph: {
    margin: 0,
    color: 'rgba(34, 25, 20, 0.78)',
    fontSize: '0.98rem',
    lineHeight: 1.85,
  },
  detailsPanel: {
    display: 'grid',
    gap: '1rem',
    alignContent: 'start',
    padding: 'clamp(1.25rem, 3vw, 2rem)',
    borderRadius: '28px',
    backgroundColor: '#221914',
    color: '#f7f1e8',
  },
  detailsTitle: {
    margin: 0,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '1.55rem',
    lineHeight: 1.2,
    fontWeight: 600,
  },
  detailsText: {
    margin: 0,
    color: 'rgba(247, 241, 232, 0.78)',
    lineHeight: 1.75,
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gap: '0.85rem',
  },
  listItem: {
    paddingBottom: '0.85rem',
    borderBottom: '1px solid rgba(217, 191, 141, 0.18)',
    color: '#f7f1e8',
    lineHeight: 1.7,
  },
  action: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    maxWidth: '100%',
    minHeight: '3.1rem',
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    backgroundColor: '#d9bf8d',
    color: '#221914',
    textDecoration: 'none',
    fontWeight: 700,
    textAlign: 'center',
  },
}

const storyParagraphs = [
  'Casa Aurea Events was created for hosts who want an event to feel cohesive from the first impression to the final pour. Our work brings catering, bar service, and event atmosphere into one composed experience so every choice feels intentional rather than assembled from separate suppliers.',
  'The studio grew around a simple idea: premium hospitality should feel warm, calm, and beautifully paced. We shape each proposal around the setting, the guest list, and the tone of the occasion, allowing food, cocktails, styling, and service to move together with quiet precision.',
  'Whether we are serving a wedding dinner, a private celebration, or a polished corporate evening, the goal stays the same. Guests should feel looked after effortlessly, and the host should see a celebration that reflects both taste and ease.',
]

const storyValues = [
  'Presentation is treated as part of the guest experience, not as decoration added at the end.',
  'Service rhythm is planned carefully so the event feels fluid, attentive, and never rushed.',
  'Every menu and bar proposal is tailored to the atmosphere the client wants to create.',
]

export default function StorySection() {
  return (
    <section id="story" aria-labelledby="story-title" style={sectionStyles.section}>
      <div style={sectionStyles.content}>
        <p style={sectionStyles.eyebrow}>Our story</p>
        <h2 id="story-title" style={sectionStyles.title}>
          Built for occasions that deserve more than standard service
        </h2>
        <p style={sectionStyles.intro}>
          Casa Aurea Events brings together refined catering, elevated bar
          service, and a strong sense of atmosphere for clients who care about
          how an event feels as much as how it looks.
        </p>

        <div style={sectionStyles.body}>
          {storyParagraphs.map((paragraph) => (
            <p key={paragraph} style={sectionStyles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <aside aria-label="Casa Aurea story details" style={sectionStyles.detailsPanel}>
        <h3 style={sectionStyles.detailsTitle}>What shaped the brand</h3>
        <p style={sectionStyles.detailsText}>
          Our approach is informed by modern Italian hospitality: luminous
          tables, composed service, elegant drinks, and details that feel
          considered without ever becoming theatrical.
        </p>

        <ul style={sectionStyles.list}>
          {storyValues.map((value) => (
            <li key={value} style={sectionStyles.listItem}>
              {value}
            </li>
          ))}
        </ul>

        <Link to="/contatti" style={sectionStyles.action}>
          Request your event proposal
        </Link>
      </aside>
    </section>
  )
}
