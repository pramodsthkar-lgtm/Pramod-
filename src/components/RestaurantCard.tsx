import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Restaurant } from '../../types';
import { Link } from 'react-router-dom';

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm dark:shadow-none dark:border dark:border-zinc-800 transition-transform active:scale-[0.98]">
        <div className="relative h-48 w-full">
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1 shadow-sm">
            <span className="text-xs font-bold">{restaurant.deliveryTime}</span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-lg leading-tight line-clamp-1">{restaurant.name}</h3>
            <div className="flex items-center space-x-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">
              <span>{restaurant.rating}</span>
              <Star size={10} fill="currentColor" />
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-1 mb-3">{restaurant.categories.join(', ')}</p>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-4">
            <span className="flex items-center"><Clock size={14} className="mr-1" /> {restaurant.deliveryTime}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>₹{restaurant.minOrder} for one</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
