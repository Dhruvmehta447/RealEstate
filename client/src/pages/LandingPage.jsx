import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import ProjectsSection from '../components/landing/ProjectsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import ContactSection from '../components/landing/ContactSection'; 
import Footer from '../components/landing/Footer'; 
import WhyChooseUs from '../components/landing/WhyChooseUs';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection /> 
      <Footer />         
    </div>
  );
};

export default LandingPage;