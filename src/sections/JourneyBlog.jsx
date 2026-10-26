import { useEffect, useRef, useState } from 'react'
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  Code,
  Coffee,
  Globe,
  GraduationCap,
  Layers,
  Palette,
  Sparkles,
  Target,
  Users,
  Zap,
} from '../lib/icons'
import Sparkle from '../components/nf/Sparkle'

const timeline = [
  {
    period: '2017 to 2021',
    title: 'BSc Events Management (1st Class)',
    description: [
      'Built delivery habits: planning, supplier coordination, H&S, marketing, law',
      'Boca Raton placement cut short by COVID → recognised industry fragility',
      'Outcome: 1st class degree; strong organisation and follow through',
    ],
    icon: Building,
  },
  {
    period: '2021 to 2022',
    title: 'MSc International Events Management (Merit)',
    description: [
      'Focused on experiential marketing, brand and experience transfer, and strategy',
      'Outcome: sharper critical thinking and research; clear written comms',
    ],
    icon: BookOpen,
  },
  {
    period: 'Jan to Aug 2023',
    title: 'Travel (LA → Australia → Bali)',
    description: [
      'Saw venue dependent work was restrictive; inspired by remote, digital nomad setups',
      'Built strong wellbeing habits (travel goals, weekly journaling)',
      'Surviving independent travel, experiencing the highs and lows of being on my own',
      'Outcome: ownership, perseverance, and a clear plan for a stable, remote friendly career',
    ],
    icon: Globe,
  },
  {
    period: 'Sep 2023 to Aug 2025',
    title: 'M&S (early shifts) + learning rhythm',
    description: [
      '04:30 wake ups; trying to figure out a way I could turn my vision into a reality',
      'Outcome: proven grit, time management, and consistency under fatigue',
    ],
    icon: Coffee,
  },
  {
    period: 'Jan 2024 to Feb 2025',
    title: 'Code Institute (Full Stack)',
    description: [
      'Found my ticket to achieving my vision: full stack web development',
      'HTML, CSS, JavaScript, Python, Django; ecommerce specialism',
      'Delivered end to end features (models, forms, Stripe, validation, error handling)',
      'Outcome: can turn an idea into a shipped product; works in sprints with user stories',
    ],
    icon: Code,
  },
  {
    period: 'May 2025',
    title: 'UI Design course (started)',
    description: [
      'Found I enjoyed the design process and wanted to hone my skills further',
      'Solidifying design systems, moodboards, layout, typography, branding, colour palettes, accessibility and usability',
      'Outcome: developer first, but with a solid design understanding',
    ],
    icon: Palette,
  },
  {
    period: 'End of May 2025',
    title: 'Marathon completed',
    description: [
      '15 week plan (Runna); stuck to schedule alongside work and study',
      'Outcome: disciplined execution and long horizon commitment',
    ],
    icon: Target,
  },
  {
    period: 'Aug 2025',
    title: 'Resigned from M&S (reset for tech)',
    description: [
      'Took a short reset to focus fully on tech applications and portfolio quality',
      'Outcome: energy redirected into landing a first junior role',
    ],
    icon: Zap,
  },
  {
    period: 'Autumn 2025',
    title: 'Portfolio refinement & job prep',
    description: [
      'Refined Code Institute portfolio projects',
      'Updated Jungle Peaks Brewing based on assessor feedback: responsive fixes, accessibility improvements',
      'Continued work on this custom portfolio and its journey timeline',
      'Targeted job hunting and applications with polished, employer ready materials',
      'Outcome: demonstrating receptiveness to feedback and continuous improvement',
    ],
    icon: Briefcase,
  },
  {
    period: '2025',
    title: 'UI Design certification completed',
    description: [
      'Designed FinWiz, a banking app across nine desktop, tablet and mobile screens',
      'Outcome: a certified design foundation to sit alongside my development skills',
    ],
    icon: Award,
  },
  {
    period: 'Nov 2025',
    title: 'Founded Nova Forma Designs',
    description: [
      'Set up my own web design studio for small businesses, local organisations and independent projects',
      'Outcome: real clients, real briefs and real deadlines',
    ],
    icon: Sparkles,
  },
  {
    period: 'Nova Forma clients',
    title: 'Client websites shipped',
    description: [
      'Penmaen & Nicholaston Village Hall: my first real client, a community venue on the Gower with event info and bookings',
      'TDH Motors: a performance and luxury car dealer, with a browsable inventory and enquiries',
      'Eden Electrical: a solar, battery and EV charging installer, with a cost calculator and quote flow',
      'Outcome: production websites live for paying clients',
    ],
    icon: Users,
  },
  {
    period: 'Oct 2026',
    title: 'Portfolio rebuild & Render migration',
    description: [
      'Moved my Django projects from Heroku to Render, with Neon PostgreSQL and Brevo for email',
      'Redesigned this portfolio in the Nova Forma brand, with dark mode and much faster loading',
      'Outcome: every project live and maintained on free hosting',
    ],
    icon: Layers,
  },
  {
    period: '16 Nov 2026',
    title: 'UX Design Career Accelerator, King’s College London',
    description: [
      'Building on the UI certification with user research, usability testing and information architecture',
      'Outcome: an end to end UX process through real world projects',
    ],
    icon: GraduationCap,
    upcoming: true,
  },
]

