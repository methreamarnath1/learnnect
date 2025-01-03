import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, BookOpen, Play, History, Bookmark, Heart,
  MessageSquare, Newspaper, Briefcase, X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const menuItems = [
  {
    items: [
      { icon: Home, label: 'Home', href: '/' },
      { icon: BookOpen, label: 'Courses', href: '/courses' },
      { icon: Play, label: 'Quick Lessons', href: '/quick-lessons' },
      { icon: Newspaper, label: 'Blog', href: '/blog' },
      { icon: Briefcase, label: 'Jobs', href: '/jobs' },
      { icon: MessageSquare, label: 'Connect', href: '/chat' },
    ]
  }
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-black border-r border-gray-800 overflow-y-auto transition-transform duration-300 z-50 
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
          w-64`}
      >
        <nav className="p-4">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-gray-400 hover:text-white lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
          
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={itemIndex}
                      to={item.href}
                      onClick={onClose}
                      className={`flex items-center space-x-3 text-gray-300 hover:text-green-500 hover:bg-gray-900 rounded-lg p-3 transition-colors ${
                        isActive ? 'bg-gray-900 text-green-500' : ''
                      }`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}