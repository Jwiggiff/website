import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteYaml()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'resume.html'),
      }
    }
  }
})
