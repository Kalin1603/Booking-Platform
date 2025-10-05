import React from 'react';
import SearchBar from '../components/common/SearchBar';
import PopularSalons from '../features/salons/PopularSalons';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-text mb-4">
            Find and Book Your Next Beauty Appointment
          </h1>
          <p className="text-lg text-secondary-text mb-8 max-w-3xl mx-auto">
            Discover the best salons and specialists in your city. Read reviews, browse services, and book your appointment online in just a few clicks.
          </p>
          <SearchBar />
        </div>
      </div>

      {/* Popular Salons Section */}
      <div className="container mx-auto px-4">
        <PopularSalons />
      </div>
    </div>
  );
};

export default HomePage;