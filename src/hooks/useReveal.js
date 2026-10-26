import { useEffect } from 'react'

// Scroll-reveal for any element with a `data-reveal` attribute inside `rootRef`.
// One shared IntersectionObserver; a MutationObserver picks up lazily-loaded
// sections. Styles live in index.css (`.js-reveal [data-reveal]`), and content
// stays visible if JS fails because the hiding class is only added here.
// Use `style={{ '--reveal-delay': '120ms' }}` to stagger siblings.
const useReveal = (rootRef) => {
  useEffect(() => {
    const root = rootRef.current
    if (!root || !('IntersectionObserver' in window)) return

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            reveal.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    const observeAll = () => {
      root
        .querySelectorAll('[data-reveal]:not(.is-revealed)')
        .forEach((el) => reveal.observe(el))
    }

    root.classList.add('js-reveal')
    observeAll()

    const mutations = new MutationObserver(observeAll)
    mutations.observe(root, { childList: true, subtree: true })

    return () => {
      reveal.disconnect()
      mutations.disconnect()
      root.classList.remove('js-reveal')
    }
  }, [rootRef])
}

export default useReveal
