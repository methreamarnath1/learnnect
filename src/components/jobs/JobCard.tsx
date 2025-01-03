import React from 'react';
import type { Job } from '../../types';
import { MapPin, Clock, DollarSign } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg hover:ring-2 hover:ring-green-500 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={job.company.logo}
            alt={job.company.name}
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <h3 className="text-lg font-bold text-white">{job.title}</h3>
            <p className="text-gray-400">{job.company.name}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
          {job.type}
        </span>
      </div>
      
      <div className="flex items-center space-x-4 text-gray-300 mb-4">
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <DollarSign className="w-4 h-4" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{job.postedAt}</span>
        </div>
      </div>

      <p className="text-gray-300 mb-4 line-clamp-2">{job.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {job.requirements.slice(0, 3).map((req, index) => (
          <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm">
            {req}
          </span>
        ))}
        {job.requirements.length > 3 && (
          <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm">
            +{job.requirements.length - 3} more
          </span>
        )}
      </div>
    </div>
  );
}