import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/newsreader/opsz.css'
import '@fontsource-variable/newsreader/opsz-italic.css'
import '@fontsource-variable/archivo/wdth.css'
import './styles/tokens.css'
import './styles/base.css'
import { CvPage } from './cv/CvPage'
import { LangProvider } from './i18n/lang'

// The CV is always printed on paper, so it always uses the day palette.
document.documentElement.dataset.theme = 'light'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <CvPage />
    </LangProvider>
  </StrictMode>,
)
