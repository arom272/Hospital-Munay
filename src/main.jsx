import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { registerSW } from 'virtual:pwa-register';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

registerSW({
  onNeedRefresh() {
    toast('Nueva versión disponible. Recarga para actualizar.', {
      duration: 8000,
      icon: '🔄',
    });
  },
  onOfflineReady() {
    toast.success('App lista para usar sin conexión.');
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { fontFamily: 'Inter, sans-serif', fontSize: '14px' },
            success: { iconTheme: { primary: '#0f766e', secondary: '#fff' } },
          }}
        />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
