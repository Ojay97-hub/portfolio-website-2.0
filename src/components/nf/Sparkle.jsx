// Four-point twinkle star used as decorative confetti. Colour follows the
// text colour (currentColor).
const Sparkle = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M12 0c.6 5.4 2.7 9.6 12 12-9.3 2.4-11.4 6.6-12 12-.6-5.4-2.7-9.6-12-12C9.3 9.6 11.4 5.4 12 0Z" />
  </svg>
)

export default Sparkle
