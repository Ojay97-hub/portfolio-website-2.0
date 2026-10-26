import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from '../lib/icons'
import { scrollToSection } from '../lib/utils'
import useScrollSpy from '../hooks/useScrollSpy'
import useTheme from '../hooks/useTheme'
import LogoMark from '../components/nf/LogoMark'
import ThemeToggle from '../components/nf/ThemeToggle'

const baseUrl = import.meta.env.BASE_URL || '/'

const NAV_ITEMS = [
  { label: 'Work', href: '#featured-projects' },
  {
    label: 'Designs',
    href: '#ui-designs',
    dropdownItems: [
      { label: 'UI Showcase', href: '#ui-designs', isSection: true },
      { label: 'Storytelling', href: `${baseUrl}storytelling.html`, isSection: false, isNew: true },
    ],
  },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#services' },
]

// Defined once so the scroll-spy effect isn't re-run on every render
const SECTION_IDS = ['hero', 'featured-projects', 'ui-designs', 'about', 'services', 'contact-form']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [designsOpen, setDesignsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const activeSection = useScrollSpy(SECTION_IDS)
  const { theme, toggleTheme } = useTheme()

  // Close the Designs dropdown when clicking outside it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesignsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const go = (href, isSection = true) => {
    if (isSection) {
      scrollToSection(href.slice(1))
    } else {
      window.location.href = href
    }
    setIsOpen(false)
    setDesignsOpen(false)
  }

  const linkClass = (active) =>
    `rounded-full px-3 py-1.5 text-sm font-bold transition-colors duration-200 ${
      active ? 'bg-brand-soft text-ink' : 'text-ink-soft hover:text-brand-deep'
    }`

  return (
    <>
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-8">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full border-2 border-ink bg-ivory/95 px-3 py-2 shadow-pop sm:px-4"
        >
          {/* Logo */}
          <button
            onClick={() => go('#hero')}
            className="group flex items-center gap-2.5 rounded-full"
            aria-label="Owen Cotter portfolio, back to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-ivory transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              <LogoMark className="h-7 w-7" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-ink">
              Owen Cotter
            </span>
            <span className="hidden -rotate-3 rounded-full border-2 border-ink bg-brand-soft px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-eyebrow text-ink sm:inline-block">
              Portfolio
            </span>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.href.slice(1)

              if (item.dropdownItems) {
                return (
                  <li key={item.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDesignsOpen(!designsOpen)}
                      className={`flex items-center gap-1 ${linkClass(active || designsOpen)}`}
                      aria-expanded={designsOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${designsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {designsOpen && (
                      <div className="absolute left-0 top-full z-50 mt-3 w-52 overflow-hidden rounded-2xl border-2 border-ink bg-ivory p-1.5 shadow-pop-lg">
                        {item.dropdownItems.map((d) => (
                          <button
                            key={d.label}
                            onClick={() => go(d.href, d.isSection)}
                            className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-bold text-ink transition-colors hover:bg-brand-soft"
                          >
                            {d.label}
                            {d.isNew && (
                              <span className="ml-auto rounded-full border-2 border-ink bg-brand px-2 py-0.5 text-navy font-mono text-[9px] font-bold uppercase tracking-eyebrow">
                                New
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>
                )
              }

              return (
                <li key={item.href}>
                  <button
                    onClick={() => go(item.href)}
                    className={linkClass(active)}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}

            <li className="ml-2">
              <button
                onClick={() => go('#contact-form')}
                className="rounded-full border-2 border-ink bg-brand px-4 py-2 text-sm font-bold text-navy shadow-pop transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none"
              >
                Let&apos;s chat
              </button>
            </li>
            <li className="ml-2">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </li>
          </ul>

          {/* Mobile: theme toggle + menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="h-9 w-9" />
            <button
              className="rounded-full border-2 border-ink bg-navy-mist px-3 py-1.5"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="font-mono text-xs font-bold uppercase tracking-eyebrow text-ink">
                {isOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="mx-auto mt-2 max-w-6xl rounded-3xl border-2 border-ink bg-ivory p-6 shadow-pop-lg md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.flatMap((item) =>
                item.dropdownItems
                  ? item.dropdownItems.map((d) => ({ ...d, label: d.label === 'UI Showcase' ? 'Designs' : d.label }))
                  : [{ ...item, isSection: true }]
              ).map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => go(item.href, item.isSection)}
                    className="flex items-center gap-3 font-display text-2xl font-extrabold text-ink"
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="rounded-full border-2 border-ink bg-brand px-2 py-0.5 text-navy font-mono text-[9px] font-bold uppercase tracking-eyebrow">
                        New
                      </span>
                    )}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => go('#contact-form')}
                  className="w-full rounded-full border-2 border-ink bg-brand px-5 py-3 text-sm font-bold text-navy shadow-pop"
                >
                  Let&apos;s chat →
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar
