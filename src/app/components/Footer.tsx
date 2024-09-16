import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='bg-white rounded-lg shadow m-4 dark:bg-gray-800'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <Image
            src='/discord-logo.png'
            alt='Discord Logo'
            width={40}
            height={40}
          />
          <li>
            <a
              href='https://discord.gg/CjNWYkVkG3'
              className='hover:underline me-4 md:me-6'
            >
              Join Our Discord
            </a>
          </li>
          <Image
            src='/gmail-logo.png'
            alt='Gmail Logo'
            width={40}
            height={40}
          />
          <li>
            <a href='#' className='hover:underline'>
              Email us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
