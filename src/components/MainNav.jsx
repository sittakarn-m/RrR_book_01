import React from "react";
import { Link } from "react-router";
import { Logo, MenuDropdown, SearchIcon } from "../assets";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Menubar from "./Menubar";

function MainNav() {
  const isLogedIn = null;
  return (
    <nav className="bg-white text-gray-700 navbar">
      {isLogedIn ? (
        <div className="w-screen max-h-full">
          <div className="flex flex-1 gap-4 bg-red-400 h-20 ">
            <div className="flex align-middle items-center">
              <Menubar />
              <a href="/" className="">
                <Logo />
              </a>
              <Link to="/store" className="btn btn-ghost text-[18px]">
                Home
              </Link>
              <Link to="/about" className="btn btn-ghost text-[18px]">
                About
              </Link>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-4 bg-blue-400 h-20 ">
            <div className="flex align-middle items-center">
              <SearchIcon />
              <div className="btn btn-ghost text-[18px]">Avatar</div>
              <div className="btn btn-ghost text-[18px]">Cart</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen max-h-full">
          <div className="flex flex-1 flex align-middle items-center ">
            {/* <Link to="/" className="btn btn-ghost text-lg">Logo</Link> */}
            <a href="/">
              <Logo />
            </a>
            <Link to="/" className="btn btn-ghost text-[18px]">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost text-[18px]">
              About
            </Link>
            <Menubar />
          </div>

          <div className="flex flex-1 justify-end gap-4">
            <Register />
            <Login />
          </div>
        </div>
      )}
    </nav>
  );
}

export default MainNav;
