import React from 'react';
import VideoPlayer from '../components/video/VideoPlayer';

export default function CourseView() {
  const courseData = {
    videoUrl: "https://example.com/video.mp4", // Replace with actual video URL
    title: "Complete Web Development Bootcamp",
    instructor: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces",
      followers: 15000
    },
    views: 250000,
    likes: 18500,
    publishedAt: "2024-03-15"
  };

  return (
    <div className="max-w-6xl mx-auto">
      <VideoPlayer {...courseData} />
    </div>
  );
}