import { useLang } from '../i18n/lang'
import { useTheme } from '../theme/theme'
import './Switches.css'

export function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="langswitch" role="group" aria-label={t({ id: 'Bahasa', en: 'Language' })}>
      {(['id', 'en'] as const).map((l) => (
        <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
          <span aria-hidden="true">{l.toUpperCase()}</span>
          <span className="visually-hidden" lang={l}>
            {l === 'id' ? 'Bahasa Indonesia' : 'English'}
          </span>
        </button>
      ))}
    </div>
  )
}

/** Day / night. The window icon shows the current light; the label names the other one. */
export function LampSwitch({ withLabel = false }: { withLabel?: boolean }) {
  const { theme, toggle } = useTheme()
  const { t } = useLang()
  const toNight = theme === 'light'
  const short = toNight ? t({ id: 'Malam', en: 'Night' }) : t({ id: 'Siang', en: 'Day' })
  const label = toNight
    ? t({ id: 'Ganti ke suasana malam', en: 'Switch to night' })
    : t({ id: 'Ganti ke suasana siang', en: 'Switch to day' })

  return (
    <button
      type="button"
      className={withLabel ? 'lamp lamp--label' : 'lamp'}
      aria-label={label}
      title={label}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        toggle({ x: r.left + r.width / 2, y: r.top + r.height / 2 })
      }}
    >
      <svg className="lamp__icon" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
        <rect className="lamp__pane lamp__pane--1" x="3.2" y="3.2" width="6" height="6" />
        <rect className="lamp__pane lamp__pane--2" x="10.8" y="3.2" width="6" height="6" />
        <rect className="lamp__pane lamp__pane--3" x="3.2" y="10.8" width="6" height="6" />
        <rect className="lamp__pane lamp__pane--4" x="10.8" y="10.8" width="6" height="6" />
        <rect x="2" y="2" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="lamp__text" aria-hidden="true">
        {short}
      </span>
    </button>
  )
}
