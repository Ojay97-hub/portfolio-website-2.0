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
                            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8"
                        >
                            {/* "Making" - rolls in from left */}
                            <motion.span
                                className="block text-text cursor-pointer"
                                initial={{ x: -100, opacity: 0, rotateY: -90 }}
                                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 100 }}
                                whileHover={{
                                    scale: 1.05,
                                    color: '#0D9488',
                                    transition: { duration: 0.2 }
                                }}
                            >
                                Making
                            </motion.span>

                            {/* "Banking" - each letter rolls in with color */}
                            <span className="block">
                                {'Banking'.split('').map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        className="inline-block cursor-pointer"
                                        style={{
                                            background: `linear-gradient(135deg, ${i < 2 ? '#FF6B6B' : i < 4 ? '#FFD93D' : '#0D9488'
                                                }, ${i < 2 ? '#FFD93D' : i < 4 ? '#0D9488' : '#9B59B6'
                                                })`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                        initial={{
                                            y: 50,
                                            opacity: 0,
                                            rotateX: -90,
                                            scale: 0.5
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                            rotateX: 0,
                                            scale: 1
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.7 + i * 0.08,
                                            type: 'spring',
                                            stiffness: 150,
                                        }}
                                        whileHover={{
                                            scale: 1.2,
                                            y: -10,
                                            rotate: [-5, 5, -5, 0],
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>

                            {/* "Feel Like" - slides up */}
                            <span className="block text-text">
                                {'Feel Like'.split(' ').map((word, i) => (
                                    <motion.span
                                        key={i}
                                        className="inline-block mr-4 cursor-pointer"
                                        initial={{ y: 80, opacity: 0, scale: 0.8 }}
                                        animate={{ y: 0, opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 1.3 + i * 0.15,
                                            type: 'spring',
                                            stiffness: 120,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            color: '#FFD93D',
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                                {/* "Magic" - bounces in with wiggle */}
                                <motion.span
                                    className="inline-block -rotate-3 bg-[#0D9488] text-white px-4 py-1 rounded-xl cursor-pointer"
                                    initial={{
                                        scale: 0,
                                        rotate: -20,
                                        opacity: 0
                                    }}
                                    animate={{
                                        scale: 1,
                                        rotate: -3,
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 1.6,
                                        type: 'spring',
                                        stiffness: 200,
                                        damping: 10,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, -5, 5, -3],
                                        boxShadow: '0 0 30px rgba(13, 148, 136, 0.6)',
                                        transition: {
                                            rotate: { duration: 0.4 },
                                            scale: { duration: 0.2 }
                                        }
                                    }}
                                >
                                    Magic
                                </motion.span>
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


                    </div>

                    {/* Scroll indicator - hidden on short viewports */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{
                            opacity: { delay: 1.5, duration: 0.5 },
                            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                        }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 hide-on-short-viewport"
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
