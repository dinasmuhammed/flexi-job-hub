import React from 'react';
import { Layout } from '@/components/Layout';
import { JobListings } from '@/components/JobListings';
import { UserProfile } from '@/components/UserProfile';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Find Your Perfect Part-Time Job</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <JobListings />
          </div>
          <div>
            <UserProfile />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
