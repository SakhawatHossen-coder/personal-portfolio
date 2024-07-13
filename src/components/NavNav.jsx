import { Button } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";

const NavNav = () => {
  const navitems = (
    <>
      <NavLink className="mr-4">
        <Button variant="filled" color="blue">
          Home
        </Button>
      </NavLink>
      <NavLink className="mr-4">
        <Button variant="filled" color="blue">
          Blog
        </Button>
      </NavLink>
      <NavLink className="mr-4">
        <Button variant="filled" color="blue">
          Service
        </Button>
      </NavLink>
      <NavLink>
        <Button variant="filled" color="blue">
          Contact
        </Button>
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-teal-900 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mr-4"
            >
              {navitems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">WEB.Io</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-4">
          <ul className="menu menu-horizontal px-1 mr-4">{navitems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavNav;
