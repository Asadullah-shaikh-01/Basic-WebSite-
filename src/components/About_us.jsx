import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline'; // Import MapPin from Heroicons

const locations = [
  {
    title: 'Hyderabad office',
    timings: 'Mon-Fri',
    address: '8-2-468/A/2/1, 2nd Floor, Road No. 5, Banjara Hills, Hyderabad, Telangana-500034',
  },
  {
    title: 'Head office',
    timings: 'Mon-Fri ',
    address: 'Market Square, 1355 Market St suite 900, San Francisco, CA 94103, United States',
  },

];

const users = [
  {
    name: 'Gabrielle Fernandez',
    image:
      '/assets/Team/team-111.png',
    position: 'Executive Chair of the Board',
  },
  {
    name: 'Calvin N. Thornton',
    image:
      '/assets/Team/team-112.png',
    position: 'Co-Founder & Chief Executive Officer',
  },
  {
    name: 'Clarence Huerta',
    image:
      '/assets/Team/team-113.png',
    position: 'SVP of Operation',
  },
  {
    name: 'Traci Hinton',
    image:
      '/assets/Team/team-114.png',
    position: 'President',
  },
  {
    name: 'Josefina Barber',
    image:
      '/assets/Team/team-115.png',
    position: 'Executive Vice President & Head of Global Delivery',
  },
  {
    name: 'Harishan Patel',
    image:
      '/assets/Team/team-120.png',
    position: 'Chief Client Officer',
  },
  {
    name: 'Vikram Suryanath',
    image:
      '/assets/Team/team-118.png',
    position: 'Chief of Staff & Head of Corporate Development',
  },
  {
    name: 'Vikalsen Rao',
    image:
      '/assets/Team/team-119.png',
    position: 'SVP of Technology',
  },
];


const About_us = () => {
  return (
    <div>
           <div className="mx-auto max-w-7xl px-4">
      {/* Hero Section */}
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
        <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-xs font-semibold leading-normal md:text-sm">About the ACN Global Connect Care</p>
        </div>
        <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Made with love, right here in India
        </p>
        <p className="max-w-4xl text-base text-gray-600 md:text-xl">
        Transforming healthcare together, our mission is to deliver high-quality outcomes and economic value through collaborative partnerships. We prioritize integrity, transparency, and social responsibility, ensuring that our actions benefit our clients, associates, and the communities we touch.
        </p>
      </div>
      <div className="w-full space-y-4">
        <img
          className="h-[200px] w-full rounded-xl object-cover md:h-full"
          src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
          alt="Map"
        />
      </div>
      {/* Locations */}
      <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
        {locations.map((location) => (
          <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <MapPinIcon className="h-5 w-5 text-gray-500" />
            <p className="w-full text-xl font-semibold text-gray-900">{location.title}</p>
            <p className="w-full text-base text-gray-700">{location.timings}</p>
            <p className="text-sm font-medium">{location.address}</p>
          </div>
        ))}
      </div>
      <hr className="mt-20" />
      {/* Greetings */}
      <div className="mt-16 flex items-center">
        <div className="space-y-6 md:w-3/4">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">Join Us &rarr;</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
          <p className="max-w-4xl text-base text-gray-700 md:text-xl">
          Together, let's shape the future of healthcare and create a brighter tomorrow."

          </p>
        </div>
      </div>
      {/* TEAM */}
      <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <div className="rounded-md border" key={user.name}>
            <img
              src={user.image}
              alt={user.name}
              className="h-[300px] w-full rounded-lg object-cover"
            />
            <p className="mt-6 w-full px-2 text-xl font-semibold text-gray-900">{user.name}</p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              {user.position}
            </p>
          </div>
        ))}
      </div>
     {/* Hiring Banner */}
     <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
        <div className="space-y-6">
          <p className="text-sm font-semibold md:text-base">Join our team &rarr;</p>
          <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
          <p className="text-base text-gray-600 md:text-lg">
          Contribute to innovative solutions that address real-world challenges and shape the future of our industry..
          </p>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Join Now
          </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      
    </div>
  )
}

export default About_us