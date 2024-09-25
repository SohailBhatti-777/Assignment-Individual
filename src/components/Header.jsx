import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assests/images/eudetor.png";
import { BiUser } from "react-icons/bi";

import "./Header.css";

const Header = () => {
  return (
    <div className="flex w-full bg-slate-300">
      <header className="md:w-4/5 m-auto flex items-center gap-16 py-4">
        <div className="">
          <img src={logo} className="w-40" />
        </div>
        <nav className="flex gap-16">
          <NavLink
            to={"dashboard"}
            className={({ isActive }) =>
              `text-slate-950 ${
                isActive
                  ? "border-b-2 font-bold pb-2 border-solid border-green-800 text-gray-900"
                  : ""
              } `
            }
          >
            {" "}
            Home{" "}
          </NavLink>

          <NavLink
            to={"about"}
            className={({ isActive }) =>
              `text-slate-950 ${
                isActive
                  ? "border-b-2 font-bold pb-2 border-solid border-green-800 text-gray-900"
                  : ""
              } `
            }
          >
            {" "}
            About{" "}
          </NavLink>

          <NavLink
            to={"courses"}
            className={({ isActive }) =>
              `text-slate-950 ${
                isActive
                  ? "border-b-2 font-bold pb-2 border-solid border-green-800 text-gray-900"
                  : ""
              } `
            }
          >
            {" "}
            Courses{" "}
          </NavLink>

          <NavLink
            to={"blog"}
            className={({ isActive }) =>
              `text-slate-950 ${
                isActive
                  ? "border-b-2 font-bold pb-2 border-solid border-green-800 text-gray-900"
                  : ""
              } `
            }
          >
            Blog
          </NavLink>

          <NavLink
            to={"contact"}
            className={({ isActive }) =>
              `text-slate-950 ${
                isActive
                  ? "border-b-2 font-bold pb-8 border-solid border-green-800 text-gray-900"
                  : ""
              } `
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="text-2xl text-slate-950 border p-1 rounded-full border-slate-950 md:ml-auto">
          <BiUser />
        </div>
      </header>
    </div>
  );
};

export default Header;
