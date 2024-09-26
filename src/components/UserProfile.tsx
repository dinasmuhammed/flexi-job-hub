import React from 'react';
import { User } from 'lucide-react';

export const UserProfile = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
          <User size={32} className="text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">John Doe</h2>
          <p className="text-gray-600 dark:text-gray-400">Part-time Job Seeker</p>
        </div>
      </div>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p><strong>Skills:</strong> Customer Service, Data Entry, Social Media Management</p>
        <p><strong>Availability:</strong> Weekends, Evenings</p>
        <p><strong>Preferred Location:</strong> New York City</p>
      </div>
      <button className="mt-6 w-full bg-green-600 dark:bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors">
        Edit Profile
      </button>
    </div>
  );
};
