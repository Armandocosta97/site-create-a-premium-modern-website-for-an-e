import { useEffect } from 'react'
import MenuHeroSection from '../components/Menu-heroSection'
import MenuCategoriesSection from '../components/Menu-categoriesSection'

export default function Menu() {
  useEffect(() => {
    document.title = 'Drink List | Casa Aurea Events'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Discover the Casa Aurea Events drink list, featuring signature cocktails, refined aperitivo selections, alcohol-free serves, and premium bubbles for elegant events.',
      )
    }
  }, [])

  return (
    <article aria-labelledby="menu-title">
      <MenuHeroSection />
      <MenuCategoriesSection />
    </article>
  )
}
