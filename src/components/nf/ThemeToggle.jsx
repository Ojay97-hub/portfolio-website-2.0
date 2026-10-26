// Round light/dark switch. Stateless: the parent owns useTheme() so several
// toggles on one page (desktop + mobile) stay in sync.
const ThemeToggle = ({ theme, onToggle, className = 'h-10 w-10' }) => {
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${next} mode`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${next} mode`}
      className={`grid shrink-0 place-items-center rounded-full border-2 border-ink bg-ivory text-lg font-bold leading-none text-ink shadow-pop transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-navy-mist hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none ${className}`}
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  )
}

export default ThemeToggle
