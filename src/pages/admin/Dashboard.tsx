import React from 'react';
import { ArrowUpRight, TrendingUp, Users, ShoppingBag, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '₹4,52,000', change: '+12.5%', isUp: true },
    { label: 'Active Restaurants', value: '1,245', change: '+3.2%', isUp: true },
    { label: 'Active Hotels', value: '342', change: '+1.5%', isUp: true },
    { label: 'Platform Users', value: '88,230', change: '+18.2%', isUp: true },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Admin Overview</h1>
          <p className="text-gray-500 text-sm mt-1">Monitor platform performance and metrics.</p>
        </div>
        <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg text-sm font-bold flex items-center shadow-sm">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-200 dark:border-zinc-800">
            <p className="text-sm font-medium text-gray-500 mb-2">{stat.label}</p>
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
            </div>
            <div className={`text-xs font-bold flex items-center ${stat.isUp ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp size={12} className="mr-1" />
              {stat.change} vs last month
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800">
          <h2 className="text-lg font-bold mb-4">Live Platform Activity</h2>
          <div className="space-y-4">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-zinc-800 last:border-0 last:pb-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-500 flex items-center justify-center">
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">New Order #4092</p>
                    <p className="text-xs text-gray-500">Spicy Symphony • ₹850</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500 flex items-center">
                  <Clock size={12} className="mr-1" /> 2 mins ago
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800">
          <h2 className="text-lg font-bold mb-4">Pending Approvals</h2>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-orange-100 dark:border-orange-500/20">
              <h3 className="text-orange-800 dark:text-orange-400 font-bold text-sm">Hotel Grand Residency</h3>
              <p className="text-xs text-orange-600 dark:text-orange-500/80 mt-1 mb-3">Registration & Document Verification</p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white text-xs font-bold py-1.5 rounded shadow-sm">View Docs</button>
                <button className="flex-1 bg-orange-600 text-white text-xs font-bold py-1.5 rounded shadow-sm">Approve</button>
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-orange-100 dark:border-orange-500/20">
              <h3 className="text-orange-800 dark:text-orange-400 font-bold text-sm">Delivery Partner: Rahul</h3>
              <p className="text-xs text-orange-600 dark:text-orange-500/80 mt-1 mb-3">KYC Update Pending</p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white text-xs font-bold py-1.5 rounded shadow-sm">Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
