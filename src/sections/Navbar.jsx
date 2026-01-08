import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from '../lib/icons'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'
import { scrollToSection } from '../lib/utils'
import useScrollSpy from '../hooks/useScrollSpy'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [designsDropdownOpen, setDesignsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const baseUrl = import.meta.env.BASE_URL || '/'

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#featured-projects' },
    {
      label: 'Designs',
      href: '#ui-designs',
      hasDropdown: true,
      dropdownItems: [
        { label: 'UI Showcase', href: '#ui-designs', isSection: true },
        { label: 'Storytelling', href: `${baseUrl}storytelling.html`, isSection: false },
      ]
    },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#services' },
    { label: 'Contact', href: '#contact-form' },
  ]

  const sectionIds = navItems
    .filter(item => !item.hasDropdown)
    .map(item => item.href.slice(1))
  sectionIds.push('ui-designs') // Add ui-designs for scroll spy
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesignsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (href, isSection = true) => {
    if (isSection) {
      const sectionId = href.slice(1)
      scrollToSection(sectionId)
    } else {
      window.location.href = href
    }
    setIsOpen(false)
    setDesignsDropdownOpen(false)
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
              {navItems.map((item) => {
                const sectionId = item.href.slice(1)
                const isActive = activeSection === sectionId

                // Render dropdown for Designs
                if (item.hasDropdown) {
                  return (
                    <div key={item.href} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setDesignsDropdownOpen(!designsDropdownOpen)}
                        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 ${isActive || designsDropdownOpen ? 'text-accent' : 'text-text'
                          }`}
                        aria-expanded={designsDropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${designsDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {designsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-surface border border-border rounded-xl shadow-lg overflow-hidden z-50"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <button
                                key={dropdownItem.label}
                                onClick={() => handleNavClick(dropdownItem.href, dropdownItem.isSection)}
                                className="w-full text-left px-4 py-3 text-sm font-medium text-text hover:bg-accent/10 hover:text-accent transition-colors flex items-center gap-2"
                              >
                                {dropdownItem.label === 'Storytelling' && (
                                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D]" />
                                )}
                                {dropdownItem.label}
                                {dropdownItem.label === 'Storytelling' && (
                                  <span className="ml-auto text-xs px-1.5 py-0.5 rounded-full bg-accent/10 text-accent font-semibold">
                                    New
                                  </span>
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 ${isActive ? 'text-accent' : 'text-text'
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
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => {
                    const sectionId = item.href.slice(1)
                    const isActive = activeSection === sectionId

                    // Render expandable section for Designs
                    if (item.hasDropdown) {
                      return (
                        <div key={item.href}>
                          <button
                            onClick={() => setDesignsDropdownOpen(!designsDropdownOpen)}
                            className={`w-full text-left flex items-center justify-between px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md ${isActive || designsDropdownOpen ? 'text-accent bg-accent/10' : 'text-text'
                              }`}
                          >
                            {item.label}
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-200 ${designsDropdownOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <AnimatePresence>
                            {designsDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-2 space-y-1">
                                  {item.dropdownItems.map((dropdownItem) => (
                                    <button
                                      key={dropdownItem.label}
                                      onClick={() => handleNavClick(dropdownItem.href, dropdownItem.isSection)}
                                      className="w-full text-left px-4 py-2 text-sm text-muted hover:text-accent hover:bg-accent/5 rounded-md transition-colors flex items-center gap-2"
                                    >
                                      {dropdownItem.label === 'Storytelling' && (
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D]" />
                                      )}
                                      {dropdownItem.label}
                                      {dropdownItem.label === 'Storytelling' && (
                                        <span className="ml-auto text-xs px-1.5 py-0.5 rounded-full bg-accent/10 text-accent font-semibold">
                                          New
                                        </span>
                                      )}
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    }

                    return (
                      <button
                        key={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`text-left px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md ${isActive ? 'text-accent bg-accent/10' : 'text-text'
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

