import React from "react";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100">
      {/* Tagline */}
      <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Us ?</h3>

      {/* Main Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/assets/career/business-team-showing-unity.png"
            alt="Business Team"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 px-4">
          <h4 className="text-2xl font-bold mb-4 text-center md:text-left">
            Join the Movement Start Your Career with Purpose
          </h4>
          <p className="text-gray-700 text-center md:text-left">
            Unlock your potential and join the ACN global community, where
            passion meets purpose. With innovative technology, collaborative
            expertise, and limitless opportunities to drive meaningful change,
            we'll fuel your growth and empower you to:
            <br />
            - Deliver exceptional results for clients and patients <br />
            - Push boundaries and achieve your aspirations <br />- Make a
            lasting impact in the lives of others
          </p>

          {/* Button Section */}
          <div className="w-full flex justify-center md:justify-start mt-6">
            <Link to="/contact">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
