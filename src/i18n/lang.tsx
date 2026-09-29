import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'id' | 'en'

/** A bilingual value. Every piece of copy on the site is one of these. */
export type Bi<T = string> = { id: T; en: T }

type LangValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: <T>(value: Bi<T>) => T
}

const LangContext = createContext<LangValue | null>(null)

function initialLang(): Lang {
  return document.documentElement.lang === 'en' ? 'en' : 'id'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    document.documentElement.lang = next
    try {
      localStorage.setItem('santro:lang', next)
    } catch {
      // Storage can be unavailable (private mode); the choice still applies to this visit.
    }
  }, [])

  const value = useMemo<LangValue>(
    () => ({ lang, setLang, t: <T,>(v: Bi<T>) => v[lang] }),
    [lang, setLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
