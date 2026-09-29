import { useEffect, useState, type CSSProperties } from 'react'
import { questions } from '../content/questions'
import { profile } from '../content/site'
import { useInView } from '../hooks/useInView'
import { useReducedMotion } from '../hooks/useMediaQuery'
import { useLang } from '../i18n/lang'
import { Mark } from './primitives'
import './Hero.css'

const CYCLE_MS = 4200

/**
 * §01. Six questions, each paired with the thing it became.
 * A "lamp" moves slowly down the ledger while the visitor is idle; hovering or
 * focusing a question takes over, and the lamp stays where the visitor put it.
 */
export function Hero({ onPick }: { onPick: (workId: string) => void }) {
  const { t } = useLang()
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const [ref, inView] = useInView<HTMLElement>({ once: false, rootMargin: '0px' })

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const running = auto && inView && !reduced

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      if (document.visibilityState === 'visible') setActive((a) => (a + 1) % questions.length)
    }, CYCLE_MS)
    return () => window.clearInterval(id)
  }, [running])

  const take = (i: number) => {
    setAuto(false)
    setActive(i)
  }

  return (
    <section
      id="pertanyaan"
      ref={ref}
      className={loaded ? 'hero is-loaded' : 'hero'}
      aria-labelledby="hero-title"
    >
      <div className="hero__inner wrap">
        <div className="hero__byline">
          <h1 id="hero-title" className="hero__name">
            {profile.name}
            <span className="hero__alias">, alias {profile.nickname}</span>
          </h1>
          <p className="hero__role">
            {t(profile.study)} · {t({ id: 'semester akhir', en: 'final year' })}
          </p>
        </div>
        <p className="hero__place">
          <span>{t(profile.place)}</span>
          <span>{t(profile.coords)}</span>
        </p>

        <p className="hero__lead">
          {t({
            id: 'Hampir semua yang saya kerjakan dimulai sebagai pertanyaan. ',
            en: 'Almost everything I make starts as a question. ',
          })}
          <Mark delay={900}>
            {t({
              id: 'Beberapa di antaranya tidak mau tinggal di halaman.',
              en: 'Some of them refuse to stay on the page.',
            })}
          </Mark>
        </p>

        <ol className="ledger" aria-label={t({ id: 'Pertanyaan dan apa jadinya', en: 'Questions and what they became' })}>
          {questions.map((q, i) => (
            <li
              key={q.target}
              className={i === active ? 'ledger__row is-active' : 'ledger__row'}
              style={{ '--i': i } as CSSProperties}
            >
              <a
                href={`#karya-${q.target}`}
                className="ledger__link"
                onPointerEnter={(e) => {
                  if (e.pointerType === 'mouse') take(i)
                }}
                onFocus={() => take(i)}
                onClick={() => onPick(q.target)}
              >
                <span className="ledger__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                  {i === active && running ? (
                    <span key={`${active}`} className="ledger__progress" style={{ animationDuration: `${CYCLE_MS}ms` }} />
                  ) : null}
                </span>
                <span className="ledger__q">
                  <span className="ledger__qtext">{t(q.q)}</span>
                </span>
                <span className="ledger__became">
                  <span className="ledger__kind">{t(q.kind)}</span>
                  <span className="ledger__what">
                    <span className="ledger__arrow" aria-hidden="true">
                      →
                    </span>
                    {t(q.became)}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>

        <div className="hero__foot">
          {!reduced ? (
            <button type="button" className="hero__pause" onClick={() => setAuto((a) => !a)}>
              <span className="hero__pause-icon" aria-hidden="true">
                {auto ? '❚❚' : '▶'}
              </span>
              {auto
                ? t({ id: 'Jeda sorotan', en: 'Pause the highlight' })
                : t({ id: 'Lanjutkan sorotan', en: 'Resume the highlight' })}
            </button>
          ) : (
            <span />
          )}
          <p className="hero__hint">
            {t({ id: 'Pilih satu pertanyaan, atau terus', en: 'Pick a question, or keep' })}{' '}
            <span>
              {t({ id: 'gulir', en: 'scrolling' })} <span aria-hidden="true">↓</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
