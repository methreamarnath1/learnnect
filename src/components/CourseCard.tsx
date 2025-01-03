import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';
import { Play, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/courses/${course.id}`} className="group">
      <div className="bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-green-500 transition-all">
        <div className="relative">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
            <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{course.title}</h3>
          <div className="flex items-center space-x-2 mb-3">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-gray-400">{course.instructor.name}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{course.views.toLocaleString()} views</span>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{course.timeAgo}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}