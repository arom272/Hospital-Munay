import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header  from './Header';
import useStore from '../store/useStore';

export default function Layout() {
  const { sidebarOpen, closeSidebar } = useStore();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
