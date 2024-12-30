import { defineConfig } from 'vite'
import reactSWC from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  define: {
    // Workaround for jszmq -> assert -> util
    'process.env': {},
  },
  plugins: [
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx}"',
      },
    }),
    reactSWC({
      plugins: [['@swc/plugin-emotion', {}]]
    }),
  ],
  server: {
    open: true,
  }
})
