import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed m-4 top-3 right-0 left-0 shadow-lg z-50 bg-slate-50'>
      <div className='container px-4 flex justify-between items-center h-16'>
        <img
          src='/assets/logo/ACN-Logo.png'
          alt='ACN Company Logo'
          style={{ width: '120px' }}
        />
        <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
          <Link to='/' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            Home
          </Link>
          <Link to='/services' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            Services
          </Link>
          <Link to='/abouts' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            About Us
          </Link>
          <Link to='/contact' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            Contact
          </Link>
          <Link to='/blogs' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            Blogs
          </Link>
          <button className='py-2 px-6 border bg-emerald-300'>Login</button>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} aria-label='Toggle menu'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* for small devices */}
      {isOpen && (
        <div className='md:hidden flex space-y-6 py-4 flex-col bg-slate-50 items-center'>
          <Link to='/' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            Home
          </Link>
          <Link to='/services' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            Services
          </Link>
          <Link to='/abouts' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            About Us
          </Link>
          <Link to='/contact' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            Contact
          </Link>
          <Link to='/blogs' className='px-6 py-2 hover:bg-emerald-600 hover:text-white'>
            Blogs
          </Link>
          <button className='py-2 px-6 border bg-emerald-300'>Login</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
