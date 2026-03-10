import HeroSection from '../components/HeroSection'
import BrandStoryPreviewSection from '../components/Brand-story-previewSection'
import SignaturePreviewSection from '../components/SignaturePreviewSection'

export default function Home() {
  return (
    <article aria-labelledby="home-title">
      <HeroSection
        primaryCta={{
          label: 'Request your event proposal',
          to: '/menu',
        }}
        secondaryCta={{
          label: 'Contact us for your event',
          to: '/contatti',
        }}
      />
      <SignaturePreviewSection />
      <BrandStoryPreviewSection />
    </article>
  )
}
