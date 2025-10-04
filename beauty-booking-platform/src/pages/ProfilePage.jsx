// src/pages/ProfilePage.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { bookings as mockBookings } from '../api/mockData'; // Import mock bookings
import { Calendar, Clock, CheckCircle, Tag, MapPin } from 'lucide-react';

// Helper to format the date nicely
const formatDate = (isoString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(isoString).toLocaleDateString('en-US', options);
};

const ProfilePage = () => {
  // Get the current user from the Redux store
  const { user } = useSelector((state) => state.auth);

  // In a real app, you would fetch this from an API. For now, we filter the mock data.
  const userBookings = mockBookings.filter(b => b.userId === 1); 

  // This is a safeguard in case the user somehow gets here without being logged in.
  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      {/* User Details Card */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <div className="mt-4 space-y-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> <span className="capitalize bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">{user.role}</span></p>
        </div>
        <button className="mt-4 px-4 py-2 text-sm text-white bg-secondary rounded-md hover:opacity-90">
          Edit Profile
        </button>
      </div>

      {/* Bookings Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
        <div className="space-y-4">
          {userBookings.length > 0 ? (
            userBookings.map(booking => (
              <div key={booking.id} className="border border-divider rounded-lg p-4 flex flex-col sm:flex-row justify-between">
                <div>
                  <p className="font-bold text-lg">{booking.service}</p>
                  <p className="flex items-center text-secondary-text text-sm mt-1">
                    <MapPin size={14} className="mr-1" /> {booking.salon.name}, {booking.salon.city}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:text-right">
                  <p className="flex items-center sm:justify-end">
                    <Calendar size={14} className="mr-1" /> {formatDate(booking.date)}
                  </p>
                   <p className={`flex items-center sm:justify-end font-semibold mt-1 ${booking.status === 'Confirmed' ? 'text-success' : 'text-gray-500'}`}>
                    <CheckCircle size={14} className="mr-1" /> {booking.status}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>You have no bookings.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;