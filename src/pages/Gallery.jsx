import GalleryHeroSection from '../components/Gallery-heroSection'
import GalleryGridSection from '../components/Gallery-gridSection'

export default function Gallery() {
  return (
    <article aria-labelledby="gallery-title">
      <GalleryHeroSection />
      <GalleryGridSection />
    </article>
  )
}
