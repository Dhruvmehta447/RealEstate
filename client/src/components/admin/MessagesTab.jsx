import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessagesTab = () => {
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactRes = await axios.get('/api/forms/contact');
        const subRes = await axios.get('/api/forms/subscribe');
        setContacts(contactRes.data);
        setSubscribers(subRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-blue-700">Recent Inquiries</h2>
        {contacts.length === 0 ? (
          <p className="text-gray-500">No messages yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Mobile</th>
                  <th className="p-3">City</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{contact.fullName}</td>
                    <td className="p-3 text-blue-600">{contact.email}</td>
                    <td className="p-3">{contact.mobileNumber}</td>
                    <td className="p-3">{contact.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-green-700">Newsletter Subscribers</h2>
        {subscribers.length === 0 ? (
          <p className="text-gray-500">No subscribers yet.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subscribers.map((sub) => (
              <li key={sub._id} className="bg-gray-50 p-3 rounded border flex items-center justify-between">
                <span className="text-gray-700">{sub.email}</span>
                <span className="text-xs text-gray-400">
                  {new Date(sub.createdAt).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MessagesTab;