import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-blue-900 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4">
          Not Your Average Realtor
        </h2>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Consultation, Design <br /> & Marketing
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          We provide the best strategies to grow your business with our top-notch services.
        </p>
        
        <div className="flex justify-center space-x-4">
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-blue-900 transition font-bold">
            Why Choose Us?
          </button>
          
          <button  className="bg-orange-500 text-white px-8 py-3 rounded shadow-lg hover:bg-orange-600 transition font-bold"><a href="#contact">
            Contact Us</a> 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
