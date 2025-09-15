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

// Development-only theme preview component
const ThemePreview = () => {
  // Theme preview removed as requested
  return null
}

function App() {
  // Enable smooth scrolling and handle hash navigation
  useEffect(() => {
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
      
      {/* Development Theme Preview */}
      <ThemePreview />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent/20 z-50"
        initial={{ scaleX: 0 }}
        style={{
          transformOrigin: '0%'
        }}
      >
        <motion.div
          className="h-full bg-accent"
          style={{
            scaleX: typeof window !== 'undefined' ? 
              window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>
    </div>
  )
}

export default App
