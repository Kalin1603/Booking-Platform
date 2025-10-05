import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../features/auth/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle login for client
  const handleLoginAsClient  = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    
    // Mock Login Logic 
    const mockClientData = {
      user: { id: 1, name: 'Kalin', email: 'kalin@example.com', role: 'client' },
      token: 'mock-jwt-token-client-12345',
    };
    
    // Dispatch the success action with mock data.
    dispatch(loginSuccess(mockClientData));

    // Redirect user to the homepage after login
    navigate('/profile');
  };

  // Handle login for center owner
  const handleLoginAsCenter = (e) => {
    e.preventDefault();
    const mockCenterData = {
      user: { id: 10, name: 'Elegance Studio Admin', email: 'admin@elegance.com', role: 'center', salonId: 1 },
      token: 'mock-jwt-token-center-67890',
    };
    dispatch(loginSuccess(mockCenterData));
    navigate('/center-admin'); // Redirect center owner to their dashboard
  };

  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Log In</h1>
        <form onSubmit={handleLoginAsClient} className="space-y-6 border-b pb-6 mb-6 border-divider">
          <h2 className="text-lg font-semibold text-center text-secondary-text">For Clients</h2>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input id="email" name="email" type="email" required defaultValue="kalin@example.com" className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" required defaultValue="password" className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <button type="submit" className="w-full py-2 text-white bg-primary rounded-md hover:bg-primary-hover">
            Log In as Client
          </button>
        </form>

        <form onSubmit={handleLoginAsCenter} className="space-y-4">
          <h2 className="text-lg font-semibold text-center text-secondary-text">For Business Owners</h2>
          <button type="submit" className="w-full py-2 text-white bg-secondary rounded-md hover:opacity-90">
            Log In as "Elegance Studio"
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;