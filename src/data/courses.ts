import { Course } from '../types';

export const recommendedCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp 2024',
    instructor: {
      name: 'John Developer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces'
    },
    views: 250000,
    timeAgo: '2 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=400&fit=crop',
    videoUrl: 'https://example.com/video1.mp4'
  },
  {
    id: '2',
    title: 'Advanced React & Redux Masterclass',
    instructor: {
      name: 'Sarah Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces'
    },
    views: 180000,
    timeAgo: '1 week ago',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    videoUrl: 'https://example.com/video2.mp4'
  },
  {
    id: '3',
    title: 'Python for Data Science & Machine Learning',
    instructor: {
      name: 'Mike Data',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces'
    },
    views: 320000,
    timeAgo: '3 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop',
    videoUrl: 'https://example.com/video3.mp4'
  }
];

export const allCourses: Course[] = [
  ...recommendedCourses,
  {
    id: '4',
    title: 'UI/UX Design Principles',
    instructor: {
      name: 'Design Pro',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces'
    },
    views: 150000,
    timeAgo: '5 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=400&fit=crop',
    videoUrl: 'https://example.com/video4.mp4'
  }
];