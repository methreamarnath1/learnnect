import React from 'react';
import CourseCard from '../components/CourseCard';
import { recommendedCourses } from '../data/courses';

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Recommended Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}