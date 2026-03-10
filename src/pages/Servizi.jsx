import { useEffect } from 'react'
import ServicesHeroSection from '../components/Services-heroSection'
import ServicesOverviewSection from '../components/Services-overviewSection'

export default function Servizi() {
  useEffect(() => {
    document.title = 'Services | Casa Aurea Events'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Explore Casa Aurea Events services, from luxury wedding catering and premium bartending to private party hosting, corporate evenings, and styling support.',
      )
    }
  }, [])

  return (
    <article aria-labelledby="servizi-title">
      <ServicesHeroSection />
      <ServicesOverviewSection />
    </article>
  )
}
