import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import LazyImage from '../components/LazyImage'

const BASE_PATH = '/portfolio-website-2.0' // Align with CaseStudyContent.jsx

const InspirationMoodboard = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container max-w-6xl relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-purple-600 text-sm font-semibold tracking-widest uppercase mb-4">
                        ✨ Design Inspiration ✨
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Inspired by <span className="text-[#FF6B6B]">Disruptors</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Drawing inspiration from fintech giants like <strong>Monzo</strong> and <strong>Revolut</strong>,
                        I wanted to capture that perfect balance of <em>trust</em> and <em>playfulness</em>.
                        The goal was to break away from traditional banking stiffness and create an experience that feels
                        fluid, modern, and genuinely exciting to use.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                    {/* Curved Divider Top to blend with white background if needed, but the image itself has white bg */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />

                    <LazyImage
                        src={`${BASE_PATH}/project-pics/moodboard-monzo-revolut.png`}
                        alt="Fintech moodboard inspiration featuring Monzo and Revolut style cards and interfaces"
                        className="w-full h-auto object-cover"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default InspirationMoodboard
