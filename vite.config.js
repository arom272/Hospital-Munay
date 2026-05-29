import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['icons/*.png', 'icons/*.svg', 'icons/*.ico'],
      manifest: {
        name: 'Munay - Gestión Quirúrgica',
        short_name: 'Munay',
        description: 'Centro Médico Quirúrgico Munay — Sistema de gestión quirúrgica y terapéutica',
        theme_color: '#1A365D',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        lang: 'es',
        icons: [
          { src: 'icons/favicon-96x96.png', sizes: '96x96',   type: 'image/png' },
          { src: 'icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
          { src: 'icons/icon-192.png',  sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png',  sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-192.png',  sizes: '192x192', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,jpg}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/firestore\.googleapis\.com/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'firebase-firestore-cache',
              networkTimeoutSeconds: 10,
              expiration: { maxEntries: 200, maxAgeSeconds: 86400 }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 31536000 }
            }
          }
        ]
      },
      devOptions: {
        enabled: false
      }
    })
  ],
  resolve: {
    alias: { '@': '/src' }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':    ['react', 'react-dom', 'react-router-dom'],
          'firebase-vendor': ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
          'calendar-vendor': ['@fullcalendar/react', '@fullcalendar/daygrid', '@fullcalendar/timegrid', '@fullcalendar/interaction', '@fullcalendar/list'],
          'pdf-vendor':      ['jspdf', 'jspdf-autotable'],
          'ui-vendor':       ['lucide-react', 'react-hot-toast', 'zustand'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  }
});
