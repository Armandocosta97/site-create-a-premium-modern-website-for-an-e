import MenuHeroSection from '../components/Menu-heroSection'

export default function Menu() {
  return (
    <article aria-labelledby="menu-title">
      <MenuHeroSection />

      <section id="menu-categories" aria-labelledby="menu-categories-title">
        <h2 id="menu-categories-title">Menu categories</h2>
        <p>
          The full drink list will be structured into distinct collections so
          guests can quickly understand the house signatures, reimagined
          classics, alcohol-free options, and premium bottle selections.
        </p>
      </section>
    </article>
  )
}
