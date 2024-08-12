import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      resolveId(id) {
        if (id === '@jest/globals') {
          return id
        }
      },
      enforce: 'pre'
    }
  ],
  resolve: {
    alias: {
      // src: "/src",
      assets: '/src/assets',
      layouts: '/src/layouts',
      components: '/src/components',
      providers: '/src/providers',
      hooks: '/src/hooks',
      middlewares: '/src/middlewares',
      utils: '/src/utils'
    }
  },
  // `@jest/globals` must be kept-as-is
  // https://github.com/facebook/jest/blob/3093c18c428d962eb959437b322c6a5b0ae0e7a2/packages/jest-runtime/src/index.ts#L544-L554
  optimizeDeps: {
    exclude: ['@jest/globals']
  }
})
