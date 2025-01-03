export interface User {
    id: string;
    email: string;
    name: string;
    avatar: string;
    role: string;
    bookmarks: any[];
    likedLessons: any[];
  }
  
  export interface Message {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: string;
    read: boolean;
  }
  
  export interface ChatRoom {
    id: string;
    participants: User[];
    lastMessage: Message;
    unreadCount: number;
    messages: Message[];
  }