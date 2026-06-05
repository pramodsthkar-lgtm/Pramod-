import React, { useState } from 'react';
import { mockRestaurants, mockHotels } from '../../data';
import { RestaurantCard } from '../../components/RestaurantCard';
import { MapPin, Search as SearchIcon, Filter, Bell } from 'lucide-react';
import { cn } from '../../lib/utils';
import { HotelCard } from '../../components/HotelCard';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'delivery' | 'dining' | 'hotels'>('delivery');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-zinc-950">
      {/* Sticky Header */}
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-4 pt-4 pb-2">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-orange-600 dark:text-orange-500">
            <MapPin size={24} className="mr-1" strokeWidth={2.5} />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center">
                Deliver to <span className="ml-1 flex -mt-0.5"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
              </div>
              <div className="font-bold text-gray-900 dark:text-white text-sm line-clamp-1">123 Flavor Street, Foodville</div>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-900 flex items-center justify-center text-gray-900 dark:text-white">
            <Bell size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <SearchIcon className="text-orange-500" size={20} />
          </div>
          <input 
            type="text" 
            placeholder={`Search for ${activeTab === 'hotels' ? 'hotels' : 'restaurant or dish'}...`}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            <div className="w-px h-5 bg-gray-300 dark:bg-zinc-700 mx-2"></div>
            <Filter className="text-orange-500" size={18} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2">
          {['Delivery', 'Dining', 'Hotels'].map((tab) => {
            const id = tab.toLowerCase() as any;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                  activeTab === id 
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 dark:bg-zinc-900 dark:border-zinc-800 dark:text-gray-400"
                )}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </header>

      {/* Content Feed */}
      <main className="px-4 py-4 space-y-4">
        {activeTab === 'delivery' || activeTab === 'dining' ? (
          <>
            <div className="flex items-center justify-between mt-2 mb-4">
              <h2 className="text-lg font-bold tracking-tight">Recommended for you</h2>
            </div>
            {mockRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mt-2 mb-4">
              <h2 className="text-lg font-bold tracking-tight">Top Rated Hotels</h2>
            </div>
            {mockHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </>
        )}
      </main>
    </div>
  );
}
