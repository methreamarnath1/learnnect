import React from 'react';
import type { ChatRoom } from '../../types';
import { Search } from 'lucide-react';

interface ChatSidebarProps {
  rooms: ChatRoom[];
  activeRoomId: string;
  onRoomSelect: (roomId: string) => void;
}

export default function ChatSidebar({ rooms, activeRoomId, onRoomSelect }: ChatSidebarProps) {
  return (
    <div className="w-full md:w-80 border-r border-gray-800 h-full bg-gray-900">
      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="space-y-2">
          {rooms.map(room => {
            const otherParticipant = room.participants.find(p => p.id !== activeRoomId);
            return (
              <button
                key={room.id}
                onClick={() => onRoomSelect(room.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  room.id === activeRoomId ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <img
                  src={otherParticipant?.avatar}
                  alt={otherParticipant?.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-white font-medium">{otherParticipant?.name}</h3>
                  <p className="text-sm text-gray-400">{room.lastMessage?.content}</p>
                </div>
                {room.unreadCount > 0 && (
                  <span className="text-xs bg-red-500 text-white rounded-full px-2 py-1">
                    {room.unreadCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}