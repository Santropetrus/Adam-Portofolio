import type { Bi } from '../i18n/lang'

/*
  The lab: things that are ongoing, renamed, half-finished or left behind.
  `action: 'lamp'` renders the theme switch inside the note.
*/

export type LabStatus = 'berjalan' | 'berganti-nama' | 'arsip' | 'interaktif'

export const statusLabel: Record<LabStatus, Bi> = {
  berjalan: { id: 'Berjalan', en: 'Ongoing' },
  'berganti-nama': { id: 'Berganti nama', en: 'Renamed' },
  arsip: { id: 'Arsip', en: 'Archived' },
  interaktif: { id: 'Coba sendiri', en: 'Try it' },
}

export interface LabNote {
  code: string
  status: LabStatus
  title: Bi
  body: Bi
  aside?: Bi
  action?: 'lamp' | 'lang'
  size: 'narrow' | 'wide'
}

export const labNotes: LabNote[] = [
  {
    code: 'L-01',
    status: 'berjalan',
    title: { id: 'Membangun tanpa mengetik kode', en: 'Building without typing code' },
    body: {
      id: 'Metodenya tidak glamor: menjelaskan apa yang saya mau, membaca apa yang dihasilkan AI, menolak yang salah, lalu mengulang. Keputusan dan kesalahannya tetap milik saya.',
      en: "The method is unglamorous: describe what I want, read what the AI produces, reject what's wrong, repeat. The decisions, and the mistakes, stay mine.",
    },
    aside: { id: 'Alat: asisten AI untuk menulis kode. Hasil: GEMAH, dan halaman ini.', en: 'Tools: AI coding assistants. Results: GEMAH, and this page.' },
    size: 'wide',
  },
  {
    code: 'L-02',
    status: 'berganti-nama',
    title: { id: 'TANDUR → GEMAH', en: 'TANDUR → GEMAH' },
    body: {
      id: 'Tandur: menanam padi, dalam bahasa Jawa. Gemah: dari gemah ripah loh jinawi, subur dan makmur. Sistem bank sampahnya sama; namanya yang tumbuh.',
      en: 'Tandur: Javanese for planting rice. Gemah: from gemah ripah loh jinawi, fertile and prosperous. The waste-bank system stayed the same; its name grew up.',
    },
    size: 'narrow',
  },
  {
    code: 'L-03',
    status: 'berjalan',
    title: { id: 'Gambar buatan untuk cerita sungguhan', en: 'Made-up images for true stories' },
    body: {
      id: 'Visual video pendek saya dibuat dengan Higgsfield. Pertanyaan yang ikut terbawa: sejauh mana gambar buatan mesin boleh membantu menceritakan sesuatu yang benar-benar terjadi?',
      en: 'The visuals for my short videos are made with Higgsfield. The question that comes along: how far can machine-made images help tell something that really happened?',
    },
    size: 'wide',
  },
  {
    code: 'L-04',
    status: 'interaktif',
    title: { id: 'Filsafat iluminasi, versi tombol', en: 'Illuminationist philosophy, switch edition' },
    body: {
      id: 'Suhrawardi membaca realitas sebagai tingkatan cahaya yang tak terhingga. Situs ini cuma punya dua. Maaf, Syekh.',
      en: 'Suhrawardi read reality as infinite degrees of light. This site has two. Apologies, Shaykh.',
    },
    action: 'lamp',
    size: 'narrow',
  },
  {
    code: 'L-05',
    status: 'berjalan',
    title: { id: 'Setiap terjemahan adalah tafsir', en: 'Every translation is an interpretation' },
    body: {
      id: 'Situs ini ada dalam dua bahasa. Bahasa Inggris saya masih di tengah jalan, jadi versi Inggrisnya diterjemahkan dengan bantuan. Hermeneutika sudah lama mengingatkan: yang hilang dan yang ditemukan dalam terjemahan sama pentingnya.',
      en: 'This site exists in two languages. My English is still on its way, so the English version was translated with help. Hermeneutics has long said it: what is lost and what is found in translation matter equally.',
    },
    action: 'lang',
    size: 'wide',
  },
  {
    code: 'L-06',
    status: 'arsip',
    title: { id: 'Ekonomi digital dan Web 3.0', en: 'Digital economy and Web 3.0' },
    body: {
      id: 'Pernah menjadi community lead di beberapa proyek berbasis teknologi. Yang terbawa sampai sekarang: kepemimpinan, komunikasi, dan cara sebuah komunitas digital tumbuh.',
      en: 'I was a community lead for several technology-based projects. What I kept: leadership, communication, and how a digital community actually grows.',
    },
    size: 'narrow',
  },
]
