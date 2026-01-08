import { useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const CaseStudyContent = lazy(() => import('../sections/CaseStudyContent'))
const Footer = lazy(() => import('../sections/Footer'))

const CaseStudy = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' })
    }, [])

    const baseUrl = import.meta.env.BASE_URL || '/'
    const homeUrl = baseUrl
    const designsUrl = `${baseUrl}#ui-designs`

    return (
        <div className="App min-h-screen bg-background text-text overflow-x-hidden">
            <a href="#case-study-main" className="skip-to-content">
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
                                window.location.href = designsUrl
                            }}
                        >
                            View Designs
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

            <main id="case-study-main" className="relative">
                {/* Hero Section with Quirky Design */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
                >
                    {/* Animated Background Blobs */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.6 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D] blur-3xl"
                        />
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.5 }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="absolute -bottom-48 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#0D9488] to-[#9B59B6] blur-3xl"
                        />
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.4 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] blur-3xl"
                        />
                    </div>

                    {/* Decorative Curved Lines SVG */}
                    <svg
                        className="absolute inset-0 w-full h-full opacity-20"
                        viewBox="0 0 1200 800"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            d="M-100 400 Q 200 100, 400 300 T 800 200 T 1300 400"
                            stroke="#0D9488"
                            strokeWidth="3"
                            fill="none"
                        />
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                            d="M-100 500 Q 300 800, 500 400 T 900 600 T 1300 300"
                            stroke="#FF6B6B"
                            strokeWidth="3"
                            fill="none"
                        />
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
                            d="M-100 300 Q 150 600, 350 400 T 700 500 T 1300 200"
                            stroke="#FFD93D"
                            strokeWidth="3"
                            fill="none"
                        />
                    </svg>

                    {/* Hero Content */}
                    <div className="relative z-10 container max-w-5xl text-center px-4">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm text-accent text-sm font-semibold shadow-lg border border-accent/20 mb-8">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                UI/UX Case Study
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8"
                        >
                            <span className="block text-text">Making</span>
                            <span className="block bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#0D9488] bg-clip-text text-transparent">
                                Banking
                            </span>
                            <span className="block text-text">
                                Feel Like{' '}
                                <span className="inline-block -rotate-3 bg-[#0D9488] text-white px-4 py-1 rounded-xl">
                                    Magic
                                </span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
                        >
                            A deep dive into the design decisions behind <strong className="text-text">FinWiz</strong> —
                            a gamified banking app that transforms mundane money management into an engaging adventure.
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="flex flex-wrap items-center justify-center gap-4"
                        >
                            <Button size="lg" variant="primary">
                                Explore the Journey ↓
                            </Button>
                            <Button
                                size="lg"
                                variant="ghost"
                                onClick={() => window.location.href = designsUrl}
                            >
                                View Final Designs
                            </Button>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{
                            opacity: { delay: 1.5, duration: 0.5 },
                            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                        }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <div className="w-6 h-10 rounded-full border-2 border-muted flex items-start justify-center p-1.5">
                            <div className="w-1.5 h-3 rounded-full bg-accent" />
                        </div>
                    </motion.div>
                </motion.section>

                <Suspense
                    fallback={
                        <div className="min-h-[200px] flex items-center justify-center">
                            <div className="w-8 h-8 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
                        </div>
                    }
                >
                    <CaseStudyContent />
                </Suspense>
            </main>

            <Suspense fallback={<div className="h-20" />}>
                <Footer />
            </Suspense>
        </div>
    )
}

export default CaseStudy
