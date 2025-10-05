import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // For now, this is a mock search.
    // It will navigate the user to the salons page, where they can see all options.
    // Later, this could be enhanced to pass a query parameter.
    console.log("Searching...");
    navigate('/salons');
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="w-full max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-lg p-2"
    >
      <div className="flex-grow flex items-center pl-4">
        <Search className="text-gray-400" />
        <input 
          type="text" 
          placeholder="Enter city / service (e.g., Manicure in Sofia)" 
          className="w-full ml-3 bg-transparent focus:outline-none text-base-text"
        />
      </div>
      <button 
        type="submit" 
        className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-hover transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;