import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit to 1MB to reduce noise
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunking strategy
        manualChunks: (id) => {
          // Vendor chunk for React and core libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            if (id.includes('styled-components')) {
              return 'vendor-styling';
            }
            // Other vendor libraries
            return 'vendor-other';
          }
          
          // Component-based chunking
          if (id.includes('src/components/Testimonials')) {
            return 'chunk-testimonials';
          }
          if (id.includes('src/components/LandingBanner')) {
            return 'chunk-landing';
          }
          if (id.includes('src/components/CombinedWellnessSection')) {
            return 'chunk-wellness';
          }
          if (id.includes('src/components/OurImpact')) {
            return 'chunk-impact';
          }
          if (id.includes('src/components/Clientele')) {
            return 'chunk-clientele';
          }
          if (id.includes('src/components/ContactUs')) {
            return 'chunk-contact';
          }
          
          // Assets chunking
          if (id.includes('src/assets/images')) {
            return 'chunk-images';
          }
        },
        // Optimize chunk naming for caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Enable minification optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console logs in production
        drop_console: true,
        drop_debugger: true,
        // Remove unused code
        dead_code: true,
      },
    },
    // Enable source maps for debugging (can be disabled for smaller builds)
    sourcemap: false,
    // Reduce CSS bundle size
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'styled-components'],
  },
  // Asset optimization
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
})
