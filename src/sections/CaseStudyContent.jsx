import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import LazyImage from '../components/LazyImage'

// Vibrant color palette
const colors = {
    coral: '#FF6B6B',
    yellow: '#FFD93D',
    purple: '#9B59B6',
    teal: '#0D9488',
    cream: '#FEF9E7',
    navy: '#1a1a2e',
    green: '#10B981',
}

// Animated section wrapper with viewport detection
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Floating image component with offset and rotation
const FloatingImage = ({ src, alt, className = '', rotate = 0, delay = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9, rotate: rotate - 5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate } : { opacity: 0, scale: 0.9, rotate: rotate - 5 }}
            transition={{ duration: 0.8, delay, ease: 'easeOut' }}
            className={`rounded-2xl overflow-hidden shadow-2xl ${className}`}
        >
            <LazyImage src={src} alt={alt} className="w-full h-full object-cover" />
        </motion.div>
    )
}

// Principle Card Component
const PrincipleCard = ({ icon, title, color, children, delay = 0, radius = 'rounded-2xl' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className={`bg-white p-8 shadow-xl ${radius}`}
        >
            <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{icon}</span>
                <h3 className="text-2xl font-bold" style={{ color }}>{title}</h3>
            </div>
            <div className="space-y-4 text-muted leading-relaxed">
                {children}
            </div>
        </motion.div>
    )
}

// Timeline story item data
const storyItems = [
    {
        emoji: '📖',
        title: 'Once upon a time...',
        color: '#9B59B6',
        content: (
            <>
                There was a young professional named <strong className="text-[#FFD93D]">Alex</strong> who
                dreamed of financial freedom. Alex worked hard, earned money, and wanted to feel
                confident about their finances. But there was a problem...
            </>
        ),
    },
    {
        emoji: '😔',
        title: 'Every day...',
        color: '#FF6B6B',
        content: (
            <>
                Alex would open their banking app with a sense of <strong className="text-[#FF6B6B]">dread</strong>.
                Walls of grey numbers. Cold interfaces. Confusing graphs. Every interaction felt like
                a <em>chore</em>, not an empowering moment.
            </>
        ),
        quote: '"I avoid checking my bank account because it makes me feel anxious..."',
    },
    {
        emoji: '✨',
        title: 'Until one day...',
        color: '#FFD93D',
        content: (
            <>
                Alex discovered <strong className="text-[#FFD93D]">FinWiz</strong> — a banking app that
                felt different. Instead of cold numbers, there was a friendly "Magic Balance". Instead of
                confusing charts, there was a "Crystal Ball" that explained insights in simple terms.
                Instead of stress, there was... <em>playfulness</em>.
            </>
        ),
    },
    {
        emoji: '🎮',
        title: 'Because of that...',
        color: '#0D9488',
        content: (
            <>
                Alex started checking their finances <strong className="text-[#0D9488]">every day</strong> —
                not out of obligation, but out of <em>curiosity</em>. The "Treasure Tracker" made saving feel
                like an adventure. Achievement badges celebrated small wins.
            </>
        ),
        badges: [
            { text: '🏆 7-Day Streak', color: '#0D9488' },
            { text: '✨ Budget Wizard', color: '#FFD93D' },
            { text: '🎯 Goal Getter', color: '#9B59B6' },
        ],
    },
    {
        emoji: '🌟',
        title: 'Until finally...',
        color: '#0D9488',
        isLast: true,
        content: (
            <>
                Alex became the <strong className="text-[#FFD93D]">hero of their own financial story</strong>.
                No longer avoiding their bank account — they were excited to open the app. They understood
                where their money was going. They felt <em>in control</em>, not controlled by their finances.
            </>
        ),
        quote: '"Banking doesn\'t have to feel like a chore. It can feel like magic."',
    },
]

