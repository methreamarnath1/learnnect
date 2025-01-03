import { ChatRoom, User, Message } from '../types';

export const currentUser: User = {
  id: '1',
  email: 'user@example.com',
  name: 'Current User',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces',
  role: 'student',
  bookmarks: [],
  likedLessons: []
};

export const chatRooms: ChatRoom[] = [
  {
    id: '1',
    participants: [
      currentUser,
      {
        id: '2',
        email: 'instructor@example.com',
        name: 'John Instructor',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces',
        role: 'instructor',
        bookmarks: [],
        likedLessons: []
      }
    ],
    lastMessage: {
      id: '1',
      senderId: '2',
      receiverId: '1',
      content: 'Hello! How can I help you with the course?',
      timestamp: '2024-03-15T10:00:00Z',
      read: false
    },
    unreadCount: 1,
    messages: [
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        content: 'Hello! How can I help you with the course?',
        timestamp: '2024-03-15T10:00:00Z',
        read: false
      },
      {
        id: '2',
        senderId: '1',
        receiverId: '2',
        content: 'I have a question about the last assignment.',
        timestamp: '2024-03-15T10:05:00Z',
        read: true
      }
    ]
  },
  // Add more chat rooms here
];