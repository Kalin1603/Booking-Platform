import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const SalonsPage = React.lazy(() => import('../pages/SalonsPage'));
const SalonDetailPage = React.lazy(() => import('../pages/SalonDetailPage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'));
const ProfilePage = React.lazy(() => import('../pages/ProfilePage'));
const CenterAdminPage = React.lazy(() => import('../pages/CenterAdminPage'));
const PlaceholderPage = React.lazy(() => import('../pages/PlaceholderPage')); 
const AboutPage = React.lazy(() => import('../pages/AboutPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));
const PrivacyPolicyPage = React.lazy(() => import('../pages/PrivacyPolicyPage'));

// A simple loading component to show while the page code is being downloaded
const PageLoader = () => <div className="flex justify-center items-center h-screen"><p>Loading...</p></div>;

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/salons" element={<SalonsPage />} />
        <Route path="/salons/:salonId" element={<SalonDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProtectedRoute allowedRoles={['client']}> <ProfilePage /> </ProtectedRoute>} />
        <Route path="/center-admin" element={<ProtectedRoute allowedRoles={['center']}> <CenterAdminPage /> </ProtectedRoute>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;