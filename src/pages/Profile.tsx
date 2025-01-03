import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';

export default function Profile() {
  const userData = {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=faces",
    role: "Senior Developer",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    joinDate: "March 2024",
    email: "john@example.com",
    bio: "Full-stack developer with 5+ years of experience. Passionate about teaching and building scalable applications.",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop"
  };

  return (
    <div className="max-w-6xl mx-auto">
      <ProfileHeader user={userData} />
    </div>
  );
}