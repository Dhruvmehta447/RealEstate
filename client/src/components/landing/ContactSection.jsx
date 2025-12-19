import React, { useState } from 'react';
import axios from 'axios';

const ContactSection = () => {
  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: ''
  });
  
  const [newsletterEmail, setNewsletterEmail] = useState('');
  
  const [contactMsg, setContactMsg] = useState('');
  const [newsMsg, setNewsMsg] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/forms/contact', contactData);
      setContactMsg('Message Sent Successfully! ✅');
      setContactData({ fullName: '', email: '', mobileNumber: '', city: '' });
    } catch (error) {
      setContactMsg('Error sending message ❌');
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/forms/subscribe', { email: newsletterEmail });
      setNewsMsg('Subscribed! 📩');
      setNewsletterEmail('');
    } catch (error) {
      setNewsMsg('Error subscribing ❌');
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Project</h2>
          <p className="text-blue-200 mb-8 text-lg">
            We help companies and individuals build out their brand and scale their business.
          </p>

          <div className="bg-blue-800 p-6 rounded-lg shadow-inner border border-blue-700">
            <h3 className="font-bold text-xl mb-4">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 p-3 rounded text-gray-800 focus:outline-none"
                required
              />
              <button className="bg-orange-500 px-6 py-3 rounded font-bold hover:bg-orange-600 transition">
                Subscribe
              </button>
            </form>
            {newsMsg && <p className="mt-2 text-sm text-yellow-300">{newsMsg}</p>}
          </div>
        </div>

        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input 
                type="text" 
                value={contactData.fullName}
                onChange={(e) => setContactData({...contactData, fullName: e.target.value})}
                className="w-full p-3 bg-gray-50 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600">Email Address</label>
              <input 
                type="email" 
                value={contactData.email}
                onChange={(e) => setContactData({...contactData, email: e.target.value})}
                className="w-full p-3 bg-gray-50 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Mobile</label>
                <input 
                  type="text" 
                  value={contactData.mobileNumber}
                  onChange={(e) => setContactData({...contactData, mobileNumber: e.target.value})}
                  className="w-full p-3 bg-gray-50 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">City</label>
                <input 
                  type="text" 
                  value={contactData.city}
                  onChange={(e) => setContactData({...contactData, city: e.target.value})}
                  className="w-full p-3 bg-gray-50 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded font-bold text-lg hover:bg-blue-700 transition shadow-lg mt-4">
              Submit Inquiry
            </button>
            
            {contactMsg && <p className="text-center text-green-600 font-bold mt-2">{contactMsg}</p>}
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;