import React from 'react'
import Cards from '../../components/Cards'

import Feature1 from './../../components/Feature1';
import Services_Section from '../../components/Services_Section';

const Service = () => {
  return (
    <>
    <div
      className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/Banner/banner.png')" }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 sm:px-8'>
        <h3 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center'>
       Our  Services 
        </h3>
      </div>
    </div>
   <Cards/>
   <Services_Section/>
   <Feature1/>

  </>
  )
}

export default Service