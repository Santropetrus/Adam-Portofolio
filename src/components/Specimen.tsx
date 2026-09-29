import type { CSSProperties } from 'react'
import type { Work } from '../content/works'
import { useLang } from '../i18n/lang'
import './Specimen.css'

/*
  Visual summaries for the archive. They are decorative duplicates of the
  written entry (the parent marks them aria-hidden), and never show invented
  numbers: GEMAH gets a diagram, not a fake screenshot.
*/

function Gemah() {
  const { t } = useLang()
  return (
    <div className="spec spec--gemah">
      <div className="gemah__public">
        <span className="gemah__label">{t({ id: 'Halaman transparansi', en: 'Transparency page' })}</span>
        <span className="gemah__sub">{t({ id: 'publik · siapa pun bisa melihat', en: 'public · anyone can look' })}</span>
      </div>
      <div className="gemah__up">
        <span>↑</span> {t({ id: 'ringkasan', en: 'totals' })}
      </div>
      <div className="gemah__rws">
        {['RW 01', 'RW 02', 'RW 03', 'RW …'].map((rw) => (
          <div className="gemah__rw" key={rw}>
            <span className="gemah__rwname">{rw}</span>
            <svg className="gemah__lock" viewBox="0 0 12 14" width="11" height="13">
              <rect x="1" y="6" width="10" height="7" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span className="gemah__lines">
              {[0, 1, 2, 3, 4, 5].map((k) => (
                <i key={k} />
              ))}
            </span>
          </div>
        ))}
      </div>
      <p className="gemah__rls">
        {t({
          id: 'Row-level security: tiap pengurus hanya melihat RW-nya sendiri.',
          en: 'Row-level security: each administrator only sees their own RW.',
        })}
      </p>
      <div className="gemah__up">
        <span>↑</span> {t({ id: 'setoran sampah warga', en: "residents' deposits" })}
      </div>
      <div className="gemah__base">
        <span>{t({ id: 'Buku tabungan warga', en: "Residents' savings books" })}</span>
        <span>{t({ id: 'Ekspor Excel', en: 'Excel export' })}</span>
      </div>
      <p className="spec__cap">{t({ id: 'Skema cara kerja, bukan tangkapan layar.', en: 'A diagram of how it works, not a screenshot.' })}</p>
    </div>
  )
}

function Paper() {
  const { t } = useLang()
  return (
    <div className="spec spec--paper">
      <p className="paper__run">{t({ id: 'Luaran PPL · Balai Litbang Agama Semarang · 2026', en: 'PPL output · Balai Litbang Agama Semarang · 2026' })}</p>
      <p className="paper__title">
        {t({ id: 'Ekologi Dangkal dalam Kebijakan Ekonomi Biru', en: 'Shallow Ecology in Blue Economy Policy' })}
      </p>
      <p className="paper__author">Bona Fachry Adam</p>
      <p className="paper__h">{t({ id: 'Abstrak', en: 'Abstract' })}</p>
      <p className="paper__abs">
        {t({
          id: (
            <>
              Penamaan material dasar laut sebagai <span className="paper__mark">hasil</span> memindahkan laut dari kategori
              ekologis ke kategori komoditas. Perangkat kendali dalam kebijakan mengatur laju dan lokasi pengambilan tanpa
              mempersoalkan kebolehannya, sehingga bekerja sepenuhnya dalam kerangka ekologi dangkal.
            </>
          ),
          en: (
            <>
              Naming seabed material a <span className="paper__mark">yield</span> transfers the sea from an ecological category
              into a commodity category. The control instruments within the policy regulate the rate and location of extraction
              without questioning its permissibility, and therefore operate wholly within shallow ecology.
            </>
          ),
        })}
      </p>
      <p className="paper__kw">
        <span>{t({ id: 'Kata kunci', en: 'Keywords' })}</span>
        {t({
          id: 'deep ecology; ekologi dangkal; ekonomi biru; nilai intrinsik laut; pasir laut',
          en: 'deep ecology; shallow ecology; intrinsic value of the sea; sea sand',
        })}
      </p>
    </div>
  )
}

