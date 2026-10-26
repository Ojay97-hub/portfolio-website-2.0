// Chunky pill CTA from the Nova Forma brand: ink border, offset shadow,
// lifts on hover and presses down on click. Renders an <a> when given href.
const VARIANTS = {
  solid: 'bg-brand text-navy hover:bg-brand-soft dark:hover:bg-brand',
  ink: 'bg-ink text-cream hover:bg-brand hover:text-navy',
  ghost: 'bg-ivory text-ink hover:bg-navy-mist',
}

const PopButton = ({ children, href, variant = 'solid', arrow = true, className = '', ...rest }) => {
  const cls = `group relative inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-ink px-7 py-3.5 font-body text-sm font-bold shadow-pop transition-[transform,background-color,box-shadow,color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ink ${VARIANTS[variant]} ${className}`

  const inner = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 ease-out-expo group-hover:translate-x-1 group-hover:rotate-12"
        >
          →
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  )
}

export default PopButton
