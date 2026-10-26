import { Eye, BookOpen, Building, Code, Palette, Users } from '../lib/icons'
import { benefits } from '../data/profile'
import { scrollToSection } from '../lib/utils'
import PopButton from '../components/nf/PopButton'
import SectionHeader from '../components/nf/SectionHeader'
import Sparkle from '../components/nf/Sparkle'

const iconMap = { Eye, BookOpen, Building, Code, Palette, Users }

const Benefits = () => (
  <section id="benefits" className="dotgrid relative py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        eyebrow="✦ Why hire me"
        title="What I bring to your team."
        intro="Fresh energy, a designer's eye and the habit of actually shipping things."
      />

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => {
          const Icon = iconMap[benefit.icon] || Code
          return (
            <li
              key={benefit.title}
              data-reveal
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
              className="card-pop group relative p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-brand-soft transition-transform duration-300 ease-bounce group-hover:rotate-12">
                  <Icon size={20} className="text-ink" />
                </span>
                <span className="font-display text-4xl font-extrabold text-ink/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold text-ink">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{benefit.description}</p>
            </li>
          )
        })}
      </ol>

      {/* Call to action strip */}
      <div
        data-reveal
        className="relative mt-16 overflow-hidden rounded-[2rem] border-2 border-ink bg-ink p-8 text-cream shadow-pop-lg sm:p-12"
      >
        <Sparkle size={44} className="absolute right-8 top-8 hidden text-brand sm:block" />
        <h3 className="display-lg max-w-xl font-display font-extrabold">
          Ready to add me to your team?
        </h3>
        <p className="mt-4 max-w-lg text-cream/75">
          I&apos;m looking for my first developer role, and I&apos;m keen to bring modern practices and
          plenty of enthusiasm to it.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
          <PopButton onClick={() => scrollToSection('contact-form')} className="border-cream">
            Let&apos;s connect
          </PopButton>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-cream/80">
            {['Agile', 'Clean code', 'Accessible', 'Design minded'].map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Benefits
