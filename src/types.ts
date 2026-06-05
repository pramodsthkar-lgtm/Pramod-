export type Role = 'CUSTOMER' | 'RESTAURANT_OWNER' | 'DELIVERY_PARTNER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: Role;
  avatar?: string;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviewsCount: number;
  deliveryTime: string;
  minOrder: number;
  image: string;
  address: string;
  categories: string[];
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  image: string;
  amenities: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}
