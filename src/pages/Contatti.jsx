import { useEffect } from 'react'
import ContactHeroSection from '../components/Contact-heroSection'
import ContactDetailsSection from '../components/Contact-detailsSection'
import ContactPhoneCta from '../components/ContactPhoneCta'
import ContactWhatsAppCta from '../components/ContactWhatsAppCta'
import OpeningHoursSection from '../components/Opening-hoursSection'

export default function Contatti() {
  useEffect(() => {
    document.title = 'Contact Casa Aurea Events | Request Your Proposal'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Contact Casa Aurea Events for wedding catering, premium mobile bar service, and refined event hospitality in Torino and surrounding areas.',
      )
    }
  }, [])

  return (
    <article aria-labelledby="contatti-title">
      <ContactHeroSection />

      <ContactDetailsSection />

      <ContactPhoneCta />

      <ContactWhatsAppCta />

      <OpeningHoursSection />

      <section aria-label="Contact closing note" className="page-closing-note">
        <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
      </section>
    </article>
  )
}
