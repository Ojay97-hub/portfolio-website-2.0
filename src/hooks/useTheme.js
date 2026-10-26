import { useCallback, useEffect, useState } from 'react'

// Light/dark theme for the homepage. The initial class on <html> is set by an
// inline script in index.html (before first paint); this hook keeps React in
// sync with it, persists the choice, and follows the OS until the visitor picks.
const STORAGE_KEY = 'theme'

const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

const useTheme = () => {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Follow OS changes only while the visitor hasn't chosen a theme
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      if (!readStored()) setTheme(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Storage can be unavailable (private mode); the toggle still works
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}

export default useTheme