const transferableSkills = [
  'Operations → Delivery: realistic plans, tidy repos, clear runbooks, predictable releases',
  'Stakeholder comms → Team clarity: concise updates, expectation setting, and decision logs that unblock engineers',
  'Scheduling → Sprint cadence: roadmaps, time boxes, and on time delivery without drama',
  'Hackathons & jams: rapid prototyping, pairing, and demo storytelling, shipping in 24 to 48 hours',
]

// "Outcome: ..." lines get highlighted so the takeaway stands out
const TimelineItem = ({ text }) => {
  if (text.startsWith('Outcome:')) {
    return (
      <li className="mt-3 text-sm font-bold text-ink">
        <span className="marker">{text}</span>
      </li>
    )
  }
  return (
    <li className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
      <span>{text}</span>
    </li>
  )
}

const TimelineCard = ({ entry, index }) => {
  const Icon = entry.icon
  return (
    <li className="relative flex w-[290px] shrink-0 snap-start flex-col items-center px-4 sm:w-[340px]">
      {/* Line segments join up across items into one continuous track line */}
      <span aria-hidden="true" className="absolute inset-x-0 top-[53px] border-t-2 border-dashed border-ink/30" />

      <span className="h-8 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft">
        {entry.period}
      </span>
      <span
        aria-hidden="true"
        className={`relative z-10 grid h-11 w-11 place-items-center rounded-full border-2 border-ink shadow-pop ${
          entry.upcoming ? 'bg-brand text-navy' : 'bg-ivory text-ink'
        }`}
      >
        <Icon size={18} />
      </span>

      <article
        className={`card-pop w-full p-5 transition-transform duration-300 ease-bounce hover:-translate-y-1 ${
          index % 2 === 0 ? 'mt-5' : 'mt-12'
        } ${entry.upcoming ? 'border-dashed' : ''}`}
      >
        {entry.upcoming && <span className="tag-pop mb-3 bg-brand text-navy">Coming up</span>}
        <h3 className="font-display text-lg font-extrabold leading-tight text-ink">{entry.title}</h3>
        <ul className="mt-2.5 space-y-1">
          {entry.description.map((item) => (
            <TimelineItem key={item} text={item} />
          ))}
        </ul>
      </article>
    </li>
  )
}

// Pinned horizontal scroll: the section sticks to the viewport while vertical
// scrolling moves the track sideways. Only transforms change on scroll (one
// update per frame). Falls back to a native swipeable row for reduced motion.
const HorizontalTimeline = () => {
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    setPinned(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (!pinned) return
    const section = sectionRef.current
    const viewport = viewportRef.current
    const track = trackRef.current
    let distance = 0
    let frame = 0

    const update = () => {
      frame = 0
      const scrolled = -section.getBoundingClientRect().top
      const progress = distance > 0 ? Math.min(1, Math.max(0, scrolled / distance)) : 0
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
    }

    const measure = () => {
      distance = Math.max(0, track.scrollWidth - viewport.clientWidth)
      // Extra height equals the horizontal travel, so scroll speed feels 1:1
      section.style.height = `${distance + window.innerHeight}px`
      update()
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const resize = new ResizeObserver(measure)
    resize.observe(track)
    resize.observe(viewport)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    measure()

    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      section.style.height = ''
      track.style.transform = ''
    }
  }, [pinned])

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative border-t-2 border-ink bg-navy-mist/50"
    >
      <div
        className={`dotgrid flex flex-col ${
          pinned ? 'sticky top-0 h-[100svh] overflow-hidden pb-6 pt-28 sm:pt-32' : 'py-20 sm:py-28'
        }`}
      >
        <div className="mx-auto mb-6 flex w-full max-w-6xl flex-wrap items-end justify-between gap-4 px-5 sm:px-8">
          <div>
            <p className="eyebrow mb-5">⚡ Timeline</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              2017 to 2026: <span className="marker">employer ready highlights.</span>
            </h2>
          </div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft">
            {pinned ? 'Keep scrolling to travel through time →' : 'Swipe to travel through time →'}
          </p>
        </div>

        <div
          ref={viewportRef}
          className={`relative ${pinned ? 'flex min-h-0 flex-1 items-center' : 'snap-x snap-mandatory overflow-x-auto pb-4'}`}
        >
          <ol
            ref={trackRef}
            className="flex w-max shrink-0 items-start px-[max(1.25rem,calc((100vw-72rem)/2))] will-change-transform"
          >
            {timeline.map((entry, index) => (
              <TimelineCard key={entry.title} entry={entry} index={index} />
            ))}
          </ol>
        </div>

        {pinned && (
          <div className="mx-auto mt-6 flex w-full max-w-6xl items-center gap-4 px-5 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft sm:px-8">
            <span>2017</span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full border-2 border-ink bg-ivory">
              <div ref={progressRef} className="h-full origin-left scale-x-0 bg-brand" />
            </div>
            <span>2026</span>
          </div>
        )}
      </div>
    </section>
  )
}

