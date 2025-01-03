import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseView from './pages/CourseView';
import QuickLessons from './pages/QuickLessons';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Jobs from './pages/Jobs';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className={`pt-16 p-4 sm:p-8 ${isSidebarOpen ? 'sm:ml-64' : ''} transition-all duration-300`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseView />} />
            <Route path="/quick-lessons" element={<QuickLessons />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;