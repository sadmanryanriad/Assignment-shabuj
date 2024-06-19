// src/components/Sidebar.js
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Admin Dashboard</h2>
      <nav className="flex flex-col mt-10">
        <NavLink
          to="upcoming-events"
          className="my-2 p-2 rounded-lg text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
        >
          📅 Upcoming Events
        </NavLink>
        <hr />
        <NavLink
          to="success-stories"
          className="my-2 p-2 rounded-lg text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
        >
          🎉 Success Stories
        </NavLink>
        <hr />
        <NavLink
          to="marquee-section"
          className="my-2 p-2 rounded-lg text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
        >
          💬 Marquee Section
        </NavLink>
        <hr />
        <NavLink
          to="image-gallery"
          className="my-2 p-2 rounded-lg text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
        >
          🖼️ Image Gallery
        </NavLink>
        <hr />
        <NavLink
          to="consultation-form"
          className="my-2 p-2 rounded-lg text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
        >
          📝 Consultation Form
        </NavLink>
        <hr />
      </nav>
    </div>
  );
};

export default Sidebar;
