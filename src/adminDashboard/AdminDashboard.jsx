// src/adminDashboard/AdminDashboard.js
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;