import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        
        {/* Profile Dropdown */}
        <div className="relative ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <FaUserCircle className="text-gray-100 text-2xl" />
          </button>

          {isOpen && (
            <div className="absolute  right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-60">
              <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
              <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
