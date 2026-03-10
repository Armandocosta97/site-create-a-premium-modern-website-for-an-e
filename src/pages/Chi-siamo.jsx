import { useEffect } from 'react'
import AboutHeroSection from '../components/About-heroSection'
import PhilosophySection from '../components/PhilosophySection'
import StorySection from '../components/StorySection'

export default function ChiSiamo() {
  useEffect(() => {
    document.title = 'About Casa Aurea Events | Hospitality With Intent'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Learn about Casa Aurea Events, a premium event catering and bartending brand focused on thoughtful hospitality, elegant presentation, and refined guest experiences.',
      )
    }
  }, [])

  return (
    <article aria-labelledby="chi-siamo-title">
      <AboutHeroSection />

      <StorySection />

      <PhilosophySection />
    </article>
  )
}
