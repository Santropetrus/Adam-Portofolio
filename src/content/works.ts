import type { Bi } from '../i18n/lang'

/*
  The archive. Sources: the profile brief, and the English abstract of the
  deep-ecology article. Lines marked "interpretation" in DESIGN_DIRECTION.md §9
  are the builder's reading; edit them freely.
*/

export type WorkKind = 'tulisan' | 'buatan' | 'video'

export type Specimen = 'gemah' | 'naess' | 'hayy' | 'ai' | 'shorts' | 'kompasiana' | 'site'

export interface Work {
  /** Used for anchors: #karya-<id> */
  id: string
  kind: WorkKind
  label: Bi
  title: Bi
  fullTitle?: Bi
  /** Shown in the index's right column: a year, a status, or a context. */
  when: Bi
  context?: Bi
  what: Bi
  why?: Bi
  did: Bi
  /** "Temuan" (findings) or "Catatan" (notes). */
  extra?: { heading: Bi; items: Bi[] }
  tags?: string[]
  links?: { label: Bi; href: string }[]
  specimen: Specimen
}

export const kindLabel: Record<WorkKind | 'semua', Bi> = {
  semua: { id: 'Semua', en: 'All' },
  tulisan: { id: 'Tulisan', en: 'Writing' },
  buatan: { id: 'Buatan', en: 'Built' },
  video: { id: 'Video', en: 'Video' },
}

