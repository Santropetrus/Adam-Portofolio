import type { Bi } from '../i18n/lang'

/* The printable CV. Same sources as the rest of the site; unknown dates are left out. */

export interface CvEntry {
  title: Bi
  org: Bi
  when?: Bi
  note?: Bi
  href?: string
}

export const cv = {
  headline: {
    id: 'Mahasiswa filsafat tingkat akhir · riset dan penulisan · membangun dengan AI',
    en: 'Final-year philosophy student · research and writing · building with AI',
  } satisfies Bi,
  summary: {
    id: 'Mahasiswa Aqidah dan Filsafat Islam di UIN Sunan Kudus dengan fokus epistemologi dan ekologi. Menulis artikel ilmiah dan tulisan populer, membangun aplikasi web lewat alat AI tanpa menulis kode manual, dan membuat video pendek. Sedang mencari pekerjaan remote, atau on-site di sekitar Kudus, di tempat yang terbuka untuk mahasiswa tingkat akhir yang sedang skripsi.',
    en: 'Islamic Theology and Philosophy student at UIN Sunan Kudus, focused on epistemology and ecology. I write academic and public pieces, build web applications with AI tools without writing code by hand, and make short videos. Looking for remote work, or on-site work around Kudus, somewhere open to a final-year student still writing a thesis.',
  } satisfies Bi,
  education: [
    {
      title: { id: 'S1 Aqidah dan Filsafat Islam', en: 'BA, Islamic Theology and Philosophy (Aqidah dan Filsafat Islam)' },
      org: { id: 'Fakultas Ushuluddin, UIN Sunan Kudus', en: 'Faculty of Ushuluddin, UIN Sunan Kudus' },
      when: { id: 'Agustus 2023 – sekarang', en: 'August 2023 – present' },
      note: {
        id: 'Semester akhir, sedang menulis skripsi. Fokus: epistemologi dan ekologi; Ibn Tufayl, filsafat iluminasi (Suhrawardi, Mulla Sadra).',
        en: 'Final semester, writing the thesis. Focus: epistemology and ecology; Ibn Tufayl, illuminationist philosophy (Suhrawardi, Mulla Sadra).',
      },
    },
    {
      title: { id: 'SMK, Bisnis Daring dan Pemasaran', en: 'Vocational high school, Online Business and Marketing' },
      org: { id: 'SMK Al-Hikmah, Jakarta Selatan', en: 'SMK Al-Hikmah, South Jakarta' },
      when: { id: '2020 – 2023', en: '2020 – 2023' },
    },
  ] satisfies CvEntry[],
  experience: [
    {
      title: { id: 'PPL/PKL Terintegrasi', en: 'Integrated field practice (PPL/PKL)' },
      org: { id: 'Balai Litbang Agama Semarang', en: 'Balai Litbang Agama Semarang (religious research and development agency)' },
      when: { id: '2026', en: '2026' },
      note: {
        id: 'Belajar langsung tata kelola lembaga penelitian keagamaan. Luaran individu: artikel deep ecology tentang kebijakan ekspor pasir laut.',
        en: 'Learned first-hand how a religious research institute works. Individual output: a deep-ecology article on sea-sand export policy.',
      },
    },
    {
      title: { id: 'KKN · perancang dan pembangun GEMAH', en: 'Community service (KKN) · designer and builder of GEMAH' },
      org: { id: 'Desa Jati Kulon, Kudus', en: 'Jati Kulon village, Kudus' },
      note: {
        id: 'Sistem manajemen bank sampah digital: akses per RW dengan row-level security, buku tabungan digital, ekspor Excel, halaman transparansi publik. React, Supabase, Netlify, dibangun dengan alat AI.',
        en: 'A digital waste-bank management system: per-RW access with row-level security, digital savings books, Excel export, a public transparency page. React, Supabase, Netlify, built with AI tools.',
      },
      href: 'https://gemah.netlify.app/',
    },
    {
      title: { id: 'Anggota divisi kaderisasi', en: 'Member, member-development (kaderisasi) division' },
      org: { id: 'HMPS Aqidah dan Filsafat Islam, UIN Sunan Kudus', en: 'HMPS AFI student association, UIN Sunan Kudus' },
    },
    {
      title: { id: 'Community lead', en: 'Community lead' },
      org: { id: 'Beberapa proyek berbasis teknologi (Web 3.0)', en: 'Several technology-based projects (Web 3.0)' },
      note: {
        id: 'Kepemimpinan, komunikasi, dan pengembangan komunitas digital.',
        en: 'Leadership, communication and digital community building.',
      },
    },
    {
      title: { id: 'PKL · staf penjualan', en: 'Placement · sales assistant' },
      org: { id: 'Ramayana, Kebayoran Lama', en: 'Ramayana department store, Kebayoran Lama' },
      when: { id: 'Masa SMK', en: 'During vocational school' },
    },
  ] satisfies CvEntry[],
  writing: [
    {
      title: {
        id: 'Kritik Epistemologi atas Relasi Manusia dan Alam: Melawan Katastrofe melalui Karya Novel Hayy ibn Yaqzan',
        en: 'Kritik Epistemologi atas Relasi Manusia dan Alam: Melawan Katastrofe melalui Karya Novel Hayy ibn Yaqzan',
      },
      org: {
        id: 'Bersama Moh. Muhtador · diajukan ke Kalimah: Jurnal Studi Agama dan Pemikiran Islam (SINTA 2)',
        en: 'With Moh. Muhtador · submitted to Kalimah: Jurnal Studi Agama dan Pemikiran Islam (SINTA 2)',
      },
    },
    {
      title: {
        id: 'Ekologi Dangkal dalam Kebijakan Ekonomi Biru: Telaah Deep Ecology Arne Naess atas Reduksi Nilai Intrinsik Laut dalam Kebijakan Ekspor Pasir Laut di Kepulauan Riau',
        en: "Shallow Ecology in Blue Economy Policy: An Arne Naess Deep Ecology Examination of the Reduction of the Sea's Intrinsic Value in Sea Sand Export Policy in the Riau Islands",
      },
      org: { id: 'Luaran individu PPL, Balai Litbang Agama Semarang', en: 'Individual PPL output, Balai Litbang Agama Semarang' },
      when: { id: '2026', en: '2026' },
    },
    {
      title: { id: 'Ketika Ciptaan Menjadi Pencipta', en: 'Ketika Ciptaan Menjadi Pencipta (When the Created Becomes the Creator)' },
      org: { id: 'Esai reflektif tentang Tuhan, manusia, dan AI', en: 'Reflective essay on God, humans and AI' },
    },
    {
      title: { id: 'Tulisan populer di Kompasiana', en: 'Public writing on Kompasiana' },
      org: { id: 'kompasiana.com/bonafahry9177', en: 'kompasiana.com/bonafahry9177' },
      href: 'https://www.kompasiana.com/bonafahry9177',
    },
  ] satisfies CvEntry[],
  projects: [
    {
      title: { id: 'Kanal YouTube Shorts', en: 'YouTube Shorts channel' },
      org: {
        id: 'Video 30–60 detik tentang sejarah, misteri, dan kejadian aneh-tapi-nyata; visual dengan Higgsfield.',
        en: '30–60 second videos on history, mysteries and strange-but-true events; visuals made with Higgsfield.',
      },
    },
    {
      title: { id: 'Situs portofolio ini', en: 'This portfolio website' },
      org: {
        id: 'Dwibahasa, dibangun dengan React dan Vite dengan bantuan asisten AI.',
        en: 'Bilingual, built with React and Vite with AI coding assistants.',
      },
    },
  ] satisfies CvEntry[],
  skills: [
    {
      id: 'Riset kepustakaan dan analisis filosofis: epistemologi, etika lingkungan, analisis bahasa kebijakan.',
      en: 'Library research and philosophical analysis: epistemology, environmental ethics, reading policy language.',
    },
    { id: 'Penulisan akademik dan populer dalam bahasa Indonesia.', en: 'Academic and public writing in Indonesian.' },
    {
      id: 'Membangun aplikasi web dengan asisten AI: React, Supabase, Netlify.',
      en: 'Building web applications with AI assistants: React, Supabase, Netlify.',
    },
    { id: 'Produksi video pendek dengan alat AI (Higgsfield).', en: 'Short-form video production with AI tools (Higgsfield).' },
    {
      id: 'Pengorganisasian mahasiswa dan komunitas; penjualan dan pemasaran daring.',
      en: 'Student and community organising; sales and online marketing.',
    },
  ] satisfies Bi[],
  languages: [
    { id: 'Bahasa Indonesia: fasih', en: 'Indonesian: fluent' },
    { id: 'Bahasa Inggris: dasar–menengah', en: 'English: beginner to intermediate' },
  ] satisfies Bi[],
}
