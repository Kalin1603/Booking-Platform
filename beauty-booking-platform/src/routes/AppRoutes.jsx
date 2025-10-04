import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import HomePage from '../pages/HomePage';
import SalonsPage from '../pages/SalonsPage';
import SalonDetailPage from '../pages/SalonDetailPage';
import LoginPage from '../pages/LoginPage'; 
import RegisterPage from '../pages/RegisterPage'; 
import ProfilePage from '../pages/ProfilePage';


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/salons" element={<SalonsPage />} />
        <Route path="/salons/:salonId" element={<SalonDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute> 
          }
        />
      </Routes>
  );
};

export default AppRoutes;