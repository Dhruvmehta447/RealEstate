import React, { useState } from 'react';
import ProjectsTab from '../components/admin/ProjectsTab';
import ClientsTab from '../components/admin/ClientsTab';
import MessagesTab from '../components/admin/MessagesTab';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded font-semibold ${
              activeTab === 'projects' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            Manage Projects
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`px-4 py-2 rounded font-semibold ${
              activeTab === 'clients' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            Manage Clients
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded font-semibold ${
              activeTab === 'messages' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            View Messages
          </button>
        </div>

        <div className="mt-4">
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'clients' && <ClientsTab />}
          {activeTab === 'messages' && <MessagesTab />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;