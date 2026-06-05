import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Hotel } from '../../types';

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm dark:shadow-none dark:border dark:border-zinc-800 transition-transform active:scale-[0.98]">
      <div className="relative h-56 w-full">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-2 py-1 rounded shadow-sm text-xs font-bold text-gray-900 dark:text-white">
          Sponsored
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg leading-tight mb-1">{hotel.name}</h3>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs font-medium">
              <MapPin size={12} className="mr-0.5" />
              {hotel.location}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center space-x-1 bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs font-bold mb-1">
              <span>{hotel.rating}</span>
            </div>
            <span className="text-[10px] text-gray-500">{hotel.reviewsCount} reviews</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {hotel.amenities.map(amenity => (
            <span key={amenity} className="text-[10px] bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
        </div>
        
        <div className="flex items-end justify-between border-t border-gray-100 dark:border-zinc-800 pt-3">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Starting from</p>
            <div className="font-bold text-lg">₹{hotel.pricePerNight} <span className="font-normal text-xs text-gray-500">/night</span></div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
