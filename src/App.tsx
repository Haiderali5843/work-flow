// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rigs from './pages/Rigs'; // Add this line
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';
import Workflow from './pages/Workflow';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Start with sidebar closed

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 1024) { // Close sidebar on screens smaller than lg
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true); // Open sidebar on lg screens and above
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial window size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex-grow p-4 transition-all duration-300 mt-16 ${isSidebarOpen ? 'ml-56' : 'ml-0'}`}>
        <Routes>
          <Route path="/" element={<Rigs />} />  {/* Set Rigs as the default page */}
          <Route path="/Rigs" element={<Rigs />} /> {/* Add this line */}
          <Route path='/Workflow' element={<Workflow/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;