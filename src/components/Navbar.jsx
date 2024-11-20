import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white  shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="text-teal-400">Happn</span>
          <span className="text-white">In</span>
        </h1>


        {/* Navigation Links */}
        <ul className="flex gap-6 text-lg items-center">
          <li>
            <a href="#home" className="text-white hover:text-teal-400 transition-colors">
              Home
            </a>
          </li>
          <li className="relative">
            {/* Events Dropdown */}
            <button
              onClick={toggleDropdown}
              className="flex items-center text-white hover:text-teal-400 transition-colors"
            >
              Events
              <span className="ml-2 text-sm">
                {dropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-transparent rounded shadow-lg">
                <li>
                  <a
                    href="#hackathons"
                    className="block px-4 py-2 hover:bg-gray-900 text-white transition-colors hover:text-teal-400"
                  >
                    Hackathons
                  </a>
                </li>
                <li>
                  <a
                    href="#workshops"
                    className="block px-4 py-2 hover:bg-gray-900 text-white hover:text-teal-400 transition-colors"
                  >
                    Workshops
                  </a>
                </li>
                <li>
                  <a
                    href="#competitions"
                    className="block px-4 py-2 hover:bg-gray-900 text-white hover:text-teal-400 transition-colors"
                  >
                    Competitions
                  </a>
                </li>
                <li>
                  <a
                    href="#cultural"
                    className="block px-4 py-2 hover:bg-gray-900 text-white hover:text-teal-400 transition-colors"
                  >
                    Cultural Events
                  </a>
                </li>
                <li>
                  <a
                    href="#official-college"
                    className="block px-4 py-2 hover:bg-gray-900 text-white hover:text-teal-400 transition-colors"
                  >
                    Official College Events
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#societies" className="text-white hover:text-teal-400 transition-colors">
              Societies
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-teal-400 transition-colors">
              Contact
            </a>
          </li>
          <li>
            <a href="#login" className="text-white hover:text-teal-400 transition-colors">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

