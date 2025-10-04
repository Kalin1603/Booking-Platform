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
      {/* We'll add filter controls here later */}
      {content}
    </div>
  );
};

export default SalonsPage;