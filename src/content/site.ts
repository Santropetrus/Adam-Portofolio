import type { Bi } from '../i18n/lang'

/*
  Profile and contact facts. Source: Fahry's own profile brief.
  Anything not in the brief is left out rather than guessed.
*/

export const profile = {
  name: 'Bona Fachry Adam',
  nickname: 'Santro',
  email: 'bonafahry8098@gmail.com',
  place: { id: 'Kudus, Jawa Tengah', en: 'Kudus, Central Java' } satisfies Bi,
  // Kudus town centre, approximately.
  coords: { id: '6°48′ LS · 110°50′ BT', en: '6°48′ S · 110°50′ E' } satisfies Bi,
  study: {
    id: 'Aqidah dan Filsafat Islam, UIN Sunan Kudus',
    en: 'Islamic Theology and Philosophy (AFI), UIN Sunan Kudus',
  } satisfies Bi,
  updated: { id: 'September 2026', en: 'September 2026' } satisfies Bi,
}

export type SocialLink = { label: string; handle: string; href: string }

export const socials: SocialLink[] = [
  { label: 'Instagram', handle: '@fahry_adamm', href: 'https://www.instagram.com/fahry_adamm/' },
  { label: 'GitHub', handle: 'Santropetrus', href: 'https://github.com/Santropetrus' },
  { label: 'LinkedIn', handle: 'bona-adam', href: 'https://www.linkedin.com/in/bona-adam-b53b57291' },
  { label: 'Kompasiana', handle: 'bonafahry9177', href: 'https://www.kompasiana.com/bonafahry9177' },
]

export type Section = { id: string; n: string; title: Bi }

export const sections: Section[] = [
  { id: 'pertanyaan', n: '01', title: { id: 'Pertanyaan', en: 'Questions' } },
  { id: 'cara-berpikir', n: '02', title: { id: 'Cara berpikir', en: 'How I think' } },
  { id: 'arsip', n: '03', title: { id: 'Arsip', en: 'Archive' } },
  { id: 'laboratorium', n: '04', title: { id: 'Laboratorium', en: 'Lab' } },
  { id: 'sekarang', n: '05', title: { id: 'Sekarang', en: 'Now' } },
  { id: 'surat', n: '06', title: { id: 'Surat', en: 'Letter' } },
]

export const cvHref = '/cv.html'
