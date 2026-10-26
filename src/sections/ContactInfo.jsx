import { Mail, MapPin, Linkedin, Github } from '../lib/icons'
import { profile } from '../data/profile'

const METHODS = [
  { icon: Mail, title: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, title: 'LinkedIn', value: 'Connect with me', href: profile.socials.linkedin },
  { icon: Github, title: 'GitHub', value: 'Browse my code', href: profile.socials.github },
  { icon: MapPin, title: 'Location', value: profile.location },
]

const ContactInfo = () => (
  <section id="contact-info" className="relative pb-24">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METHODS.map(({ icon: Icon, title, value, href }, i) => {
          const isMail = href?.startsWith('mailto:')
          const inner = (
            <>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-brand-soft">
                <Icon size={20} className="text-ink" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft">
                  {title}
                </span>
                <span className="block truncate font-bold text-ink">{value}</span>
              </span>
            </>
          )

          return (
            <li key={title} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
              {href ? (
                <a
                  href={href}
                  target={isMail ? '_self' : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  className="card-pop flex items-center gap-4 p-5 transition-transform duration-200 hover:-translate-y-1"
                >
                  {inner}
                </a>
              ) : (
                <div className="card-pop flex items-center gap-4 p-5">{inner}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  </section>
)

export default ContactInfo
