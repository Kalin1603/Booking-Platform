import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSalons } from '../features/salons/salonsSlice';
import SalonCard from '../features/salons/SalonCard';

const SalonsPage = () => {
  const dispatch = useDispatch();

  // useSelector reads data from the Redux store.
  // We are pulling out the items, status, and error from our 'salons' slice.
  const { items: salons, status, error } = useSelector((state) => state.salons);

  // useEffect runs code after the component renders.
  // We only want to fetch salons once, when the component first loads.
  useEffect(() => {
    // To avoid re-fetching on every render, we check if the status is 'idle'.
    if (status === 'idle') {
      dispatch(fetchSalons());
    }
  }, [status, dispatch]);

  // Helper variable to decide what to render based on the status
  let content;

  if (status === 'loading') {
    content = <p className="text-center">Loading salons...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {salons.map((salon) => (
          <SalonCard key={salon.id} salon={salon} />
        ))}
      </div>
    );
  } else if (status === 'failed') {
    content = <p className="text-center text-error">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Beauty Centers</h1>
      
      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-grow w-full md:w-auto">
          <label htmlFor="city-filter" className="sr-only">City</label>
          <select id="city-filter" className="w-full p-2 border rounded-md">
            <option>All Cities</option>
            <option>Sofia</option>
            <option>Plovdiv</option>
            <option>Varna</option>
          </select>
        </div>
        {/*Category filter*/}
        <div className="flex-grow w-full md:w-auto">
          <label htmlFor="category-filter" className="sr-only">Category</label>
          <select id="category-filter" className="w-full p-2 border rounded-md">
            <option>All Categories</option>
            <option>Hair</option>
            <option>Nails</option>
            <option>Pedicure</option>
          </select>
        </div>
        {/*Price filter*/}
        <div className="flex-grow w-full md:w-auto">
          <label htmlFor="price-filter" className="sr-only">Price</label>
          <select id="price-filter" className="w-full p-2 border rounded-md">
            <option>Any Price</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        {/*Rating filter*/}
        <div className="flex-grow w-full md:w-auto">
          <label htmlFor="rating-filter" className="sr-only">Rating</label>
          <select id="rating-filter" className="w-full p-2 border rounded-md">
            <option>Any Rating</option>
            <option>4 Stars & Up</option>
            <option>3 Stars & Up</option>
          </select>
        </div>
        <button className="w-full md:w-auto px-6 py-2 bg-secondary text-white rounded-md">Apply</button>
      </div>

      {content}
    </div>
  );
};

export default SalonsPage;