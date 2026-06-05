import React from 'react';
import { MapPin, Navigation, Bike, TrendingUp, IndianRupee, Clock, CheckCircle2 } from 'lucide-react';

export default function DeliveryDashboard() {
  return (
    <div className="space-y-6 max-w-lg mx-auto md:max-w-4xl">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 pb-4">
        <div>
           <h1 className="text-2xl font-bold tracking-tight">Delivery Hub</h1>
           <p className="text-sm text-gray-500 mt-1">Online & searching for orders...</p>
        </div>
        
        {/* Toggle Duty */}
        <div className="flex items-center space-x-3">
          <span className="text-sm font-bold text-green-600 dark:text-green-500">ON DUTY</span>
          <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer shadow-inner">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-gray-200 dark:border-zinc-800 text-center">
           <div className="w-10 h-10 mx-auto bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mb-2">
             <IndianRupee size={20} />
           </div>
           <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Today's Earnings</p>
           <h3 className="text-xl font-bold">₹850</h3>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-gray-200 dark:border-zinc-800 text-center">
           <div className="w-10 h-10 mx-auto bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-500 rounded-full flex items-center justify-center mb-2">
             <CheckCircle2 size={20} />
           </div>
           <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Deliveries</p>
           <h3 className="text-xl font-bold">12</h3>
        </div>
        <div className="col-span-2 bg-zinc-900 dark:bg-zinc-800 p-4 rounded-2xl text-white flex items-center justify-between">
           <div>
             <p className="text-sm text-zinc-400 mb-1">Next Payout</p>
             <h3 className="text-2xl font-bold">₹4,250</h3>
             <p className="text-xs text-zinc-500 mt-1">Processing on Monday</p>
           </div>
           <button className="bg-white text-zinc-900 px-4 py-2 rounded-xl text-sm font-bold shadow">
             View Wallet
           </button>
        </div>
      </div>

      {/* Incoming Order Alert UI */}
      <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl animate-bounce-slight border-2 border-orange-500">
        {/* Map Placeholder */}
        <div className="h-40 bg-zinc-800 relative w-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 grayscale" alt="Map" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <div className="animate-pulse bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center blur-sm absolute"></div>
             <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                <Bike size={24} />
             </div>
          </div>
        </div>
        
        <div className="p-5 text-white">
          <h2 className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-1 drop-shadow-md">New Order Alert!</h2>
          <div className="flex justify-between items-start mb-4">
             <h3 className="text-2xl font-bold">Spicy Symphony</h3>
             <div className="bg-green-500 text-black px-2 py-1 rounded text-sm font-bold">
               Est. ₹65
             </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start">
               <MapPin size={18} className="text-gray-400 mr-2 mt-0.5" />
               <div>
                  <p className="text-sm font-medium">Pickup</p>
                  <p className="text-xs text-gray-400">123 Flavor Street (2.5 km away)</p>
               </div>
            </div>
            <div className="flex items-start">
               <Navigation size={18} className="text-gray-400 mr-2 mt-0.5" />
               <div>
                  <p className="text-sm font-medium">Dropoff</p>
                  <p className="text-xs text-gray-400">Apartment 4B, Foodville Heights</p>
               </div>
            </div>
          </div>

          <div className="flex gap-3">
             <button className="flex-1 bg-zinc-800 text-white font-bold py-3 rounded-xl transition-colors hover:bg-zinc-700">Reject</button>
             <button className="flex-[2] bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors hover:bg-orange-500 shadow-lg shadow-orange-500/20">Accept Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
