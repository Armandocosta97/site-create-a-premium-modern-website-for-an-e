const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    display: 'grid',
    gap: '1.5rem',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(248, 242, 234, 0.96) 0%, rgba(241, 231, 216, 0.92) 100%)',
    boxShadow: '0 24px 60px rgba(52, 38, 26, 0.08)',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    maxWidth: '44rem',
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
    gap: '1rem',
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
  list: {
    display: 'grid',
    gap: '0.75rem',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    paddingTop: '0.75rem',
    borderTop: '1px solid rgba(159, 123, 75, 0.14)',
  },
  drinkName: {
    display: 'block',
    color: '#201914',
    fontWeight: 700,
    lineHeight: 1.5,
  },
  drinkNote: {
    display: 'block',
    marginTop: '0.2rem',
    color: '#5a4838',
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
  footer: {
    display: 'grid',
    gap: '0.85rem',
    paddingTop: '0.5rem',
    borderTop: '1px solid rgba(159, 123, 75, 0.14)',
  },
  footerTitle: {
    margin: 0,
    color: '#201914',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '1.2rem',
  },
  footerText: {
    margin: 0,
    color: 'rgba(32, 25, 20, 0.74)',
    lineHeight: 1.75,
  },
}

const menuCategories = [
  {
    category: 'Signature Cocktails',
    title: 'House creations with an aperitivo soul',
    description:
      'Original serves built for receptions and dinners that call for elegance, freshness, and a clear visual identity at the bar.',
    drinks: [
      {
        name: 'Aurea Spritz',
        note: 'Bergamot, bitter orange, sparkling wine, and a dry herbal finish.',
      },
      {
        name: 'Villa Negroni',
        note: 'Small-batch gin, vermouth blend, cacao nib, and blood orange.',
      },
      {
        name: 'Rosato Collins',
        note: 'Rose-infused vodka, citrus cordial, and a polished floral lift.',
      },
    ],
  },
  {
    category: 'Classic Reimagined',
    title: 'Familiar cocktails refined for premium events',
    description:
      'Recognizable classics updated with better ingredients, restrained sweetness, and a service style suited to weddings and private evenings.',
    drinks: [
      {
        name: 'Milano Martini',
        note: 'Gin, dry vermouth, olive oil saline, and Amalfi lemon expression.',
      },
      {
        name: 'Espresso Velvet',
        note: 'Vodka, espresso concentrate, tonka, and a softer after-dinner profile.',
      },
      {
        name: 'Oak Boulevardier',
        note: 'Bourbon, red vermouth, bitters, and subtle barrel spice.',
      },
    ],
  },
  {
    category: 'Alcohol-Free Signatures',
    title: 'Complex zero-proof serves that still feel celebratory',
    description:
      'Layered alcohol-free drinks designed with the same care as the cocktail list, so every guest feels included in the occasion.',
    drinks: [
      {
        name: 'Garden Fizz',
        note: 'Cucumber distillate, white peach, basil, and a crisp sparkling finish.',
      },
      {
        name: 'Sera Tonic',
        note: 'Cedar, grapefruit, and botanical tonic with a bitter aperitivo edge.',
      },
      {
        name: 'Luce Sour',
        note: 'Verjus, almond, citrus, and silk foam for a bright rounded finish.',
      },
    ],
  },
]

export default function MenuCategoriesSection() {
  return (
    <section
      id="menu-categories"
      aria-labelledby="menu-categories-title"
      style={sectionStyles.section}
    >
      <div style={sectionStyles.header}>
        <p style={sectionStyles.eyebrow}>Menu categories</p>
        <h2 id="menu-categories-title" style={sectionStyles.title}>
          A drink program organized for atmosphere, flow, and guest enjoyment
        </h2>
        <p style={sectionStyles.intro}>
          The Casa Aurea menu is structured in clear families so hosts can
          balance aperitivo moments, dinner pacing, and late-evening toasts with
          a bar selection that feels polished from start to finish.
        </p>
      </div>

      <div style={sectionStyles.grid}>
        {menuCategories.map((group) => (
          <article key={group.category} style={sectionStyles.card}>
            <div>
              <p style={sectionStyles.category}>{group.category}</p>
              <h3 style={sectionStyles.cardTitle}>{group.title}</h3>
            </div>

            <p style={sectionStyles.cardText}>{group.description}</p>

            <ul style={sectionStyles.list}>
              {group.drinks.map((drink) => (
                <li key={drink.name} style={sectionStyles.listItem}>
                  <span style={sectionStyles.drinkName}>{drink.name}</span>
                  <span style={sectionStyles.drinkNote}>{drink.note}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div style={sectionStyles.footer}>
        <h3 style={sectionStyles.footerTitle}>Built to adapt to the event</h3>
        <p style={sectionStyles.footerText}>
          Each category can be expanded into a tailored event proposal with
          signature additions, premium spirits, sparkling selections, and
          service recommendations aligned to your guest count and event style.
        </p>
      </div>
    </section>
  )
}