export const works: Work[] = [
  {
    id: 'gemah',
    kind: 'buatan',
    label: { id: 'Sistem web', en: 'Web system' },
    title: { id: 'GEMAH, bank sampah digital', en: 'GEMAH, a digital waste bank' },
    when: { id: 'KKN', en: 'Community service' },
    context: { id: 'Program KKN · Desa Jati Kulon, Kudus', en: 'KKN community programme · Jati Kulon village, Kudus' },
    what: {
      id: 'Sistem manajemen bank sampah digital untuk Desa Jati Kulon. Warga menabung sampah; GEMAH mencatat setorannya sebagai tabungan, per RW, dan membuka ringkasannya ke publik.',
      en: 'A digital waste-bank management system for Jati Kulon village. Residents deposit sorted rubbish as savings; GEMAH records each deposit per neighbourhood unit (RW) and publishes the totals.',
    },
    why: {
      id: 'Bank sampah hanya bisa dipercaya kalau catatannya bisa dilihat semua orang. Karena itu transparansi dibuat jadi halaman, bukan laporan yang disimpan pengurus.',
      en: "A waste bank is only as trustworthy as its records are visible. So transparency became a public page, not a report kept in someone's drawer.",
    },
    did: {
      id: 'Merancang dan membangunnya bersama alat AI: React di depan, Supabase di belakang, dirilis di Netlify. Hak akses per RW diatur langsung di database lewat row-level security, jadi pengurus satu RW hanya bisa melihat dan mengubah data RW-nya sendiri.',
      en: 'Designed and built it with AI tools: React on the front, Supabase behind, deployed on Netlify. Access per RW is enforced in the database itself with row-level security, so each RW administrator can only see and change their own data.',
    },
    extra: {
      heading: { id: 'Isinya', en: 'Inside' },
      items: [
        { id: 'Buku tabungan digital untuk setiap warga.', en: 'A digital savings book for every resident.' },
        { id: 'Akses berbasis peran per RW (RLS di database).', en: 'Role-based access per RW (RLS in the database).' },
        { id: 'Ekspor ke Excel untuk pengurus.', en: 'Excel export for administrators.' },
        { id: 'Halaman transparansi publik.', en: 'A public transparency page.' },
        { id: 'Mode gelap.', en: 'Dark mode.' },
        { id: 'Nama awalnya TANDUR. Sistemnya sama; namanya tumbuh.', en: 'It was first called TANDUR. Same system; the name grew.' },
      ],
    },
    tags: ['React', 'Supabase', 'Row-level security', 'Netlify'],
    links: [{ label: { id: 'Buka GEMAH', en: 'Open GEMAH' }, href: 'https://gemah.netlify.app/' }],
    specimen: 'gemah',
  },
  {
    id: 'hayy',
    kind: 'tulisan',
    label: { id: 'Artikel jurnal', en: 'Journal article' },
    title: { id: 'Hayy ibn Yaqzan dan katastrofe', en: 'Hayy ibn Yaqzan against catastrophe' },
    fullTitle: {
      id: 'Kritik Epistemologi atas Relasi Manusia dan Alam: Melawan Katastrofe melalui Karya Novel Hayy ibn Yaqzan',
      en: 'An Epistemological Critique of the Human–Nature Relation: Resisting Catastrophe through the Novel Hayy ibn Yaqzan (title translated)',
    },
    when: { id: 'Diajukan', en: 'Submitted' },
    context: {
      id: 'Bersama Moh. Muhtador · diajukan ke Kalimah: Jurnal Studi Agama dan Pemikiran Islam (SINTA 2)',
      en: 'With Moh. Muhtador · submitted to Kalimah: Jurnal Studi Agama dan Pemikiran Islam (SINTA 2)',
    },
    what: {
      id: 'Membaca novel filsafat Ibn Tufayl dari abad ke-12 sebagai kritik atas cara manusia modern mengetahui alam, dan karena itu cara memperlakukannya.',
      en: "Reads Ibn Tufayl's 12th-century philosophical novel as a critique of how modern people know nature, and therefore how they treat it.",
    },
    why: {
      id: 'Krisis ekologis biasanya dibahas sebagai soal kebijakan atau teknologi. Artikel ini mundur selangkah, ke soal yang lebih dulu: bagaimana kita mengetahui alam.',
      en: 'Ecological crisis is usually discussed as a problem of policy or technology. This article steps back to an earlier question: how we come to know nature at all.',
    },
    did: {
      id: 'Menulisnya bersama Moh. Muhtador, lalu mengajukannya ke Kalimah, jurnal terakreditasi SINTA 2. Hayy ibn Yaqzan adalah titik berangkat karya-karya utama saya.',
      en: 'Co-wrote it with Moh. Muhtador and submitted it to Kalimah, a SINTA 2 accredited journal. Hayy ibn Yaqzan is where my main work starts.',
    },
    extra: {
      heading: { id: 'Catatan', en: 'Notes' },
      items: [
        {
          id: 'Hayy tumbuh sendirian di sebuah pulau, diasuh seekor kijang, dan sampai pada pengetahuan hanya dengan mengamati, mencoba, dan berpikir.',
          en: 'Hayy grows up alone on an island, raised by a doe, and reaches knowledge only by watching, trying and thinking.',
        },
        {
          id: 'Terjemahan Latinnya (1671) berjudul Philosophus Autodidactus: filsuf yang belajar sendiri.',
          en: 'Its Latin translation (1671) was titled Philosophus Autodidactus: the self-taught philosopher.',
        },
      ],
    },
    specimen: 'hayy',
  },
  {
    id: 'pasir-laut',
    kind: 'tulisan',
    label: { id: 'Artikel ilmiah', en: 'Research article' },
    title: { id: 'Ekologi dangkal dalam kebijakan ekonomi biru', en: 'Shallow ecology in blue economy policy' },
    fullTitle: {
      id: 'Ekologi Dangkal dalam Kebijakan Ekonomi Biru: Telaah Deep Ecology Arne Naess atas Reduksi Nilai Intrinsik Laut dalam Kebijakan Ekspor Pasir Laut di Kepulauan Riau',
      en: "Shallow Ecology in Blue Economy Policy: An Arne Naess Deep Ecology Examination of the Reduction of the Sea's Intrinsic Value in Sea Sand Export Policy in the Riau Islands",
    },
    when: { id: '2026', en: '2026' },
    context: {
      id: 'Luaran individu PPL · Balai Litbang Agama Semarang · Juli 2026',
      en: 'Individual output of field practice (PPL) · Balai Litbang Agama Semarang · July 2026',
    },
    what: {
      id: 'Kajian filsafat atas PP No. 26 Tahun 2023, yang membuka kembali ekspor pasir laut dengan menyebut objeknya "hasil sedimentasi di laut".',
      en: 'A philosophical study of Government Regulation No. 26/2023, which reopened sea-sand exports by calling its object "the yield of marine sedimentation".',
    },
    why: {
      id: 'Kajian sebelumnya menilai kebijakan ini dari sisi hukum, tata kelola, keadilan biru, dan dampak ekologis. Lapis nilainya, yaitu bagaimana laut dinilai, belum banyak disentuh.',
      en: 'Earlier studies judged the policy through law, governance, blue justice and ecological impact. Its value layer, how the sea is valued in the first place, was left mostly untouched.',
    },
    did: {
      id: 'Membaca bahasa kebijakan dengan perangkat deep ecology Arne Naess: ekologi dangkal dan dalam, kritik antroposentrisme, nilai intrinsik, kesetaraan biosferis, dan kriteria kebutuhan vital. Studi kepustakaan, ditulis selama PPL di Balai Litbang Agama Semarang.',
      en: "Read the policy's language with Arne Naess's deep ecology: shallow versus deep ecology, the critique of anthropocentrism, intrinsic value, biospherical egalitarianism and the vital-needs criterion. Library research, written during field practice at Balai Litbang Agama Semarang.",
    },
    extra: {
      heading: { id: 'Temuan', en: 'Findings' },
      items: [
        {
          id: 'Menyebut material dasar laut sebagai "hasil" memindahkan laut dari kategori ekologis ke kategori komoditas.',
          en: 'Naming seabed material a "yield" transfers the sea from an ecological category into a commodity category.',
        },
        {
          id: 'Perangkat pengendaliannya mengatur laju dan lokasi pengambilan, tanpa pernah mempersoalkan boleh-tidaknya.',
          en: 'Its control instruments regulate the rate and location of extraction without ever questioning whether it is permissible.',
        },
        {
          id: 'Kerugian ekologis dan kerugian nelayan masuk sebagai eksternalitas yang bisa dikompensasi, bukan sebagai pelanggaran nilai.',
          en: "Ecological loss and fishers' loss enter the policy as externalities to be compensated, not as violations of value.",
        },
        {
          id: 'Diukur dengan kriteria kebutuhan vital Naess, pengerukan untuk reklamasi komersial gagal dibenarkan.',
          en: "Measured against Naess's vital-needs criterion, extraction for commercial reclamation cannot be justified.",
        },
      ],
    },
    tags: ['Deep ecology', 'Arne Naess', 'PP 26/2023', 'Kepulauan Riau'],
    specimen: 'naess',
  },
  {
    id: 'ciptaan',
    kind: 'tulisan',
    label: { id: 'Esai reflektif', en: 'Reflective essay' },
    title: { id: 'Ketika Ciptaan Menjadi Pencipta', en: 'When the Created Becomes the Creator' },
    when: { id: 'Esai', en: 'Essay' },
    what: {
      id: 'Refleksi filosofis tentang relasi Tuhan, manusia, dan AI.',
      en: 'A philosophical reflection on the relation between God, humans and AI.',
    },
    why: {
      id: 'Manusia adalah ciptaan yang mencipta. Ketika ciptaannya ikut "mencipta", pertanyaan lama tentang pencipta dan ciptaan tiba-tiba jadi pertanyaan sehari-hari.',
      en: 'Humans are created beings who create. When what they make starts "making" too, an old question about creator and creation becomes an everyday one.',
    },
    did: {
      id: 'Menulisnya sebagai mahasiswa filsafat Islam yang sehari-hari juga membangun sesuatu bersama mesin.',
      en: 'Wrote it as a student of Islamic philosophy who also builds things with a machine every day.',
    },
    extra: {
      heading: { id: 'Catatan', en: 'Note' },
      items: [
        {
          id: 'Situs ini dibangun dengan cara yang sedang dipertanyakan esai ini.',
          en: 'This website was built in exactly the way this essay questions.',
        },
      ],
    },
    specimen: 'ai',
  },
  {
    id: 'shorts',
    kind: 'video',
    label: { id: 'YouTube Shorts', en: 'YouTube Shorts' },
    title: { id: 'Aneh, tapi nyata: video 60 detik', en: 'Strange but true: 60-second videos' },
    when: { id: 'Berjalan', en: 'Ongoing' },
    what: {
      id: 'Kanal video pendek berbahasa Indonesia, 30 sampai 60 detik, tentang sejarah, misteri, dan kejadian aneh-tapi-nyata.',
      en: 'A channel of short videos in Indonesian, 30 to 60 seconds each, about history, mysteries and strange-but-true events.',
    },
    why: {
      id: 'Cerita aneh-tapi-nyata sebenarnya soal epistemologi yang menyamar: bagaimana kita tahu sesuatu benar-benar terjadi?',
      en: 'Strange-but-true stories are epistemology in disguise: how do we know something really happened?',
    },
    did: {
      id: 'Memilih cerita, memadatkannya jadi satu menit, dan membuat visualnya dengan Higgsfield.',
      en: 'Choosing the stories, compressing each into a minute, and making the visuals with Higgsfield.',
    },
    tags: ['Higgsfield', 'Bahasa Indonesia', '9:16'],
    specimen: 'shorts',
  },
  {
    id: 'kompasiana',
    kind: 'tulisan',
    label: { id: 'Tulisan populer', en: 'Public writing' },
    title: { id: 'Kolom di Kompasiana', en: 'A column on Kompasiana' },
    when: { id: 'Rutin', en: 'Regular' },
    what: {
      id: 'Tulisan populer yang terbit rutin di Kompasiana.',
      en: 'Popular writing, published regularly on Kompasiana, an Indonesian citizen-journalism platform.',
    },
    why: {
      id: 'Gagasan dari ruang kuliah perlu diuji di depan pembaca yang tidak wajib membacanya.',
      en: 'Ideas from the lecture hall need testing in front of readers who are not obliged to read them.',
    },
    did: {
      id: 'Menulis dan menerbitkan sendiri, dalam bahasa Indonesia, untuk pembaca umum.',
      en: 'Writing and publishing on my own, in Indonesian, for a general audience.',
    },
    links: [{ label: { id: 'Baca di Kompasiana', en: 'Read on Kompasiana' }, href: 'https://www.kompasiana.com/bonafahry9177' }],
    specimen: 'kompasiana',
  },
  {
    id: 'situs-ini',
    kind: 'buatan',
    label: { id: 'Situs web', en: 'Website' },
    title: { id: 'Situs ini', en: 'This website' },
    when: { id: '2026', en: '2026' },
    what: {
      id: 'Portofolio yang sedang Anda baca, dalam dua bahasa dan dua suasana cahaya.',
      en: 'The portfolio you are reading, in two languages and two kinds of light.',
    },
    why: {
      id: 'Daftar riwayat hidup menjelaskan apa yang sudah dilakukan seseorang. Saya ingin halaman yang juga memperlihatkan cara ia berpikir.',
      en: 'A CV lists what someone has done. I wanted a page that also shows how they think.',
    },
    did: {
      id: 'Menentukan arah, isi, dan setiap keputusan desainnya, lalu membangunnya lewat percakapan dengan asisten AI. React, Vite, tanpa pustaka animasi.',
      en: 'Set its direction, content and every design decision, then built it in conversation with AI coding assistants. React and Vite, no animation libraries.',
    },
    tags: ['React', 'Vite', 'TypeScript', 'AI-assisted'],
    specimen: 'site',
  },
]

export const otherTopics: Bi = {
  id: 'Juga pernah menulis tentang kritik etika Kant, hermeneutika, dan ruang publik digital.',
  en: 'I have also written on a critique of Kantian ethics, on hermeneutics, and on the digital public sphere.',
}
