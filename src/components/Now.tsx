import { nowItems } from '../content/now'
import { cvHref, profile, sections } from '../content/site'
import { useLang } from '../i18n/lang'
import { Arrow, Mark, SectionHead } from './primitives'
import './Now.css'

/** §05. What is actually happening, with a date so nothing pretends to be timeless. */
export function Now() {
  const { t, lang } = useLang()
  const sec = sections[4]

  return (
    <section id={sec.id} className="now" aria-labelledby="now-title">
      <div className="wrap">
        <SectionHead
          n={sec.n}
          id="now-title"
          title={t(sec.title)}
          aside={
            <>
              {t({ id: 'Diperbarui', en: 'Updated' })} <time dateTime="2026-09">{t(profile.updated)}</time>
            </>
          }
        />

        <ul className="now__list">
          {nowItems.map((item, i) => (
            <li key={i} className={item.emphasis ? 'now__row now__row--em' : 'now__row'}>
              <span className="now__verb">{t(item.verb)}</span>
              <span className="now__object">
                {item.emphasis ? <Mark>{t(item.object)}</Mark> : t(item.object)}
                {item.emphasis ? (
                  <span className="now__links">
                    <a className="arrow-link" href="#surat">
                      {t({ id: 'Kirim surat', en: 'Write to me' })} <Arrow dir="down" />
                    </a>
                    <a className="arrow-link" href={`${cvHref}?lang=${lang}`}>
                      CV <Arrow />
                    </a>
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
