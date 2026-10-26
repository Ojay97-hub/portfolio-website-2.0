import { BookOpen, Code, Trophy, Briefcase } from '../lib/icons'
import { profile, skills } from '../data/profile'
import PopButton from '../components/nf/PopButton'
import Sparkle from '../components/nf/Sparkle'
import LogoMark from '../components/nf/LogoMark'

const journeyUrl = `${import.meta.env.BASE_URL}journey.html`

const STATS = [
  { icon: Code, value: '5', label: 'Course projects shipped' },
  { icon: Briefcase, value: '3', label: 'Real client websites' },
  { icon: Trophy, value: '3rd', label: 'Hackathon placing' },
]

// Gentle, deterministic tilt so the skill stickers feel hand placed
const TILTS = [-3, 2, -1, 3, -2, 1]

const About = () => (
  <section id="about" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Story */}
        <div>
          <div data-reveal>
            <p className="eyebrow mb-7">👋 About me</p>
            <h2 className="display-lg font-display font-extrabold text-ink">
              Events manager turned <span className="marker">developer and designer.</span>
            </h2>
          </div>

          <div
            data-reveal
            style={{ '--reveal-delay': '100ms' }}
            className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft"
          >
            <p>
              I&apos;m a Code Institute graduate and junior developer based in {profile.location}. Through
              the bootcamp I built a strong foundation in modern web technologies and shipped five
              hands on portfolio projects.
            </p>
            <p>
              That journey runs from interactive JavaScript games to a full stack ecommerce platform
              with Django and Stripe. I also placed 3rd in a hackathon, working fast with a team under
              pressure.
            </p>
            <p>
              Paired with my UI design certification, I bring both technical skill and a designer&apos;s
              eye, so what I build looks considered and works properly.
            </p>
          </div>

          <div data-reveal style={{ '--reveal-delay': '160ms' }} className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="card-pop p-4 text-center sm:p-5">
                <Icon size={20} className="mx-auto text-brand-deep" />
                <div className="mt-2 font-display text-3xl font-extrabold text-ink">{value}</div>
                <div className="mt-1 text-xs font-bold leading-snug text-ink-soft">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Side cards */}
        <div className="space-y-8 lg:pt-6">
          <div data-reveal style={{ '--reveal-delay': '120ms' }} className="relative rotate-[1.5deg] rounded-3xl border-2 border-ink bg-ink p-7 text-cream shadow-pop-lg">
            <Sparkle size={28} className="absolute -right-3 -top-3 text-brand" />
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-brand bg-cream">
                <LogoMark className="h-9 w-9" />
              </span>
              <p className="font-mono text-[11px] font-bold uppercase tracking-eyebrow text-cream/70">
                Also me
              </p>
            </div>
            <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight">
              Founder of Nova Forma Designs
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">
              My web design studio. I build clean, professional websites for small businesses and
              local organisations, from a luxury car dealer to a community hall on the Gower.
            </p>
            <a
              href="https://www.novaformadesigns.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-cream bg-brand px-4 py-2 text-sm font-bold text-navy transition-transform duration-200 hover:-translate-y-0.5"
            >
              Visit the studio ↗
            </a>
          </div>

          <div data-reveal style={{ '--reveal-delay': '180ms' }} className="card-pop p-7">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-brand-soft">
                <BookOpen size={20} className="text-ink" />
              </span>
              <div>
                <h3 className="font-display text-xl font-extrabold text-ink">The journey blog</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  How events management, world travel and Code Institute shaped my path into remote
                  friendly software development.
                </p>
              </div>
            </div>
            <PopButton href={journeyUrl} variant="ghost" className="mt-6">
              Read the full story
            </PopButton>
          </div>
        </div>
      </div>

      {/* Skills sticker wall */}
      <div id="skills" data-reveal className="mt-20">
        <h3 className="mb-6 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft">
          Skills &amp; tools I use
        </h3>
        <ul className="flex flex-wrap gap-2.5">
          {skills.map((skill, i) => (
            <li
              key={skill}
              style={{ rotate: `${TILTS[i % TILTS.length]}deg` }}
              className="rounded-full border-2 border-ink bg-ivory px-3.5 py-1.5 text-sm font-bold text-ink shadow-pop transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-navy"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default About
