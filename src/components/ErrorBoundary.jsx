import { Component } from 'react';

/**
 * Captura errores de render en el árbol de componentes para evitar
 * la "pantalla blanca" completa. Muestra una pantalla de recuperación
 * y permite recargar la app.
 */
export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Punto de enganche para un servicio de logging (Sentry, etc.)
    console.error('[ErrorBoundary]', error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 max-w-md w-full p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <h1 className="text-lg font-bold text-gray-800 mb-1">Algo salió mal</h1>
          <p className="text-sm text-gray-500 mb-5">
            Ocurrió un error inesperado. Puedes recargar la aplicación para continuar.
          </p>
          {import.meta.env.DEV && this.state.error && (
            <pre className="text-left text-[11px] text-red-500 bg-red-50 rounded-lg p-3 mb-5 overflow-auto max-h-40">
              {String(this.state.error?.stack || this.state.error)}
            </pre>
          )}
          <button
            onClick={this.handleReload}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: '#1A365D' }}
          >
            Recargar aplicación
          </button>
        </div>
      </div>
    );
  }
}
