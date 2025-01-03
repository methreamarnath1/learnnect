import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Download, BookmarkPlus, ThumbsUp, ThumbsDown } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  instructor: {
    name: string;
    avatar: string;
    followers: number;
  };
  views: number;
  likes: number;
  publishedAt: string;
}

export default function VideoPlayer({ videoUrl, title, instructor, views, likes, publishedAt }: VideoPlayerProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="aspect-video bg-black">
        <video 
          src={videoUrl} 
          controls 
          className="w-full h-full"
          poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1280&h=720&fit=crop"
        />
      </div>
      
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">{title}</h1>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img src={instructor.avatar} alt={instructor.name} className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-medium">{instructor.name}</h3>
              <p className="text-sm text-gray-400">{instructor.followers} followers</p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
              Follow
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className={`flex items-center space-x-2 ${isLiked ? 'text-green-500' : 'text-gray-400'}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{likes}</span>
            </button>
            <button className="text-gray-400 hover:text-white">
              <ThumbsDown className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Download className="w-5 h-5" />
            </button>
            <button 
              className={`${isSaved ? 'text-green-500' : 'text-gray-400'} hover:text-white`}
              onClick={() => setIsSaved(!isSaved)}
            >
              <BookmarkPlus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span>{views.toLocaleString()} views</span>
            <span>{publishedAt}</span>
          </div>
          <p className="text-gray-300">
            Learn the fundamentals of web development in this comprehensive guide...
          </p>
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-800 pt-4">
          <h3 className="font-medium mb-4">Comments</h3>
          <div className="flex space-x-4 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces" 
              alt="User" 
              className="w-8 h-8 rounded-full"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}