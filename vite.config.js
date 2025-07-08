import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: ['cinenova-y0ou.onrender.com'],
  },
})
