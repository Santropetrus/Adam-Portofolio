import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { flushSync } from 'react-dom'

export type Theme = 'light' | 'dark'

type ThemeValue = {
  theme: Theme
  /** Toggle the lamp. `origin` is where the light should spread from. */
  toggle: (origin?: { x: number; y: number }) => void
}

const ThemeContext = createContext<ThemeValue | null>(null)
const KEY = 'santro:theme'

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function hasStoredChoice() {
  try {
    return localStorage.getItem(KEY) !== null
  } catch {
    return false
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readTheme)

  // Follow the system setting until the visitor chooses for themselves.
  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (hasStoredChoice()) return
      const next: Theme = mq.matches ? 'dark' : 'light'
      document.documentElement.dataset.theme = next
      setTheme(next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback<ThemeValue['toggle']>((origin) => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark'
    const apply = () => {
      document.documentElement.dataset.theme = next
      flushSync(() => setTheme(next))
    }
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // Not persisted, still applied.
    }

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduce) {
      apply()
      return
    }

    const x = origin?.x ?? innerWidth - 40
    const y = origin?.y ?? 32
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const transition = document.startViewTransition(apply)
    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 750, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
        )
      })
      .catch(() => {
        // If the animation cannot run, the theme has still been applied.
      })
  }, [])

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
