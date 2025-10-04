import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SalonCard = ({ salon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      <Link to={`/salons/${salon.id}`}>
        <img src={salon.imageUrl} alt={salon.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-base-text truncate">{salon.name}</h3>
          <div className="flex items-center text-secondary-text text-sm mt-1">
            <MapPin size={16} className="mr-1" />
            <span>{salon.city}, {salon.address}</span>
          </div>
          <div className="flex items-center mt-3">
            <Star size={18} className="text-yellow-400 fill-yellow-400" />
            <span className="ml-2 font-bold text-gray-700">{salon.rating}</span>
            <span className="ml-2 text-sm text-gray-500">({salon.categories.join(', ')})</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SalonCard;