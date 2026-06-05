import { Restaurant, Hotel, MenuItem } from './types';

export const mockRestaurants: Restaurant[] = [
  {
    id: 'r1',
    name: 'Spicy Symphony',
    description: 'Authentic Indian Curry & Tandoor',
    rating: 4.5,
    reviewsCount: 1240,
    deliveryTime: '30-40 min',
    minOrder: 150,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    address: '123 Flavor Street, Foodville',
    categories: ['North Indian', 'Biryani', 'Desserts']
  },
  {
    id: 'r2',
    name: 'Burger & Brew',
    description: 'Craving fulfilling American classic burgers',
    rating: 4.2,
    reviewsCount: 856,
    deliveryTime: '20-30 min',
    minOrder: 200,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    address: '45 Urban Avenue, Foodville',
    categories: ['American', 'Fast Food', 'Beverages']
  },
  {
    id: 'r3',
    name: 'Sushi Zen',
    description: 'Premium Japanese Dining',
    rating: 4.8,
    reviewsCount: 2300,
    deliveryTime: '40-50 min',
    minOrder: 500,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',
    address: '77 Sakura Lane, Foodville',
    categories: ['Japanese', 'Sushi', 'Asian']
  }
];

export const mockMenu: MenuItem[] = [
  {
    id: 'm1',
    restaurantId: 'r1',
    name: 'Butter Chicken Masala',
    description: 'Rich tomato gravy with tender chicken tikka',
    price: 320,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    category: 'Main Course'
  },
  {
    id: 'm2',
    restaurantId: 'r1',
    name: 'Paneer Tikka Biryani',
    description: 'Fragrant basmati cooked with spiced cottage cheese',
    price: 250,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    category: 'Rice & Biryani'
  },
  {
    id: 'm3',
    restaurantId: 'r2',
    name: 'Double Smash Cheeseburger',
    description: 'Two smashed patties, double cheese, secret sauce',
    price: 280,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    category: 'Burgers'
  }
];

export const mockHotels: Hotel[] = [
  {
    id: 'h1',
    name: 'Crown Plaza Resort',
    location: 'Marine Drive, Sea View',
    rating: 4.7,
    reviewsCount: 3100,
    pricePerNight: 4500,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    amenities: ['Pool', 'Spa', 'Free WiFi', 'Breakfast']
  },
  {
    id: 'h2',
    name: 'Urban Backpackers Hostel',
    location: 'City Center',
    rating: 4.3,
    reviewsCount: 890,
    pricePerNight: 800,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    amenities: ['Free WiFi', 'Lounge', 'AC Rooms']
  }
];
