import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Activities from '../components/Activities';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Activities />
      <Footer />
    </div>
  );
};

export default LandingPage;
