import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LazyImage from '../components/LazyImage'
import { ChevronRight, ChevronLeft } from '../lib/icons'



const BASE_PATH = import.meta.env.BASE_URL || '/'

const colors = {
    coral: '#FF6B6B',
    yellow: '#FFD93D',
    purple: '#9B59B6',
    teal: '#0D9488',
}

const principles = [
    {
        id: 'clear',
        title: 'Clear',
        icon: '✨',
        color: colors.teal,
        image: `${BASE_PATH}/project-pics/clear-grid-layout.png`,
        content: [
            <p key="1"><strong className="text-gray-900">8-point grid system</strong> with consistent 16/24 spacing and unified card padding. Removed most scrollable mini-panels and re-flowed content to fit the viewport — majority of content is visible without scrolling.</p>,
            <p key="2"><strong className="text-gray-900">Strong grid activation:</strong> Made a conscious effort to use Figma's grid and column tools for pixel-perfect card positioning throughout all screens.</p>,
            <p key="3"><strong className="text-gray-900">Simplified hierarchy</strong> on My Accounts and Current Account headers: large balance → single primary CTA → secondary/tertiary actions. Clear information architecture.</p>,
            <p key="4"><strong className="text-gray-900">Data-vis consistency:</strong> Reworked all line charts to share the same stroke weight, point style, and legend treatment. Aligned axes/labels and made "Crystal Ball Insights" read left-to-right with sub-headings — avoiding user confusion.</p>
        ]
    },
    {
        id: 'playful',
        title: 'Playful',
        icon: '🎨',
        color: colors.coral,
        image: `${BASE_PATH}/project-pics/principle-playful-palette.png`,
        content: [
            <p key="1">Kept the brand's upbeat flavour through <strong className="text-gray-900">rounded chips and micro-badges</strong>, but reduced shouty ALL-CAPS to sentence case, using softer motion cues rather than heavy shadows — preserving playfulness without clutter.</p>,
            <p key="2"><strong className="text-gray-900">Tight palette</strong> of brand purples + tints of yellow/peach for highlights, applied sparingly to emphasise "moments of delight" (achievements, perks) — not core content.</p>,
            <p key="3">Applying <strong className="text-gray-900">purple throughout</strong> really supported that wizardry feel. Combined with wizard-themed wordplay ("Magic Balance", "Crystal Ball"), it boosted the personality that users could connect with.</p>,
            <p key="4"><strong className="text-gray-900">Outfit typography</strong> added to the playful factor — it's a nice sans-serif that's still easy to read at all sizes.</p>,
            <div key="5" className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-gray-900 font-semibold mb-3">Colour Palette</p>
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#2F04B0' }}></span>
                        <span className="text-xs font-mono text-gray-600">#2F04B0</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#1E3A8A' }}></span>
                        <span className="text-xs font-mono text-gray-600">#1E3A8A</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#7159B6' }}></span>
                        <span className="text-xs font-mono text-gray-600">#7159B6</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#F76559' }}></span>
                        <span className="text-xs font-mono text-gray-600">#F76559</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#FFD466' }}></span>
                        <span className="text-xs font-mono text-gray-600">#FFD466</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#00A326' }}></span>
                        <span className="text-xs font-mono text-gray-600">#00A326</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: '#F5F7FA' }}></span>
                        <span className="text-xs font-mono text-gray-600">#F5F7FA</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#120048' }}></span>
                        <span className="text-xs font-mono text-gray-600">#120048</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#101010' }}></span>
                        <span className="text-xs font-mono text-gray-600">#101010</span>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">Deep purples (#2F04B0, #7159B6, #120048) anchor the wizard theme. Coral (#F76559) and gold (#FFD466) inject personality for CTAs and rewards. Green (#00A326) marks success states. The neutral pair (#F5F7FA, #101010) provides contrast and breathing room.</p>
            </div>
        ]
    },
    {
        id: 'trustworthy',
        title: 'Trustworthy',
        icon: '🛡️',
        color: colors.purple,
        image: `${BASE_PATH}/project-pics/trustworthy-transactions.png`,
        content: [
            <p key="1">Replaced mixed shadows/strokes with a <strong className="text-gray-900">single approach</strong> (mostly stroke, no drop shadow on buttons) and unified corner radii so badges don't compete with CTAs.</p>,
            <p key="2"><strong className="text-gray-900">Complete colour audit:</strong> Normalised all purples to a single hue family (HSL ~255°) and derived neutrals from that hue for text/dividers. Removed "flat black" — body text and headings now use brand-aligned dark purples for better contrast and coherence.</p>,
            <p key="3"><strong className="text-gray-900">Standardised icon set</strong> and stroke weights. Ensured minimum font size ≥10pt on data tables for accessibility and legibility.</p>
        ]
    },
    {
        id: 'responsive',
        title: 'Responsive',
        icon: '📱',
        color: colors.yellow,
        image: `${BASE_PATH}/project-pics/screen-responsiveness.png`,
        content: [
            <p key="1"><strong className="text-gray-900">Locked mobile widths</strong> and spacing so repeated modules align precisely across screens — same widths, same spacing philosophy.</p>,
            <p key="2">On tablet, <strong className="text-gray-900">increased padding from sidenav</strong> and grouped nav items higher to reduce travel time for touch interactions.</p>,
            <p key="3">Made data-vis and budget sections use <strong className="text-gray-900">full available width</strong> on tablet/desktop with clear breakpoints.</p>,
            <p key="4"><strong className="text-gray-900">1→4 column progression</strong> as screen sizes increased. The flow of content feels natural and breakpoints create smooth transitions — designs don't jump into completely different layouts that could confuse users.</p>
        ]
    }
]

