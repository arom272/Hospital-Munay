import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'icons/*.svg'],
      manifest: {
        name: 'Munay - Gestión Quirúrgica',
        short_name: 'Munay',
        description: 'Sistema de gestión quirúrgica y terapéutica hospitalaria',
        theme_color: '#0f766e',
        background_color: '#f0fdf4',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/firestore\.googleapis\.com/,
            handler: 'NetworkFirst',
            options: { cacheName: 'firebase-cache' }
          }
        ]
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
          'react-vendor':      ['react', 'react-dom', 'react-router-dom'],
          'firebase-vendor':   ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'calendar-vendor':   ['@fullcalendar/react', '@fullcalendar/daygrid', '@fullcalendar/timegrid', '@fullcalendar/interaction', '@fullcalendar/list'],
          'pdf-vendor':        ['jspdf', 'jspdf-autotable'],
          'ui-vendor':         ['lucide-react', 'react-hot-toast', 'zustand'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  }
});
