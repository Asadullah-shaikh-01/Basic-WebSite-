import React from "react";
import {
  FaAddressBook,
  FaAddressCard,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Banner/banner.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 sm:px-8">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center">
            Contact Page
          </h3>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-emerald-400 mr-3" />
            <p className="text-gray-700">info@acnglobalconnectcare.com</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-emerald-400 mr-3" />
            <p className="text-gray-700">hr@acnglobalconnectcare.com</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-emerald-400 mr-3" />
            <p className="text-gray-700">+1 415 222 0956</p>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkedAlt className="text-emerald-400 mr-3" />
            <p className="text-gray-700">
            8-2-468/A/2/1, 2nd Floor, Road No. 5, <br /> Banjara Hills, Hyderabad, <br /> Telangana-500034.
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkedAlt className="text-emerald-400 mr-3" />
            <p className="text-gray-700">
            Market Square, 1355 Market St suite 900,<br /> San Francisco, CA 94103,<br /> United States
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                placeholder="Write Your Message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