// Animated Timeline Node with pulse effect
const TimelineNode = ({ emoji, color, isLast, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <motion.div
            ref={ref}
            className={`absolute left-4 md:left-1/2 -translate-x-1/2 ${isLast ? 'w-12 h-12' : 'w-10 h-10'} rounded-full flex items-center justify-center z-20`}
            style={{
                background: isLast
                    ? 'linear-gradient(135deg, #0D9488, #9B59B6)'
                    : color,
                boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20`,
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: index * 0.15,
            }}
        >
            {/* Pulsing ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: color }}
                animate={{
                    scale: [1, 1.5, 1.8],
                    opacity: [0.6, 0.3, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                }}
            />
            <span className={isLast ? 'text-xl' : 'text-lg'}>{emoji}</span>
        </motion.div>
    )
}

// Timeline card with slide-in animation
const TimelineCard = ({ item, index, isRight }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            className={`ml-14 md:ml-0 ${isRight ? 'md:w-[calc(50%-4rem)] md:ml-auto md:pl-16' : 'md:w-[calc(50%-4rem)] md:pr-16 md:text-right'}`}
            initial={{
                opacity: 0,
                x: isRight ? 60 : -60,
                scale: 0.9,
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                scale: 1,
            } : {
                opacity: 0,
                x: isRight ? 60 : -60,
                scale: 0.9,
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            <motion.div
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 ${item.isLast ? 'bg-gradient-to-r from-[#0D9488]/20 to-[#9B59B6]/20 border-white/20' : ''}`}
                whileHover={{
                    scale: 1.02,
                    borderColor: `${item.color}50`,
                    boxShadow: `0 10px 40px ${item.color}20`,
                }}
                transition={{ duration: 0.3 }}
            >
                <p className="text-purple-300 font-semibold mb-2 italic">{item.title}</p>
                <p className="text-white/90 text-lg leading-relaxed">{item.content}</p>

                {item.quote && (
                    <motion.div
                        className="mt-4 p-4 bg-black/20 rounded-xl border-l-4"
                        style={{ borderLeftColor: item.color }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                    >
                        <p className={`text-white/70 italic ${!isRight ? 'text-left' : ''}`}>{item.quote}</p>
                    </motion.div>
                )}

                {item.badges && (
                    <motion.div
                        className={`flex flex-wrap gap-3 mt-4 ${!isRight ? 'md:justify-end' : 'md:justify-start'}`}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                    >
                        {item.badges.map((badge, i) => (
                            <motion.div
                                key={i}
                                className="px-4 py-2 rounded-full text-sm font-semibold"
                                style={{
                                    backgroundColor: `${badge.color}20`,
                                    color: badge.color,
                                }}
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{
                                    type: 'spring',
                                    delay: index * 0.1 + 0.5 + i * 0.1,
                                }}
                            >
                                {badge.text}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    )
}

// Main Timeline Section with curved path
const TimelineSection = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 80%', 'end 20%'],
    })

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
    const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

    // Curved path that weaves between cards (serpentine pattern)
    const curvePath = `
        M 50 0
        C 50 60, 90 80, 90 120
        S 10 180, 10 240
        S 90 300, 90 360
        S 10 420, 10 480
        S 50 540, 50 580
    `

    return (
        <div ref={containerRef} className="relative" style={{ position: 'relative' }}>
            {/* Curved SVG Path - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-24 pointer-events-none">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 100 580"
                    fill="none"
                    preserveAspectRatio="none"
                    style={{ height: '100%' }}
                >
                    {/* Background path (faded) */}
                    <path
                        d={curvePath}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                    />
                    {/* Animated gradient path */}
                    <motion.path
                        d={curvePath}
                        stroke="url(#timelineGradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        style={{ pathLength }}
                    />
                    {/* Glow effect path */}
                    <motion.path
                        d={curvePath}
                        stroke="url(#timelineGradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                        style={{ pathLength, opacity: glowOpacity }}
                        filter="url(#glow)"
                    />
                    <defs>
                        <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#9B59B6" />
                            <stop offset="25%" stopColor="#FF6B6B" />
                            <stop offset="50%" stopColor="#FFD93D" />
                            <stop offset="75%" stopColor="#0D9488" />
                            <stop offset="100%" stopColor="#9B59B6" />
                        </linearGradient>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Simple gradient line for mobile */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 rounded-full overflow-hidden">
                <motion.div
                    className="w-full bg-gradient-to-b from-purple-500 via-[#FF6B6B] via-[#FFD93D] to-[#0D9488]"
                    style={{ height: '100%', scaleY: pathLength, transformOrigin: 'top' }}
                />
            </div>

            {/* Timeline items */}
            <div className="space-y-12 md:space-y-20 relative">
                {storyItems.map((item, index) => (
                    <div key={index} className="relative">
                        <TimelineNode
                            emoji={item.emoji}
                            color={item.color}
                            isLast={item.isLast}
                            index={index}
                        />
                        <TimelineCard
                            item={item}
                            index={index}
                            isRight={index % 2 === 1}
                        />
                    </div>
                ))}
            </div>

            {/* Floating particles along the path */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="hidden md:block absolute w-2 h-2 rounded-full bg-white/60 left-1/2 -translate-x-1/2"
                    style={{ top: `${15 + i * 18}%` }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}



// Design Mission Card with sequential flow animation
const DesignMissionCard = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 65%', 'center center'], // Adjusted offset for faster feel
    })

    // Animation Sequence with Acceleration
    // 2. Top Border (Center -> Out): Explodes out after impact
    const topWidth = useTransform(scrollYProgress, [0.2, 0.35], ['0%', '50%'])

    // 3. Side Borders (Top -> Bottom)
    const sideHeight = useTransform(scrollYProgress, [0.35, 0.55], ['0%', '100%'])

    // 4. Bottom Border (Out -> Center)
    const bottomWidth = useTransform(scrollYProgress, [0.55, 0.75], ['0%', '50%'])

    // Glow styles
    const glowStyle = {
        boxShadow: '0 0 10px 2px rgba(13, 148, 136, 0.5), 0 0 20px 4px rgba(13, 148, 136, 0.3)',
    }

    return (
        <div ref={ref} className="mt-16 text-center relative p-[4px] rounded-2xl overflow-hidden" style={{ position: 'relative' }}>
            {/* Border Segments Layer */}
            <div className="absolute inset-0 bg-transparent">
                {/* Top Border segments - Teal gradient to match connector */}
                <motion.div
                    className="absolute top-0 left-1/2 h-[50%] bg-gradient-to-l from-[#0D9488] to-[#9B59B6] origin-left"
                    style={{ width: topWidth, ...glowStyle }}
                />
                <motion.div
                    className="absolute top-0 right-1/2 h-[50%] bg-gradient-to-r from-[#0D9488] to-[#9B59B6] origin-right"
                    style={{ width: topWidth, ...glowStyle }}
                />

                {/* Side Borders - Gradient Flow */}
                <motion.div
                    className="absolute top-0 right-0 w-[50%] bg-gradient-to-b from-[#9B59B6] via-[#FFD93D] to-[#FF6B6B] origin-top"
                    style={{ height: sideHeight, ...glowStyle }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-[50%] bg-gradient-to-b from-[#9B59B6] via-[#FFD93D] to-[#FF6B6B] origin-top"
                    style={{ height: sideHeight, ...glowStyle }}
                />

                {/* Bottom Borders */}
                <motion.div
                    className="absolute bottom-0 right-0 h-[50%] bg-gradient-to-l from-[#FF6B6B] to-[#FFD93D] origin-right"
                    style={{ width: bottomWidth, ...glowStyle }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 h-[50%] bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] origin-left"
                    style={{ width: bottomWidth, ...glowStyle }}
                />
            </div>

            {/* Card Background */}
            <div className="bg-white rounded-xl p-8 shadow-2xl relative z-10 h-full">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#9B59B6' }}>
                    🎯 The Design Mission
                </h3>
                <p className="text-muted text-lg leading-relaxed">
                    Transform Alex's story from <strong>frustration</strong> to <strong>empowerment</strong>.
                    Create a banking experience that feels approachable, engaging, and even <em>fun</em> —
                    without sacrificing trust or functionality. Make users the <strong>heroes</strong> of
                    their financial journey.
                </p>
            </div>
        </div>

    )
}

const BASE_PATH = '/portfolio-website-2.0'

export default function CaseStudyContent() {
    return (
        <div className="relative">
            {/* Disney Storytelling: The User's Journey */}
            <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#2D1B4E] to-[#1a1a2e] overflow-hidden">
                {/* Magical stars background */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="container max-w-4xl relative z-10">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
                            ✨ The User's Journey ✨
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            A Story of <span className="text-[#FFD93D]">Transformation</span>
                        </h2>
                        <p className="text-xl text-white/60">
                            Every great design starts with understanding the user's story
                        </p>
                    </AnimatedSection>

                    {/* Timeline Story Arc with Animated Curved Path */}
                    <TimelineSection />

                    {/* The Design Mission - with animated border trail */}
                    <DesignMissionCard />
                </div>
            </section>

            {/* Curved Divider - Transition from story to principles */}
            <div className="relative h-32 overflow-hidden" style={{ backgroundColor: '#1a1a2e' }}>
                <svg className="absolute w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path d="M0,0 Q300,100 600,50 T1200,0 L1200,100 L0,100 Z" fill={colors.teal} />
                </svg>
            </div>

            {/* Section 2: Brand Principles - The Four Pillars */}
            <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: colors.teal }}>
                <div className="container max-w-6xl">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block text-white/30 text-[80px] md:text-[120px] font-black leading-none mb-4">
                            02
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Brand Principles
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Every design decision was guided by four core principles: <strong>Clear</strong>, <strong>Playful</strong>, <strong>Trustworthy</strong>, and <strong>Responsive</strong>.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* CLEAR */}
                        <PrincipleCard
                            icon="✨"
                            title="Clear"
                            color={colors.teal}
                            delay={0}
                            radius="rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl"
                        >
                            <p>
                                <strong className="text-text">8-point grid system</strong> with consistent 16/24 spacing and unified card padding.
                                Removed most scrollable mini-panels and re-flowed content to fit the viewport — majority of content is
                                visible without scrolling.
                            </p>
                            <p>
                                <strong className="text-text">Strong grid activation:</strong> Made a conscious effort to use Figma's grid and
                                column tools for pixel-perfect card positioning throughout all screens.
                            </p>
                            <p>
                                <strong className="text-text">Simplified hierarchy</strong> on My Accounts and Current Account headers:
                                large balance → single primary CTA → secondary/tertiary actions. Clear information architecture.
                            </p>
                            <p>
                                <strong className="text-text">Data-vis consistency:</strong> Reworked all line charts to share the same
                                stroke weight, point style, and legend treatment. Aligned axes/labels and made "Crystal Ball Insights"
                                read left-to-right with sub-headings — avoiding user confusion.
                            </p>
                        </PrincipleCard>

                        {/* PLAYFUL */}
                        <PrincipleCard
                            icon="🎨"
                            title="Playful"
                            color={colors.coral}
                            delay={0.15}
                            radius="rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"
                        >
                            <p>
                                Kept the brand's upbeat flavour through <strong className="text-text">rounded chips and micro-badges</strong>,
                                but reduced shouty ALL-CAPS to sentence case, using softer motion cues rather than heavy shadows —
                                preserving playfulness without clutter.
                            </p>
                            <p>
                                <strong className="text-text">Tight palette</strong> of brand purples + tints of yellow/peach for highlights,
                                applied sparingly to emphasise "moments of delight" (achievements, perks) — not core content.
                            </p>
                            <p>
                                Applying <strong className="text-text">purple throughout</strong> really supported that wizardry feel.
                                Combined with wizard-themed wordplay ("Magic Balance", "Crystal Ball"), it boosted the personality
                                that users could connect with.
                            </p>
                            <p>
                                <strong className="text-text">Outfit typography</strong> added to the playful factor — it's a nice sans-serif
                                that's still easy to read at all sizes.
                            </p>
                        </PrincipleCard>

                        {/* TRUSTWORTHY */}
                        <PrincipleCard
                            icon="🛡️"
                            title="Trustworthy"
                            color={colors.purple}
                            delay={0.3}
                            radius="rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"
                        >
                            <p>
                                Replaced mixed shadows/strokes with a <strong className="text-text">single approach</strong> (mostly stroke,
                                no drop shadow on buttons) and unified corner radii so badges don't compete with CTAs.
                            </p>
                            <p>
                                <strong className="text-text">Complete colour audit:</strong> Normalised all purples to a single hue family
                                (HSL ~255°) and derived neutrals from that hue for text/dividers. Removed "flat black" — body text and
                                headings now use brand-aligned dark purples for better contrast and coherence.
                            </p>
                            <p>
                                <strong className="text-text">Standardised icon set</strong> and stroke weights. Ensured minimum font size
                                ≥10pt on data tables for accessibility and legibility.
                            </p>
                        </PrincipleCard>

                        {/* RESPONSIVE */}
                        <PrincipleCard
                            icon="📱"
                            title="Responsive"
                            color={colors.yellow}
                            delay={0.45}
                            radius="rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl"
                        >
                            <p>
                                <strong className="text-text">Locked mobile widths</strong> and spacing so repeated modules align precisely
                                across screens — same widths, same spacing philosophy.
                            </p>
                            <p>
                                On tablet, <strong className="text-text">increased padding from sidenav</strong> and grouped nav items higher
                                to reduce travel time for touch interactions.
                            </p>
                            <p>
                                Made data-vis and budget sections use <strong className="text-text">full available width</strong> on
                                tablet/desktop with clear breakpoints.
                            </p>
                            <p>
                                <strong className="text-text">1→4 column progression</strong> as screen sizes increased. The flow of content
                                feels natural and breakpoints create smooth transitions — designs don't jump into completely different
                                layouts that could confuse users.
                            </p>
                        </PrincipleCard>
                    </div>
                </div>
            </section>

            {/* Section 3: Key Screens */}
            <section className="relative py-24 md:py-32 bg-white overflow-hidden">
                <div className="container max-w-6xl">
                    <AnimatedSection className="text-center mb-16">
                        <span className="block text-[100px] md:text-[140px] font-black text-gray-100 leading-none mb-4 select-none">
                            03
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ transform: 'rotate(1deg)' }}>
                            Key <span style={{ color: colors.coral }}>Screens</span>
                        </h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            A closer look at the core banking experiences
                        </p>
                    </AnimatedSection>

                    {/* Screen 1: Accounts Dashboard */}
                    <div className="mb-24">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <AnimatedSection>
                                <FloatingImage
                                    src={`${BASE_PATH}/project-pics/figma-exports/accounts-desktop.webp`}
                                    alt="FinWiz accounts dashboard"
                                    className="w-full border-4 border-gray-100"
                                    rotate={-2}
                                />
                            </AnimatedSection>
                            <AnimatedSection delay={0.2}>
                                <div className="bg-gray-50 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold mb-4 text-text">Accounts Dashboard</h3>
                                    <ul className="space-y-4 text-muted">
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0D9488] font-bold text-xl">→</span>
                                            <span><strong className="text-text">Gamified Balance:</strong> "Total Coins" reframes money in a positive, game-like context</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0D9488] font-bold text-xl">→</span>
                                            <span><strong className="text-text">Achievement Badges:</strong> Visible progress encourages continued engagement</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0D9488] font-bold text-xl">→</span>
                                            <span><strong className="text-text">Treasure Tracker:</strong> Visualizes savings journey with an adventure metaphor</span>
                                        </li>
                                    </ul>
                                    <a
                                        href="https://finwiz-prototype.vercel.app/accounts"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0D9488] to-[#10B981] text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                                    >
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                                        </span>
                                        Try it Live
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>

                    {/* Screen 2: Spending Analytics */}
                    <div className="mb-24">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <AnimatedSection delay={0.2} className="order-2 md:order-1">
                                <div className="bg-gray-50 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold mb-4 text-text">Spending Insights</h3>
                                    <ul className="space-y-4 text-muted">
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#FF6B6B] font-bold text-xl">→</span>
                                            <span><strong className="text-text">Magic Balance:</strong> AI-powered tips help users understand spending patterns</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#FF6B6B] font-bold text-xl">→</span>
                                            <span><strong className="text-text">Category Breakdown:</strong> Visual spending categories make budgeting intuitive</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#FF6B6B] font-bold text-xl">→</span>
                                            <span><strong className="text-text">Transaction Ledger:</strong> Clear, scannable history with smart filtering</span>
                                        </li>
                                    </ul>
                                    <a
                                        href="https://finwiz-prototype.vercel.app/insights"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                                    >
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                                        </span>
                                        Try it Live
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection className="order-1 md:order-2">
                                <FloatingImage
                                    src={`${BASE_PATH}/project-pics/figma-exports/spending-desktop.webp`}
                                    alt="FinWiz spending analytics"
                                    className="w-full border-4 border-gray-100"
                                    rotate={2}
                                />
                            </AnimatedSection>
                        </div>
                    </div>

                    {/* Screen 3: Current Account */}
                    <div>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <AnimatedSection>
                                <FloatingImage
                                    src={`${BASE_PATH}/project-pics/figma-exports/current-account-desktop.webp`}
                                    alt="FinWiz current account view"
                                    className="w-full border-4 border-gray-100"
                                    rotate={-1}
                                />
                            </AnimatedSection>
                            <AnimatedSection delay={0.2}>
                                <div className="bg-gray-50 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold mb-4 text-text">Current Account</h3>
                                    <ul className="space-y-4 text-muted">
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#9B59B6] font-bold text-xl">→</span>
                                            <span><strong className="text-text">Current Magic:</strong> Individual account balance with unified action buttons (Add Money, Send, Transfer, Split)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#9B59B6] font-bold text-xl">→</span>
                                            <span><strong className="text-text">Recent Spells:</strong> Transaction ledger with category filters and time period selector</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#9B59B6] font-bold text-xl">→</span>
                                            <span><strong className="text-text">FinWiz AI Insights:</strong> Personalised tips and predictions to help users stay ahead of their finances</span>
                                        </li>
                                    </ul>
                                    <a
                                        href="https://finwiz-prototype.vercel.app/accounts/current"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9B59B6] to-[#6B46C1] text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                                    >
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                                        </span>
                                        Try it Live
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curved Divider - Yellow */}
            <div className="relative h-24 overflow-hidden bg-white">
                <svg className="absolute w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path d="M0,100 Q300,0 600,50 T1200,100" fill={colors.yellow} />
                </svg>
            </div>

            {/* Section 4: Responsive Strategy */}
            <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: colors.yellow }}>
                <div className="container max-w-6xl">
                    <AnimatedSection className="text-center mb-16">
                        <span className="block text-black/10 text-[80px] md:text-[120px] font-black leading-none mb-4">
                            04
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a2e] mb-4">
                            Responsive Strategy
                        </h2>
                        <p className="text-xl text-[#1a1a2e]/70 max-w-2xl mx-auto">
                            One design system, three experiences. Each breakpoint optimized for its context.
                        </p>
                    </AnimatedSection>

                    {/* Device Comparison */}
                    <div className="flex flex-col lg:flex-row items-end justify-center gap-8 lg:gap-16 mb-16">
                        <AnimatedSection delay={0.1} className="text-center">
                            <p className="font-semibold text-[#1a1a2e] mb-4">Mobile</p>
                            <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl inline-block">
                                <div className="bg-white rounded-[2rem] overflow-hidden w-[180px] h-[380px]">
                                    <LazyImage
                                        src={`${BASE_PATH}/project-pics/figma-exports/accounts-mobile.webp`}
                                        alt="Mobile view"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-[#1a1a2e]/70 mt-4 max-w-[180px] mx-auto">
                                One-handed navigation, essential actions prioritized
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3} className="text-center">
                            <p className="font-semibold text-[#1a1a2e] mb-4">Tablet</p>
                            <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl inline-block">
                                <div className="bg-white rounded-[1.5rem] overflow-hidden w-[280px] h-[380px]">
                                    <LazyImage
                                        src={`${BASE_PATH}/project-pics/figma-exports/accounts-tablet.webp`}
                                        alt="Tablet view"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-[#1a1a2e]/70 mt-4 max-w-[280px] mx-auto">
                                Increased padding from sidenav, grouped nav items
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.5} className="text-center">
                            <p className="font-semibold text-[#1a1a2e] mb-4">Desktop</p>
                            <div className="bg-gray-900 rounded-[1rem] p-2 shadow-2xl inline-block">
                                <div className="bg-white rounded-[0.5rem] overflow-hidden w-[400px] h-[250px]">
                                    <LazyImage
                                        src={`${BASE_PATH}/project-pics/figma-exports/accounts-desktop.webp`}
                                        alt="Desktop view"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-[#1a1a2e]/70 mt-4 max-w-[400px] mx-auto">
                                Full dashboard, multi-column layouts, hover states
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Section 5: Challenges & Learnings */}
            <section className="relative py-24 md:py-32 bg-white overflow-hidden">
                <div className="container max-w-6xl">
                    <AnimatedSection className="text-center mb-16">
                        <span className="block text-gray-200 text-[80px] md:text-[120px] font-black leading-none mb-4">
                            05
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            Challenges & <span style={{ color: colors.purple }}>Learnings</span>
                        </h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Honest reflection on what I struggled with and what I learned from the process
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Challenge 1 */}
                        <AnimatedSection delay={0}>
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 h-full border border-red-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">⚖️</span>
                                    <h3 className="text-xl font-bold text-text">Density vs. Discoverability</h3>
                                </div>
                                <p className="text-muted leading-relaxed">
                                    Balancing rich features (wizards, perks, achievements) with information load was challenging.
                                    I initially relied on too many scrollable sub-areas; removing them surfaced spacing challenges
                                    and forced deeper prioritisation. <em className="text-text">In a way this was good</em> — I was
                                    forced to think more carefully about visual and information hierarchy.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Challenge 2 */}
                        <AnimatedSection delay={0.1}>
                            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 h-full border border-orange-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">🔘</span>
                                    <h3 className="text-xl font-bold text-text">Button Ecosystem Creep</h3>
                                </div>
                                <p className="text-muted leading-relaxed">
                                    Early iterations mixed badge/CTA styles and colour intensities inconsistently. Consolidating to
                                    Primary/Secondary/Tertiary meant redesigning several micro-components and pruning duplicated
                                    actions like repeated "View" labels (now chevrons). <em className="text-text">On the flipside</em>,
                                    this pushed me to create a more robust design system.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Challenge 3 */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-full border border-blue-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">📊</span>
                                    <h3 className="text-xl font-bold text-text">Data Realism in Charts</h3>
                                </div>
                                <p className="text-muted leading-relaxed">
                                    Early graphs had inconsistent curvature and line thickness. Harmonising stroke, point style,
                                    and colours — and making lines feel "real" month-to-month — required multiple passes.
                                    This taught me the importance of establishing data-vis standards early in the design process.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Challenge 4 */}
                        <AnimatedSection delay={0.3}>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 h-full border border-purple-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">🔤</span>
                                    <h3 className="text-xl font-bold text-text">Typography Scale & Hierarchy</h3>
                                </div>
                                <p className="text-muted leading-relaxed">
                                    I over-indexed on large headline sizes initially. Corrected to a capped hierarchy (≤48px for
                                    regular headings, ~80px allowable for hero balances) and set named styles (e.g., H4 18/400).
                                    Would like more time to proof every edge case systematically.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Challenge 5 */}
                        <AnimatedSection delay={0.4}>
                            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 h-full border border-teal-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">🧩</span>
                                    <h3 className="text-xl font-bold text-text">Components & Variants</h3>
                                </div>
                                <p className="text-muted leading-relaxed">
                                    I wish I had used Figma components and variants to their fullest potential for more efficient
                                    workflow. This was partly due to indecisiveness and not knowing how screens would evolve.
                                    <em className="text-text"> In future</em>, I'll establish component architecture earlier in the process.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Challenge 6 */}
                        <AnimatedSection delay={0.5}>
                            <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-8 h-full border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">🎨</span>
                                    <h3 className="text-xl font-bold text-text">Colour Palette Evolution</h3>
                                </div>
                                <p className="text-muted leading-relaxed">
                                    The colour palette changed quite a bit through iterations. If I had established a WCAG-compliant
                                    palette early on, I could have saved significant time. Also would have liked to design a proper
                                    wizard illustration/logo using tools like Photoshop.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Curved Divider - Purple */}
            <div className="relative h-24 overflow-hidden bg-white">
                <svg className="absolute w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path d="M0,100 Q300,0 600,50 T1200,100" fill={colors.purple} />
                </svg>
            </div>

            {/* Section 6: What I'd Do Differently */}
            <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: colors.purple }}>
                <div className="container max-w-6xl">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block text-white/20 text-[80px] md:text-[120px] font-black leading-none mb-4">
                            06
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            What I'd Do Differently
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Reflections on alternative approaches and future improvements
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Alternative Principles */}
                        <AnimatedSection delay={0}>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">🎭 Alternative Brand Principles</h3>
                                <p className="text-white/80 mb-4">
                                    If the Clear/Playful/Trustworthy principles didn't apply, I'd explore completely different styles:
                                </p>
                                <ul className="space-y-2 text-white/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50">•</span>
                                        <span><strong className="text-white">Institutional/Regulated:</strong> Bank-grade, conservative approach</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50">•</span>
                                        <span><strong className="text-white">Pro/Quant Workspace:</strong> Bloomberg-style density</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50">•</span>
                                        <span><strong className="text-white">Youthful/Gamified:</strong> Max engagement, habit-forming</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50">•</span>
                                        <span><strong className="text-white">Luxury/Premium:</strong> Calm wealth, editorial feel</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* With Unlimited Time */}
                        <AnimatedSection delay={0.15}>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">⏰ With Unlimited Time</h3>
                                <ul className="space-y-3 text-white/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50">•</span>
                                        <span><strong className="text-white">Design tokens:</strong> Formalise HSL-based colour ramps, spacing, radii, shadows — export to code</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50">•</span>
                                        <span><strong className="text-white">Accessibility hardening:</strong> Stark + axe reviews across every state, keyboard focus rings, AAA where feasible</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50">•</span>
                                        <span><strong className="text-white">Extended breakpoints:</strong> iPhone SE/mini and large desktop views with dotted fold markers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50">•</span>
                                        <span><strong className="text-white">Modern trends:</strong> Experiment with liquid glass, glassmorphism, or neumorphism</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.3}>
                        <div className="bg-white rounded-2xl p-8 md:p-12">
                            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.purple }}>
                                💡 Key Takeaways for Future Projects
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-xl">🔄</span>
                                    </div>
                                    <h4 className="font-bold text-text mb-2">Feedback Sessions</h4>
                                    <p className="text-sm text-muted">
                                        The feedback sessions were extremely valuable — when feeling lost and stuck, they redirected me back onto the correct path.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-xl">🎯</span>
                                    </div>
                                    <h4 className="font-bold text-text mb-2">Agile Methodology</h4>
                                    <p className="text-sm text-muted">
                                        Would apply agile approach with user research, user stories, and Kanban board to design in a systematic, stage-based manner.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-xl">🛠️</span>
                                    </div>
                                    <h4 className="font-bold text-text mb-2">Design-to-Code</h4>
                                    <p className="text-sm text-muted">
                                        As someone with full-stack experience, designing components with development intent is crucial for good design-to-code conversion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Section 7: The Iterative Process */}
            <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
                <div className="container max-w-6xl">
                    <AnimatedSection className="text-center mb-16">
                        <span className="block text-gray-200 text-[80px] md:text-[120px] font-black leading-none mb-4">
                            07
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            The <span style={{ color: colors.green }}>Process</span>
                        </h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Months of iterations, feedback sessions, and continuous refinement
                        </p>
                    </AnimatedSection>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <AnimatedSection delay={0}>
                                <div className="p-6">
                                    <div className="text-5xl font-black mb-2" style={{ color: colors.teal }}>5+</div>
                                    <p className="text-muted font-medium">Feedback Sessions</p>
                                    <p className="text-sm text-muted/70 mt-2">
                                        Invaluable for staying on track
                                    </p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.1}>
                                <div className="p-6">
                                    <div className="text-5xl font-black mb-2" style={{ color: colors.coral }}>9</div>
                                    <p className="text-muted font-medium">Screen Types</p>
                                    <p className="text-sm text-muted/70 mt-2">
                                        Desktop, Tablet, Mobile
                                    </p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.2}>
                                <div className="p-6">
                                    <div className="text-5xl font-black mb-2" style={{ color: colors.purple }}>4</div>
                                    <p className="text-muted font-medium">Brand Principles</p>
                                    <p className="text-sm text-muted/70 mt-2">
                                        Clear, Playful, Trustworthy, Responsive
                                    </p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.3}>
                                <div className="p-6">
                                    <div className="text-5xl font-black mb-2" style={{ color: colors.yellow }}>∞</div>
                                    <p className="text-muted font-medium">Iterations</p>
                                    <p className="text-sm text-muted/70 mt-2">
                                        Sometimes indecision, always learning
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section
                className="relative py-32 md:py-40 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.purple} 100%)` }}
            >
                <div className="absolute inset-0 overflow-hidden opacity-30">
                    <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/20 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-white/20 blur-3xl" />
                </div>

                <div className="container max-w-4xl text-center relative z-10">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Thanks for Exploring!
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            This case study represents my approach to UI design — combining user empathy, strategic thinking,
                            honest reflection, and visual craft to create meaningful experiences. Every challenge was a learning opportunity.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={`${BASE_PATH}/#ui-designs`}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0D9488] font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                            >
                                View All Designs
                            </a>
                            <a
                                href={`${BASE_PATH}/#contact-form`}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
