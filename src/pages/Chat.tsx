import React, { useState } from 'react';
import ChatSidebar from '../components/chat/ChatSidebar';
import ChatWindow from '../components/chat/ChatWindow';
import { chatRooms, currentUser } from '../data/chat';

export default function Chat() {
  const [activeRoomId, setActiveRoomId] = useState(chatRooms[0]?.id);
  const activeRoom = chatRooms.find(room => room.id === activeRoomId);
  const recipient = activeRoom?.participants.find(p => p.id !== currentUser.id);

  const handleSendMessage = (content: string) => {
    // In a real app, this would send the message to a backend
    console.log('Sending message:', content);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] pt-16 bg-gray-900">
      <ChatSidebar
        rooms={chatRooms}
        activeRoomId={activeRoomId}
        onRoomSelect={setActiveRoomId}
      />
      {activeRoom && recipient && (
        <ChatWindow
          messages={activeRoom.messages || []} // In a real app, fetch messages for the active room
          currentUser={currentUser}
          recipient={recipient}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
}