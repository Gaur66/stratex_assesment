import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-800">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-white mb-4">404</h1>
        <p className="text-gray-300 text-lg">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-300 hover:text-blue-100 mt-2 block">Go back to page</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
