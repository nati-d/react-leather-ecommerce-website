import React from "react";
import { Link } from "react-router-dom";
import { navs } from "../constants";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="py-3 px-3 flex w-full justify-between items-center">
      <div className="flex space-x-20 text-gray-300">
        {navs.map((nav) => (
          <p key={nav.id} className="cursor-border">
            <Link to={nav.link}>{nav.title}</Link>
          </p>
        ))}
      </div>
      <h1 className="logoFont text-white text-5xl">Kodaas</h1>
      <div className="flex gap-9 items-center ">
        <div
          className="w-50 h-12 rounded-full flex gap-2 items-center px-3 "
          style={{ background: "#3f3f3f" }}
        >
          <FaSearch className="w-6 h-6 text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="h-100% bg-transparent outline-none border-none"
          />
        </div>
        <div className="flex gap-3">
            <CiHeart className="w-6 h-6 text-gray-300 cursor-pointer"/>
            <MdOutlineShoppingBag className="w-6 h-6 text-gray-300 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
