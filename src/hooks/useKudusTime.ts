import { useEffect, useState } from 'react'
import type { Lang } from '../i18n/lang'

const locale = (lang: Lang) => (lang === 'id' ? 'id-ID' : 'en-GB')

/** Current time and date in Kudus (Asia/Jakarta, WIB, UTC+7), refreshed every 20 seconds. */
export function useKudusTime(lang: Lang) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 20_000)
    return () => window.clearInterval(id)
  }, [])

  const time = new Intl.DateTimeFormat(locale(lang), {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Jakarta',
  }).format(now)
  const date = new Intl.DateTimeFormat(locale(lang), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  }).format(now)

  return { time, date }
}
