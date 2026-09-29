import { sections } from '../content/site'
import { useInView } from '../hooks/useInView'
import { useLang } from '../i18n/lang'
import { Mark, Note, SectionHead } from './primitives'
import './About.css'

const PLACEHOLDER =
  'data:image/webp;base64,UklGRhYBAABXRUJQVlA4IAoBAAAQBgCdASoYACAAPu1qrFCppaQiqAqpMB2JQBf95YMQG0kR1rMtVHrEbINb2LqQxPnWMY60tmuc42AAzjohM6u80xN+o70YWWdRAFLN99VXb2DpGXDk+s4mr4l6DNK7ySMOJ2IMzknXTyFq2TBOEf0thSaerG6KduGqVOZfwd0UAXZD/Mmmo8/FBCm+yQIfaVf6k/q1Rf+2GRDTEgmf8U3oPSTIlTVefTrYBeFkFGA+91AaMOsdHMUM5PvT1Idhs+N6Ntds9HwNNjqXzq94cL3Wtbyvyve4QHYDZcbTZccqtHAyluwbhhQY0wJH003x9QT1Gmp/JbgkU0MXmQ98/CYnaVJJEnHyCBAAAA=='

const srcset = (ext: string) => [480, 800, 960].map((w) => `/images/fahry-window-${w}.${ext} ${w}w`).join(', ')

function Figure() {
  const { t } = useLang()
  const [ref, lit] = useInView<HTMLDivElement>({ rootMargin: '0px 0px -25% 0px' })
  return (
    <figure className="about__fig">
      <div ref={ref} className={lit ? 'about__photo is-lit' : 'about__photo'} style={{ backgroundImage: `url(${PLACEHOLDER})` }}>
        <picture>
          <source type="image/avif" srcSet={srcset('avif')} sizes="(min-width: 1100px) 28vw, (min-width: 700px) 38vw, 80vw" />
          <source type="image/webp" srcSet={srcset('webp')} sizes="(min-width: 1100px) 28vw, (min-width: 700px) 38vw, 80vw" />
          <img
            src="/images/fahry-window-800.jpg"
            width={960}
            height={1280}
            loading="lazy"
            decoding="async"
            alt={t({
              id: 'Bona Fachry Adam duduk santai di kursi kuliah dekat jendela kelas. Di luar jendela tampak langit berawan dan gedung perpustakaan.',
              en: 'Bona Fachry Adam sitting back in a lecture chair by a classroom window. Outside: a cloudy sky and the library building.',
            })}
          />
        </picture>
      </div>
      <figcaption className="about__caption">
        <span className="about__fignum">{t({ id: 'Gbr. 1', en: 'Fig. 1' })}</span>
        {t({ id: 'Di kelas, dekat jendela. Warna dinding di belakang jadi satu-satunya warna aksen situs ini.', en: 'In class, by the window. The wall behind became the only accent colour on this site.' })}
      </figcaption>
    </figure>
  )
}

export function About() {
  const { t } = useLang()
  const sec = sections[1]

  return (
    <section id={sec.id} className="about" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHead
          n={sec.n}
          id="about-title"
          title={t(sec.title)}
          aside={t({ id: 'Tentang saya, tanpa nada daftar riwayat hidup.', en: 'About me, minus the résumé voice.' })}
        />

        <div className="about__grid">
          <Figure />

          <div className="about__prose prose prose--notes">
            <p className="about__first">
              {t({
                id: (
                  <>
                    Saya kuliah di Aqidah dan Filsafat Islam, UIN Sunan Kudus, dan sekarang sedang menulis skripsi di
                    semester akhir. Dua pertanyaan yang paling sering saya bawa pulang dari kelas:{' '}
                    <Mark>bagaimana manusia tahu sesuatu</Mark>, dan <Mark delay={500}>bagaimana manusia seharusnya hidup bersama alam</Mark>.
                    Yang pertama namanya epistemologi, yang kedua ekologi. Buat saya keduanya jarang bisa dipisah.
                    <Note n={1}>
                      Bacaan yang paling sering saya pakai untuk keduanya: filsafat iluminasi Suhrawardi dan Mulla Sadra, dan
                      <em> deep ecology</em> Arne Naess.
                    </Note>
                  </>
                ),
                en: (
                  <>
                    I study Islamic Theology and Philosophy at UIN Sunan Kudus and am in my final semester, writing my thesis.
                    Two questions follow me home from class more than any others: <Mark>how people come to know anything</Mark>,
                    and <Mark delay={500}>how people ought to live with nature</Mark>. The first is epistemology, the second
                    ecology. To me they rarely come apart.
                    <Note n={1}>
                      The thinkers I lean on most for both: the illuminationist philosophy of Suhrawardi and Mulla Sadra, and
                      Arne Naess's <em>deep ecology</em>.
                    </Note>
                  </>
                ),
              })}
            </p>

            <p>
              {t({
                id: (
                  <>
                    Titik berangkat saya adalah <em>Hayy ibn Yaqzan</em>, novel filsafat Ibn Tufayl dari abad ke-12 tentang
                    seorang anak yang tumbuh sendirian di sebuah pulau dan sampai pada pengetahuan hanya dengan mengamati, mencoba,
                    dan berpikir.
                    <Note n={2}>
                      Terjemahan Latinnya (1671) berjudul <em>Philosophus Autodidactus</em>: filsuf yang belajar sendiri.
                    </Note>{' '}
                    Saya tidak tumbuh di pulau. Tapi cara belajar itu, mengamati dulu lalu mencoba, juga cara saya mempelajari
                    hal-hal yang tidak diajarkan di kelas.
                  </>
                ),
                en: (
                  <>
                    My starting point is <em>Hayy ibn Yaqzan</em>, Ibn Tufayl's 12th-century philosophical novel about a child
                    who grows up alone on an island and reaches knowledge only by watching, trying and thinking.
                    <Note n={2}>
                      Its Latin translation (1671) was titled <em>Philosophus Autodidactus</em>: the self-taught philosopher.
                    </Note>{' '}
                    I did not grow up on an island. But that way of learning, watching first and then trying, is also how I
                    learn what isn't taught in class.
                  </>
                ),
              })}
            </p>

            <p className="about__pull">
              <Mark>
                {t({
                  id: 'Siapa yang memutuskan sesuatu itu bernilai, dan lewat kata apa?',
                  en: 'Who decides that something is worth anything, and with which words?',
                })}
              </Mark>
            </p>

            <p>
              {t({
                id: (
                  <>
                    Kalau ditarik garisnya, banyak yang saya kerjakan berputar di pertanyaan itu. Di artikel pasir laut, saya
                    membaca bagaimana sebuah peraturan cukup menyebut dasar laut sebagai “hasil” untuk mengubahnya jadi komoditas.
                    Di GEMAH, arahnya terbalik: sampah yang sudah dibuang dicatat lagi sebagai tabungan.
                  </>
                ),
                en: (
                  <>
                    Draw a line through my work and a lot of it circles that question. In the sea-sand article I read how a
                    regulation only had to call the seabed a “yield” to turn it into a commodity. GEMAH runs the other way: rubbish
                    that has already been thrown away gets recorded again, as savings.
                  </>
                ),
              })}
            </p>

            <p>
              {t({
                id: (
                  <>
                    Jalan ke sini tidak lurus. Sebelum filsafat, saya sekolah di SMK jurusan Bisnis Daring dan Pemasaran, dan
                    sempat PKL sebagai staf penjualan di Ramayana Kebayoran Lama.
                    <Note n={3}>
                      SMK Al-Hikmah, Jakarta Selatan, 2020–2023. Saya berasal dari Tangerang; sekarang tinggal di Kudus.
                    </Note>{' '}
                    Dari lantai toko ke fakultas Ushuluddin memang belokan yang tajam.
                  </>
                ),
                en: (
                  <>
                    The road here wasn't straight. Before philosophy I went to a vocational high school, majoring in online
                    business and marketing, and did my placement as a sales assistant at a Ramayana department store in Kebayoran
                    Lama.
                    <Note n={3}>
                      SMK Al-Hikmah, South Jakarta, 2020–2023. I'm from Tangerang and now live in Kudus.
                    </Note>{' '}
                    From a shop floor to a faculty of theology is a sharp turn, admittedly.
                  </>
                ),
              })}
            </p>

            <p>
              {t({
                id: (
                  <>
                    Saya tidak menulis kode secara manual. GEMAH dan situs ini dibangun lewat percakapan dengan asisten AI: saya menjelaskan apa yang dibutuhkan, membaca hasilnya, menolak yang salah, lalu
                    memutuskan. <Mark>Mesinnya yang mengetik; keputusan dan kesalahannya tetap milik saya.</Mark>
                    <Note n={4}>
                      Relasi antara pencipta, ciptaan, dan mesin saya tulis dalam esai “Ketika Ciptaan Menjadi Pencipta”.
                    </Note>
                  </>
                ),
                en: (
                  <>
                    I don't write code by hand. GEMAH and this site were built in conversation with AI coding assistants: I explain what is needed, read what comes back, reject what's wrong, and decide.{' '}
                    <Mark>The machine types; the decisions and the mistakes stay mine.</Mark>
                    <Note n={4}>
                      I wrote about creator, creation and machine in the essay “When the Created Becomes the Creator”.
                    </Note>
                  </>
                ),
              })}
            </p>

            <p>
              {t({
                id: (
                  <>
                    Di kampus, saya di divisi kaderisasi HMPS AFI, bagian yang mengurus bagaimana anggota baru tumbuh jadi
                    pengurus.
                    <Note n={5}>Himpunan Mahasiswa Program Studi Aqidah dan Filsafat Islam, UIN Sunan Kudus.</Note> Di luar kampus,
                    saya menulis di Kompasiana dan membuat video satu menit tentang hal-hal aneh yang ternyata benar.
                  </>
                ),
                en: (
                  <>
                    On campus I'm in the member-development (kaderisasi) division of HMPS AFI, the part that looks after how new
                    members grow into organisers.
                    <Note n={5}>The student association of the Islamic Theology and Philosophy programme, UIN Sunan Kudus.</Note>{' '}
                    Off campus I write on Kompasiana and make one-minute videos about strange things that turn out to be true.
                  </>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
