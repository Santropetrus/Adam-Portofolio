import type { Bi } from '../i18n/lang'

/*
  The hero ledger: each question is paired with the thing it became.
  `target` is the id of an entry in works.ts.
*/

export interface Question {
  q: Bi
  kind: Bi
  became: Bi
  target: string
}

export const questions: Question[] = [
  {
    q: { id: 'Sejak kapan laut disebut “hasil”?', en: 'When did the sea become a “yield”?' },
    kind: { id: 'Artikel', en: 'Article' },
    became: { id: 'deep ecology dan ekspor pasir laut', en: 'deep ecology and sea-sand exports' },
    target: 'pasir-laut',
  },
  {
    q: { id: 'Bisakah sampah satu desa dicatat seperti tabungan?', en: "Can a village's rubbish be kept like savings?" },
    kind: { id: 'Sistem', en: 'System' },
    became: { id: 'GEMAH, bank sampah digital', en: 'GEMAH, a digital waste bank' },
    target: 'gemah',
  },
  {
    q: {
      id: 'Apa yang diketahui anak yang dibesarkan alam, dan sudah kita lupakan?',
      en: 'What did a child raised by nature know that we have forgotten?',
    },
    kind: { id: 'Artikel', en: 'Article' },
    became: { id: 'Hayy ibn Yaqzan, diajukan ke Kalimah', en: 'Hayy ibn Yaqzan, submitted to Kalimah' },
    target: 'hayy',
  },
  {
    q: {
      id: 'Kalau ciptaan mulai mencipta, di mana posisi penciptanya?',
      en: 'When the created starts creating, where does that leave the creator?',
    },
    kind: { id: 'Esai', en: 'Essay' },
    became: { id: 'Ketika Ciptaan Menjadi Pencipta', en: 'When the Created Becomes the Creator' },
    target: 'ciptaan',
  },
  {
    q: { id: 'Apa yang terdengar mustahil, tapi benar-benar terjadi?', en: 'What sounds impossible but actually happened?' },
    kind: { id: 'Video', en: 'Video' },
    became: { id: 'Shorts 60 detik, sejarah dan misteri', en: '60-second Shorts on history and mysteries' },
    target: 'shorts',
  },
  {
    q: {
      id: 'Bisakah orang yang tidak menulis kode membangun situs seperti ini?',
      en: "Can someone who doesn't write code build a website like this?",
    },
    kind: { id: 'Situs', en: 'Website' },
    became: { id: 'Anda sedang membacanya', en: "You're reading it" },
    target: 'situs-ini',
  },
]
