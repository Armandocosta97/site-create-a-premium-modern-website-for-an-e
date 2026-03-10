import AboutHeroSection from '../components/About-heroSection'
import PhilosophySection from '../components/PhilosophySection'
import StorySection from '../components/StorySection'

export default function ChiSiamo() {
  return (
    <article aria-labelledby="chi-siamo-title">
      <AboutHeroSection />

      <StorySection />

      <PhilosophySection />
    </article>
  )
}
