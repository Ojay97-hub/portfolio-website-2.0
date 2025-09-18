import { useState, useEffect } from 'react'
import { Menu, X } from '../lib/icons'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'
import { scrollToSection } from '../lib/utils'
import useScrollSpy from '../hooks/useScrollSpy'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#services' },
    { label: 'Projects', href: '#featured-projects' },
    { label: 'Designs', href: '#ui-designs' },
    { label: 'Contact', href: '#contact-form' },
  ]

  const sectionIds = navItems.map(item => item.href.slice(1))
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    const sectionId = href.slice(1)
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  return (
    <>
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
        <nav className="container" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => scrollToSection('hero')}
                className="text-xl font-bold text-accent hover:text-accentSoft transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
                aria-label="Go to home section"
              >
                Owen Cotter
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center space-x-8"
            >
              {navItems.map((item, _index) => {
                const sectionId = item.href.slice(1)
                const isActive = activeSection === sectionId
                
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 ${
                      isActive ? 'text-accent' : 'text-text'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                )
              })}
              
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('contact-form')}
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:hidden p-2 text-text hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="container py-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => {
                    const sectionId = item.href.slice(1)
                    const isActive = activeSection === sectionId
                    
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`text-left px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md ${
                          isActive ? 'text-accent bg-accent/10' : 'text-text'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                  
                  <div className="pt-4">
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full"
                      onClick={() => {
                        scrollToSection('contact-form')
                        setIsOpen(false)
                      }}
                    >
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar
