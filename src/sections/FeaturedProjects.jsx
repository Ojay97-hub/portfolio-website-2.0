import { Coffee, ExternalLink, Github } from '../lib/icons'
import { projects } from '../data/profile'
import { getImageUrl } from '../lib/imageUtils'
import BrowserFrame from '../components/nf/BrowserFrame'
import SectionHeader from '../components/nf/SectionHeader'

const hostOf = (url) => {
  try {
    return new URL(url).host
  } catch {
    return undefined
  }
}

const hasLive = (project) => project.liveUrl && project.liveUrl !== '#'

// Free Render instances sleep when idle, so warn (nicely) about the wake up
const WakeUpNote = ({ project }) =>
  project.liveUrl?.includes('onrender.com') ? (
    <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-ink-faint">
      <Coffee size={14} className="mt-0.5 shrink-0 text-brand-deep" />
      <span>
        Lives on a free server that naps when nobody&apos;s around. Give it 30 to 60 seconds to wake
        up. Not broken, just not a morning person.
      </span>
    </p>
  ) : null

const ProjectLinks = ({ project }) => (
  <div className="flex flex-wrap gap-2">
    {hasLive(project) && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-brand px-3.5 py-1.5 text-xs font-bold text-navy shadow-pop transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none"
      >
        <ExternalLink size={14} /> Live site
      </a>
    )}
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-ivory px-3.5 py-1.5 text-xs font-bold text-ink shadow-pop transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-navy-mist hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none"
      >
        <Github size={14} /> Code
      </a>
    )}
  </div>
)

const ProjectCard = ({ project, featured = false, delay = 0 }) => {
  const live = hasLive(project)
  const Frame = live ? 'a' : 'div'
  const frameProps = live
    ? {
        href: project.liveUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `Visit the ${project.title} live site`,
      }
    : {}

  return (
    <article
      data-reveal
      style={{ '--reveal-delay': `${delay}ms` }}
      className="group relative"
    >
      <Frame
        {...frameProps}
        className={`relative block transition-transform duration-300 ease-bounce group-hover:-translate-y-2 ${featured ? '' : 'group-hover:rotate-[-1deg]'}`}
      >
        <span className="absolute -right-2 -top-3 z-10 rotate-6 rounded-lg border-2 border-ink bg-ivory px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink shadow-pop transition-transform duration-300 group-hover:rotate-12">
          {project.projectType}
        </span>

        <BrowserFrame url={live ? hostOf(project.liveUrl) : 'github.com'}>
          <div className="relative aspect-[16/10] overflow-hidden bg-navy-mist">
            <img
              src={getImageUrl(project.image)}
              alt={`Screenshot of ${project.title}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </BrowserFrame>
      </Frame>

      <div className={featured ? 'mt-6 grid gap-5 px-1 md:grid-cols-[1fr_auto] md:items-start' : 'mt-5 px-1'}>
        <div>
          <h3
            className={`font-display font-extrabold leading-tight text-ink transition-colors group-hover:text-brand-deep ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}
          >
            {project.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed text-ink-soft ${featured ? 'max-w-2xl' : 'line-clamp-3'}`}>
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag-pop">
                {tech}
              </span>
            ))}
          </div>
          <WakeUpNote project={project} />
        </div>
        <div className={featured ? '' : 'mt-4'}>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((p) => p.featured)
  if (featuredProjects.length === 0) return null

  const [lead, ...rest] = featuredProjects

  return (
    <section id="featured-projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="📂 Selected work"
          title="Real projects, built end to end."
          intro="From a brewery shop with Stripe checkout to a Python card game, every one of these was designed, built and shipped by me."
        />

        <div className="mb-20">
          <ProjectCard project={lead} featured />
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <div key={project.title} className={i % 3 === 1 ? 'lg:translate-y-10' : ''}>
              <ProjectCard project={project} delay={(i % 3) * 100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
