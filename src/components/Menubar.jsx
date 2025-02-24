import React from "react";

export default function Menubar() {
  return (
    <div>

      <div className="drawer">

        
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost  drawer-button">

          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>

          </label>

        </div>
        
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="menu-title text-yellow-600">Special</li>
            <li>
              <a>New Arrivals</a>
            </li>
            <li>
              <a>Best RrR</a>
            </li>
            <li className="menu-title text-yellow-600">Genre-Based</li>
            <li>
              <a>Fiction</a>
            </li>
            <li>
              <a>Non-Fiction</a>
            </li>
            <li>
              <a>Mystrery-Thriller</a>
            </li>
            <li>
              <a>Science Fiction & Fantasy</a>
            </li>
            <li>
              <a>Romance</a>
            </li>
            <li>
              <a>Horror</a>
            </li>
            <li>
              <a>Historical Fiction</a>
            </li>
            <li>
              <a>Children's Books</a>
            </li>
            <li>
              <a>Graphic Novels & Comics</a>
            </li>
            <li className="menu-title text-yellow-600">Life & Hobby</li>
            <li>
              <a>Cooking & Food</a>
            </li>
            <li>
              <a>Travel & Adventure</a>
            </li>
            <li>
              <a>Fitness & Health</a>
            </li>
            <li>
              <a>Music & Instruments</a>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
}
