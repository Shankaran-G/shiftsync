import React, { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = ({
  title = "MyApp",
  navLinks = [],
  darkMode = false,
  setDarkMode = () => {},
  showDarkModeToggle = true,
  showLogout = false,
  onLogout = () => {},
}) => {
  const [openNav, setOpenNav] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navTextShadow = {
    textShadow: "4px 7px 7.8px rgba(0, 0, 0, 0.25)",
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-200 font-poppins ${
        darkMode ? "bg-[#BABABA]" : "bg-[#FFFFFF]"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4">
        <div
          style={navTextShadow}
          className="text-4xl font-extrabold text-[#595CFF]"
        >
          {title}
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              style={navTextShadow}
              className={`text-xl font-semibold transition-colors duration-200 ${
                darkMode
                  ? "text-white hover:text-gray-200"
                  : "text-[#595CFF]/80 hover:text-[#4F53FF]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {showLogout && (
            <button
              onClick={onLogout}
              className="border border-[#4D50D2] text-[#595CFF]/80 font-bold font-poppins rounded-[15px] px-4 py-2 transition duration-300 hover:bg-[#4F53FF] hover:text-white"
            >
              Logout
            </button>
          )}
          {showDarkModeToggle && (
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <MoonIcon className="h-6 w-6 text-[#595CFF]" />
              ) : (
                <SunIcon className="h-6 w-6 text-[#595CFF]" />
              )}
            </button>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-[#595CFF]" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[#595CFF]" />
            )}
          </button>
        </div>
      </div>

      {openNav && (
        <div className="md:hidden flex flex-col items-end px-6 pb-4 space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              style={navTextShadow}
              className={`text-xl font-semibold transition-colors duration-200 ${
                darkMode
                  ? "text-white hover:text-gray-200"
                  : "text-[#595CFF]/80 hover:text-[#4F53FF]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {showLogout && (
            <button
              onClick={onLogout}
              className="border border-[#4D50D2] text-[#595CFF]/80 font-bold font-poppins rounded-[15px] px-4 py-2 transition duration-300 hover:bg-[#4F53FF] hover:text-white"
            >
              Logout
            </button>
          )}

          {showDarkModeToggle && (
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <MoonIcon className="h-6 w-6 text-[#595CFF]" />
              ) : (
                <SunIcon className="h-6 w-6 text-[#595CFF]" />
              )}
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
