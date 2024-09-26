import React from 'react';
import { User } from 'lucide-react';

export const UserProfile = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center space-x-4 mb-4">
        <User size={48} className="text-[#1D72B8]" />
        <div>
          <h2 className="text-xl font-semibold text-[#333333]">John Doe</h2>
          <p className="text-gray-500">Part-time Job Seeker</p>
        </div>
      </div>
      <div className="space-y-2">
        <p><strong>Skills:</strong> Customer Service, Data Entry, Social Media Management</p>
        <p><strong>Availability:</strong> Weekends, Evenings</p>
        <p><strong>Preferred Location:</strong> New York City</p>
      </div>
      <button className="mt-4 w-full bg-[#8BC34A] text-white px-4 py-2 rounded hover:bg-[#7cb342] transition-colors">
        Edit Profile
      </button>
    </div>
  );
};