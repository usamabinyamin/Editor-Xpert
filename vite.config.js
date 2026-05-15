import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  // GitHub Pages: set BASE_PATH=/repo-name/ when building (see .github/workflows/deploy.yml)
  base: process.env.BASE_PATH || '/',
})
