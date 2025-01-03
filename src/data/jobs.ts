import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: {
      name: 'Tech Corp',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=64&h=64&fit=crop'
    },
    location: 'Remote',
    type: 'full-time',
    salary: '$120k - $150k',
    description: 'We are looking for an experienced React developer to join our team...',
    requirements: ['5+ years React', 'TypeScript', 'Node.js', 'AWS'],
    postedAt: '2 days ago'
  },
  // Add more jobs here
];