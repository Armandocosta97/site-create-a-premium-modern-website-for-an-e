import ContactHeroSection from '../components/Contact-heroSection'
import ContactDetailsSection from '../components/Contact-detailsSection'
import ContactWhatsAppCta from '../components/ContactWhatsAppCta'
import OpeningHoursSection from '../components/Opening-hoursSection'

export default function Contatti() {
  return (
    <article aria-labelledby="contatti-title">
      <ContactHeroSection />

      <ContactDetailsSection />

      <ContactWhatsAppCta />

      <OpeningHoursSection />

      <section aria-label="Contact closing note">
        <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
      </section>
    </article>
  )
}
