import React from "react";
import logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-menu.svg";
import iconMenuClose from "../assets/icon-menu-close.svg";
import { navTitles } from "../constants";

const Header = ({ navbar, setNavbar }) => {
  const handleNavbar = () => setNavbar((prev) => !prev);

  return (
    <header className="flex items-center justify-between py-10 px-4">
      <img src={logo} alt={logo} className="cursor-pointer" />
      {/*Desktop Navbar */}
      <nav className="md:flex">
        <ul className="hidden md:flex px-2 gap-10 text-[#5D5F79] items-start">
          {navTitles.map((title, index) => (
            <li
              key={index}
              className="ease-in duration-300 hover:text-[#EF5F52] cursor-pointer"
            >
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>
        {!navbar && (
          <img
            className="md:hidden"
            src={iconMenu}
            alt={iconMenu}
            onClick={handleNavbar}
          />
        )}
      </nav>
      {/* Mobile Navbar*/}
      {navbar && (
        <nav className="md:hidden bg-white flex flex-col fixed top-0 right-0 w-4/6 h-full py-10 px-4 text-xl">
          <img
            className="ml-auto"
            src={iconMenuClose}
            alt={iconMenuClose}
            onClick={handleNavbar}
          />
          <ul className="flex flex-col md:hidden gap-4 mt-16">
            {navTitles.map((title, index) => (
              <li
                key={index}
                className="ease-in duration-300 hover:text-[#EF5F52] cursor-pointer"
              >
                <a href="#">{title}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
