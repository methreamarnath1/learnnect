import React from 'react';
import CourseCard from '../components/CourseCard';
import { allCourses } from '../data/courses';

export default function Courses() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}