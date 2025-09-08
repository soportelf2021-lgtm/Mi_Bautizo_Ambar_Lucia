import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // 👈 usar ruta relativa para GitHub Pages
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'pdfjs-dist/build/pdf.worker.entry'
    ],
  },
})
