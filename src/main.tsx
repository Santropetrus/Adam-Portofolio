import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/newsreader/opsz.css'
import '@fontsource-variable/newsreader/opsz-italic.css'
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/amiri/arabic-400.css'
import './styles/tokens.css'
import './styles/base.css'
import { App } from './App'
import { LangProvider } from './i18n/lang'
import { ThemeProvider } from './theme/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LangProvider>
  </StrictMode>,
)
