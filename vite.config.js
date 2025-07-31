import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/queensoft_coding/',  // 👈 REQUIRED for GitHub Pages
  plugins: [react()],
})
