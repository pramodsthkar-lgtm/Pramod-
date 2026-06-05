import React from 'react';
import { ShoppingBag, TrendingUp, DollarSign, Star, CheckCircle, XCircle } from 'lucide-react';

export default function OwnerDashboard() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Restaurant Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Spicy Symphony • Open until 11:00 PM</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center px-3 py-1.5 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-sm font-bold border border-green-200 dark:border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Taking Orders
          </div>
        </div>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-gray-200 dark:border-zinc-800">
          <div className="text-gray-500 dark:text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">Today's Sales</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">₹14,250</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-gray-200 dark:border-zinc-800">
          <div className="text-gray-500 dark:text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">Active Orders</div>
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">12</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-gray-200 dark:border-zinc-800">
          <div className="text-gray-500 dark:text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">Rating</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            4.5 <Star size={20} className="ml-1 text-yellow-500 fill-current" />
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-gray-200 dark:border-zinc-800">
          <div className="text-gray-500 dark:text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">Menu Items</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">64</div>
        </div>
      </div>

      {/* Active Kitchen Orders */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-zinc-800 flex justify-between items-center">
          <h2 className="text-lg font-bold">Kitchen Queue</h2>
          <button className="text-sm font-bold text-orange-600 dark:text-orange-500 hover:underline">View All Orders</button>
        </div>
        
        <div className="divide-y divide-gray-100 dark:divide-zinc-800">
          {/* Order Item */}
          <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-orange-50/50 dark:bg-orange-500/5">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-mono font-bold text-gray-900 dark:text-white">#ORD-4092</span>
                <span className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-300 px-2 py-0.5 rounded font-bold">New</span>
                <span className="text-xs text-gray-500">2 mins ago</span>
              </div>
              <p className="font-medium text-sm text-gray-800 dark:text-gray-200">
                1x Butter Chicken Masala, 2x Garlic Naan, 1x Paneer Tikka
              </p>
              <p className="text-xs text-gray-500 mt-1">Preparation time target: 15 mins</p>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 md:flex-none px-4 py-2 border border-red-200 text-red-600 dark:border-red-900 dark:text-red-400 rounded-lg text-sm font-bold flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20">
                <XCircle size={16} className="mr-1" /> Reject
              </button>
              <button className="flex-1 md:flex-none px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-bold flex items-center justify-center hover:bg-orange-700 shadow-sm">
                <CheckCircle size={16} className="mr-1" /> Accept & Print
              </button>
            </div>
          </div>

          {/* Order Item */}
          <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-mono font-bold text-gray-900 dark:text-white">#ORD-4091</span>
                <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300 px-2 py-0.5 rounded font-bold">Preparing</span>
                <span className="text-xs text-red-500 font-bold">12 mins elapsed</span>
              </div>
              <p className="font-medium text-sm text-gray-800 dark:text-gray-200">
                2x Special Thali, 1x Sweet Lassi
              </p>
              <p className="text-xs text-gray-500 mt-1">Delivery Partner: Waiting at counter</p>
            </div>
            <div className="flex space-x-2">
              <button className="w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-bold flex items-center justify-center hover:bg-green-700 shadow-sm">
                Mark Ready for Pickup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
