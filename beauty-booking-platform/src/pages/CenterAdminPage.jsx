import React from 'react';
import { useSelector } from 'react-redux';
import { salons, bookings as mockBookings } from '../api/mockData';
import { Calendar, User, Info, DollarSign } from 'lucide-react';

// Helper to format the date
const formatDate = (isoString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(isoString).toLocaleDateString('en-US', options);
};

const CenterAdminPage = () => {
  const { user } = useSelector((state) => state.auth);

  // In a real app, this data would be fetched. Here, we find it in our mock files.
  const mySalon = salons.find(s => s.id === user.salonId);
  const myBookings = mockBookings.filter(b => b.salon.id === user.salonId);

  if (!mySalon) {
    return <p>Loading salon data...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">My Center Dashboard</h1>
      <p className="text-secondary-text mb-8">Welcome back, {user.name}!</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Salon Info & Services */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center"><Info size={20} className="mr-2" />Salon Profile</h2>
            <div className="mt-4 space-y-2">
              <p><strong>Name:</strong> {mySalon.name}</p>
              <p><strong>Location:</strong> {mySalon.city}, {mySalon.address}</p>
              <p><strong>Rating:</strong> {mySalon.rating} ★</p>
            </div>
            <button className="mt-4 px-4 py-2 text-sm text-white bg-secondary rounded-md hover:opacity-90">
              Edit Profile
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center"><DollarSign size={20} className="mr-2" />My Services</h2>
            <p className="text-secondary-text mt-4">Service management UI will go here.</p>
             <button className="mt-4 px-4 py-2 text-sm text-white bg-success rounded-md hover:opacity-90">
              Add New Service
            </button>
          </div>
        </div>

        {/* Right Column: Bookings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Calendar size={20} className="mr-2" />Upcoming Bookings</h2>
          <div className="space-y-4">
            {myBookings.map(booking => (
              <div key={booking.id} className="border-b pb-2">
                <p className="font-semibold">{booking.service}</p>
                <p className="text-sm text-secondary-text flex items-center"><User size={14} className="mr-1" /> Booked by User ID: {booking.userId}</p>
                <p className="text-sm text-secondary-text">{formatDate(booking.date)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterAdminPage;