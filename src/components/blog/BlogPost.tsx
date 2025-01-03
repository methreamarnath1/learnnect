import React from 'react';
import type { BlogPost as BlogPostType } from '../../types';
import { Clock, Calendar, Share2, Bookmark, MessageCircle, ThumbsUp } from 'lucide-react';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <article className="py-8">
        {/* Author info and actions */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-white">{post.author.name}</h4>
                <button className="text-green-500 text-sm font-medium hover:text-green-400">
                  Follow
                </button>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.publishedAt}</span>
                <span className="mx-2">·</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Title and tags */}
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-800 text-green-500 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Featured image */}
        <div className="relative aspect-[2/1] rounded-lg overflow-hidden mb-8">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-8">
          {post.content}
        </div>

        {/* Engagement actions */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 py-4 px-4 md:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <ThumbsUp className="w-6 h-6" />
                <span>2.5K</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <MessageCircle className="w-6 h-6" />
                <span>125</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">
                <Share2 className="w-6 h-6" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Bookmark className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}