import React from 'react';
import { Navigation } from './Navigation';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};