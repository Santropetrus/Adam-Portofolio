import { useId, useState, type CSSProperties, type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { useWide } from '../hooks/useMediaQuery'
import { useLang } from '../i18n/lang'
import './primitives.css'

type Vars = CSSProperties & Record<`--${string}`, string>

/** A highlighter stroke, drawn once the phrase has been read. */
export function Mark({ children, delay }: { children: ReactNode; delay?: number }) {
  const [ref, on] = useInView<HTMLElement>({ rootMargin: '0px 0px -18% 0px' })
  const style: Vars | undefined = delay === undefined ? undefined : { '--d': `${delay}ms` }
  return (
    <mark ref={ref} className={on ? 'mark is-on' : 'mark'} style={style}>
      {children}
    </mark>
  )
}

/**
 * A footnote that behaves like a book's sidenote.
 * Wide screens: the note sits in the margin next to its line.
 * Narrow screens: the number is a button that opens the note inline.
 */
export function Note({ n, children }: { n: number; children: ReactNode }) {
  const wide = useWide()
  const [open, setOpen] = useState(false)
  const id = useId()
  const { t } = useLang()

  if (wide) {
    return (
      <span className="note">
        <sup className="note__ref" aria-hidden="true">
          {n}
        </sup>
        <span className="note__body" role="note">
          <span className="note__num" aria-hidden="true">
            {n}
          </span>
          <span className="visually-hidden">{t({ id: 'Catatan ', en: 'Note ' })}</span>
          {children}
        </span>
      </span>
    )
  }

  return (
    <span className={open ? 'note is-open' : 'note'}>
      <button
        type="button"
        className="note__ref note__ref--btn"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="visually-hidden">{t({ id: 'Catatan ', en: 'Note ' })}</span>
        {n}
      </button>
      <span className="note__body" id={id} role="note" hidden={!open}>
        <span className="note__num" aria-hidden="true">
          {n}
        </span>
        {children}
      </span>
    </span>
  )
}

/** Section opener: a rule that draws in, the § number, a title and an aside. */
export function SectionHead({ n, title, aside, id }: { n: string; title: ReactNode; aside?: ReactNode; id: string }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={inView ? 'shead is-in' : 'shead'}>
      <span className="shead__rule" aria-hidden="true" />
      <div className="shead__row">
        <p className="shead__num" aria-hidden="true">
          §&thinsp;{n}
        </p>
        <h2 id={id} className="shead__title">
          {title}
        </h2>
        {aside ? <p className="shead__aside">{aside}</p> : null}
      </div>
    </div>
  )
}

export function Arrow({ dir = 'out' }: { dir?: 'out' | 'down' | 'up' | 'right' }) {
  const glyph = { out: '↗', down: '↓', up: '↑', right: '→' }[dir]
  return (
    <span className={`arrow arrow--${dir}`} aria-hidden="true">
      {glyph}
    </span>
  )
}
