import { useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

// Critical components loaded immediately
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

// Lazy load non-critical sections for better performance
const About = lazy(() => import('./sections/About'))
const WorkTypes = lazy(() => import('./sections/WorkTypes'))
const Services = lazy(() => import('./sections/Services'))
const FeaturedProjects = lazy(() => import('./sections/FeaturedProjects'))
const UIDesigns = lazy(() => import('./sections/UIDesigns'))
// CTA section merged into ContactForm, so we don't need it separately
const ContactInfo = lazy(() => import('./sections/ContactInfo'))
const ContactForm = lazy(() => import('./sections/ContactForm'))
const Benefits = lazy(() => import('./sections/Benefits'))
const Education = lazy(() => import('./sections/Education'))
const Footer = lazy(() => import('./sections/Footer'))


function App() {
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
    <div className="App">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* Page Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section - Always loaded immediately */}
          <Hero />
          
          {/* Lazy-loaded sections with fallback */}
          <Suspense fallback={
            <div className="min-h-[200px] flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
            </div>
          }>
            {/* About Section */}
            <About />

            {/* Work Types Section */}
            <WorkTypes />
            
            {/* Services Section */}
            <Services />
            
            {/* Featured Projects Section */}
            <FeaturedProjects />
            
            {/* UI Design Showcase Section */}
            <UIDesigns />
            
            {/* Contact Info Section - Moved up */}
            <ContactInfo />
            
            {/* Benefits Section */}
            <Benefits />
            
            {/* Education Section */}
            <Education />
            
            {/* Contact Form Section (Includes CTA) */}
            <ContactForm />
          </Suspense>
        </motion.div>
      </main>
      
      {/* Footer */}
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
      
      {/* Removed scroll progress indicator to improve performance */}
    </div>
  )
}

export default App
