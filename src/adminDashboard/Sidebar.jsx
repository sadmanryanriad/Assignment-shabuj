/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 bg-white border-r dark:bg-gray-800 dark:border-gray-700`}>
      <div className="flex flex-col h-full px-4 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Admin Dashboard</h2>
        <nav className="flex flex-col mt-10">
          <NavLink
            to="upcoming-events"
            className="my-2 p-2 rounded-lg text-base md:text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
            onClick={toggleSidebar}
          >
            📅 Upcoming Events
          </NavLink>
          <hr />
          <NavLink
            to="success-stories"
            className="my-2 p-2 rounded-lg text-base md:text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
            onClick={toggleSidebar}
          >
            🎉 Success Stories
          </NavLink>
          <hr />
          <NavLink
            to="marquee-section"
            className="my-2 p-2 rounded-lg text-base md:text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
            onClick={toggleSidebar}
          >
            💬 Marquee Section
          </NavLink>
          <hr />
          <NavLink
            to="image-gallery"
            className="my-2 p-2 rounded-lg text-base md:text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
            onClick={toggleSidebar}
          >
            🖼️ Image Gallery
          </NavLink>
          <hr />
          <NavLink
            to="consultation-form"
            className="my-2 p-2 rounded-lg text-base md:text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
            onClick={toggleSidebar}
          >
            📝 Consultation Form
          </NavLink>
          <hr />
          <NavLink
            to="core-strength"
            className="my-2 p-2 rounded-lg text-base md:text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-blue-400"
            onClick={toggleSidebar}
          >
            💪 Core Strength
          </NavLink>
          <hr />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
