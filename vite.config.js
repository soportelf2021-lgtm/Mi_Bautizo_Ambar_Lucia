import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 👇 Necesario para GitHub Pages
  base: '/Mi_Bautizo_Ambar_Lucia/',

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
