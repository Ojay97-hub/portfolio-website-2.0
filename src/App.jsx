import { useEffect, useRef, Suspense, lazy } from 'react'
import useReveal from './hooks/useReveal'

// Critical components loaded immediately
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

// Lazy load non-critical sections for better performance
const About = lazy(() => import('./sections/About'))
const Services = lazy(() => import('./sections/Services'))
const FeaturedProjects = lazy(() => import('./sections/FeaturedProjects'))
const UIDesigns = lazy(() => import('./sections/UIDesigns'))
// CTA section merged into ContactForm, so we don't need it separately
const ContactInfo = lazy(() => import('./sections/ContactInfo'))
const ContactForm = lazy(() => import('./sections/ContactForm'))
const Benefits = lazy(() => import('./sections/Benefits'))
const Education = lazy(() => import('./sections/Education'))
const SiteFooter = lazy(() => import('./sections/SiteFooter'))


// Each lazy section gets its own boundary so one slow chunk doesn't hold
// back the rest of the page. min-h reserves space to limit layout shift.
const Lazy = ({ children, minHeight = 'min-h-[60vh]' }) => (
  <Suspense fallback={<div className={minHeight} aria-hidden="true" />}>
    {children}
  </Suspense>
)

function App() {
  const rootRef = useRef(null)
  useReveal(rootRef)

  // Enable smooth scrolling and handle hash navigation
  useEffect(() => {
    // Note: Removed image preloading to avoid "preload not used" warnings
    // since all images are lazy loaded and may not be above the fold

    // Handle initial hash in URL
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }

    // Handle browser back/forward navigation
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div ref={rootRef} className="App nf-root">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* Hero Section - Always loaded immediately */}
        <Hero />

        <Lazy><FeaturedProjects /></Lazy>
        <Lazy><UIDesigns /></Lazy>
        <Lazy><About /></Lazy>
        {/* Services Section (Combined Skills & What I Do) */}
        <Lazy><Services /></Lazy>
        <Lazy><Benefits /></Lazy>
        <Lazy><Education /></Lazy>
        {/* Contact Form Section (Includes CTA) */}
        <Lazy><ContactForm /></Lazy>
        <Lazy minHeight="min-h-[20vh]"><ContactInfo /></Lazy>
      </main>

      <Lazy minHeight="h-20"><SiteFooter /></Lazy>
    </div>
  )
}

export default App
