import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, Search, ShoppingBag, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';

export default function MobileLayout() {
  const { cart } = useAppContext();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-50">
      <main className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </main>
      
      <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-16">
          <NavLink to="/" className={({isActive}) => cn("flex flex-col items-center p-2 text-xs font-medium space-y-1 transition-colors", isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300")}>
            <Home size={22} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/search" className={({isActive}) => cn("flex flex-col items-center p-2 text-xs font-medium space-y-1 transition-colors", isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300")}>
            <Search size={22} />
            <span>Search</span>
          </NavLink>
          <NavLink to="/cart" className={({isActive}) => cn("relative flex flex-col items-center p-2 text-xs font-medium space-y-1 transition-colors", isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300")}>
            <div className="relative">
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </div>
            <span>Cart</span>
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => cn("flex flex-col items-center p-2 text-xs font-medium space-y-1 transition-colors", isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300")}>
            <User size={22} />
            <span>Profile</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
