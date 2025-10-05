import React from 'react';

const PlaceholderPage = ({ title, children }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="prose">
          {children || <p>Content for this page is coming soon.</p>}
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;