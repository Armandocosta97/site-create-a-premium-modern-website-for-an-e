import GalleryHeroSection from '../components/Gallery-heroSection'

export default function Gallery() {
  return (
    <article aria-labelledby="gallery-title">
      <GalleryHeroSection />

      <section id="gallery-grid" aria-labelledby="gallery-grid-title">
        <h2 id="gallery-grid-title">Gallery collection</h2>
        <p>
          This page is prepared for the premium image grid that will showcase
          catering presentation, cocktail service, event styling, and guest
          atmosphere across Casa Aurea Events experiences.
        </p>
      </section>
    </article>
  )
}
