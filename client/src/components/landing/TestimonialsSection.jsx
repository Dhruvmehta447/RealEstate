import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestimonialsSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get('/api/clients');
        setClients(res.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    fetchClients();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Happy Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our partners have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.length > 0 ? (
            clients.map((client) => (
              <div key={client._id} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition duration-300 text-center border border-gray-100">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <p className="text-gray-500 italic mb-6 text-sm leading-relaxed">
                  "{client.description}"
                </p>
                
                <h4 className="text-lg font-bold text-blue-900">{client.name}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                  {client.designation}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              No testimonials yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;