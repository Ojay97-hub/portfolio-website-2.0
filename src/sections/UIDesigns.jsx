import { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Smartphone, Tablet, Monitor, Sparkles, ChevronDown, ChevronUp } from '../lib/icons'
import Section from '../components/Section'
import LazyImage from '../components/LazyImage'
import CustomDropdown from '../components/CustomDropdown'
import Button from '../components/Button'
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

export default function UIDesigns() {
    const [filter, setFilter] = useState('All Screens')
    const [tabletScreenIndex, setTabletScreenIndex] = useState(0)
    const [mobileScreenIndex, setMobileScreenIndex] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false)

    const baseUrl = import.meta.env.BASE_URL || '/'

    // Separate designs by category
    const desktopDesigns = uiDesigns.filter(d => d.category === 'Desktop')
    const tabletDesigns = uiDesigns.filter(d => d.category === 'Tablet')
    const mobileDesigns = uiDesigns.filter(d => d.category === 'Mobile')

    // Screen type names for tabs
    const screenTypes = ['My Accounts', 'My Spending', 'Current Account']

    const getDeviceIcon = (category) => {
        switch (category) {
            case 'Mobile': return Smartphone
            case 'Tablet': return Tablet
            case 'Desktop': return Monitor
            default: return Monitor
        }
    }

    const filters = [
        { name: 'All Screens', icon: Filter },
        { name: 'Desktop', icon: Monitor },
        { name: 'Tablet', icon: Tablet },
        { name: 'Mobile', icon: Smartphone }
    ]

    // Determine what to show based on filter
    const showDesktop = filter === 'All Screens' || filter === 'Desktop'
    const showTablet = filter === 'All Screens' || filter === 'Tablet'
    const showMobile = filter === 'All Screens' || filter === 'Mobile'

    // Prepare dropdown options with icons and counts
    const dropdownOptions = filters.map(f => ({
        value: f.name,
        label: f.name === 'All Screens' ? 'All 9 screen types' : `${f.name} (${uiDesigns.filter(d => d.category === f.name).length})`,
        icon: f.icon
    }))

    return (
        <Section id="ui-designs" className="bg-background-alt/30">
            <style>{scrollbarHideStyles}</style>
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">UI/UX Design Showcase</h2>
                <p className="text-muted-foreground text-lg">
                    A comprehensive banking application designed with a focus on clarity, trust, and user experience across all devices.
                </p>

                {/* Storytelling CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6"
                >
                    <a
                        href={`${baseUrl}storytelling.html`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                        style={{
                            background: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 50%, #0D9488 100%)',
                            backgroundSize: '200% 200%',
                            animation: 'gradient-shift 3s ease infinite'
                        }}
                    >
                        <Sparkles size={18} />
                        Explore the Design Story
                    </a>
                    <style>{`
                        @keyframes gradient-shift {
                            0%, 100% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                        }
                    `}</style>
                </motion.div>

                {/* Filter Buttons */}
                <div className="mt-8">
                    {/* Mobile Dropdown */}
                    <div className="md:hidden max-w-xs mx-auto">
                        <CustomDropdown
                            options={dropdownOptions}
                            value={filter}
                            onChange={(val) => setFilter(val)}
                            placeholder="Filter designs..."
                        />
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex flex-wrap justify-center gap-2">
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
                                    {f.name === 'All Screens' ? uiDesigns.length : uiDesigns.filter(d => d.category === f.name).length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Expand/Collapse Button */}
            {!isExpanded && (() => {
                // Dynamic button content based on filter
                const getButtonContent = () => {
                    const FilterIcon = filters.find(f => f.name === filter)?.icon || Monitor
                    const count = filter === 'All Screens'
                        ? uiDesigns.length
                        : uiDesigns.filter(d => d.category === filter).length
                    const label = filter === 'All Screens'
                        ? `View All ${count} Screen Designs`
                        : `View ${count} ${filter} Screens`
                    const subtitle = filter === 'All Screens'
                        ? 'Desktop, Tablet & Mobile Views'
                        : `${filter} screen designs`

                    return { FilterIcon, label, subtitle }
                }

                const { FilterIcon, label, subtitle } = getButtonContent()

                return (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent/80 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group"
                        >
                            <FilterIcon size={20} />
                            {label}
                            <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
                        </button>
                        <p className="text-muted text-sm mt-3">{subtitle}</p>
                    </motion.div>
                )
            })()}

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        {/* Collapse Button */}
                        <div className="text-center mb-8">
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-surface border border-border text-muted hover:text-text hover:border-accent transition-all text-sm font-medium"
                            >
                                <ChevronUp size={16} />
                                Collapse Showcase
                            </button>
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
                                    getDeviceIcon={getDeviceIcon}
                                    bgColor="bg-[#FFF1F2]"
                                />
                            )}

                            {/* Back to Top Button */}
                            <div className="text-center pt-12 pb-4">
                                <button
                                    onClick={() => {
                                        document.getElementById('ui-designs')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent transition-all text-sm font-medium group"
                                >
                                    <ChevronUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                                    Back to Top
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}

// Tabbed section for Tablet/Mobile designs
const TabbedDeviceSection = ({ title, icon: Icon, designs, screenTypes, activeIndex, setActiveIndex, getDeviceIcon, bgColor }) => {
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
            {activeDesign && (
                <DesignCard
                    design={activeDesign}
                    index={activeIndex}
                    getDeviceIcon={getDeviceIcon}
                />
            )}
        </motion.div>
    )
}

