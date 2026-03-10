import { useEffect } from 'react'
import GalleryHeroSection from '../components/Gallery-heroSection'
import GalleryGridSection from '../components/Gallery-gridSection'

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | Casa Aurea Events'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Browse the Casa Aurea Events gallery for elegant catering setups, luxury wedding tablescapes, signature cocktails, and polished event styling inspiration.',
      )
    }
  }, [])

  return (
    <article aria-labelledby="gallery-title">
      <GalleryHeroSection />
      <GalleryGridSection />
    </article>
  )
}
