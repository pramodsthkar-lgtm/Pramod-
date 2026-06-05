import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Role, CartItem } from './types';

interface AppContextType {
  user: User | null;
  role: Role;
  setRole: (role: Role) => void;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  cartTotal: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { readonly children: ReactNode }) {
  const [role, setRole] = useState<Role>('CUSTOMER');
  const [cart, setCart] = useState<CartItem[]>([]);

  // Mock user
  const user: User = {
    id: 'u1',
    name: 'Pramod',
    email: 'pramodsthkar@gmail.com',
    phone: '+91 9876543210',
    role,
  };

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i));
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <AppContext.Provider value={{ user, role, setRole, cart, addToCart, removeFromCart, cartTotal }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
