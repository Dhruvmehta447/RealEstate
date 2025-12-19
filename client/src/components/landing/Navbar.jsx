import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          Real<span className="text-blue-600">Estate</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
        </div>

        <Link 
          to="/admin" 
          className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition shadow-lg flex items-center gap-2"
        >
           Admin Panel
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;