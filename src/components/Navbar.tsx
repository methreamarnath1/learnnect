import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Download, Bell, User, BookOpen, Menu } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 h-16 bg-black border-b border-gray-800 flex items-center justify-between px-4 z-50">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors lg:hidden"
        >
          <Menu className="w-6 h-6 text-gray-300" />
        </button>
        <Link to="/" className="flex items-center space-x-2 text-green-500">
          <BookOpen className="w-8 h-8" />
          <span className="text-xl font-bold hidden sm:inline">Lernnect</span>
        </Link>
      </div>
      
      <div className="flex-1 max-w-2xl mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full bg-gray-900 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-6">
        <button className="p-2 hover:bg-gray-800 rounded-full md:hidden">
          <Search className="w-5 h-5 text-gray-300" />
        </button>
        <button className="text-gray-300 hover:text-green-500 hidden sm:block">
          <Download className="w-5 h-5" />
        </button>
        <button className="text-gray-300 hover:text-green-500">
          <Bell className="w-5 h-5" />
        </button>
        <div className="relative">
          <button 
            className="w-8 h-8 rounded-full bg-gray-800 text-gray-300 hover:text-green-500 flex items-center justify-center"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <User className="w-5 h-5" />
          </button>
          
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-1 border border-gray-800">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                onClick={() => setShowProfileMenu(false)}
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                onClick={() => setShowProfileMenu(false)}
              >
                Settings
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                onClick={() => {
                  setShowProfileMenu(false);
                  // Add logout logic here
                }}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}