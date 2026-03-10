import { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import BrandStoryPreviewSection from '../components/Brand-story-previewSection'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'
import SignaturePreviewSection from '../components/SignaturePreviewSection'

export default function Home() {
  useEffect(() => {
    document.title = 'Casa Aurea Events | Premium Catering & Bar Service'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Casa Aurea Events delivers premium catering, elevated bar service, and modern Italian hospitality for weddings, celebrations, and refined gatherings.',
      )
    }
  }, [])

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
      <FloatingWhatsAppButton />
    </article>
  )
}
