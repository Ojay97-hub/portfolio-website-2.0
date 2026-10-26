import { useEffect, useRef, Suspense, lazy } from 'react'
import useReveal from '../hooks/useReveal'
import useTheme from '../hooks/useTheme'
import LogoMark from '../components/nf/LogoMark'
import PopButton from '../components/nf/PopButton'
import ThemeToggle from '../components/nf/ThemeToggle'

const JourneyBlog = lazy(() => import('../sections/JourneyBlog'))
const SiteFooter = lazy(() => import('../sections/SiteFooter'))

const baseUrl = import.meta.env.BASE_URL || '/'
const contactUrl = `${baseUrl}#contact-form`

const JourneyPage = () => {
  const rootRef = useRef(null)
  useReveal(rootRef)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <div ref={rootRef} className="App nf-root">
      <a href="#journey-main" className="skip-to-content">
        Skip to main content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-8">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border-2 border-ink bg-ivory/95 px-3 py-2 shadow-pop sm:px-4"
        >
          <a href={baseUrl} className="group flex items-center gap-2.5" aria-label="Owen Cotter portfolio home">
            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-ivory transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              <LogoMark className="h-7 w-7" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-ink">Owen Cotter</span>
            <span className="hidden -rotate-3 rounded-full border-2 border-ink bg-brand-soft px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-eyebrow text-ink sm:inline-block">
              Journey
            </span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href={baseUrl}
              className="hidden rounded-full px-3 py-1.5 text-sm font-bold text-ink-soft transition-colors hover:text-brand-deep sm:block"
            >
              ← Portfolio
            </a>
            <a
              href={contactUrl}
              className="rounded-full border-2 border-ink bg-brand px-4 py-2 text-sm font-bold text-navy shadow-pop transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none"
            >
              Let&apos;s chat
            </a>
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="h-9 w-9 sm:h-10 sm:w-10" />
          </div>
        </nav>
      </header>

      <main id="journey-main" className="relative">
        <section className="dotgrid relative overflow-hidden pb-16 pt-36 sm:pt-44">
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-soft/40 to-transparent" />
          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
            <p data-reveal className="eyebrow mb-7">✦ Personal retrospective</p>
            <h1
              data-reveal
              style={{ '--reveal-delay': '80ms' }}
              className="display-xl font-display font-extrabold text-ink"
            >
              Wireframes over <span className="doodle-underline">floorplans.</span>
            </h1>
            <p
              data-reveal
              style={{ '--reveal-delay': '160ms' }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft"
            >
              A long form reflection on how a global shutdown became the catalyst for travel fuelled
              curiosity, Code Institute studies and the UX Design Institute: a career change in
              motion.
            </p>
            <div
              data-reveal
              style={{ '--reveal-delay': '240ms' }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <PopButton href={baseUrl}>Back to portfolio</PopButton>
              <PopButton href="#timeline" variant="ghost">
                Jump to the timeline
              </PopButton>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
          <JourneyBlog />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20" aria-hidden="true" />}>
        <SiteFooter homeUrl={baseUrl} />
      </Suspense>
    </div>
  )
}

export default JourneyPage
