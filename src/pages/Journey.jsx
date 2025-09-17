import { useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const JourneyBlog = lazy(() => import('../sections/JourneyBlog'))
const Footer = lazy(() => import('../sections/Footer'))

const JourneyPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const baseUrl = import.meta.env.BASE_URL || '/'
  const homeUrl = baseUrl
  const contactUrl = `${baseUrl}#contact-form`

  return (
    <div className="App min-h-screen bg-background text-text">
      <a href="#journey-main" className="skip-to-content">
        Skip to main content
      </a>

      <header className="sticky top-0 left-0 right-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          <a
            href={homeUrl}
            className="text-xl font-bold text-accent hover:text-accentSoft transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
          >
            Owen Cotter
          </a>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                window.location.href = contactUrl
              }}
            >
              Let's talk
            </Button>
            <Button
              size="sm"
              onClick={() => {
                window.location.href = homeUrl
              }}
            >
              Back to portfolio
            </Button>
          </div>
        </div>
      </header>

      <main id="journey-main" className="relative">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-28 pb-16 bg-gradient-to-b from-primary/15 via-transparent to-transparent"
        >
          <div className="container max-w-4xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Personal retrospective
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-balance">
              From events stages to engineering sprints
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              A long-form reflection on how a global shutdown became the catalyst for travel-fuelled curiosity, Code Institute studies, and a remote-first development career.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  window.location.href = homeUrl
                }}
              >
                Return to portfolio
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  window.location.href = contactUrl
                }}
              >
                Collaborate on a project
              </Button>
            </div>
          </div>
        </motion.section>

        <Suspense
          fallback={
            <div className="min-h-[200px] flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
            </div>
          }
        >
          <JourneyBlog />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default JourneyPage
