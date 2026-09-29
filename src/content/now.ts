import type { Bi } from '../i18n/lang'

/* "Sekarang": what is actually happening, as of profile.updated. */

export interface NowItem {
  verb: Bi
  object: Bi
  emphasis?: boolean
}

export const nowItems: NowItem[] = [
  {
    verb: { id: 'Menulis', en: 'Writing' },
    object: {
      id: 'skripsi, di semester akhir Aqidah dan Filsafat Islam, UIN Sunan Kudus.',
      en: 'my undergraduate thesis, in the final semester of Islamic Theology and Philosophy at UIN Sunan Kudus.',
    },
  },
  {
    verb: { id: 'Menunggu', en: 'Waiting' },
    object: {
      id: 'kabar dari Kalimah tentang artikel Hayy ibn Yaqzan.',
      en: 'to hear from Kalimah about the Hayy ibn Yaqzan article.',
    },
  },
  {
    verb: { id: 'Membuat', en: 'Making' },
    object: {
      id: 'video 60 detik tentang sejarah, misteri, dan hal-hal aneh-tapi-nyata.',
      en: '60-second videos about history, mysteries and strange-but-true things.',
    },
  },
  {
    verb: { id: 'Membangun', en: 'Building' },
    object: {
      id: 'dengan AI, sambil mencari tahu di mana batasnya.',
      en: 'with AI, while finding out where its limits are.',
    },
  },
  {
    verb: { id: 'Mencari', en: 'Looking for' },
    object: {
      id: 'pekerjaan: remote, atau on-site di sekitar Kudus, di tempat yang terbuka untuk mahasiswa tingkat akhir yang sedang skripsi.',
      en: 'work: remote, or on-site around Kudus, somewhere open to a final-year student who is still writing a thesis.',
    },
    emphasis: true,
  },
]
