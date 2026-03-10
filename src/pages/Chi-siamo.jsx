import AboutHeroSection from '../components/About-heroSection'
import StorySection from '../components/StorySection'

export default function ChiSiamo() {
  return (
    <article aria-labelledby="chi-siamo-title">
      <AboutHeroSection />

      <StorySection />

      <section id="philosophy" aria-labelledby="philosophy-title">
        <div>
          <h2 id="philosophy-title">Our philosophy</h2>
          <p>
            We believe premium events are defined by the details guests notice
            without being told: the pacing of service, the elegance of the
            setting, the quality of each pour, and the sense that every moment
            has been prepared with intention.
          </p>
          <p>
            That focus on presentation, timing, and guest comfort is what makes
            Casa Aurea Events feel personal, polished, and ready for follow-up
            content in the next tasks.
          </p>
        </div>
      </section>
    </article>
  )
}
