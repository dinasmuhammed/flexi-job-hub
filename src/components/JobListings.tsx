import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';

// Mock function to fetch jobs (replace with actual API call later)
const fetchJobs = async () => {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: 'Part-time Cashier', company: 'SuperMart', location: 'New York, NY' },
    { id: 2, title: 'Weekend Tutor', company: 'LearnFast Academy', location: 'Los Angeles, CA' },
    { id: 3, title: 'Evening Bartender', company: 'Chill Lounge', location: 'Chicago, IL' },
  ];
};

export const JobListings = () => {
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });

  if (isLoading) return <div className="text-center">Loading jobs...</div>;
  if (error) return <div className="text-center text-red-500">Error loading jobs</div>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
      </div>
      <div className="space-y-6">
        {jobs?.map(job => (
          <div key={job.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{job.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{job.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
            <button className="mt-4 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
