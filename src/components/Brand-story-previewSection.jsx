import { Link } from 'react-router-dom'

const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    padding: 'clamp(1.25rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    backgroundColor: '#241c17',
    color: '#f6efe4',
    boxShadow: '0 24px 60px rgba(36, 28, 23, 0.18)',
  },
  media: {
    minHeight: '20rem',
    borderRadius: '28px',
    backgroundImage:
      "linear-gradient(180deg, rgba(31, 24, 19, 0.16) 0%, rgba(31, 24, 19, 0.5) 100%), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    display: 'grid',
    gap: '1.25rem',
    padding: 'clamp(0.5rem, 1vw, 1rem)',
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
    maxWidth: '12ch',
    color: '#f6efe4',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(2rem, 5vw, 3.6rem)',
    lineHeight: 1.05,
  },
  intro: {
    margin: 0,
    maxWidth: '36rem',
    color: 'rgba(246, 239, 228, 0.82)',
    fontSize: '1rem',
    lineHeight: 1.8,
  },
  list: {
    display: 'grid',
    gap: '0.9rem',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    display: 'grid',
    gap: '0.3rem',
    paddingBottom: '0.9rem',
    borderBottom: '1px solid rgba(217, 191, 141, 0.18)',
  },
  itemTitle: {
    color: '#f6efe4',
    fontSize: '1rem',
    fontWeight: 700,
  },
  itemText: {
    color: 'rgba(246, 239, 228, 0.74)',
    lineHeight: 1.7,
  },
  footer: {
    display: 'grid',
    gap: '1rem',
  },
  note: {
    margin: 0,
    color: 'rgba(246, 239, 228, 0.72)',
    lineHeight: 1.7,
  },
  actionRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.875rem',
  },
  primaryAction: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '3.15rem',
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    backgroundColor: '#d9bf8d',
    color: '#1f1813',
    textDecoration: 'none',
    fontWeight: 700,
  },
  secondaryAction: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '3.15rem',
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    border: '1px solid rgba(246, 239, 228, 0.18)',
    backgroundColor: 'rgba(246, 239, 228, 0.06)',
    color: '#f6efe4',
    textDecoration: 'none',
    fontWeight: 600,
  },
}

const storyPoints = [
  {
    title: 'Tailored to the occasion',
    text: 'Each proposal is shaped around your guest list, service rhythm, and the visual atmosphere you want the event to hold.',
  },
  {
    title: 'Hospitality with presence',
    text: 'Casa Aurea brings composed service, calm coordination, and details that make premium events feel effortless for hosts and guests alike.',
  },
  {
    title: 'Italian refinement, modern tone',
    text: 'Menus, cocktails, and styling are designed to feel luminous, contemporary, and grounded in a sense of occasion rather than excess.',
  },
]

export default function BrandStoryPreviewSection() {
  return (
    <section
      id="brand-story-preview"
      aria-labelledby="brand-story-preview-title"
      style={sectionStyles.section}
    >
      <div style={sectionStyles.media} aria-hidden="true" />

      <div style={sectionStyles.content}>
        <p style={sectionStyles.eyebrow}>The Casa Aurea point of view</p>
        <h2 id="brand-story-preview-title" style={sectionStyles.title}>
          Events shaped with warmth, timing, and visual restraint
        </h2>
        <p style={sectionStyles.intro}>
          We design food and bar experiences that feel beautifully hosted from
          the first welcome pour to the final late-evening toast. The result is
          polished, personal, and composed enough for milestone moments.
        </p>

        <ul style={sectionStyles.list}>
          {storyPoints.map((point) => (
            <li key={point.title} style={sectionStyles.listItem}>
              <span style={sectionStyles.itemTitle}>{point.title}</span>
              <span style={sectionStyles.itemText}>{point.text}</span>
            </li>
          ))}
        </ul>

        <div style={sectionStyles.footer}>
          <p style={sectionStyles.note}>
            From intimate celebrations in Torino to larger destination-style
            receptions, our approach stays consistent: elegant presentation,
            attentive pacing, and hospitality guests remember.
          </p>

          <div style={sectionStyles.actionRow}>
            <Link to="/chi-siamo" style={sectionStyles.primaryAction}>
              Read our story
            </Link>
            <Link to="/contatti" style={sectionStyles.secondaryAction}>
              Book a discovery call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
