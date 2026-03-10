import MenuHeroSection from '../components/Menu-heroSection'
import MenuCategoriesSection from '../components/Menu-categoriesSection'

export default function Menu() {
  return (
    <article aria-labelledby="menu-title">
      <MenuHeroSection />
      <MenuCategoriesSection />
    </article>
  )
}
