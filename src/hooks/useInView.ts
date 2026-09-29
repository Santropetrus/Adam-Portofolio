import { useEffect, useRef, useState } from 'react'

type Options = { once?: boolean; rootMargin?: string; threshold?: number }
type Callback = (entry: IntersectionObserverEntry) => void

// One IntersectionObserver per configuration, shared by every component that uses it.
const registries = new Map<string, { io: IntersectionObserver; callbacks: Map<Element, Callback> }>()

function registry(rootMargin: string, threshold: number) {
  const key = `${rootMargin}|${threshold}`
  let reg = registries.get(key)
  if (!reg) {
    const callbacks = new Map<Element, Callback>()
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => callbacks.get(e.target)?.(e)),
      { rootMargin, threshold },
    )
    reg = { io, callbacks }
    registries.set(key, reg)
  }
  return reg
}

export function useInView<T extends Element>({ once = true, rootMargin = '0px 0px -12% 0px', threshold = 0 }: Options = {}) {
  const ref = useRef<T>(null)
  // Without IntersectionObserver there is nothing to wait for: show everything.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const reg = registry(rootMargin, threshold)
    reg.callbacks.set(el, (entry) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (once) {
          reg.io.unobserve(el)
          reg.callbacks.delete(el)
        }
      } else if (!once) {
        setInView(false)
      }
    })
    reg.io.observe(el)
    return () => {
      reg.io.unobserve(el)
      reg.callbacks.delete(el)
    }
  }, [once, rootMargin, threshold])

  return [ref, inView] as const
}
