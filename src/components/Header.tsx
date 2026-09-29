import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { cvHref, profile, sections } from '../content/site'
import { useLang } from '../i18n/lang'
import { LampSwitch, LangSwitch } from './Switches'
import './Header.css'

export function Header({ active }: { active: string }) {
  const { t, lang } = useLang()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const current = sections.find((s) => s.id === active) ?? sections[0]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => dialogRef.current?.close()

  return (
    <header className={scrolled ? 'masthead is-scrolled' : 'masthead'}>
      <div className="masthead__inner wrap">
        <a className="masthead__mark" href="#top">
          <span className="masthead__name">{profile.name}</span>
          <span className="masthead__alias" aria-hidden="true">
            Santro
          </span>
        </a>

        <p className="masthead__where" aria-hidden="true">
          <span className="masthead__sec" key={current.id}>
            <span className="masthead__n">§&thinsp;{current.n}</span> <em>{t(current.title)}</em>
          </span>
        </p>

        <div className="masthead__tools">
          <LangSwitch />
          <LampSwitch />
          <button
            type="button"
            className="masthead__toc"
            aria-haspopup="dialog"
            aria-label={t({ id: 'Daftar isi', en: 'Contents' })}
            onClick={() => dialogRef.current?.showModal()}
          >
            <span className="masthead__toc-n" aria-hidden="true">
              §&thinsp;{current.n}
            </span>
            <span>{t({ id: 'Daftar isi', en: 'Contents' })}</span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="toc"
        aria-labelledby="toc-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        <div className="toc__inner wrap">
          <div className="toc__top">
            <p id="toc-title" className="toc__title">
              {t({ id: 'Daftar isi', en: 'Contents' })}
            </p>
            <button type="button" className="toc__close" onClick={close} autoFocus>
              {t({ id: 'Tutup', en: 'Close' })} <span aria-hidden="true">×</span>
            </button>
          </div>

          <ol className="toc__list">
            {sections.map((s, i) => (
              <li key={s.id} style={{ '--i': i } as CSSProperties}>
                <a
                  href={`#${s.id}`}
                  onClick={close}
                  aria-current={s.id === active ? 'location' : undefined}
                  className={s.id === active ? 'is-current' : undefined}
                >
                  <span className="toc__label">{t(s.title)}</span>
                  <span className="toc__dots" aria-hidden="true" />
                  <span className="toc__n">{s.n}</span>
                </a>
              </li>
            ))}
            <li style={{ '--i': sections.length } as CSSProperties} className="toc__cv">
              <a href={`${cvHref}?lang=${lang}`}>
                <span className="toc__label">{t({ id: 'CV, versi cetak', en: 'CV, printable' })}</span>
                <span className="toc__dots" aria-hidden="true" />
                <span className="toc__n" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          </ol>

          <div className="toc__foot">
            <div className="toc__switches">
              <LangSwitch />
              <LampSwitch withLabel />
            </div>
            <p className="toc__contact">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>{t(profile.place)}</span>
            </p>
          </div>
        </div>
      </dialog>
    </header>
  )
}
