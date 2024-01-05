import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navs } from "../constants";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = (link) => {
    closeMenu();
    navigate(link);
  };

  const handleSearchClick = () => {
    navigate('/search'); // Navigate to the search page
  };

  return (
    <div className="py-3 px-3 flex w-full justify-between items-center">
      <div className={`hidden md:flex space-x-20 text-gray-300`}>
        {navs.map((nav) => (
          <p key={nav.id} className="cursor-pointer">
            <Link
              to={nav.link}
              className={`${
                location.pathname === nav.link
                  ? "font-extrabold text-white"
                  : ""
              } hover:text-white`}
            >
              {nav.title}
            </Link>
          </p>
        ))}
      </div>

      {/* Hamburger Icon and Logo for smaller devices */}
      <div className="flex items-center gap-5">
        <FaBars
          className="text-gray-300 cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
        <Link to="/">
          <h1 className="logoFont text-white text-5xl">Kodaas</h1>
        </Link>
      </div>

      {/* Navigation Links */}

      {/* Search and Icons */}
      <div className="flex gap-3 md:gap-9 items-center">
        {/* Search Bar for larger devices */}
        <div
          className="md:w-50 md:h-12 rounded-full gap-2 md:px-3 flex items-center cursor-pointer"
          style={{ background: "#3f3f3f" }}
          onClick={handleSearchClick}
        >
          <FaSearch className="w:3 h:3 md:w-6 md:h-6 text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="h-100% bg-transparent outline-none border-none text-white hidden md:flex"
            onClick={handleSearchClick}
          />
        </div>

        {/* Icons */}
        <div className="flex gap-3">
          <Link to="/save">
            <CiHeart className="w-6 h-6 text-gray-300 cursor-pointer" />
          </Link>
          <Link to="/cart">
            <MdOutlineShoppingBag className="w-6 h-6 text-gray-300 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Responsive Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white text-black flex flex-col items-center justify-center z-10">
          <FaTimes
            className="text-black absolute top-4 left-4 cursor-pointer"
            onClick={closeMenu}
          />
          {navs.map((nav) => (
            <p
              key={nav.id}
              className="text-black hover:text-gray-400 my-6 cursor-pointer"
              onClick={() => handleNavLinkClick(nav.link)}
            >
              {nav.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
