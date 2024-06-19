/* eslint-disable react/prop-types */

const Navbar = ({ toggleSidebar }) => {
    return (
      <div className="fixed top-0 z-40 w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 md:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          <button onClick={toggleSidebar} className="text-gray-800 dark:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Admin Dashboard</h1>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  