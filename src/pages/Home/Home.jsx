import React from 'react';
import Career from '../../components/Career';
import Working from '../../components/Working';
import Cards from '../../components/Cards';
import Testimonial from '../../components/Testimonial';
import Blog_sections from '../../components/Blog_sections';
import Feature from '../../components/Feature';

const Home = () => {
  return (
    <>
  
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/Banner/banner.png')" }} // Corrected the file extension
    >
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 sm:px-8'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center sm:text-start'>
          Welcome to ACN Global Connect Care
        </h1>
        <p className='text-base sm:text-lg md:text-2xl text-white mb-2 sm:mb-3 md:mb-4 text-center sm:text-start'>
        we are dedicated to providing exceptional medical services and support to individuals and families around the world. <br /> Our mission is to deliver personalized, high-quality healthcare solutions that meet the unique needs of each patient.
        </p>
        <button className='border border-teal-300 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-lg md:text-xl hover:bg-teal-300 transform transition duration-300 hover:scale-105'>
          Learn More
        </button>
      </div>
    </div>
    <Feature/>
    <Working/>
    <Career/>
    <Cards/>
    <br />
    <Testimonial/>
    <Blog_sections/>
    </>
  );
};

export default Home;
