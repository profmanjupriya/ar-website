'use client';
import React, { FormEvent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className='flex flex-col space-y-8'>
      <Header />
      <section className='body-font relative bg-white text-gray-800'>
        {' '}
        {/* Change background to white and text to gray */}
        <div className='container mx-auto px-5 py-24'>
          <div className='mb-12 flex w-full flex-col text-center'>
            <h1 className='title-font mb-4 text-2xl font-medium text-black sm:text-3xl'>
              {' '}
              {/* Change text to black */}
              Contact Us
            </h1>
            <p className='mx-auto text-base leading-relaxed lg:w-2/3 text-gray-600'>
              {' '}
              {/* Change text to gray */}
              Feel free to reach out to us! Whether you have a question,
              feedback, or a collaboration proposal, we'd love to hear from you.
            </p>
          </div>

          <div className='mx-auto md:w-2/3 lg:w-1/2'>
            <form
              action='https://api.web3forms.com/submit'
              method='POST'
              className='-m-2 flex flex-wrap'
            >
              <input
                type='hidden'
                name='access_key'
                value='fe63b653-18e7-43bf-8e7e-050ad927a478'
              />
              <div className='w-1/2 p-2'>
                <div className='relative'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='peer w-full rounded border border-gray-300 bg-transparent py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-black focus:bg-white focus:ring-2 focus:ring-black'
                    placeholder='Name'
                    required
                  />
                  <label
                    htmlFor='name'
                    className='absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-black'
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className='w-1/2 p-2'>
                <div className='relative'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='peer w-full rounded border border-gray-300 bg-transparent py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-black focus:bg-white focus:ring-2 focus:ring-black'
                    placeholder='Email'
                    required
                  />
                  <label
                    htmlFor='email'
                    className='absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-black'
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className='mt-4 w-full p-2'>
                <div className='relative'>
                  <textarea
                    id='message'
                    name='message'
                    className='peer h-32 w-full resize-none rounded border border-gray-300 bg-transparent py-1 px-3 text-base leading-6 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-black focus:bg-white focus:ring-2 focus:ring-black'
                    placeholder='Message'
                    required
                  ></textarea>
                  <label
                    htmlFor='message'
                    className='absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-black'
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className='w-full p-2'>
                <button
                  type='submit'
                  className='mx-auto flex rounded border-0 bg-black py-2 px-8 text-lg text-white hover:bg-gray-800 focus:outline-none'
                >
                  {' '}
                  Send
                </button>
              </div>
              <div className='mt-8 w-full border-t border-gray-300 p-2 pt-8 text-center'>
                <a className='text-gray-500'>example@email.com</a>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
