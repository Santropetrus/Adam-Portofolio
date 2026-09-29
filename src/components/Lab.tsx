import { useCallback, useEffect, useRef, useState } from 'react'
import { labNotes, statusLabel } from '../content/lab'
import { sections } from '../content/site'
import { useReducedMotion } from '../hooks/useMediaQuery'
import { useLang } from '../i18n/lang'
import { SectionHead } from './primitives'
import { LampSwitch, LangSwitch } from './Switches'
import './Lab.css'

/**
 * §04. A horizontal lab log. Native scrolling with snap: trackpads, touch and
 * keyboard all work; buttons step through notes; a mouse can drag the strip.
 * Nothing hijacks the page's vertical scroll.
 */
export function Lab() {
  const { t } = useLang()
  const reduced = useReducedMotion()
  const sec = sections[3]
  const stripRef = useRef<HTMLOListElement>(null)
  const [index, setIndex] = useState(0)
  const [edges, setEdges] = useState({ start: true, end: false })
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null)

  const measure = useCallback(() => {
    const el = stripRef.current
    if (!el) return
    const items = Array.from(el.children) as HTMLElement[]
    const padding = parseFloat(getComputedStyle(el).paddingLeft) || 0
    let current = 0
    items.forEach((item, i) => {
      if (item.offsetLeft - padding <= el.scrollLeft + 24) current = i
    })
    setIndex(current)
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  const go = (dir: -1 | 1) => {
    const el = stripRef.current
    if (!el) return
    const items = Array.from(el.children) as HTMLElement[]
    const target = items[Math.max(0, Math.min(items.length - 1, index + dir))]
    const padding = parseFloat(getComputedStyle(el).paddingLeft) || 0
    el.scrollTo({ left: target.offsetLeft - padding, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <section id={sec.id} className="lab" aria-labelledby="lab-title">
      <div className="wrap">
        <SectionHead
          n={sec.n}
          id="lab-title"
          title={t(sec.title)}
          aside={t({
            id: 'Yang masih berjalan, berganti nama, atau disimpan.',
            en: 'Things still running, renamed, or put away.',
          })}
        />
        <div className="lab__intro">
          <p className="lab__lead">
            {t({
              id: 'Tidak semua pertanyaan sempat jadi benda. Ini catatan laboratoriumnya: setengah jadi, masih jalan, kadang cuma iseng.',
              en: "Not every question gets to become a thing. These are the lab notes: half-finished, still running, sometimes just messing about.",
            })}
          </p>
          <div className="lab__controls">
            <p className="lab__counter" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span> / {String(labNotes.length).padStart(2, '0')}
            </p>
            <button type="button" className="lab__btn" onClick={() => go(-1)} disabled={edges.start}>
              <span aria-hidden="true">←</span>
              <span className="visually-hidden">{t({ id: 'Catatan sebelumnya', en: 'Previous note' })}</span>
            </button>
            <button type="button" className="lab__btn" onClick={() => go(1)} disabled={edges.end}>
              <span aria-hidden="true">→</span>
              <span className="visually-hidden">{t({ id: 'Catatan berikutnya', en: 'Next note' })}</span>
            </button>
          </div>
        </div>
      </div>

      <ol
        ref={stripRef}
        className="lab__strip"
        tabIndex={0}
        aria-label={t({ id: 'Catatan laboratorium, bisa digeser', en: 'Lab notes, scrollable' })}
        onScroll={measure}
        onPointerDown={(e) => {
          if (e.pointerType !== 'mouse' || e.button !== 0) return
          if ((e.target as HTMLElement).closest('button, a')) return
          drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft, moved: false }
        }}
        onPointerMove={(e) => {
          const d = drag.current
          if (!d) return
          const dx = e.clientX - d.x
          if (!d.moved && Math.abs(dx) > 4) {
            d.moved = true
            e.currentTarget.setPointerCapture(e.pointerId)
            e.currentTarget.classList.add('is-dragging')
          }
          if (d.moved) e.currentTarget.scrollLeft = d.left - dx
        }}
        onPointerUp={(e) => {
          drag.current = null
          e.currentTarget.classList.remove('is-dragging')
        }}
        onPointerCancel={(e) => {
          drag.current = null
          e.currentTarget.classList.remove('is-dragging')
        }}
      >
        {labNotes.map((note) => (
          <li key={note.code} className={`lab__note lab__note--${note.size}`}>
            <div className="lab__top">
              <span className="lab__code">{note.code}</span>
              <span className={`lab__status lab__status--${note.status}`}>{t(statusLabel[note.status])}</span>
            </div>
            <h3 className="lab__title">{t(note.title)}</h3>
            <p className="lab__body">{t(note.body)}</p>
            {note.aside ? <p className="lab__aside">{t(note.aside)}</p> : null}
            {note.action === 'lamp' ? (
              <div className="lab__action">
                <LampSwitch withLabel />
              </div>
            ) : null}
            {note.action === 'lang' ? (
              <div className="lab__action">
                <LangSwitch />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
