import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js', 
  },
  server: {
    allowedHosts: ['localhost', 'app', 'todo-frontend-dev', 'todo-frontend-prod']
  }
})
