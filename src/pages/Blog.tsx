import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Clock, Bookmark, MoreHorizontal } from 'lucide-react';

export default function Blog() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Featured Post */}
      <Link to={`/blog/${featuredPost.id}`} className="block mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-medium text-white">{featuredPost.author.name}</h4>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{featuredPost.publishedAt}</span>
                  <span className="mx-2">·</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{featuredPost.readTime} min read</span>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 hover:text-green-500 transition-colors">
              {featuredPost.title}
            </h1>
            <p className="text-gray-300 mb-4 line-clamp-3">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-green-500 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-gray-400 hover:text-white">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={featuredPost.thumbnail}
              alt={featuredPost.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </Link>

      {/* Other Posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherPosts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`} className="group">
            <article className="h-full flex flex-col">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-center space-x-2 mb-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium">{post.author.name}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{post.publishedAt}</span>
                    <span className="mx-2">·</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <button className="text-gray-400 hover:text-white p-2">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}