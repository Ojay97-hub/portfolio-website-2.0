import { Award, GraduationCap, Trophy } from '../lib/icons'
import { education, qualifications } from '../data/profile'
import SectionHeader from '../components/nf/SectionHeader'

const Education = () => (
  <section id="education" className="relative border-t-2 border-ink bg-navy-mist/50 py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeader
        eyebrow="🎓 Learning"
        title="Always learning, on purpose."
        intro="From a first class events degree to code, design and now UX, here's how the skills stack up."
      />

      {/* Timeline */}
      <ol className="relative space-y-8 border-l-2 border-dashed border-ink/30 pl-8 sm:pl-10">
        {education.map((edu, i) => (
          <li
            key={edu.title}
            data-reveal
            style={{ '--reveal-delay': `${i * 80}ms` }}
            className="relative"
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[2.6rem] top-6 h-5 w-5 rounded-full border-2 border-ink sm:-left-[3.1rem] ${i === 0 ? 'bg-brand' : 'bg-ivory'}`}
            />
            <article className="card-pop p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="tag-pop bg-brand-soft">{edu.completion}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-soft">
                  <Award size={14} className="text-brand-deep" /> {edu.credentials}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-ink">
                {edu.title}
              </h3>
              <p className="mt-1 text-sm font-bold text-brand-deep">{edu.institution}</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">{edu.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {edu.skills.map((skill) => (
                  <span key={skill} className="tag-pop">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>

      {/* Degrees + highlight */}
      <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div data-reveal>
          <h3 className="mb-5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-soft">
            <GraduationCap size={16} /> Academic qualifications
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {qualifications.map((qual) => (
              <article key={qual.title} className="card-pop p-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink-faint">
                  {qual.year}
                </p>
                <h4 className="mt-2 font-display text-lg font-extrabold leading-tight text-ink">
                  {qual.title}
                </h4>
                <p className="mt-1 text-sm font-bold text-brand-deep">
                  {qual.field} · {qual.institution}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">{qual.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div data-reveal style={{ '--reveal-delay': '120ms' }} className="lg:pt-10">
          <article className="relative h-full -rotate-1 rounded-3xl border-2 border-ink bg-brand p-7 text-navy shadow-pop-lg">
            <Trophy size={32} />
            <p className="mt-4 font-display text-5xl font-extrabold">3rd</p>
            <h4 className="mt-1 font-display text-xl font-extrabold">SheCanGitIt Hackathon</h4>
            <p className="mt-3 text-sm leading-relaxed text-navy/80">
              Rapid prototyping and real teamwork against the clock, with a podium finish.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
)

export default Education
