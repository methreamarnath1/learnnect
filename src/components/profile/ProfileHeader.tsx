import React from 'react';
import { MapPin, Link as LinkIcon, Calendar, Mail } from 'lucide-react';

interface ProfileHeaderProps {
  user: {
    name: string;
    avatar: string;
    role: string;
    location: string;
    website: string;
    joinDate: string;
    email: string;
    bio: string;
    coverImage: string;
  };
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="h-48 relative">
        <img 
          src={user.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-16 left-8">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-32 h-32 rounded-full border-4 border-black"
          />
        </div>
      </div>
      
      <div className="pt-20 px-8 pb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
            <p className="text-gray-400">{user.role}</p>
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
            Connect
          </button>
        </div>
        
        <p className="text-gray-300 mb-4">{user.bio}</p>
        
        <div className="flex flex-wrap gap-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{user.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LinkIcon className="w-4 h-4" />
            <a href={user.website} className="text-green-500 hover:underline">{user.website}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Joined {user.joinDate}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}