import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/blog/BlogPost';
import { blogPosts } from '../data/blog';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Blog post not found</h2>
      </div>
    );
  }

  return <BlogPost post={post} />;
}