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

  if (isLoading) return <div>Loading jobs...</div>;
  if (error) return <div>Error loading jobs</div>;

  return (
    <div>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full p-2 pl-10 border border-gray-300 rounded"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
      <div className="space-y-4">
        {jobs?.map(job => (
          <div key={job.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold text-[#1D72B8]">{job.title}</h2>
            <p className="text-[#333333]">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <button className="mt-2 bg-[#F5A623] text-white px-4 py-2 rounded hover:bg-[#e69816] transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};