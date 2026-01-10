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
        image: `${BASE_PATH}/project-pics/principle-clear.png`,
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
        image: `${BASE_PATH}/project-pics/principle-playful.png`,
        content: [
            <p key="1">Kept the brand's upbeat flavour through <strong className="text-gray-900">rounded chips and micro-badges</strong>, but reduced shouty ALL-CAPS to sentence case, using softer motion cues rather than heavy shadows — preserving playfulness without clutter.</p>,
            <p key="2"><strong className="text-gray-900">Tight palette</strong> of brand purples + tints of yellow/peach for highlights, applied sparingly to emphasise "moments of delight" (achievements, perks) — not core content.</p>,
            <p key="3">Applying <strong className="text-gray-900">purple throughout</strong> really supported that wizardry feel. Combined with wizard-themed wordplay ("Magic Balance", "Crystal Ball"), it boosted the personality that users could connect with.</p>,
            <p key="4"><strong className="text-gray-900">Outfit typography</strong> added to the playful factor — it's a nice sans-serif that's still easy to read at all sizes.</p>
        ]
    },
    {
        id: 'trustworthy',
        title: 'Trustworthy',
        icon: '🛡️',
        color: colors.purple,
        image: `${BASE_PATH}/project-pics/principle-trustworthy.png`,
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
        image: `${BASE_PATH}/project-pics/principle-responsive.png`,
        content: [
            <p key="1"><strong className="text-gray-900">Locked mobile widths</strong> and spacing so repeated modules align precisely across screens — same widths, same spacing philosophy.</p>,
            <p key="2">On tablet, <strong className="text-gray-900">increased padding from sidenav</strong> and grouped nav items higher to reduce travel time for touch interactions.</p>,
            <p key="3">Made data-vis and budget sections use <strong className="text-gray-900">full available width</strong> on tablet/desktop with clear breakpoints.</p>,
            <p key="4"><strong className="text-gray-900">1→4 column progression</strong> as screen sizes increased. The flow of content feels natural and breakpoints create smooth transitions — designs don't jump into completely different layouts that could confuse users.</p>
        ]
    }
]

const BrandPrinciples = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const containerRef = useRef(null)

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % principles.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + principles.length) % principles.length)
    }

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    // Auto-advance slideshow? Maybe not for content-heavy slides.
    // Let's keep it manual for readability.

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

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6">
            {/* Navigation Buttons - Outside the container */}
            <button
                onClick={prevSlide}
                className="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 hidden md:block"
                aria-label="Previous principle"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 hidden md:block"
                aria-label="Next principle"
            >
                <ChevronRight size={24} />
            </button>

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
                            <div className="relative w-full h-full min-h-[300px] md:min-h-auto flex items-center justify-center">
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
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Mobile Navigation Controls (Bottom) */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-4 z-20 md:hidden">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-white shadow-md text-gray-800"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {principles.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'bg-gray-800 w-6'
                                    : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-white shadow-md text-gray-800"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Desktop Pagination Dots (Bottom Center) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 gap-3 hidden md:flex">
                    {principles.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'bg-gray-800 w-8'
                                : 'bg-gray-300 w-2 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrandPrinciples
