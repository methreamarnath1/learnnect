import React from 'react';
import { Play } from 'lucide-react';

interface ShortCardProps {
  thumbnail: string;
  title: string;
  views: number;
  duration: number;
}

export default function ShortCard({ thumbnail, title, views, duration }: ShortCardProps) {
  return (
    <div className="relative group cursor-pointer">
      <div className="aspect-[9/16] rounded-lg overflow-hidden relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-12 h-12 text-white" />
          </div>
        </div>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {duration}s
        </span>
      </div>
      <div className="mt-2">
        <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-sm">{views.toLocaleString()} views</p>
      </div>
    </div>
  );
}