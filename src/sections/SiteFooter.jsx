import { ArrowUp, Github, Linkedin, Mail } from '../lib/icons'
import { profile } from '../data/profile'
import { scrollToSection } from '../lib/utils'
import LogoMark from '../components/nf/LogoMark'

// Site footer in the Nova Forma style. Pass homeUrl on other pages (e.g. the
// Journey page) so the section links navigate back to the homepage.
const SOCIAL_LINKS = [
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: Github, href: profile.socials.github, label: 'GitHub' },
]

const QUICK_LINKS = [
  { label: 'Work', id: 'featured-projects' },
  { label: 'Designs', id: 'ui-designs' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'services' },
  { label: 'Contact', id: 'contact-form' },
]

const SiteFooter = ({ homeUrl }) => (
  <footer className="border-t-2 border-ink bg-ink text-cream">
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr_1fr]">
        <div>
          <a
            href="https://www.novaformadesigns.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 inline-flex items-center gap-3"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand bg-cream transition-transform duration-300 group-hover:rotate-12">
              <LogoMark className="h-8 w-8" />
            </span>
            <span className="font-display text-xl font-extrabold">nova forma designs</span>
          </a>
          <p className="font-display text-4xl font-extrabold leading-none sm:text-5xl">
            Let&apos;s build something <span className="text-brand dark:text-[#138E8D]">good.</span>
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">{profile.shortBio}</p>
          <div className="mt-6 flex gap-2">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => {
              const isMail = href.startsWith('mailto:')
              return (
                <a
                  key={label}
                  href={href}
                  target={isMail ? '_self' : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-cream text-cream transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-navy"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-eyebrow text-cream/60">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`${homeUrl || ''}#${id}`}
                  onClick={(e) => {
                    if (homeUrl) return
                    e.preventDefault()
                    scrollToSection(id)
                  }}
                  className="text-sm font-bold text-cream/85 transition-colors hover:text-brand dark:hover:text-[#138E8D]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-eyebrow text-cream/60">
            Get in touch
          </h2>
          <div className="mt-4 space-y-2.5 text-sm">
            <a href={`mailto:${profile.email}`} className="block font-bold text-cream/85 hover:text-brand dark:hover:text-[#138E8D]">
              {profile.email}
            </a>
            <a
              href="mailto:owen.cotter@novaformadesigns.com"
              className="block font-bold text-cream/85 hover:text-brand dark:hover:text-[#138E8D]"
            >
              owen.cotter@novaformadesigns.com
            </a>
            <p className="text-cream/60">Based in {profile.location}</p>
            <p className="text-cream/60">Open to my first developer role</p>
          </div>
        </div>
      </div>

      {/* Big wordmark, as on the Nova Forma site */}
      <div aria-hidden="true" className="mt-14 select-none leading-none tracking-tight">
        <p className="font-display text-[14vw] font-extrabold leading-none tracking-tight text-cream/50 lg:text-[9.5rem]">
          Nova Forma
        </p>
        <p className="font-display text-[4vw] font-semibold tracking-widest text-cream/25 lg:text-[2.6rem]">
          Portfolio
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t-2 border-cream/10 pt-6 font-mono text-[11px] uppercase tracking-eyebrow text-cream/70">
        <span>© {new Date().getFullYear()} Nova Forma Designs. All rights reserved.</span>
        <button
          onClick={() => (homeUrl ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollToSection('hero'))}
          className="group inline-flex items-center gap-1.5 font-bold text-cream/60 transition-colors hover:text-brand dark:hover:text-[#138E8D]"
        >
          Back to top
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  </footer>
)

export default SiteFooter
