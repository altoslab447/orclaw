import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main:     path.resolve(__dirname, 'index.html'),
        landing:  path.resolve(__dirname, 'landing.html'),
        guide:    path.resolve(__dirname, 'guide.html'),
        install:  path.resolve(__dirname, 'install.html'),
        advanced: path.resolve(__dirname, 'advanced.html'),
        faq:      path.resolve(__dirname, 'faq.html'),
      },
    },
  },
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
