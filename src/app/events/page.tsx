import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const EventsPage = () => {
  return (
    <div>
      <Header />
      <iframe
        src='https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=ZG9xMzAwODYxQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=dmkudXNhLm9mZmljaWFsI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043'
        style={{ border: 0, width: '800px', height: '600px' }}
      ></iframe>
      <Footer />
    </div>
  );
};

export default EventsPage;
