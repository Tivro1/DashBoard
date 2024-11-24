import { CiSearch } from "react-icons/ci";
import profile from "../assets/640969.jpg";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  // State to track the theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Apply the theme to the document when the state changes
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <div>
      <div className="haderBar bg-transparent w-full h-12 flex items-center justify-between">
        {/* Search Box */}
        <div className="w-[60%] flex flex-row items-center border border-gray-300 shadow-lg rounded-md p-2">
          <CiSearch className="text-gray-500 text-xl mr-2" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full bg-transparent border-none outline-none text-gray-700 dark:text-gray-300"
          />
        </div>

        <button className="btn btn-primary flex items-center gap-2 text-orange-300">
          <span>Inbox</span>
          <div className="badge badge-secondary text-white bg-green-400 rounded-lg text-center p-1">
            +99
          </div>
        </button>

        <div className="flex flex-row gap-4">
          <div className="w-6 h-6 rounded-full overflow-hidden border-[1px]">
            <img src={profile} alt="" className="w-full h-full" />
          </div>

          <div>
            {/* Theme Toggle */}
            <input
              type="checkbox"
              checked={isDarkTheme}
              onChange={toggleTheme}
              className="toggle theme-controller"
            />
          </div>
        </div>
      </div>

      <div className="shadow_box">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
