import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="bg-[#1D72B8] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">JobMatch</Link>
        <ul className="flex space-x-4">
          <li><Link to="/jobs" className="hover:text-[#F5A623]">Find Jobs</Link></li>
          <li><Link to="/profile" className="hover:text-[#F5A623]">My Profile</Link></li>
          <li><Link to="/employer" className="hover:text-[#F5A623]">For Employers</Link></li>
        </ul>
      </div>
    </nav>
  );
};