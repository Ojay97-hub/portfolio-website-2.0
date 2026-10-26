// Section intro: sticker eyebrow, big display title, and an optional side note.
const SectionHeader = ({ eyebrow, title, intro, className = '' }) => (
  <div className={`mb-14 flex flex-wrap items-end justify-between gap-6 ${className}`}>
    <div data-reveal>
      <p className="eyebrow mb-7">{eyebrow}</p>
      <h2 className="display-lg max-w-2xl font-display font-extrabold text-ink">{title}</h2>
    </div>
    {intro && (
      <p
        data-reveal
        style={{ '--reveal-delay': '120ms' }}
        className="max-w-xs text-sm leading-relaxed text-ink-soft"
      >
        {intro}
      </p>
    )}
  </div>
)

export default SectionHeader