const SLIDE_DURATION = 6000 // 6 seconds per slide

const BrandPrinciples = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [progress, setProgress] = useState(0)
    const containerRef = useRef(null)
    const progressRef = useRef(null)

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % principles.length)
        setProgress(0)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + principles.length) % principles.length)
        setProgress(0)
    }

    // Auto-advance slideshow
    useEffect(() => {
        if (isPaused) return

        const startTime = Date.now()
        const animate = () => {
            const elapsed = Date.now() - startTime
            const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
            setProgress(newProgress)

            if (elapsed < SLIDE_DURATION) {
                progressRef.current = requestAnimationFrame(animate)
            } else {
                nextSlide()
            }
        }

        progressRef.current = requestAnimationFrame(animate)

        return () => {
            if (progressRef.current) {
                cancelAnimationFrame(progressRef.current)
            }
        }
    }, [currentIndex, isPaused])

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    }

    // Circular progress indicator component
    const ProgressRing = ({ isActive, progressValue, color }) => {
        const radius = 12
        const circumference = 2 * Math.PI * radius
        const strokeDashoffset = circumference - (progressValue / 100) * circumference

        return (
            <div className="relative flex items-center justify-center">
                <svg width="32" height="32" className="transform -rotate-90">
                    {/* Background circle */}
                    <circle
                        cx="16"
                        cy="16"
                        r={radius}
                        fill="none"
                        stroke={`${color}30`}
                        strokeWidth="2"
                    />
                    {/* Progress circle */}
                    {isActive && (
                        <circle
                            cx="16"
                            cy="16"
                            r={radius}
                            fill="none"
                            stroke={color}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-none"
                        />
                    )}
                </svg>
                {/* Center dot */}
                <div
                    className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'scale-100' : 'scale-75'
                        }`}
                    style={{ backgroundColor: isActive ? color : `${color}50` }}
                />
            </div>
        )
    }

    return (
        <div
            className="relative w-full max-w-7xl mx-auto px-4 md:px-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >

            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[750px] flex flex-col md:flex-row relative">

                <AnimatePresence initial={false} mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="flex flex-col md:flex-row w-full h-full"
                    >
                        {/* Info Section (Left) */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gray-50 border-r border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl md:text-5xl filter drop-shadow-md">{principles[currentIndex].icon}</span>
                                <h3
                                    className="text-3xl md:text-4xl font-bold"
                                    style={{ color: principles[currentIndex].color }}
                                >
                                    {principles[currentIndex].title}
                                </h3>
                            </div>

                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                {principles[currentIndex].content}
                            </div>
                        </div>

                        {/* Image Section (Right) */}
                        <div className="w-full md:w-1/2 bg-gray-100 relative overflow-hidden flex items-center justify-center p-8 md:p-12">
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative w-full min-h-[250px] md:min-h-auto flex items-center justify-center">
                                    {/* Decorative blob background */}
                                    <div
                                        className="absolute inset-0 opacity-20 blur-3xl rounded-full transform scale-75"
                                        style={{ backgroundColor: principles[currentIndex].color }}
                                    />

                                    <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 transform transition-transform duration-500 hover:scale-[1.02]">
                                        <LazyImage
                                            src={principles[currentIndex].image}
                                            alt={`${principles[currentIndex].title} principle example`}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Outfit Typography Display - Only for Playful slide */}
                                {principles[currentIndex].id === 'playful' && (
                                    <div className="mt-4 text-center">
                                        <p className="text-5xl md:text-6xl font-bold text-gray-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Outfit
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1 tracking-wide">Primary Typeface</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Pause indicator */}
                <AnimatePresence>
                    {isPaused && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute top-4 right-4 z-30 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2"
                        >
                            <span className="w-2 h-2 bg-white rounded-sm" />
                            Paused
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Progress Indicators with Navigation (Bottom Center) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                    <button
                        onClick={prevSlide}
                        className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all focus:outline-none"
                        aria-label="Previous principle"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <div className="flex gap-4">
                        {principles.map((principle, idx) => (
                            <ProgressRing
                                key={idx}
                                isActive={idx === currentIndex}
                                progressValue={idx === currentIndex ? progress : 0}
                                color={principle.color}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all focus:outline-none"
                        aria-label="Next principle"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Hover hint text */}
            <p className="text-center text-white/60 text-sm mt-4">
                Hover to pause • Auto-advances every 6 seconds
            </p>
        </div>
    )
}

export default BrandPrinciples
