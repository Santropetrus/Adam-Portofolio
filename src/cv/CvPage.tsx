import type { ReactNode } from 'react'
import { cv, type CvEntry } from '../content/cv'
import { profile, socials } from '../content/site'
import { useLang, type Bi } from '../i18n/lang'
import { LangSwitch } from '../components/Switches'
import './cv.css'

function Entries({ items }: { items: CvEntry[] }) {
  const { t } = useLang()
  return (
    <ol className="cv__entries">
      {items.map((e, i) => (
        <li key={i} className="cv__entry">
          <div className="cv__entry-head">
            <h3 className="cv__entry-title">
              {e.href ? (
                <a href={e.href} target="_blank" rel="noreferrer">
                  {t(e.title)}
                </a>
              ) : (
                t(e.title)
              )}
            </h3>
            {e.when ? <p className="cv__when">{t(e.when)}</p> : null}
          </div>
          <p className="cv__org">{t(e.org)}</p>
          {e.note ? <p className="cv__note">{t(e.note)}</p> : null}
        </li>
      ))}
    </ol>
  )
}

function Block({ label, children }: { label: Bi; children: ReactNode }) {
  const { t } = useLang()
  return (
    <section className="cv__block">
      <h2 className="cv__label">{t(label)}</h2>
      <div className="cv__content">{children}</div>
    </section>
  )
}

export function CvPage() {
  const { t, lang } = useLang()

  return (
    <>
      <nav className="cv-bar" aria-label={t({ id: 'Alat CV', en: 'CV tools' })}>
        <a className="cv-bar__back" href={`/?lang=${lang}`}>
          <span aria-hidden="true">←</span> {t({ id: 'Kembali ke situs', en: 'Back to the site' })}
        </a>
        <div className="cv-bar__right">
          <LangSwitch />
          <button type="button" className="cv-bar__print" onClick={() => window.print()}>
            {t({ id: 'Cetak / simpan PDF', en: 'Print / save as PDF' })}
          </button>
        </div>
      </nav>

      <main className="cv">
        <header className="cv__head">
          <div>
            <h1 className="cv__name">{profile.name}</h1>
            <p className="cv__headline">{t(cv.headline)}</p>
          </div>
          <ul className="cv__contact">
            <li>{t(profile.place)}</li>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href}>{s.href.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}</a>
              </li>
            ))}
          </ul>
        </header>

        <Block label={{ id: 'Profil', en: 'Profile' }}>
          <p className="cv__summary">{t(cv.summary)}</p>
        </Block>
        <Block label={{ id: 'Pendidikan', en: 'Education' }}>
          <Entries items={cv.education} />
        </Block>
        <Block label={{ id: 'Pengalaman', en: 'Experience' }}>
          <Entries items={cv.experience} />
        </Block>
        <Block label={{ id: 'Tulisan', en: 'Writing' }}>
          <Entries items={cv.writing} />
        </Block>
        <Block label={{ id: 'Proyek lain', en: 'Other projects' }}>
          <Entries items={cv.projects} />
        </Block>
        <Block label={{ id: 'Keterampilan', en: 'Skills' }}>
          <ul className="cv__list">
            {cv.skills.map((s, i) => (
              <li key={i}>{t(s)}</li>
            ))}
          </ul>
        </Block>
        <Block label={{ id: 'Bahasa', en: 'Languages' }}>
          <ul className="cv__list">
            {cv.languages.map((s, i) => (
              <li key={i}>{t(s)}</li>
            ))}
          </ul>
        </Block>

        <footer className="cv__foot">
          <p>
            {t({
              id: 'Versi yang lebih menarik dari CV ini ada di situs portofolio.',
              en: 'A more interesting version of this CV lives on the portfolio site.',
            })}{' '}
            {t({ id: 'Diperbarui', en: 'Updated' })} {t(profile.updated)}.
          </p>
        </footer>
      </main>
    </>
  )
}
