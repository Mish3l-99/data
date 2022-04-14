import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [MobNav, setMobNav] = useState(false);
  const handleNav = () => setMobNav(!MobNav);
  return (
    <div id="navbar" className="w-full fixed bg-black">
      <div className="nav-container">
        <div className="">
          <h1 className="logo">Data.</h1>
        </div>
        <div className="flex justify-between items-center ">
          <ul className="hidden md:flex">
            <li className="border-b border-[#00df9a]">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#company">Company</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Hamburger&cross */}
        <div
          className="md:hidden text-white flex items-center"
          onClick={handleNav}
        >
          {MobNav ? <FiX className="w-5" /> : <FiMenu className="w-5" />}
        </div>
      </div>

      {/* MobNav */}
      <div className={MobNav ? "mobnav duration-1000" : "mobnav ml-[-100%]"}>
        <ul>
          <li onClick={handleNav}>
            <a href="#home">Home</a>
          </li>
          <li onClick={handleNav}>
            <a href="#company">Company</a>
          </li>
          <li onClick={handleNav}>
            <a href="#resources">Resources</a>
          </li>
          <li onClick={handleNav}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleNav}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
