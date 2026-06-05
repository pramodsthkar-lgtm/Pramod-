import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Layouts
import MobileLayout from './layouts/MobileLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import Home from './pages/customer/Home';
import Profile from './pages/customer/Profile';
import AdminDashboard from './pages/admin/Dashboard';
import OwnerDashboard from './pages/owner/Dashboard';
import DeliveryDashboard from './pages/delivery/Dashboard';

// Mock Pages (We will build these next)
const WelcomePlaceholder = ({ title }: { title: string }) => (
  <div className="p-4 flex h-full items-center justify-center">
    <h1 className="text-2xl font-bold">{title} View Generating...</h1>
  </div>
);

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Customer Application - Mobile First Interface */}
          <Route element={<MobileLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<WelcomePlaceholder title="Search" />} />
            <Route path="/cart" element={<WelcomePlaceholder title="Cart" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/restaurant/:id" element={<WelcomePlaceholder title="Restaurant Menu" />} />
            <Route path="/hotel/:id" element={<WelcomePlaceholder title="Hotel Booking" />} />
          </Route>

          {/* Restaurant Owner Panel */}
          <Route path="/owner" element={<DashboardLayout />}>
            <Route index element={<OwnerDashboard />} />
            <Route path="*" element={<Navigate to="/owner" replace />} />
          </Route>

          {/* Admin Panel */}
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Route>

          {/* Delivery Partner Panel */}
          <Route path="/delivery" element={<DashboardLayout />}>
            <Route index element={<DeliveryDashboard />} />
            <Route path="*" element={<Navigate to="/delivery" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
