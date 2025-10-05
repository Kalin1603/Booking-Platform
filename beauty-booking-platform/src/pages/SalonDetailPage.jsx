import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSalonById, fetchServicesBySalonId } from '../features/salons/salonsSlice';
import { MapPin, Star, Clock, DollarSign, Book } from 'lucide-react';

const SalonDetailPage = () => {
  const dispatch = useDispatch();
  // useParams() is a hook from React Router that gives us the URL parameters.
  // In our case, it will be an object like { salonId: '1' }
  const { salonId } = useParams();

  // Read the specific data for the selected salon from the Redux store
  const {
    selectedSalon: salon,
    selectedSalonStatus: status,
    selectedSalonServices: services,
    selectedSalonServicesStatus: servicesStatus,  
    error
  } = useSelector((state) => state.salons);

  useEffect(() => {
    // We fetch the data when the component loads, or if the salonId changes.
    // We also check to avoid re-fetching if the correct salon is already loaded.
    if (!salon || salon.id !== parseInt(salonId)) {
      // Dispatch action to fetch salon details
      dispatch(fetchSalonById(salonId));

      // Dispatch action to fetch services for this salon
      dispatch(fetchServicesBySalonId(salonId));
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
      
      {/* Services, Calendar, and Reviews Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Main column for Services */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Services</h2>
          
          {servicesStatus === 'loading' && <p>Loading services...</p>}
          
          {servicesStatus === 'succeeded' && (
            <div className="space-y-4">
              {services.map(service => (
                <div key={service.id} className="flex justify-between items-center border-b border-divider pb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className="text-secondary-text text-sm mt-1">{service.description}</p>
                    <div className="flex items-center gap-4 text-sm mt-2 text-gray-600">
                      <span className="flex items-center"><Clock size={14} className="mr-1" /> {service.duration} min</span>
                      <span className="flex items-center"><DollarSign size={14} className="mr-1" /> {service.price.toFixed(2)} BGN</span>
                    </div>
                  </div>
                  <button className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-hover flex items-center gap-2 whitespace-nowrap">
                    <Book size={16} />
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar for Calendar & Reviews */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
            <p className="text-secondary-text">A visual calendar component will be displayed here.</p>
            {/* Placeholder for a calendar */}
            <div className="mt-4 h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">Calendar Mock</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <p className="text-secondary-text">A list of user reviews will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonDetailPage;