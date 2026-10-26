// Small rotated label chip with chunky border + offset shadow, for that
// hand-placed sticker feel. Background colour comes from `className`.
const Sticker = ({ children, rotate = -4, className = 'bg-ivory' }) => (
  <span
    style={{ rotate: `${rotate}deg` }}
    className={`inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-eyebrow text-ink shadow-pop ${className}`}
  >
    {children}
  </span>
)

export default Sticker
