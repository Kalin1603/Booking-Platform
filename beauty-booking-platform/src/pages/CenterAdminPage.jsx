import React from 'react';
import { useSelector } from 'react-redux';
import { salons, bookings as mockBookings, services as mockServices } from '../api/mockData';
import { Calendar, User, Info, DollarSign, Edit, Trash2 } from 'lucide-react';

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
  const myServices = mockServices.filter(s => s.salonId === user.salonId);

  // Group bookings by date for calendar display
  const bookingsByDate = myBookings.reduce((acc, booking) => {
    const date = new Date(booking.date).getDate(); 
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(booking);
    return acc;
  }, {});

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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center"><DollarSign size={20} className="mr-2" />My Services</h2>
              <button className="px-4 py-2 text-sm text-white bg-success rounded-md hover:opacity-90">
                Add New Service
              </button>
            </div>
            
            <div className="space-y-4">
              {myServices.length > 0 ? (
                myServices.map(service => (
                  <div key={service.id} className="border-t pt-4 flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{service.name}</p>
                      <p className="text-sm text-secondary-text">{service.duration} min • {service.price.toFixed(2)} BGN</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-full"><Edit size={16} /></button>
                      <button className="p-2 text-error hover:bg-red-100 rounded-full"><Trash2 size={16} /></button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-secondary-text mt-4">You have not added any services yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Bookings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Calendar size={20} className="mr-2" />Bookings Calendar</h2>
          
          {/* Month Header */}
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">November 2025</span>
          </div>
          
          {/* Days Grid */}
          <div className="grid grid-cols-7 text-center text-sm gap-1">
            <div className="font-semibold text-gray-400">Mo</div>
            <div className="font-semibold text-gray-400">Tu</div>
            <div className="font-semibold text-gray-400">We</div>
            <div className="font-semibold text-gray-400">Th</div>
            <div className="font-semibold text-gray-400">Fr</div>
            <div className="font-semibold text-gray-400">Sa</div>
            <div className="font-semibold text-gray-400">Su</div>
            
            {/* Mock Calendar Days for November 2025 (starts on a Saturday) */}
            {/* Empty days for placeholder */}
            {Array.from({ length: 5 }).map((_, i) => <div key={`empty-${i}`}></div>)}

            {Array.from({ length: 30 }, (_, i) => i + 1).map(day => {
              const dayBookings = bookingsByDate[day] || [];
              return (
                <div key={day} className={`p-1 border rounded ${dayBookings.length > 0 ? 'bg-blue-50 border-blue-200' : 'border-transparent'}`}>
                  <span className={`font-semibold ${dayBookings.length > 0 ? 'text-blue-600' : ''}`}>{day}</span>
                  {/* Display a dot for each booking */}
                  <div className="flex justify-center mt-1 space-x-1">
                    {dayBookings.map(b => <div key={b.id} className="w-1.5 h-1.5 bg-success rounded-full" title={b.service}></div>)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterAdminPage;