import React from 'react';
import { salons as allSalons } from '../../api/mockData';
import SalonCard from './SalonCard';

const PopularSalons = () => {
  // In a real app, the API would return a specific list of "popular" or "featured" salons.
  // Here, we just take the first 3 as an example.
  const popularSalons = allSalons.slice(0, 3);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Centers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularSalons.map(salon => (
          <SalonCard key={salon.id} salon={salon} />
        ))}
      </div>
    </div>
  );
};

export default PopularSalons;