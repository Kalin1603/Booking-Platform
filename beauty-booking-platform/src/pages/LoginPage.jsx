import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../features/auth/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    
    // Mock Login Logic 
    // In a real app, you would send credentials to an API.
    const mockUserData = {
      user: { name: 'Kalin', email: 'kalin@example.com', role: 'client' },
      token: 'mock-jwt-token-12345',
    };
    
    // Dispatch the success action with mock data.
    dispatch(loginSuccess(mockUserData));

    // Redirect user to the homepage after login
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Log In</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input id="email" name="email" type="email" required defaultValue="kalin@example.com" className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" required defaultValue="password" className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <button type="submit" className="w-full py-2 text-white bg-primary rounded-md hover:bg-primary-hover">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;