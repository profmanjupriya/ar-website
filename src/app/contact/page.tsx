'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom, toast } from 'react-toastify';

const ContactPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Send button clicked');
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('access_key', 'fe63b653-18e7-43bf-8e7e-050ad927a478');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result); // Log the response to the console
      toast.success('Thanks for your message!');
      // Simulate sending a message (e.g., sending data to a backend)
      console.log('Message sent:', formData);
      const resetForm = e.target as HTMLFormElement;
      resetForm.reset();
    } else {
      toast.error('Submission failed. Please try again.');
    }
  };
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
              id='contact-form'
              onSubmit={handleSubmit}
              className='-m-2 flex flex-wrap'
            >
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
                  className='mx-auto flex rounded bg-slate-900 py-2 px-8 border border-transparent text-center text-lg text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  type='submit'
                >
                  {' '}
                  Send
                </button>
              </div>
              <ToastContainer
                position='bottom-center'
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
                transition={Zoom}
              />
              <div className='mt-8 w-full border-t border-gray-300 p-2 pt-8 text-center'>
                <a className='text-gray-500'>sdsu.aztecrobotics@gmail.com</a>
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
