import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  const [role, setRole] = useState('client'); 

  const handleRegister = (e) => {
    e.preventDefault();

    alert(`Registration submitted for role: ${role}. (Frontend-only demo)`);
  };
  
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Create Your Account</h1>
        
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
        
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Conditional Fields Based on Role */}
          {role === 'client' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" required placeholder="John Doe" className="w-full px-3 py-2 mt-1 border rounded-md" />
              </div>
            </>
          )}

          {role === 'center' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Center Name</label>
                <input type="text" required placeholder="Elegance Studio" className="w-full px-3 py-2 mt-1 border rounded-md" />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" required placeholder="088 812 3456" className="w-full px-3 py-2 mt-1 border rounded-md" />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" required placeholder="123 Vitosha Blvd, Sofia" className="w-full px-3 py-2 mt-1 border rounded-md" />
              </div>
            </>
          )}

          {/* Common Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" required placeholder="you@example.com" className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" required className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>

          <button type="submit" className="w-full py-2 text-white bg-primary rounded-md hover:bg-primary-hover">
            Create Account
          </button>
          <p className="text-sm text-center">
            Already have an account? <Link to="/login" className="text-primary hover:underline">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;