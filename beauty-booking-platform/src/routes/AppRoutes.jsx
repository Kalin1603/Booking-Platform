import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SalonsPage from '../pages/SalonsPage';
import SalonDetailPage from '../pages/SalonDetailPage';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/salons" element={<SalonsPage />} />
        <Route path="/salons/:salonId" element={<SalonDetailPage />} />
      </Routes>
  );
};

export default AppRoutes;