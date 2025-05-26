import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    host: true
  },
  // Explicitly set the entry point to index.jsx
  optimizeDeps: {
    entries: ['./src/index.jsx']
  }
})
