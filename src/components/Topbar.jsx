import React from "react";
import "./Topbar.css";
// import { IoSearchOutline } from "react-icons/io5";

const Topbar = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <span>
            <i class="bx bxs-envelope"></i> slubhatti@gmail.com
          </span>
          <span>
            <i class="bx bxs-phone"></i> 0092 300 2104057
          </span>
        </div>

        <div className="search-register">
          <input type="text" placeholder="What would you like to learn?" />
          <button className="register-button">
            <i class="bx bx-search"> </i>
          </button>

          <a href="#" class="login-btn">
            Register / Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

// <div className='text-xl text-slate-500 max-w-[300px] shadow-md flex p-2 rounded-full'>
// <IoSearchOutline />
//   <input type="text" className="text-sm w-full bg-transparent border-none outline-none" placeholder="Looking for something specific?"/>
// </div>
