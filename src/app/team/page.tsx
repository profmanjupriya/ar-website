import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberProfile from '../components/MemberProfile';
const TeamPage = () => {
  return (
    <div className='flex flex-col space-y-8'>
      <Header />
      <div className='font-[sans-serif] bg-white'>
        <div className='lg:max-w-6xl max-w-xl mx-auto p-4'>
          <h2 className='text-gray-800 text-3xl font-extrabold text-center'>
            Meet Our Team
          </h2>
          <section className='py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full'>
                <MemberProfile
                  name='Samuel Braude'
                  role='President'
                  image='/DSC_4975-2.png'
                  linked_in='#'
                  instagram='#'
                  github='#'
                />
                <MemberProfile
                  name='Arjun Mohan'
                  role='Community Outreach Chair'
                  image='/arjun.jpg'
                  linked_in='#'
                  instagram='#'
                  github='#'
                />
                <MemberProfile
                  name='Tyler De Silva'
                  role='Hardware Lead'
                  image='/tyler.webp'
                  linked_in='#'
                  instagram='#'
                  github='#'
                />
                <MemberProfile
                  name='Priya Manju Muralidharan'
                  role='Faculty Advisor'
                  image='/Manju.jpg'
                  linked_in='#'
                  instagram='#'
                  github='#'
                />
                <MemberProfile
                  name='Noam Joseph'
                  role='Treasurer'
                  image='/2Noam_Photo.jpg'
                  linked_in='#'
                  instagram='#'
                  github='#'
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