const JourneyBlog = () => (
  <>
    {/* Blog */}
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
        <article data-reveal className="max-w-3xl">
          <header className="mb-10">
            <p className="eyebrow mb-7">📝 The story</p>
            <h2 className="display-lg font-display font-extrabold text-ink">
              From physical spaces to <span className="marker">digital experiences.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              A reflective blog on the pivots, places, and people that shaped my career change from
              a potential events manager to web development and UI design.
            </p>
          </header>

          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              Before I ever opened a code editor, I was studying Events Management (2017 to 2022)
              and getting hands on wherever I could, supporting builds for music festivals and
              spending a placement period in Boca Raton, Florida. I wasn&apos;t running big teams,
              but I did learn the nuts and bolts of planning: keeping suppliers aligned, reading a
              schedule, and making sure the small things happen on time. That sense of order and
              forward planning has turned out to be very transferable in other areas of my life.
            </p>
            <p>
              When COVID hit, live events went quiet and university lectures were taught through a
              computer screen. This was a massive wake up call, and this pause gave me room to think
              about work that could carry on regardless of macro events happening around the world.
              I wanted to build experiences that didn&apos;t depend on a venue being available; then
              I realised that experiences can still be had through digital means, and this really
              piqued my interest.
            </p>
            <p>
              After university, I travelled, with this idea still bouncing around in my head. Time in
              Los Angeles, then Australia and Bali, brought me into contact with people who were
              working remotely, using tech to create more freedom in where and how they live. It
              made the path feel practical, not just aspirational, and I realised that I could do
              the same.
            </p>
            <p>
              From my travelling epiphany, I was excited to get back to the UK and start a new
              chapter. Back in the UK, I channelled this momentum into Code Institute. HTML, CSS,
              JavaScript, and Python became my new toolkit, and I became well adjusted to the agile
              methodology, approaching projects with a well thought out and structured plan. Events
              planning was a similar process: like show days, prepare well, iterate, and ship on
              time.
            </p>
            <p>
              To try and make my vision become a reality, I moved back in with my parents and took
              the early shift at M&amp;S. Waking up at 4:30am whilst everyone else was still in bed,
              I was starting work, finishing by lunchtime, then swapping my hi vis for VS Code and
              problem solving. This approach to life lasted for two years and I feel it has made me
              a more resilient and determined individual. Never giving up, always turning up and
              completing work on time, with a strong will to succeed.
            </p>
            <p>
              I then studied UI Design with the UX Design Institute, refining a craft I discovered
              during web development and events: turning wireframes into clear, accessible, and safe
              human centred interfaces. As in events, designing the venue for a fantastic attendee
              experience, with not a single detail left unturned. It&apos;s the same principles and
              desires, but applied to a digital space.
            </p>
            <p>
              In November 2025 I founded Nova Forma Designs and started building websites for real
              clients, from a village hall on the Gower to a luxury car dealer. Next up, I start the
              UX Design Career Accelerator with King&apos;s College London, and I&apos;m ready to
              take on my next big challenge in tech.
            </p>
          </div>
        </article>

        <aside className="flex flex-col gap-8 lg:pt-4">
          <div data-reveal className="relative -rotate-1 rounded-3xl border-2 border-ink bg-ink p-7 text-cream shadow-pop-lg">
            <Sparkle size={26} className="absolute -right-3 -top-3 text-brand" />
            <p className="font-mono text-[11px] font-bold uppercase tracking-eyebrow text-cream/70">
              The why
            </p>
            <h3 className="mt-3 font-display text-xl font-extrabold">From one experience to another</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">
              Whether I am hosting a live event or shipping a web app, my mission is the same: design
              thoughtful experiences that make people feel seen. Technology is now the stage, but
              empathy remains the spotlight.
            </p>
          </div>

          <div data-reveal style={{ '--reveal-delay': '100ms' }} className="card-pop p-7">
            <p className="font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft">
              What I bring forward
            </p>
            <ul className="mt-4 space-y-3">
              {transferableSkills.map((skill) => (
                <li key={skill} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <HorizontalTimeline />
  </>
)

export default JourneyBlog