const DesignCard = forwardRef(({ design, index, getDeviceIcon }, ref) => {
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
            <div
                ref={ref}
                className="col-span-1 md:col-span-2 lg:col-span-3 mb-12 last:mb-0 group"
            >
                {/* Desktop Specific Layout - Large Frame with Browser Window */}
                <div className="rounded-[2.5rem] bg-[#F5FBFF] dark:bg-[#38B2AC] p-8 md:p-16 transition-all duration-500 hover:shadow-xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.15)]">

                    {/* Header Content */}
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-teal-800 dark:text-white uppercase tracking-widest flex items-center gap-2">
                                <DeviceIcon size={12} /> Desktop View
                            </span>
                        </div>
                        <h3 className="text-base md:text-4xl font-bold text-teal-900 dark:text-white mb-4 leading-tight">{design.title}</h3>
                        <p className="text-sm md:text-lg text-teal-800 dark:text-teal-100 leading-relaxed">{design.description}</p>
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
                        <div className="relative">
                            <LazyImage
                                src={design.image}
                                alt={design.title}
                                className="w-full h-auto object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex justify-center gap-2 mt-8">
                        {design.tools.map((tool, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-bold bg-white/80 dark:bg-white/20 text-teal-800 dark:text-white rounded-lg border border-teal-100 dark:border-white/20 backdrop-blur-sm">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Default Layout for Tablet/Mobile
    return (
        <div
            ref={ref}
            className="flex flex-col h-full group"
        >
            {/* Framed Image Container */}
            <div className={`relative flex-1 overflow-hidden rounded-[2rem] ${frameColors[design.category] || 'bg-gray-100'} p-8 transition-all duration-300 hover:shadow-lg`}>

                {/* Inner Image with Shadow & Border Radius */}
                <div className="relative h-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-white ring-1 ring-black/5">
                    <LazyImage
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Badge - Floating on the Frame (Top Right) */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm text-gray-700 text-xs font-semibold shadow-sm z-10">
                    <DeviceIcon size={12} />
                    {design.category}
                </div>
            </div>

            {/* Content - Below Frame */}
            <div className="mt-5 px-2">
                <h4 className="text-foreground font-bold text-base md:text-xl leading-tight mb-2 group-hover:text-primary transition-colors">{design.title}</h4>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3 leading-relaxed">{design.description}</p>

                <div className="flex flex-wrap gap-2">
                    {design.tools.slice(0, 3).map((tool, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/80 bg-secondary/50 px-2 py-1 rounded-md">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
})

DesignCard.displayName = 'DesignCard'
