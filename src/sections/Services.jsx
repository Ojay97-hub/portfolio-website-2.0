import { Code, Server, Palette, Layers, ArrowRight } from '../lib/icons'
import { projects } from '../data/profile'
import { scrollToSection } from '../lib/utils'
import SectionHeader from '../components/nf/SectionHeader'

const byCode = (code) => projects.find((p) => p.title.includes(`(${code})`))
const shortTitle = (title) => title.split('(')[0].trim()

const SERVICES = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive websites using HTML, CSS, JavaScript and React.',
    icon: Code,
    skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React', 'Responsive Design'],
    work: [byCode('P1'), byCode('P2')],
    color: 'bg-brand-soft',
  },
  {
    title: 'Backend Development',
    description: 'Logic driven applications with Python and solid algorithm implementation.',
    icon: Server,
    skills: ['Python', 'Object Oriented Programming', 'Game Logic', 'Algorithms'],
    work: [byCode('P3')],
    color: 'bg-navy-mist',
  },
  {
    title: 'Full Stack Development',
    description: 'End to end web apps with Django, databases, authentication and payments.',
    icon: Layers,
    skills: ['Django', 'PostgreSQL', 'Stripe', 'Authentication', 'MVC Architecture'],
    work: [byCode('P4'), byCode('P5')],
    color: 'bg-ivory',
  },
  {
    title: 'UI Design',
    description: 'Interfaces designed in Figma with components, systems and real user flows.',
    icon: Palette,
    skills: ['Figma', 'Visual Design', 'Wireframing', 'Prototyping', 'Design Systems'],
    designLink: true,
    color: 'bg-brand',
  },
]

const Services = () => (
  <section id="services" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        eyebrow="🛠️ What I do"
        title="Design and code, under one roof."
        intro="Each skill here is backed by a project you can open and click around."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map(({ title, description, icon: Icon, skills, work, designLink, color }, i) => (
          <article
            key={title}
            data-reveal
            style={{ '--reveal-delay': `${(i % 2) * 100}ms` }}
            className={`flex flex-col rounded-3xl border-2 border-ink p-7 shadow-pop-lg transition-transform duration-300 ease-bounce hover:-translate-y-1.5 ${color} ${color === 'bg-brand' ? 'text-navy' : 'text-ink'}`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-current bg-ivory text-ink">
              <Icon size={24} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-extrabold">{title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${color === 'bg-brand' ? 'text-navy/80' : 'text-ink-soft'}`}>
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="tag-pop">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-7">
              {designLink ? (
                <button
                  onClick={() => scrollToSection('ui-designs')}
                  className="group inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-4"
                >
                  See the FinWiz designs
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              ) : (
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {work.filter(Boolean).map((project) => (
                    <li key={project.title}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm font-bold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-deep"
                      >
                        {shortTitle(project.title)}
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
