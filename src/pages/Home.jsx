import HeroSection from '../components/HeroSection'
import SignaturePreviewSection from '../components/SignaturePreviewSection'

export default function Home() {
  return (
    <article aria-labelledby="home-title">
      <HeroSection />
      <SignaturePreviewSection />

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
