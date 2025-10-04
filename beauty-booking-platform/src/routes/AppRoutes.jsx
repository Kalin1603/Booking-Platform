import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SalonsPage from '../pages/SalonsPage';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/salons" element={<SalonsPage />} />
      </Routes>
  );
};

export default AppRoutes;