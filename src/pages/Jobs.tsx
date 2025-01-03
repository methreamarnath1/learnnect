import React, { useState } from 'react';
import { jobs } from '../data/jobs';
import { Search, MapPin, Briefcase, DollarSign, Filter } from 'lucide-react';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold">Job Opportunities</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All Types</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-gray-900 rounded-lg p-6 hover:ring-2 hover:ring-green-500 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={job.company.logo}
                  alt={job.company.name}
                  className="w-12 h-12 rounded-lg bg-gray-800"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                  <p className="text-gray-400">{job.company.name}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                job.type === 'full-time' ? 'bg-green-500/10 text-green-500' :
                job.type === 'part-time' ? 'bg-blue-500/10 text-blue-500' :
                job.type === 'contract' ? 'bg-purple-500/10 text-purple-500' :
                'bg-orange-500/10 text-orange-500'
              }`}>
                {job.type}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="w-4 h-4" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Briefcase className="w-4 h-4" />
                <span>{job.postedAt}</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{job.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {job.requirements.map((req, index) => (
                <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  {req}
                </span>
              ))}
            </div>

            <button className="mt-4 w-full bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}