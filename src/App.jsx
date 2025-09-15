import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import WorkTypes from './sections/WorkTypes'
import Services from './sections/Services'
import FeaturedProjects from './sections/FeaturedProjects'
import UIDesigns from './sections/UIDesigns'
import CTA from './sections/CTA'
import ContactInfo from './sections/ContactInfo'
import ContactForm from './sections/ContactForm'
import Benefits from './sections/Benefits'
import Education from './sections/Education'
import Footer from './sections/Footer'


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
          {/* Hero Section */}
          <Hero />
          
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
          
          {/* CTA Section */}
          <CTA />
          
          {/* Contact Info Section */}
          <ContactInfo />
          
          {/* Benefits Section */}
          <Benefits />
          
          {/* Education Section */}
          <Education />
          
          {/* Contact Form Section */}
          <ContactForm />
        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll Progress Indicator - Simplified for better performance */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-accent/20 z-50">
        <div
          className="h-full bg-accent transition-transform duration-100 origin-left"
          style={{
            transform: `scaleX(${typeof window !== 'undefined' ? 
              Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1) : 0})`
          }}
        />
      </div>
    </div>
  )
}

export default App
