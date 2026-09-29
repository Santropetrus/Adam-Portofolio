import { useEffect, useState } from 'react'
import { sections } from '../content/site'
import { kindLabel, otherTopics, works, type WorkKind } from '../content/works'
import { useWide } from '../hooks/useMediaQuery'
import { useLang } from '../i18n/lang'
import { Arrow, SectionHead } from './primitives'
import { WorkSpecimen } from './Specimen'
import './Archive.css'

type Filter = WorkKind | 'semua'
const FILTERS: Filter[] = ['semua', 'tulisan', 'buatan', 'video']

const numberOf = (id: string) => String(works.findIndex((w) => w.id === id) + 1).padStart(2, '0')

export function Archive({ openId, setOpenId }: { openId: string | null; setOpenId: (id: string | null) => void }) {
  const { t } = useLang()
  const wide = useWide()
  const sec = sections[2]
  const [filter, setFilter] = useState<Filter>('semua')
  const [preview, setPreview] = useState<string | null>(null)

  // An entry opened from elsewhere (hero, hash link) must never be hidden by a filter.
  const openKind = works.find((w) => w.id === openId)?.kind
  const effectiveFilter: Filter = openKind && filter !== 'semua' && filter !== openKind ? 'semua' : filter
  const list = effectiveFilter === 'semua' ? works : works.filter((w) => w.kind === effectiveFilter)
  const shown = list.find((w) => w.id === (preview ?? openId)) ?? list[0]

  // Deep links: #karya-gemah opens GEMAH.
  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(location.hash).match(/^#karya-(.+)$/)?.[1]
      if (id && works.some((w) => w.id === id)) setOpenId(id)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [setOpenId])

  const toggle = (id: string) => {
    const next = openId === id ? null : id
    setOpenId(next)
    history.replaceState(null, '', next ? `#karya-${next}` : `#${sec.id}`)
  }

  const chooseFilter = (f: Filter) => {
    setFilter(f)
    if (openId && f !== 'semua' && works.find((w) => w.id === openId)?.kind !== f) setOpenId(null)
  }

  return (
    <section id={sec.id} className="archive" aria-labelledby="archive-title">
      <div className="wrap">
        <SectionHead
          n={sec.n}
          id="archive-title"
          title={t(sec.title)}
          aside={t({
            id: 'Tulisan, sistem, dan video. Masing-masing dengan apa, kenapa, dan apa yang saya kerjakan.',
            en: 'Writing, systems and video. Each with what, why, and what I actually did.',
          })}
        />

        <div className="archive__bar">
          <div className="archive__filters" role="group" aria-label={t({ id: 'Saring arsip', en: 'Filter the archive' })}>
            {FILTERS.map((f) => {
              const count = f === 'semua' ? works.length : works.filter((w) => w.kind === f).length
              return (
                <button key={f} type="button" aria-pressed={effectiveFilter === f} onClick={() => chooseFilter(f)}>
                  {t(kindLabel[f])}
                  <span className="archive__count" aria-hidden="true">
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
          <p className="archive__status" role="status">
            {t({
              id: `${list.length} dari ${works.length} entri`,
              en: `${list.length} of ${works.length} entries`,
            })}
          </p>
        </div>

        <div className="archive__grid">
          <ol className="archive__list" onMouseLeave={() => setPreview(null)}>
            {list.map((w) => {
              const open = openId === w.id
              const btnId = `work-btn-${w.id}`
              const bodyId = `work-body-${w.id}`
              return (
                <li
                  key={w.id}
                  id={`karya-${w.id}`}
                  className={['work', open ? 'is-open' : '', shown?.id === w.id ? 'is-shown' : ''].filter(Boolean).join(' ')}
                >
                  <h3 className="work__h">
                    <button
                      id={btnId}
                      type="button"
                      className="work__toggle"
                      aria-expanded={open}
                      aria-controls={bodyId}
                      onClick={() => toggle(w.id)}
                      onMouseEnter={() => setPreview(w.id)}
                      onFocus={() => setPreview(w.id)}
                    >
                      <span className="work__num" aria-hidden="true">
                        {numberOf(w.id)}
                      </span>
                      <span className="work__title">{t(w.title)}</span>
                      <span className="work__meta">
                        <span className="work__label">{t(w.label)}</span>
                        <span className="work__when">{t(w.when)}</span>
                      </span>
                      <span className="work__icon" aria-hidden="true" />
                    </button>
                  </h3>

                  <div className="work__body" id={bodyId} role="region" aria-labelledby={btnId}>
                    <div className="work__clip">
                      <div className="work__content">
                        {w.fullTitle ? <p className="work__full">{t(w.fullTitle)}</p> : null}
                        {w.context ? <p className="work__context">{t(w.context)}</p> : null}

                        <dl className="work__facts">
                          <div>
                            <dt>{t({ id: 'Apa', en: 'What' })}</dt>
                            <dd>{t(w.what)}</dd>
                          </div>
                          {w.why ? (
                            <div>
                              <dt>{t({ id: 'Kenapa', en: 'Why' })}</dt>
                              <dd>{t(w.why)}</dd>
                            </div>
                          ) : null}
                          <div>
                            <dt>{t({ id: 'Yang saya kerjakan', en: 'What I did' })}</dt>
                            <dd>{t(w.did)}</dd>
                          </div>
                          {w.extra ? (
                            <div>
                              <dt>{t(w.extra.heading)}</dt>
                              <dd>
                                <ol className="work__extra">
                                  {w.extra.items.map((item, k) => (
                                    <li key={k}>{t(item)}</li>
                                  ))}
                                </ol>
                              </dd>
                            </div>
                          ) : null}
                        </dl>

                        {w.tags || w.links ? (
                          <div className="work__foot">
                            {w.tags ? <p className="work__tags">{w.tags.join(' · ')}</p> : null}
                            {w.links?.map((l) => (
                              <a key={l.href} className="arrow-link work__link" href={l.href} target="_blank" rel="noreferrer">
                                {t(l.label)} <Arrow />
                                <span className="visually-hidden">{t({ id: '(tab baru)', en: '(new tab)' })}</span>
                              </a>
                            ))}
                          </div>
                        ) : null}

                        {!wide && open ? (
                          <div className="work__specimen" aria-hidden="true">
                            <WorkSpecimen work={w} />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          {wide && shown ? (
            <aside className="archive__panel" aria-hidden="true">
              <div className="archive__panel-inner" key={shown.id}>
                <p className="archive__panel-meta">
                  <span>{numberOf(shown.id)}</span>
                  <span>{t(shown.label)}</span>
                </p>
                <WorkSpecimen work={shown} />
              </div>
            </aside>
          ) : null}
        </div>

        <p className="archive__more">{t(otherTopics)}</p>
      </div>
    </section>
  )
}
