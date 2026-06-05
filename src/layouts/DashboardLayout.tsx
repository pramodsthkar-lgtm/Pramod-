import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Users, Settings, LogOut, Store, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';

export default function DashboardLayout() {
  const { role, setRole } = useAppContext();
  
  const getNavItems = () => {
    switch(role) {
      case 'ADMIN':
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
          { name: 'Restaurants', icon: Store, path: '/admin/restaurants' },
          { name: 'Users', icon: Users, path: '/admin/users' },
          { name: 'Settings', icon: Settings, path: '/admin/settings' },
        ];
      case 'RESTAURANT_OWNER':
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/owner' },
          { name: 'Orders', icon: ShoppingBag, path: '/owner/orders' },
          { name: 'Menu', icon: Store, path: '/owner/menu' },
          { name: 'Settings', icon: Settings, path: '/owner/settings' },
        ];
      case 'DELIVERY_PARTNER':
      default:
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/delivery' },
          { name: 'Map', icon: MapPin, path: '/delivery/map' },
          { name: 'Earnings', icon: ShoppingBag, path: '/delivery/earnings' },
        ];
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-gray-50">
      {/* Sidebar sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-zinc-800">
          <h1 className="text-xl font-bold font-sans tracking-tight text-orange-600 dark:text-orange-500">
            Omni<span className="text-gray-900 dark:text-white">Serve</span>
          </h1>
          <span className="ml-2 text-xs bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-gray-500 font-medium uppercase">{role.replace('_', ' ')}</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 space-y-1 px-3">
          {getNavItems().map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({isActive}) => cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer",
                isActive 
                  ? "bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-500" 
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-gray-200"
              )}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
          <button 
            onClick={() => { setRole('CUSTOMER'); window.location.href = '/profile'; }} 
            className="flex items-center space-x-3 px-3 py-2 w-full text-left rounded-lg font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
          >
            <LogOut size={20} />
            <span>Switch to App</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header (fallback) */}
        <div className="md:hidden flex items-center justify-between h-16 px-4 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-10">
           <h1 className="text-lg font-bold">OmniServe <span className="text-sm font-normal text-gray-500">{role}</span></h1>
           <button onClick={() => { setRole('CUSTOMER'); window.location.href = '/profile'; }} className="p-2">
             <LogOut size={20} />
           </button>
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
