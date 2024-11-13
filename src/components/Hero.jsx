import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: 'url(https://path/to/image.jpg)' }}>
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="relative text-center">
        <h1 className="text-4xl font-bold">SIGAP BERSAMA</h1>
        <div className="flex justify-center mt-4 space-x-10">
          <div><span>123.456</span><br />Relawan</div>
          <div><span>123.456</span><br />Komunitas</div>
          <div><span>123.456</span><br />Event</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
