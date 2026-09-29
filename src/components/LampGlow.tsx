import { useEffect, useRef } from 'react'
import { useMediaQuery, useReducedMotion } from '../hooks/useMediaQuery'
import { useTheme } from '../theme/theme'

const SIZE = 640

/**
 * At night, a faint warm lamp follows the reader's pointer, as if reading by a
 * desk lamp. Only with a mouse, only in the dark theme, never with reduced motion.
 */
export function LampGlow() {
  const { theme } = useTheme()
  const reduced = useReducedMotion()
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const ref = useRef<HTMLDivElement>(null)
  const active = theme === 'dark' && !reduced && finePointer

  useEffect(() => {
    if (!active) return
    let frame = 0
    let x = window.innerWidth * 0.7
    let y = window.innerHeight * 0.25
    const place = () => {
      frame = 0
      ref.current?.style.setProperty('transform', `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`)
    }
    place()
    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (!frame) frame = requestAnimationFrame(place)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [active])

  if (!active) return null
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: SIZE,
        height: SIZE,
        zIndex: -1,
        pointerEvents: 'none',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgb(255 226 160 / 0.085) 0%, rgb(255 226 160 / 0.03) 38%, transparent 68%)',
        transition: 'transform 500ms cubic-bezier(0.2, 0.7, 0.1, 1)',
        willChange: 'transform',
      }}
    />
  )
}
