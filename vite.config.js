import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      'stats.js': path.resolve(__dirname, 'node_modules/stats.js/src/Stats.js')
    }
  },
  optimizeDeps: {
    exclude: ['@react-three/drei'],
    include: ['prop-types']
  }
})
