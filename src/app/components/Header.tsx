import React from 'react';
import Image from 'next/image'; // Using Next.js Image component, replace with <img /> for plain React

const Header: React.FC = () => {
  return (
    <nav className='bg-white relative w-full z-20 top-0 start-0 border-b border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/'>
          <Image
            className='dark object-left-top'
            src='/fulllogo.png'
            alt='Aztec Robotics logo'
            width={130}
            height={38}
            priority
          />
        </a>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white'>
            <li>
              <a
                href='/'
                className='block py-2 px-3 font-normal text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/team'
                className='block py-2 px-3 font-normal text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='/projects'
                className='block py-2 px-3 font-normal text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='/events'
                className='block py-2 px-3 font-normal text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='block py-2 px-3 font-normal text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
