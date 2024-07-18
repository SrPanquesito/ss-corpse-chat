import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // src: "/src",
      assets: '/src/assets',
      layouts: '/src/layouts',
      components: '/src/components',
      providers: '/src/providers',
      hooks: '/src/hooks'
    }
  }
})
