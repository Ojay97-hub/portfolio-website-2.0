import { useState } from 'react'
import { Github, Linkedin, Mail, X } from '../lib/icons'
import { profile } from '../data/profile'
import { scrollToSection } from '../lib/utils'
import PopButton from '../components/nf/PopButton'
import Sticker from '../components/nf/Sticker'
import Sparkle from '../components/nf/Sparkle'
import LogoMark from '../components/nf/LogoMark'

const baseUrl = import.meta.env.BASE_URL || '/'
const CV_URL = `${baseUrl}project-pics/cv/UI%20DESIGN%20CV%202026.pdf`

const SOCIAL_LINKS = [
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: Github, href: profile.socials.github, label: 'GitHub' },
]

const Hero = () => {
  const [showCV, setShowCV] = useState(false)

  return (
    <section
      id="hero"
      className="dotgrid relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:pb-24"
    >
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-soft/40 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Copy */}
        <div>
          <p data-reveal className="eyebrow mb-7">
            <span className="text-brand-deep">✦</span> {profile.title}
          </p>

          <h1
            data-reveal
            style={{ '--reveal-delay': '80ms' }}
            className="display-xl font-display font-extrabold text-ink"
          >
            Hi, I&apos;m Owen. I design it, <span className="marker">then I build it</span>{' '}
            <span className="doodle-underline">for real.</span>
          </h1>

          <p
            data-reveal
            style={{ '--reveal-delay': '160ms' }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft"
          >
            {profile.shortBio}
          </p>

          <div
            data-reveal
            style={{ '--reveal-delay': '240ms' }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <PopButton onClick={() => scrollToSection('contact-form')}>Hire me</PopButton>
            <PopButton variant="ghost" onClick={() => scrollToSection('featured-projects')}>
              View my work
            </PopButton>
            <button
              onClick={() => setShowCV(!showCV)}
              aria-expanded={showCV}
              aria-controls="cv-viewer"
              className="rounded-full px-3 py-2 text-sm font-bold text-ink underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand-deep"
            >
              {showCV ? 'Hide CV' : 'View CV'}
            </button>
          </div>

          {/* Meta row: Nova Forma + socials */}
          <div
            data-reveal
            style={{ '--reveal-delay': '320ms' }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <a
              href="https://www.novaformadesigns.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft transition-colors hover:text-brand-deep"
            >
              <LogoMark className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              <span>
                Founder of <span className="text-ink">Nova Forma Designs</span> ↗
              </span>
            </a>
            <span aria-hidden className="hidden h-2 w-2 rounded-full bg-brand sm:block" />
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => {
                const isMail = href.startsWith('mailto:')
                return (
                  <a
                    key={label}
                    href={href}
                    target={isMail ? '_self' : '_blank'}
                    rel={isMail ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-ivory text-ink shadow-pop transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-navy hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Portrait card with stickers */}
        <div
          data-reveal
          style={{ '--reveal-delay': '200ms' }}
          className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px]"
        >
          <Sparkle size={40} className="absolute -left-10 top-6 text-brand" />
          <Sparkle size={22} className="absolute -right-6 bottom-24 text-ink" />

          <div className="relative rotate-[3deg] rounded-[2rem] border-2 border-ink bg-brand p-3 shadow-pop-lg transition-transform duration-500 ease-bounce hover:rotate-0">
            <img
              src={`${baseUrl}owen-profile.webp`}
              alt="Owen Cotter"
              width={400}
              height={530}
              fetchPriority="high"
              decoding="async"
              className="aspect-[400/530] w-full rounded-[1.4rem] border-2 border-ink object-cover"
            />
          </div>

          <div className="absolute -left-6 top-10 sm:-left-12">
            <Sticker rotate={-8} className="bg-ivory">Figma → Code</Sticker>
          </div>
          <div className="absolute -right-4 top-1/2 sm:-right-10">
            <Sticker rotate={6} className="bg-brand-soft">React · Django</Sticker>
          </div>
          <div className="absolute -bottom-4 left-6">
            <Sticker rotate={-3} className="bg-ivory">📍 {profile.location}</Sticker>
          </div>
        </div>
      </div>

      {/* CV viewer - only mounts (and fetches the PDF) when opened */}
      {showCV && (
        <div id="cv-viewer" className="relative mx-auto mt-16 w-full max-w-4xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-3xl border-2 border-ink bg-ivory shadow-pop-lg">
            <div className="flex items-center justify-between border-b-2 border-ink bg-cream px-4 py-2.5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink">
                Owen Cotter · CV
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-ink bg-brand px-3 py-1 text-xs font-bold text-navy"
                >
                  Open full screen
                </a>
                <button
                  onClick={() => setShowCV(false)}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink bg-ivory"
                  aria-label="Close CV"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            {/* A4 aspect ratio */}
            <div className="relative w-full bg-navy-mist" style={{ paddingBottom: '141.4%' }}>
              <iframe src={CV_URL} title="Owen Cotter CV" className="absolute inset-0 h-full w-full border-0" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
