import { profile } from '../content/site'
import { useLang } from '../i18n/lang'
import { Arrow } from './primitives'
import './Colophon.css'

export function Colophon() {
  const { t } = useLang()
  return (
    <footer className="colophon">
      <div className="colophon__inner wrap">
        <div className="colophon__text">
          <h2 className="colophon__title">{t({ id: 'Kolofon', en: 'Colophon' })}</h2>
          <p>
            {t({
              id: 'Dibangun dengan React dan Vite lewat percakapan dengan asisten AI; arah, isi, dan keputusannya dari saya. Huruf: Newsreader (Production Type) dan Archivo (Omnibus-Type), disajikan sendiri. Warna aksen diambil dari dinding kelas di Gbr. 1. Tanpa pelacak, tanpa cookie.',
              en: 'Built with React and Vite in conversation with AI coding assistants; the direction, content and decisions are mine. Type: Newsreader (Production Type) and Archivo (Omnibus-Type), self-hosted. The accent colour comes from the classroom wall in Fig. 1. No trackers, no cookies.',
            })}
          </p>
        </div>
        <div className="colophon__end">
          <p>
            © 2026 {profile.name}
          </p>
          <a className="arrow-link" href="#top">
            {t({ id: 'Kembali ke atas', en: 'Back to top' })} <Arrow dir="up" />
          </a>
        </div>
      </div>
    </footer>
  )
}
