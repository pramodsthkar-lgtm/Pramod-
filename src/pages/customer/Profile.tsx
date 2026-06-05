import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Role } from '../../types';
import { User, LogOut, Settings, CreditCard, Heart, MapPin, ChevronRight, Shield, Bike } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, role, setRole } = useAppContext();
  const navigate = useNavigate();

  const handleRoleSwitch = (newRole: Role) => {
    setRole(newRole);
    if (newRole === 'CUSTOMER') navigate('/profile');
    else if (newRole === 'ADMIN') navigate('/admin');
    else if (newRole === 'DELIVERY_PARTNER') navigate('/delivery');
    else if (newRole === 'RESTAURANT_OWNER') navigate('/owner');
  };

  const actionItems = [
    { icon: Heart, label: 'Favorites' },
    { icon: CreditCard, label: 'Payments & Refunds' },
    { icon: MapPin, label: 'Manage Addresses' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="bg-gray-50 dark:bg-zinc-950 min-h-screen">
      {/* Header Profile Info */}
      <div className="bg-white dark:bg-zinc-900 pt-10 pb-6 px-6 shadow-sm border-b border-gray-200 dark:border-zinc-800">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-20 w-20 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-500 rounded-full flex items-center justify-center text-2xl font-bold border border-orange-200 dark:border-orange-500/30">
            {user?.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{user?.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{user?.email}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{user?.phone}</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Customer Actions */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800 overflow-hidden">
          {actionItems.map((item, index) => (
            <button key={item.label} className={`w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 transition-colors hover:bg-gray-50 dark:hover:bg-zinc-800 ${index !== actionItems.length - 1 ? 'border-b border-gray-100 dark:border-zinc-800' : ''}`}>
               <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-200">
                 <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
                   <item.icon size={16} />
                 </div>
                 <span className="font-medium text-sm">{item.label}</span>
               </div>
               <ChevronRight size={16} className="text-gray-400" />
            </button>
          ))}
        </div>

        {/* Demo Switcher Panel */}
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">App Showcase Roles (Demo)</h2>
          <div className="grid gap-3">
            <button 
              onClick={() => handleRoleSwitch('RESTAURANT_OWNER')}
              className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-orange-200 dark:border-orange-500/30 rounded-2xl cursor-pointer hover:border-orange-500 transition-colors shadow-sm"
            >
              <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-500">
                   <User size={20} />
                 </div>
                 <div className="text-left">
                   <div className="font-bold text-sm text-gray-900 dark:text-white">Restaurant/Hotel Owner Panel</div>
                   <div className="text-xs text-gray-500 mt-0.5">Manage menus, rooms, orders</div>
                 </div>
              </div>
              <ChevronRight size={18} className="text-orange-500" />
            </button>
            <button 
              onClick={() => handleRoleSwitch('DELIVERY_PARTNER')}
              className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-blue-200 dark:border-blue-500/30 rounded-2xl cursor-pointer hover:border-blue-500 transition-colors shadow-sm"
            >
              <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-500">
                   <Bike size={20} />
                 </div>
                 <div className="text-left">
                   <div className="font-bold text-sm text-gray-900 dark:text-white">Delivery Partner App</div>
                   <div className="text-xs text-gray-500 mt-0.5">Live tracking, earning dashboard</div>
                 </div>
              </div>
              <ChevronRight size={18} className="text-blue-500" />
            </button>
            <button 
              onClick={() => handleRoleSwitch('ADMIN')}
              className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-purple-200 dark:border-purple-500/30 rounded-2xl cursor-pointer hover:border-purple-500 transition-colors shadow-sm"
            >
              <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-500">
                   <Shield size={20} />
                 </div>
                 <div className="text-left">
                   <div className="font-bold text-sm text-gray-900 dark:text-white">Admin Dashboard</div>
                   <div className="text-xs text-gray-500 mt-0.5">Platform overview, commissions</div>
                 </div>
              </div>
              <ChevronRight size={18} className="text-purple-500" />
            </button>
          </div>
        </div>

        <button className="w-full flex items-center justify-center space-x-2 py-4 text-red-600 font-bold bg-white dark:bg-zinc-900 rounded-2xl border border-red-100 dark:border-red-900/30">
          <LogOut size={18} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
