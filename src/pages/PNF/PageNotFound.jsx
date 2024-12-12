import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Banner/banner.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 sm:px-8">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center">
            Page Not Found
          </h3>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-12 md:px-8 md:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-600">404 Error</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            We can&apos;t find that page
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-6 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Link to="/" className="inline-flex items-center rounded-md border border-gray-800 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800">
              <ArrowLeft size={16} className="mr-2" />
              Go back to Home
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
