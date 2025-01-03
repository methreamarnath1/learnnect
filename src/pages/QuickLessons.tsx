import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaThumbsUp, FaShare, FaComment, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import ShortCard from '../components/shorts/ShortCard';

const shorts = [
  {
    id: '1',
    title: 'Master CSS Grid in 60 seconds',
    thumbnail: 'https://images.unsplash.com/photo-1517430816045-df4b7de01c9d?w=400&h=711&fit=crop',
    views: 125000,
    duration: 60
  },
  {
    id: '2',
    title: 'JavaScript Array Methods Explained',
    thumbnail: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=711&fit=crop',
    views: 89000,
    duration: 45
  },
  {
    id: '3',
    title: 'React Hooks in One Minute',
    thumbnail: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=711&fit=crop',
    views: 156000,
    duration: 60
  },
  {
    id: '4',
    title: 'Understanding Flexbox in 30 seconds',
    thumbnail: 'https://images.unsplash.com/photo-1531497865145-8e1c9cfdc5f2?w=400&h=711&fit=crop',
    views: 102000,
    duration: 30
  },
  {
    id: '5',
    title: 'Async/Await in JavaScript',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=711&fit=crop',
    views: 134000,
    duration: 50
  },
  {
    id: '6',
    title: 'CSS Animations in 45 seconds',
    thumbnail: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=711&fit=crop',
    views: 98000,
    duration: 45
  },
  {
    id: '7',
    title: 'Understanding Closures in JavaScript',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=711&fit=crop',
    views: 112000,
    duration: 60
  },
  {
    id: '8',
    title: 'CSS Variables Explained',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=711&fit=crop',
    views: 87000,
    duration: 40
  },
  {
    id: '9',
    title: 'JavaScript Event Loop in 60 seconds',
    thumbnail: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=711&fit=crop',
    views: 145000,
    duration: 60
  },
  {
    id: '10',
    title: 'React Context API in 30 seconds',
    thumbnail: 'https://images.unsplash.com/photo-1449024540548-94f5d5a59230?w=400&h=711&fit=crop',
    views: 99000,
    duration: 30
  }
];

export default function QuickLessons() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shorts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shorts.length) % shorts.length);
  };

  const handlers = useSwipeable({
    onSwipedUp: handleNext,
    onSwipedDown: handlePrevious,
    trackMouse: true
  });

  const currentShort = shorts[currentIndex];

  return (
    <div {...handlers} className="flex flex-col items-center justify-center h-screen p-4 relative overflow-hidden">
      <ShortCard
        key={currentShort.id}
        thumbnail={currentShort.thumbnail}
        title={currentShort.title}
        views={currentShort.views}
        duration={currentShort.duration}
      />
      <div className="absolute bottom-10 right-10 flex flex-col space-y-4 text-white">
        <button className="p-2 rounded-full bg-black bg-opacity-50">
          <FaThumbsUp size={24} />
        </button>
        <button className="p-2 rounded-full bg-black bg-opacity-50">
          <FaShare size={24} />
        </button>
        <button className="p-2 rounded-full bg-black bg-opacity-50">
          <FaComment size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={handlePrevious} className="p-2 rounded-full bg-black bg-opacity-50 text-white">
          <FaArrowUp size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={handleNext} className="p-2 rounded-full bg-black bg-opacity-50 text-white">
          <FaArrowDown size={24} />
        </button>
      </div>
    </div>
  );
}