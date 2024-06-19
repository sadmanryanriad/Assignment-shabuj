import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      <div className="flex-grow p-0 md:p-2 mt-16 md:mt-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
