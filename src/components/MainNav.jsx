import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo, MenuDropdown, SearchIcon } from "../assets";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Menubar from "./Menubar";
import useUserState from "../states/useUserStore";
import Cart from "./Cart";
import { useBookStore } from "../states/useBookStore";

function MainNav() {
  const isLoggedIn = useUserState((state) => state.token); // Assuming token is set upon login
  const logout = useUserState((state) => state.logout);
  const setQuery = useBookStore((state) => state.setQuery);
  const searchBooks = useBookStore((state) => state.searchBooks);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = async (e) => {
    const keyword = e.target.value;
    setQuery(keyword);

    if (location.pathname !== "/store") {
      navigate("/store");
    }

    await searchBooks();
  };

  return (
    <nav className="bg-white text-gray-700 navbar shadow fixed top-0 left-0 w-full z-50">
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
              <Link className="btn btn-ghost text-[18px]" onClick={logout}>
                Log out
              </Link>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-4 h-20 ">
            <div className="flex align-middle items-center ">
              {/* <SearchIcon /> */}
              <input
                type="text"
                placeholder="Search books..."
                className="input input-bordered input-sm"
                onChange={handleSearch}
              />
              <Link to={"/admin" || "*"} className="btn btn-ghost text-[18px]">
                <div className="avatar flex flex-col">
                  <div className="mask mask-squircle w-11 justify-center">
                    <img src="https://www.svgrepo.com/show/280186/man-people.svg" />
                  </div>
                  <div className="text-[15px] text-neutral-600"> role </div>
                </div>
              </Link>
              <Cart />
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
