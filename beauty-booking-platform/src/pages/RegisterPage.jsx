import React from 'react';
import { Link } from 'react-router-dom';

// For now, this is just a visual component. No logic is needed.
const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Create an Account</h1>
        {/* We will add TABS here for Client/Center registration later */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" required className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" required className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" required className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <button type="submit" className="w-full py-2 text-white bg-primary rounded-md hover:bg-primary-hover">
            Register
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