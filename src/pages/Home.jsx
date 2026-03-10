import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <article aria-labelledby="home-title">
      <HeroSection />

      <section id="signature-preview" aria-labelledby="signature-preview-title">
        <h2 id="signature-preview-title">Signature services preview</h2>
        <p>
          This section introduces Casa Aurea&apos;s core offers, including
          catering, mobile bar service, and tailored hospitality for premium
          occasions.
        </p>
      </section>

      <section
        id="brand-story-preview"
        aria-labelledby="brand-story-preview-title"
      >
        <h2 id="brand-story-preview-title">Brand story preview</h2>
        <p>
          This section provides an editorial introduction to the brand&apos;s
          atmosphere, service philosophy, and event experience.
        </p>
      </section>
    </article>
  )
}
