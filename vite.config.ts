import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  // base: '/QRcode2025/', // For GitHub
  base: './', // For REG.RU
  plugins: [
    tailwindcss(),
    react()
  ],
})
