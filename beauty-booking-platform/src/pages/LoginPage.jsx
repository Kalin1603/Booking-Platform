import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginSuccess } from '../features/auth/authSlice';

const LoginPage = () => {
  const [role, setRole] = useState('client');
  const [email, setEmail] = useState('kalin@example.com');
  const [password, setPassword] = useState('password');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
  if (role === 'client') {
    setEmail('kalin@example.com');
  } else {
    setEmail('admin@elegance.com');
  }
}, [role]);

  // Handle login for client and center
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (role === 'client') {
      const mockClientData = {
        user: { id: 1, name: 'Kalin', email: 'kalin@example.com', role: 'client' },
        token: 'mock-jwt-token-client-12345',
      };
      dispatch(loginSuccess(mockClientData));
      navigate('/profile');
    } else {
      const mockCenterData = {
        user: { id: 10, name: 'Elegance Studio Admin', email: 'admin@elegance.com', role: 'center', salonId: 1 },
        token: 'mock-jwt-token-center-67890',
      };
      dispatch(loginSuccess(mockCenterData));
      navigate('/center-admin');
    }
  };

  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Welcome Back!</h1>
        
        {/* --- Tabbed Interface --- */}
        <div className="flex border-b">
          <button
            onClick={() => setRole('client')}
            className={`flex-1 py-2 font-semibold text-center ${role === 'client' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
          >
            I'm a Client
          </button>
          <button
            onClick={() => setRole('center')}
            className={`flex-1 py-2 font-semibold text-center ${role === 'center' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
          >
            I'm a Business
          </button>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input id="email" name="email" type="email" required 
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <button type="submit" className="w-full py-2 text-white bg-primary rounded-md hover:bg-primary-hover">
            Log In
          </button>
          <p className="text-sm text-center">
            Don't have an account? <Link to="/register" className="text-primary hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;