import { useState } from 'react'
import { ExternalLink, GraduationCap, Monitor, Smartphone, Tablet } from '../lib/icons'
import { uiDesigns } from '../data/profile'
import BrowserFrame from '../components/nf/BrowserFrame'
import PopButton from '../components/nf/PopButton'
import SectionHeader from '../components/nf/SectionHeader'
import Sparkle from '../components/nf/Sparkle'

const baseUrl = import.meta.env.BASE_URL || '/'

// The UX Design Institute working file behind the nine FinWiz screens
const FIGMA_FILE_URL =
  'https://www.figma.com/design/t0se78v9LXEty073PK3dKa/Owen_Cotter_UI_assignment_UXDI?node-id=144-144'

const DEVICES = [
  { name: 'Desktop', icon: Monitor },
  { name: 'Tablet', icon: Tablet },
  { name: 'Mobile', icon: Smartphone },
]

// "FinWiz: Cards & Magic" -> "Cards & Magic"; "My Accounts: Tablet View" -> "My Accounts"
const screenLabel = (title) => {
  const [before, after] = title.split(': ')
  return before === 'FinWiz' ? after : before
}

const tabClass = (active) =>
  `inline-flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2 text-sm font-bold transition-[transform,background-color,box-shadow] duration-200 ${
    active
      ? 'bg-ink text-cream shadow-none translate-y-0.5'
      : 'bg-ivory text-ink shadow-pop hover:-translate-y-0.5 hover:shadow-pop-lg'
  }`

// Tall full page exports scroll inside a fixed height frame
const ScreenViewport = ({ design, className }) => (
  <div key={design.image} className={`overflow-y-auto overscroll-contain bg-navy-mist ${className}`}>
    <img
      src={design.image}
      alt={`${design.title} screen design`}
      loading="lazy"
      decoding="async"
      className="block w-full"
    />
  </div>
)

const DeviceFrame = ({ design }) => {
  if (design.category === 'Desktop') {
    return (
      <BrowserFrame url="finwiz.app">
        <ScreenViewport design={design} className="h-[420px] sm:h-[520px]" />
      </BrowserFrame>
    )
  }

  const isTablet = design.category === 'Tablet'
  return (
    <div
      className={`mx-auto rounded-[2.25rem] border-2 border-ink bg-ink p-2.5 shadow-pop-lg ${
        isTablet ? 'max-w-[440px]' : 'max-w-[290px]'
      }`}
    >
      <ScreenViewport
        design={design}
        className={`rounded-[1.6rem] ${isTablet ? 'h-[520px]' : 'h-[540px]'}`}
      />
    </div>
  )
}

const UIDesigns = () => {
  const [device, setDevice] = useState('Desktop')
  const [screenIndex, setScreenIndex] = useState(0)

  const screens = uiDesigns.filter((d) => d.category === device)
  const active = screens[Math.min(screenIndex, screens.length - 1)]

  const pickDevice = (name) => {
    setDevice(name)
    setScreenIndex(0)
  }

  return (
    <section id="ui-designs" className="dotgrid relative overflow-hidden border-y-2 border-ink bg-brand-soft/40 py-24 sm:py-32">
      <Sparkle size={36} className="absolute right-[8%] top-16 hidden text-brand md:block" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="🎨 UI design"
          title={
            <>
              FinWiz: a banking app, designed for <span className="marker">every screen.</span>
            </>
          }
          intro="Designed for my UX Design Institute UI design course: nine screens across desktop, tablet and mobile, built in Figma with a focus on clarity, trust and a little bit of magic."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Controls + details */}
          <div data-reveal className="lg:sticky lg:top-28">
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft">
              Device
            </p>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Device">
              {DEVICES.map(({ name, icon: Icon }) => (
                <button
                  key={name}
                  role="tab"
                  aria-selected={device === name}
                  onClick={() => pickDevice(name)}
                  className={tabClass(device === name)}
                >
                  <Icon size={16} /> {name}
                </button>
              ))}
            </div>

            <p className="mb-3 mt-7 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft">
              Screen
            </p>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Screen">
              {screens.map((screen, i) => (
                <button
                  key={screen.title}
                  role="tab"
                  aria-selected={active === screen}
                  onClick={() => setScreenIndex(i)}
                  className={tabClass(active === screen)}
                >
                  {screenLabel(screen.title)}
                </button>
              ))}
            </div>

            <div className="card-pop mt-8 p-6">
              <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-brand-soft px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-eyebrow text-ink">
                <GraduationCap size={12} aria-hidden="true" />
                UX Design Institute · Course project
              </p>
              <h3 className="font-display text-2xl font-extrabold leading-tight text-ink">{active.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{active.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {active.tools.map((tool) => (
                  <span key={tool} className="tag-pop">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PopButton href={`${baseUrl}storytelling.html`} variant="ink">
                Read the design story
              </PopButton>
              <PopButton
                href={FIGMA_FILE_URL}
                variant="ghost"
                arrow={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} aria-hidden="true" /> View the Figma file
              </PopButton>
              <span className="font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft">
                Scroll inside the screen ↓
              </span>
            </div>
          </div>

          {/* Device preview */}
          <div data-reveal style={{ '--reveal-delay': '120ms' }}>
            <DeviceFrame design={active} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UIDesigns
