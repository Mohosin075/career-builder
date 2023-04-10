import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar my-header-bg px-4 2xl:px-72 xl:px-20 py-4 md:py-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/applied">Applied Jobs</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost font-bold normal-case text-2xl md:text-3xl">
          Career<span className="text-[#112eeb]">Builder</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/applied">Applied Jobs</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="my-btn px-2 py-1 md:px-7 cursor-pointer md:py-5 text-sm md:text-2xl text-white">
          Star Applying
        </a>
      </div>
    </div>
  );
};

export default NavBar;