function Hayy() {
  const { t } = useLang()
  return (
    <div className="spec spec--hayy">
      <p className="hayy__ar" lang="ar" dir="rtl">
        حيّ بن يقظان
      </p>
      <p className="hayy__tr">Hayy ibn Yaqzan</p>
      <p className="hayy__gloss">{t({ id: '“Hidup, anak dari Yang Terjaga”', en: '“Alive, son of Awake”' })}</p>
      <dl className="hayy__facts">
        <div>
          <dt>{t({ id: 'Penulis', en: 'Author' })}</dt>
          <dd>{t({ id: 'Ibn Tufayl · Andalusia, abad ke-12', en: 'Ibn Tufayl · al-Andalus, 12th century' })}</dd>
        </div>
        <div>
          <dt>{t({ id: 'Latin', en: 'Latin' })}</dt>
          <dd>Philosophus Autodidactus · 1671</dd>
        </div>
        <div>
          <dt>{t({ id: 'Artikel', en: 'Article' })}</dt>
          <dd>{t({ id: 'Kalimah · SINTA 2 · diajukan', en: 'Kalimah · SINTA 2 · submitted' })}</dd>
        </div>
      </dl>
    </div>
  )
}

function Loop() {
  const { t } = useLang()
  const steps = t({
    id: ['Tuhan', 'mencipta', 'manusia', 'mencipta', 'mesin', '“mencipta”'],
    en: ['God', 'creates', 'humans', 'who create', 'machines', 'that “create”'],
  })
  return (
    <div className="spec spec--loop">
      <ol className="loop__list">
        {steps.map((s, i) => (
          <li key={i} className={i % 2 ? 'loop__verb' : 'loop__noun'} style={{ '--i': i } as CSSProperties}>
            {s}
          </li>
        ))}
        <li className="loop__q" style={{ '--i': steps.length } as CSSProperties}>
          ?
        </li>
      </ol>
    </div>
  )
}

function Shorts() {
  const { t } = useLang()
  return (
    <div className="spec spec--shorts">
      <div className="shorts__frame">
        <p className="shorts__kicker">{t({ id: 'Sejarah · Misteri', en: 'History · Mystery' })}</p>
        <p className="shorts__line">
          {t({
            id: (
              <>
                Aneh,
                <br />
                tapi
                <br />
                <span className="shorts__true">nyata.</span>
              </>
            ),
            en: (
              <>
                Strange,
                <br />
                but
                <br />
                <span className="shorts__true">true.</span>
              </>
            ),
          })}
        </p>
        <div className="shorts__bar">
          <span />
        </div>
        <p className="shorts__time">0:00 — 1:00</p>
      </div>
      <p className="spec__cap">{t({ id: '9:16, 30–60 detik, bahasa Indonesia.', en: '9:16, 30–60 seconds, in Indonesian.' })}</p>
    </div>
  )
}

function Column() {
  const { t } = useLang()
  const widths = [100, 96, 100, 88, 100, 73, 0, 100, 94, 100, 97, 61]
  return (
    <div className="spec spec--column">
      <p className="column__head">kompasiana.com/bonafahry9177</p>
      <div className="column__lines">
        {widths.map((w, i) => (w ? <i key={i} style={{ width: `${w}%` }} /> : <b key={i} className="column__gap" />))}
      </div>
      <p className="spec__cap">{t({ id: 'Tulisan populer, untuk pembaca umum.', en: 'Public writing, for a general audience.' })}</p>
    </div>
  )
}

function Site() {
  const { t } = useLang()
  return (
    <div className="spec spec--site">
      <div className="site__row">
        <p className="site__serif">Newsreader</p>
        <p className="site__note">{t({ id: 'untuk yang dipikirkan', en: 'for what is thought' })}</p>
      </div>
      <div className="site__row">
        <p className="site__sans">Archivo</p>
        <p className="site__note">{t({ id: 'untuk yang dicatat', en: 'for what is recorded' })}</p>
      </div>
      <div className="site__row site__row--swatch">
        <span className="site__swatch" />
        <p className="site__note">
          #8FA164 · {t({ id: 'dinding kelas di Gbr. 1', en: 'the classroom wall in Fig. 1' })}
        </p>
      </div>
    </div>
  )
}

export function WorkSpecimen({ work }: { work: Work }) {
  switch (work.specimen) {
    case 'gemah':
      return <Gemah />
    case 'naess':
      return <Paper />
    case 'hayy':
      return <Hayy />
    case 'ai':
      return <Loop />
    case 'shorts':
      return <Shorts />
    case 'kompasiana':
      return <Column />
    case 'site':
      return <Site />
  }
}
