import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const { login }         = useAuth();
  const navigate          = useNavigate();
  const [email, setEmail] = useState('');
  const [pass,  setPass]  = useState('');
  const [show,  setShow]  = useState(false);
  const [busy,  setBusy]  = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !pass) { setError('Completa todos los campos.'); return; }
    setBusy(true);
    setError('');
    try {
      await login(email.trim(), pass);
      toast.success('Bienvenido a Munay');
      navigate('/dashboard', { replace: true });
    } catch (err) {
      const msgs = {
        'auth/invalid-credential':  'Correo o contraseña incorrectos.',
        'auth/user-not-found':      'Usuario no encontrado.',
        'auth/wrong-password':      'Contraseña incorrecta.',
        'auth/too-many-requests':   'Demasiados intentos. Intenta más tarde.',
      };
      setError(msgs[err.code] ?? 'Error al iniciar sesión. Intenta de nuevo.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #1A365D 0%, #0d2040 100%)' }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8 text-white">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(9,214,212,0.2)', border: '1px solid rgba(9,214,212,0.4)' }}>
            <Stethoscope className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Munay</h1>
          <p className="text-sm mt-1" style={{ color: '#72A0C1' }}>Gestión Quirúrgica Hospitalaria</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Iniciar sesión</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="label">Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="usuario@hospital.com"
                className="input"
                autoComplete="username"
                disabled={busy}
              />
            </div>

            <div>
              <label className="label">Contraseña</label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="••••••••"
                  className="input pr-10"
                  autoComplete="current-password"
                  disabled={busy}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={busy}
              className="btn-primary btn w-full justify-center py-2.5 mt-2"
            >
              {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Ingresar'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: '#72A0C1' }}>
          Munay © {new Date().getFullYear()} — Sistema Hospitalario
        </p>
      </div>
    </div>
  );
}
