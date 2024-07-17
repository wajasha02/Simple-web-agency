import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="px-12 flex items-center justify-between  h-[75px] w-full lg:fixed  bg-white lg:px-28 py-3 shadow-md z-50">
      <h1 className="text-2xl font-bold text-pink-500">Simple.</h1>
      <ul className="lg:flex items-center font-medium hidden ">
        <li className="p-4 cursor-pointer">
          <Link
            className="border-b-2 border-pink-500 ease-in-out duration-200"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link
            className="hover:border-b-2 border-pink-500 ease-in-out duration-200"
            to="/service"
          >
            Our Services
          </Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link
            className="hover:border-b-2 border-pink-500 ease-in-out duration-200"
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="p-4 cursor-pointer">
          <a
            className="hover:border-b-2 border-pink-500 ease-in-out duration-200"
            href="#"
          >
            Our Team
          </a>
        </li>
        <li className="p-4 cursor-pointer">
          <a
            className="hover:border-b-2 border-pink-500 ease-in-out duration-200"
            href="#"
          >
            Work With Us
          </a>
        </li>
      </ul>
      <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-400 lg:block hidden ease-in-out duration-500">
        Contact Us
      </button>
      <div className="lg:hidden " onClick={handleNav}>
        {!nav ? (
          <FontAwesomeIcon className="text-2xl text-pink-500" icon={faXmark} />
        ) : (
          <FontAwesomeIcon className="text-2xl text-pink-500" icon={faBars} />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-green-400 bg-white ease-in-out duration-500 z-[1000] lg:hidden"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="p-4 text-2xl font-bold text-pink-500">Simple.</h1>
        <ul className="p-4 uppercase text-sm font-medium">
          <li className="p-4 cursor-pointer border-b border-green-300">
            <a className="text-pink-500  ease-in-out duration-200" href="#">
              Home
            </a>
          </li>
          <li className="p-4 cursor-pointer border-b border-green-300">
            <a
              className="hover:text-pink-500  ease-in-out duration-200"
              href="#"
            >
              Our Services
            </a>
          </li>
          <li className="p-4 cursor-pointer border-b border-green-300">
            <a
              className="hover:text-pink-500  ease-in-out duration-200"
              href="#"
            >
              About
            </a>
          </li>
          <li className="p-4 cursor-pointer border-b border-green-300">
            <a
              className="hover:text-pink-500  ease-in-out duration-200"
              href="#"
            >
              Our Team
            </a>
          </li>
          <li className="p-4 cursor-pointer">
            <a
              className="hover:text-pink-500  ease-in-out duration-200"
              href="#"
            >
              Work With Us
            </a>
          </li>
        </ul>
        <button className="bg-pink-500 text-white py-2 px-4 ml-8 rounded-lg hover:bg-pink-400 lg:block ">
          Contact Us
        </button>
      </div>
    </div>
  );
};
