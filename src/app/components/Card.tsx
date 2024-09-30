import React from 'react';

interface CardProps {
  title: string;
  description: string;
  link: string;
  link_description: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  link_description,
}) => {
  return (
    <div className='relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96'>
      <div className='p-4'>
        <h5 className='mb-2 text-slate-800 text-xl font-semibold'>{title}</h5>
        <p className='text-slate-600 leading-normal font-light'>
          {description}
        </p>
        <a href={link} className='block'>
          <button
            className='rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            type='button'
          >
            {link_description}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
