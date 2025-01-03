import React, { useState } from 'react';
import type { Message, User } from '../../types';
import { Send } from 'lucide-react';

interface ChatWindowProps {
  messages: Message[];
  currentUser: User;
  recipient: User;
  onSendMessage: (content: string) => void;
}

export default function ChatWindow({ messages, currentUser, recipient, onSendMessage }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-gray-900">
      <div className="border-b border-gray-800 p-4 bg-gray-800">
        <div className="flex items-center space-x-3">
          <img
            src={recipient.avatar}
            alt={recipient.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-white font-medium">{recipient.name}</h3>
            <p className="text-sm text-gray-400">{recipient.role}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => {
          const isOwn = message.senderId === currentUser.id;
          return (
            <div
              key={message.id}
              className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  isOwn ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-200'
                }`}
              >
                <p>{message.content}</p>
                <span className="text-xs opacity-75 mt-1 block">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-gray-800 p-4 bg-gray-800">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}