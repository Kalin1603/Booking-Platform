import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSalonById } from '../features/salons/salonsSlice';
import { MapPin, Star } from 'lucide-react';

const SalonDetailPage = () => {
  const dispatch = useDispatch();
  // useParams() is a hook from React Router that gives us the URL parameters.
  // In our case, it will be an object like { salonId: '1' }
  const { salonId } = useParams();

  // Read the specific data for the selected salon from the Redux store
  const {
    selectedSalon: salon,
    selectedSalonStatus: status,
    error
  } = useSelector((state) => state.salons);

  useEffect(() => {
    // We fetch the data when the component loads, or if the salonId changes.
    // We also check to avoid re-fetching if the correct salon is already loaded.
    if (!salon || salon.id !== parseInt(salonId)) {
      dispatch(fetchSalonById(salonId));
    }
  }, [salonId, salon, dispatch]);

  if (status === 'loading' || status === 'idle') {
    return <p className="text-center mt-10">Loading salon details...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center mt-10 text-error">Error: {error}</p>;
  }
  
  if (!salon) {
    return <p className="text-center mt-10">Salon not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
        <img src={salon.imageUrl} alt={salon.name} className="w-full h-full object-cover" />
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-base-text">{salon.name}</h1>
          <div className="flex items-center text-secondary-text text-lg mt-2">
            <MapPin size={20} className="mr-2" />
            <span>{salon.city}, {salon.address}</span>
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-0 bg-gray-100 p-4 rounded-lg">
          <Star size={24} className="text-yellow-400 fill-yellow-400" />
          <span className="ml-2 text-2xl font-bold text-gray-700">{salon.rating}</span>
          <span className="ml-2 text-gray-500">({salon.categories.join(', ')})</span>
        </div>
      </div>
      
      {/* Placeholder for Services/Booking section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <p className="text-secondary-text">Service list and booking calendar will be displayed here.</p>
      </div>
    </div>
  );
};

export default SalonDetailPage;