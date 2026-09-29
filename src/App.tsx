import { useState } from 'react'
import { About } from './components/About'
import { Archive } from './components/Archive'
import { Colophon } from './components/Colophon'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Lab } from './components/Lab'
import { LampGlow } from './components/LampGlow'
import { Letter } from './components/Letter'
import { Now } from './components/Now'
import { sections } from './content/site'
import { useActiveSection } from './hooks/useActiveSection'
import { useLang } from './i18n/lang'

const SECTION_IDS = sections.map((s) => s.id)

export function App() {
  const { t } = useLang()
  const active = useActiveSection(SECTION_IDS)
  // Which archive entry is open. Shared so the hero's questions can open one.
  const [openWork, setOpenWork] = useState<string | null>(null)

  return (
    <>
      <a className="skip-link" href="#isi">
        {t({ id: 'Langsung ke isi', en: 'Skip to content' })}
      </a>
      <LampGlow />
      <Header active={active} />
      <main id="isi" tabIndex={-1}>
        <Hero onPick={setOpenWork} />
        <About />
        <Archive openId={openWork} setOpenId={setOpenWork} />
        <Lab />
        <Now />
        <Letter />
      </main>
      <Colophon />
    </>
  )
}
