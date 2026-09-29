import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Two pages: the portfolio (index.html) and the printable CV (cv.html).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        cv: resolve(import.meta.dirname, 'cv.html'),
      },
    },
  },
})
