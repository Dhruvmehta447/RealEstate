import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-2">Why Choose Us?</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-10">We provide the best solutions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🏠
              </div>
              <h4 className="text-xl font-bold mb-2">Potential ROI</h4>
              <p className="text-gray-500 text-sm">
                Whether you are looking to buy a new home or renovate your current home for profit, we are here to help.
              </p>
            </div>

            <div className="p-6 text-center hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎨
              </div>
              <h4 className="text-xl font-bold mb-2">Design</h4>
              <p className="text-gray-500 text-sm">
                Our seamless design process ensures your vision becomes a reality with precision and creativity.
              </p>
            </div>

            <div className="p-6 text-center hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📢
              </div>
              <h4 className="text-xl font-bold mb-2">Marketing</h4>
              <p className="text-gray-500 text-sm">
                Targeting the right audience with sophisticated digital marketing plans to sell fast.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-20 gap-12">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=300&q=80" alt="Team 1" className="rounded-lg shadow-lg mt-8" />
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=300&q=80" alt="Team 2" className="rounded-lg shadow-lg" />
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&q=80" alt="Team 3" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-2">About Us</h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Fifteen years of experience in real estate and design.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are committed to hard work and follow-through. We provide quality service to build relationships with clients and, more importantly, maintain those relationships by communicating effectively.
            </p>
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition font-bold uppercase text-sm">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;