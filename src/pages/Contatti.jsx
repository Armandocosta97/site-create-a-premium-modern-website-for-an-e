import ContactHeroSection from '../components/Contact-heroSection'

export default function Contatti() {
  return (
    <article aria-labelledby="contatti-title">
      <ContactHeroSection />

      <section id="contact-details">
        <h2>Contact details</h2>
        <p>
          Reach out for weddings, private dinners, brand events, and elevated celebrations that call for warm service
          and polished presentation.
        </p>
        <dl>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+39011000000">+39 011 000000</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href="mailto:hello@casaaureaevents.it">hello@casaaureaevents.it</a>
            </dd>
          </div>
          <div>
            <dt>Service area</dt>
            <dd>Torino and surrounding areas</dd>
          </div>
        </dl>
      </section>

      <section id="opening-hours">
        <h2>Availability</h2>
        <p>
          We answer event inquiries throughout the week and schedule planning calls for couples, private hosts, and
          corporate clients looking for a tailored proposal.
        </p>
        <dl>
          <div>
            <dt>Inquiry hours</dt>
            <dd>Monday to Saturday, 09:00 to 19:00</dd>
          </div>
          <div>
            <dt>Planning calls</dt>
            <dd>By appointment</dd>
          </div>
          <div>
            <dt>Best next step</dt>
            <dd>Send your event date, guest count, and venue details to start the conversation.</dd>
          </div>
        </dl>
      </section>

      <section aria-label="Contact closing note">
        <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
      </section>
    </article>
  )
}
