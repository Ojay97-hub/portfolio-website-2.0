import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true
    })
  ],
  base: '/portfolio-website-2.0/',
  build: {
    // Optimize bundle splitting
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        journey: resolve(__dirname, 'journey.html')
      },
      output: {
        // Better chunk splitting strategy
        manualChunks: (id) => {
          // Split vendor chunks by package
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('framer-motion')) {
              return 'motion'
            }
            if (id.includes('lucide-react')) {
              return 'icons'
            }
            if (id.includes('@emailjs')) {
              return 'emailjs'
            }
            // Other vendor modules
            return 'vendor'
          }
        },
        // Optimize chunk names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Enable minification with better settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 2
      },
      format: {
        comments: false,
      },
      mangle: {
        safari10: true
      }
    },
    // Better tree shaking
    treeshake: {
      preset: 'recommended',
      moduleSideEffects: false
    },
    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: true,
    // Report compressed size
    reportCompressedSize: false,
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 500,
    // Disable source maps for better performance
    sourcemap: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['@emailjs/browser']
  },
  // Optimize dev server
  server: {
    compress: true,
    hmr: {
      overlay: false
    }
  }
})
