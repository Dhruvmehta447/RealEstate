import React, { useState } from 'react';
import axios from 'axios';

const ClientsTab = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    description: '',
    image: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/clients', formData);
      setMessage('Client Added Successfully! 🌟');
      setFormData({ name: '', designation: '', description: '', image: '' });
    } catch (error) {
      setMessage('Error adding client ❌');
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Happy Client</h2>
      
      {message && <p className={`mb-4 text-center font-bold ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Client Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Designation (e.g. CEO)</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Testimonial</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700">Client Photo URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/client-face.jpg"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Client
        </button>
      </form>
    </div>
  );
};

export default ClientsTab;