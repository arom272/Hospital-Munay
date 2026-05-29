import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth }    from './contexts/AuthContext';
import Layout         from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute     from './components/AdminRoute';

/* ── Páginas cargadas bajo demanda (code-splitting por ruta) ──
   Cada página y sus dependencias pesadas (PDF, calendario, etc.)
   se descargan solo cuando el usuario entra a esa sección. */
const LoginPage     = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const PatientsPage  = lazy(() => import('./pages/PatientsPage'));
const CalendarPage  = lazy(() => import('./pages/CalendarPage'));
const TherapiesPage = lazy(() => import('./pages/TherapiesPage'));
const FinancesPage  = lazy(() => import('./pages/FinancesPage'));

/* Pantalla de carga reutilizable (estado inicial y fallback de Suspense) */
function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
             style={{ borderColor: '#1A365D', borderTopColor: 'transparent' }} />
        <p className="font-semibold" style={{ color: '#1A365D' }}>Hospital Munay</p>
      </div>
    </div>
  );
}

export default function App() {
  const { loading } = useAuth();

  if (loading) return <LoadingScreen />;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route index              element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard"  element={<DashboardPage />} />
            <Route path="/pacientes"  element={<PatientsPage />} />
            <Route path="/cirugias"   element={<CalendarPage />} />
            <Route path="/terapias"   element={<TherapiesPage />} />

            <Route element={<AdminRoute />}>
              <Route path="/finanzas" element={<FinancesPage />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
}
