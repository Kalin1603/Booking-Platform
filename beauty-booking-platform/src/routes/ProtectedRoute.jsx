import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

// The 'children' prop will be the component we want to protect (e.g., <ProfilePage />)
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect them to the /login page.
    // Also passing the original location they tried to visit.
    // This allows the login page to redirect them back after a successful login.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If the user is authenticated, render the children component.
  return children;
};

export default ProtectedRoute;