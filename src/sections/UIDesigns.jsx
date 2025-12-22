import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, ChevronLeft, ChevronRight, Filter, Smartphone, Tablet, Monitor } from '../lib/icons'
import Section from '../components/Section'
import Badge from '../components/Badge'
import Button from '../components/Button'
import LazyImage from '../components/LazyImage'
import { uiDesigns } from '../data/profile'

// Add custom scrollbar hiding style
const scrollbarHideStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

const Lightbox = ({ design, onClose, onNext, onPrev, currentIndex, total, getDeviceIcon }) => {
    const DeviceIcon = getDeviceIcon(design.category)

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') onNext()
            if (e.key === 'ArrowLeft') onPrev()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose, onNext, onPrev])

    const getDeviceFrameClass = () => {
        switch (design.category) {
            case 'Mobile': return 'max-w-[320px] aspect-[9/19] rounded-[2rem]'
            case 'Tablet': return 'max-w-[700px] aspect-[4/3] rounded-xl'
            default: return 'max-w-[1000px] aspect-[16/10] rounded-lg'
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md"
            onClick={onClose}
        >
            <style>{scrollbarHideStyles}</style>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            >
                <X size={24} />
            </button>

            {/* Navigation - Left */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-2 md:left-6 md:top-1/2 md:-translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 hidden md:block"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Navigation - Right */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-2 md:right-6 md:top-1/2 md:-translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 hidden md:block"
            >
                <ChevronRight size={24} />
            </button>

            {/* Content Container */}
            <div
                className="relative w-full h-full max-h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
                onClick={e => e.stopPropagation()}
            >
                {/* Navigation - Mobile (Top) */}
                <div className="flex md:hidden items-center justify-between w-full absolute top-0 px-2 py-4 z-10">
                    <button onClick={onPrev} className="p-2 bg-black/50 rounded-full text-white"><ChevronLeft size={20} /></button>
                    <span className="text-white/80 text-sm">{currentIndex + 1} / {total}</span>
                    <button onClick={onNext} className="p-2 bg-black/50 rounded-full text-white"><ChevronRight size={20} /></button>
                </div>

                {/* Image Preview */}
                <div className="flex-1 w-full h-full flex items-center justify-center overflow-y-auto hide-scrollbar p-4">
                    <motion.div
                        layoutId={`image-${design.title}`}
                        className={`relative bg-gray-900 shadow-2xl overflow-hidden border-[6px] border-gray-800 ${getDeviceFrameClass()}`}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-10" />
                        <LazyImage
                            src={design.image}
                            alt={design.title}
                            className="w-full h-full object-cover object-top"
                        />
                    </motion.div>
                </div>

                {/* Info Sidebar (Desktop) / Bottom Sheet (Mobile) */}
                <div className="w-full md:w-[350px] shrink-0 bg-surface/5 md:bg-transparent p-4 md:p-0 rounded-t-2xl md:rounded-none backdrop-blur-md md:backdrop-filter-none">
                    <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-white border-white/20">
                            <DeviceIcon size={12} className="mr-1" />
                            {design.category}
                        </Badge>
                        <span className="text-white/50 text-sm">{currentIndex + 1} of {total}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{design.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{design.description}</p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-white/90 text-sm font-semibold mb-2 uppercase tracking-wider">Tools Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {design.tools.map((tool, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm border border-white/10">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Button
                            href={design.figmaUrl}
                            variant="primary"
                            icon={ExternalLink}
                            className="w-full justify-center mt-4 bg-[#F24E1E] hover:bg-[#D43B0F] border-none text-white"
                        >
                            Open in Figma
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function UIDesigns() {
    const [filter, setFilter] = useState('All')
    const [selectedDesign, setSelectedDesign] = useState(null)
    const [tabletScreenIndex, setTabletScreenIndex] = useState(0)
    const [mobileScreenIndex, setMobileScreenIndex] = useState(0)

    // Separate designs by category
    const desktopDesigns = uiDesigns.filter(d => d.category === 'Desktop')
    const tabletDesigns = uiDesigns.filter(d => d.category === 'Tablet')
    const mobileDesigns = uiDesigns.filter(d => d.category === 'Mobile')

    // Screen type names for tabs
    const screenTypes = ['My Accounts', 'My Spending', 'Current Account']

    const handleNext = useCallback(() => {
        setSelectedDesign((prev) => (prev + 1) % uiDesigns.length)
    }, [])

    const handlePrev = useCallback(() => {
        setSelectedDesign((prev) => (prev - 1 + uiDesigns.length) % uiDesigns.length)
    }, [])

    const getDeviceIcon = (category) => {
        switch (category) {
            case 'Mobile': return Smartphone
            case 'Tablet': return Tablet
            case 'Desktop': return Monitor
            default: return Monitor
        }
    }

    const filters = [
        { name: 'All', icon: Filter },
        { name: 'Desktop', icon: Monitor },
        { name: 'Tablet', icon: Tablet },
        { name: 'Mobile', icon: Smartphone }
    ]

    // Determine what to show based on filter
    const showDesktop = filter === 'All' || filter === 'Desktop'
    const showTablet = filter === 'All' || filter === 'Tablet'
    const showMobile = filter === 'All' || filter === 'Mobile'

    return (
        <Section id="ui-designs" className="bg-background-alt/30">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">UI/UX Design Showcase</h2>
                <p className="text-muted-foreground text-lg">
                    A comprehensive banking application designed with a focus on clarity, trust, and user experience across all devices.
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mt-8">
                    {filters.map((f) => (
                        <button
                            key={f.name}
                            onClick={() => setFilter(f.name)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === f.name
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-surface hover:bg-surface-hover text-gray-600 hover:text-primary border border-border'
                                }`}
                        >
                            <f.icon size={14} />
                            {f.name}
                            <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${filter === f.name ? 'bg-white/20' : 'bg-gray-100'
                                }`}>
                                {f.name === 'All' ? uiDesigns.length : uiDesigns.filter(d => d.category === f.name).length}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-16 pb-20 px-4 md:px-0">
                {/* Desktop Designs - Full Width Cards */}
                {showDesktop && (
                    <div className="space-y-8">
                        <AnimatePresence mode="popLayout">
                            {desktopDesigns.map((design, index) => (
                                <DesignCard
                                    key={`desktop-${index}`}
                                    design={design}
                                    index={index}
                                    onClick={() => setSelectedDesign(uiDesigns.findIndex(d => d === design))}
                                    getDeviceIcon={getDeviceIcon}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Tablet Designs - Single Column with Tabs */}
                {showTablet && tabletDesigns.length > 0 && (
                    <TabbedDeviceSection
                        title="Tablet Views"
                        icon={Tablet}
                        designs={tabletDesigns}
                        screenTypes={screenTypes}
                        activeIndex={tabletScreenIndex}
                        setActiveIndex={setTabletScreenIndex}
                        onCardClick={(design) => setSelectedDesign(uiDesigns.findIndex(d => d === design))}
                        getDeviceIcon={getDeviceIcon}
                        bgColor="bg-[#F0FDF4]"
                    />
                )}

                {/* Mobile Designs - Single Column with Tabs */}
                {showMobile && mobileDesigns.length > 0 && (
                    <TabbedDeviceSection
                        title="Mobile Views"
                        icon={Smartphone}
                        designs={mobileDesigns}
                        screenTypes={screenTypes}
                        activeIndex={mobileScreenIndex}
                        setActiveIndex={setMobileScreenIndex}
                        onCardClick={(design) => setSelectedDesign(uiDesigns.findIndex(d => d === design))}
                        getDeviceIcon={getDeviceIcon}
                        bgColor="bg-[#FFF1F2]"
                    />
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedDesign !== null && (
                    <Lightbox
                        design={uiDesigns[selectedDesign]}
                        onClose={() => setSelectedDesign(null)}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        currentIndex={selectedDesign}
                        total={uiDesigns.length}
                        getDeviceIcon={getDeviceIcon}
                    />
                )}
            </AnimatePresence>
        </Section>
    )
}

// Tabbed section for Tablet/Mobile designs
const TabbedDeviceSection = ({ title, icon: Icon, designs, screenTypes, activeIndex, setActiveIndex, onCardClick, getDeviceIcon, bgColor }) => {
    const activeDesign = designs[activeIndex]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
        >
            {/* Section Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10">
                    <Icon size={20} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            </div>

            {/* Screen Type Tabs */}
            <div className="flex justify-center gap-2 mb-8">
                {screenTypes.map((screenType, index) => (
                    <button
                        key={screenType}
                        onClick={() => setActiveIndex(index)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeIndex === index
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-surface hover:bg-surface-hover text-muted-foreground border border-border'
                            }`}
                    >
                        {screenType}
                    </button>
                ))}
            </div>

            {/* Active Design Card */}
            <AnimatePresence mode="wait">
                {activeDesign && (
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <DesignCard
                            design={activeDesign}
                            index={activeIndex}
                            onClick={() => onCardClick(activeDesign)}
                            getDeviceIcon={getDeviceIcon}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const DesignCard = ({ design, index, onClick, getDeviceIcon }) => {
    const DeviceIcon = getDeviceIcon(design.category)
    const isDesktop = design.category === 'Desktop'

    // Background colors for the frames pattern
    const frameColors = {
        'Desktop': 'bg-[#E5E7EB]', // Light Gray for that structural feel
        'Tablet': 'bg-[#F0FDF4]',  // Soft Green
        'Mobile': 'bg-[#FFF1F2]',  // Soft Rose
    }

    if (isDesktop) {
        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 mb-12 last:mb-0 group cursor-pointer"
                onClick={onClick}
            >
                {/* Desktop Specific Layout - Large Frame with Browser Window */}
                <div className="rounded-[2.5rem] bg-[#E2E8F0] dark:bg-slate-800 p-8 md:p-16 transition-all duration-500 hover:shadow-xl">

                    {/* Header Content */}
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                                <DeviceIcon size={12} /> Desktop View
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{design.title}</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{design.description}</p>
                    </div>

                    {/* Browser Window Mockup */}
                    <div className="relative mx-auto max-w-5xl rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 ring-1 ring-slate-900/5 transition-transform duration-500 group-hover:scale-[1.01]">
                        {/* Browser Toolbar */}
                        <div className="h-10 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                            </div>
                            {/* Fake Address Bar */}
                            <div className="flex-1 mx-4">
                                <div className="h-6 bg-white dark:bg-slate-700 rounded-md border border-slate-200 dark:border-slate-600 w-2/3 mx-auto opacity-50"></div>
                            </div>
                        </div>

                        {/* Image Window */}
                        <div className="relative group-hover:opacity-95 transition-opacity">
                            <LazyImage
                                src={design.image}
                                alt={design.title}
                                className="w-full h-auto object-cover object-top"
                            />
                            {/* Click to View Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 backdrop-blur-[1px]">
                                <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                        <ExternalLink size={16} /> View Full Detail
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex justify-center gap-2 mt-8">
                        {design.tools.map((tool, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-semibold bg-white/50 dark:bg-black/20 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        )
    }

    // Default Layout for Tablet/Mobile
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col h-full group cursor-pointer"
            onClick={onClick}
        >
            {/* Framed Image Container */}
            <div className={`relative flex-1 overflow-hidden rounded-[2rem] ${frameColors[design.category] || 'bg-gray-100'} p-8 transition-all duration-300 hover:shadow-lg`}>

                {/* Inner Image with Shadow & Border Radius */}
                <div className="relative h-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-white ring-1 ring-black/5">
                    <LazyImage
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-500"
                    />

                    {/* View Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-xl transform scale-95 group-hover:scale-100 transition-transform duration-200">
                            <span className="text-gray-900 font-semibold text-sm flex items-center gap-2">
                                <ExternalLink size={14} /> View
                            </span>
                        </div>
                    </div>
                </div>

                {/* Badge - Floating on the Frame (Top Right) */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm text-gray-700 text-xs font-semibold shadow-sm z-10">
                    <DeviceIcon size={12} />
                    {design.category}
                </div>
            </div>

            {/* Content - Below Frame */}
            <div className="mt-5 px-2">
                <h4 className="text-foreground font-bold text-xl leading-tight mb-2 group-hover:text-primary transition-colors">{design.title}</h4>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3 leading-relaxed">{design.description}</p>

                <div className="flex flex-wrap gap-2">
                    {design.tools.slice(0, 3).map((tool, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/80 bg-secondary/50 px-2 py-1 rounded-md">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
