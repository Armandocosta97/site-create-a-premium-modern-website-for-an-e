const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    display: 'grid',
    gap: '1.5rem',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(238, 226, 207, 0.94) 100%)',
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
    color: 'rgba(32, 25, 20, 0.76)',
    lineHeight: 1.8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
  },
  card: {
    position: 'relative',
    minHeight: 'clamp(18rem, 36vw, 26rem)',
    overflow: 'hidden',
    borderRadius: '24px',
    backgroundColor: '#d8c7b0',
    boxShadow: '0 18px 44px rgba(52, 38, 26, 0.12)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'flex-end',
    padding: '1.25rem',
    background:
      'linear-gradient(180deg, rgba(23, 18, 15, 0.08) 8%, rgba(23, 18, 15, 0.3) 46%, rgba(23, 18, 15, 0.82) 100%)',
  },
  captionBox: {
    width: '100%',
    padding: '1rem 1.05rem',
    borderRadius: '18px',
    backgroundColor: 'rgba(20, 16, 13, 0.42)',
    backdropFilter: 'blur(8px)',
    color: '#f7f1e8',
  },
  captionTitle: {
    margin: 0,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '1.2rem',
    lineHeight: 1.2,
  },
  captionText: {
    margin: '0.45rem 0 0',
    color: 'rgba(247, 241, 232, 0.86)',
    lineHeight: 1.6,
    fontSize: '0.95rem',
  },
}

const galleryImages = [
  {
    title: 'Wedding dinner styling',
    description:
      'Layered tablescapes with candlelight, polished glassware, and service details tailored for elegant receptions.',
    alt: 'Elegant wedding dinner table with candles, florals, and refined place settings',
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Signature cocktail service',
    description:
      'A refined bar moment designed for aperitivo pacing, visual polish, and seamless guest flow.',
    alt: 'Bartender preparing a premium cocktail at an elegant event bar',
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Plated catering presentation',
    description:
      'Balanced courses that feel contemporary, generous, and composed for elevated celebrations.',
    alt: 'Plated fine catering dish presented with modern styling',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Reception atmosphere',
    description:
      'Warm hospitality and luminous evening settings that encourage guests to settle into the occasion.',
    alt: 'Guests gathered at a stylish reception during an evening event',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Aperitivo tablescape',
    description:
      'Textures, glassware, and floral notes arranged to frame the first impression of the event.',
    alt: 'Styled aperitivo table with premium cocktails and elegant event decor',
    src: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Celebration toast',
    description:
      'Sparkling pours and poised service that turn milestone moments into memorable rituals.',
    alt: 'Champagne glasses raised for a celebration toast at an elegant event',
    src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function GalleryGridSection() {
  return (
    <section
      id="gallery-grid"
      aria-labelledby="gallery-grid-title"
      style={sectionStyles.section}
    >
      <div style={sectionStyles.header}>
        <p style={sectionStyles.eyebrow}>Gallery collection</p>
        <h2 id="gallery-grid-title" style={sectionStyles.title}>
          A premium image grid shaped around service, atmosphere, and detail
        </h2>
        <p style={sectionStyles.intro}>
          This collection brings together the visual language of Casa Aurea
          Events: elegant food presentation, polished bar service, layered
          styling, and the warm rhythm of celebrations designed with care.
        </p>
      </div>

      <div style={sectionStyles.grid}>
        {galleryImages.map((image) => (
          <figure key={image.title} style={sectionStyles.card}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              style={sectionStyles.image}
            />
            <figcaption style={sectionStyles.overlay}>
              <div style={sectionStyles.captionBox}>
                <h3 style={sectionStyles.captionTitle}>{image.title}</h3>
                <p style={sectionStyles.captionText}>{image.description}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
