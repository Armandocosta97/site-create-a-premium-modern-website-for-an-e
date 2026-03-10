import AboutHeroSection from '../components/About-heroSection'

export default function ChiSiamo() {
  return (
    <article aria-labelledby="chi-siamo-title">
      <AboutHeroSection />

      <section id="story" aria-labelledby="story-title">
        <div>
          <h2 id="story-title">Our story</h2>
          <p>
            Casa Aurea Events was created for clients who want more than a
            service list. We bring together elegant food presentation, polished
            bar service, and calm event coordination so each celebration feels
            cohesive, gracious, and beautifully hosted.
          </p>
          <p>
            From intimate private dinners to larger wedding receptions, our work
            is guided by balance: warm hospitality, precise execution, and an
            atmosphere that always feels considered rather than overstated.
          </p>
        </div>
      </section>

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
