import { useEffect, useRef, useState } from 'react'
import { cvHref, profile, sections, socials } from '../content/site'
import { useInView } from '../hooks/useInView'
import { useKudusTime } from '../hooks/useKudusTime'
import { useLang } from '../i18n/lang'
import { Arrow, SectionHead } from './primitives'
import './Letter.css'

/** §06. Contact, written as a letter and signed. */
export function Letter() {
  const { t, lang } = useLang()
  const sec = sections[5]
  const { time, date } = useKudusTime(lang)
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle')
  const timer = useRef<number | undefined>(undefined)
  const [signRef, signed] = useInView<HTMLParagraphElement>({ rootMargin: '0px 0px -15% 0px' })

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied('ok')
    } catch {
      setCopied('fail')
    }
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied('idle'), 2400)
  }

  return (
    <section id={sec.id} className="letter" aria-labelledby="letter-title">
      <div className="wrap">
        <SectionHead
          n={sec.n}
          id="letter-title"
          title={t(sec.title)}
          aside={t({ id: 'Kontak, tapi ditulis seperti surat.', en: 'Contact, written as a letter.' })}
        />

        <div className="letter__paper">
          <p className="letter__place">
            {t(profile.place).split(',')[0]}, <time>{date}</time>
          </p>

          <p className="letter__salutation">
            {t({ id: 'Kepada siapa pun yang sampai di halaman ini,', en: 'To whoever made it to this page,' })}
          </p>

          <div className="letter__body">
            <p>
              {t({
                id: 'Kalau Anda punya pertanyaan yang tidak mau pergi, pekerjaan yang butuh orang yang mau membaca dulu sebelum membuat, atau sekadar ingin berdebat soal Kant, surel saya terbuka.',
                en: "If you have a question that won't leave you alone, work that needs someone who reads before making, or you simply want to argue about Kant, my inbox is open.",
              })}
            </p>
            <p>
              {t({
                id: 'Saat ini saya sedang mencari pekerjaan: remote, atau on-site di sekitar Kudus. Saya mahasiswa tingkat akhir yang masih menulis skripsi, jadi tempat yang terbuka untuk itu akan sangat saya hargai.',
                en: "I'm currently looking for work: remote, or on-site around Kudus. I'm a final-year student still writing my thesis, so a place that is open to that would mean a lot.",
              })}
            </p>
          </div>

          <div className="letter__mail">
            <a className="letter__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button type="button" className="letter__copy" onClick={copy}>
              {copied === 'ok'
                ? t({ id: 'Tersalin', en: 'Copied' })
                : copied === 'fail'
                  ? t({ id: 'Gagal, salin manual', en: 'Failed, copy by hand' })
                  : t({ id: 'Salin alamat', en: 'Copy address' })}
            </button>
            <span className="visually-hidden" role="status">
              {copied === 'ok' ? t({ id: 'Alamat surel tersalin.', en: 'E-mail address copied.' }) : ''}
            </span>
          </div>

          <ul className="letter__links">
            {socials.map((s) => (
              <li key={s.label}>
                <a className="letter__social" href={s.href} target="_blank" rel="noreferrer me">
                  <span className="letter__social-label">{s.label}</span>
                  <span className="letter__social-handle">
                    {s.handle} <Arrow />
                  </span>
                  <span className="visually-hidden">{t({ id: '(tab baru)', en: '(new tab)' })}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="letter__time">
            {t({ id: 'Di Kudus sekarang pukul', en: 'In Kudus it is' })} <time>{time}</time> WIB (UTC+7).
          </p>

          <div className="letter__sign">
            <p className="letter__closing">{t({ id: 'Salam,', en: 'Regards,' })}</p>
            <p ref={signRef} className={signed ? 'letter__signature is-signed' : 'letter__signature'}>
              {profile.nickname}
            </p>
            <p className="letter__fullname">{profile.name}</p>
          </div>

          <p className="letter__ps">
            {t({ id: 'N.B. Versi resminya, yang lebih membosankan:', en: 'P.S. The official, more boring version:' })}{' '}
            <a className="arrow-link" href={`${cvHref}?lang=${lang}`}>
              CV <Arrow />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
