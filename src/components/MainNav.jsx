import React from "react";
import { Link } from "react-router-dom";
import { Logo, MenuDropdown, SearchIcon } from "../assets";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Menubar from "./Menubar";
import useUserState from "../states/useUserStore";
import Cart from "./Cart";

function MainNav() {
  const isLoggedIn = useUserState((state) => state.token); // Assuming token is set upon login
  const logout = useUserState((state) => state.logout);

  return (
    <nav className="bg-white text-gray-700 navbar shadow">
      {isLoggedIn ? (
        <div id="nav01" className="w-screen max-h-full">
          <div className="flex flex-1 gap-4 h-20 ">
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
              <Link className="btn btn-ghost text-[18px]" onClick={logout}>Log out</Link>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-4 h-20 ">
            <div className="flex align-middle items-center">
              <SearchIcon />
              <div className="btn btn-ghost text-[18px]">Avatar</div>
              <Cart/>
            </div>
          </div>
        </div>
      ) : (
        <div id="nav02" className="w-screen max-h-full">
          <div className="flex flex-1  align-middle items-center ">
            <a href="/">
              <Logo />
            </a>
            <Link to="/" className="btn btn-ghost text-[18px]">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost text-[18px]">
              About
            </Link>
            {/* <Menubar /> */}
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
