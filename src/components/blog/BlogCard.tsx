import React from 'react';
 import type { BlogPost } from '../../types';
import { Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-green-500 transition-all">
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="text-white font-medium">{post.author.name}</h4>
            <p className="text-gray-400 text-sm">{post.publishedAt}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
          <div className="flex items-center space-x-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-800 text-green-500 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}    