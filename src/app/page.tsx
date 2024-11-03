import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
          <div className='flex flex-row space-x-4'>
            <Card
              title='Meet Our Team'
              description='Discover the *talented* individuals who are *driving innovation* in our robotics projects and competitions'
              link='/team'
              link_description='Meet the Team'
            />
            <Card
              title='Upcoming Events'
              description='Join us for our events and hands-on workshops where you will learn about the latest in robotics technology and programming'
              link='/events'
              link_description='Join the Events'
            />
            <Card
              title='Ongoing Robotics Projects'
              description='Explore the exciting projects our team is working on, from autonomous robots to AI-driven systems.'
              link='/projects'
              link_description='Current Projects'
            />
          </div>
          <div className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'></div>
          This website is under contruction. Check back in soon.
        </main>
      </div>
      <Footer />
    </div>
  );
}
