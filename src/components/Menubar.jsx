import React, { useEffect } from "react";
import { useCategoryStore } from "../states/useCategoryStore";
import { Undo2 } from "lucide-react";
import { Link } from "react-router";

export default function Menubar() {
  const { category, loading, error, errorMsg, fetchCategory } =
    useCategoryStore();

  useEffect(() => {
    fetchCategory();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{errorMsg}</p>;

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost  drawer-button"
          >
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

        <div className="drawer-side min-h-screen">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay bg-white min-h-screen"
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-screen w-80 p-4 pt-20 pr-20">
            {Array.isArray(category) &&
              category.map((cat) => (
                <li
                  key={cat.id}
                  className="btn btn-ghost text-[18px] text-yellow-600"
                >
                  {cat.name}
                </li>
              ))}
            <Link
              to="/store"
              className="btn btn-ghost rounded-full items-center w-full mt-6 text-gray-600"
            >
              <Undo2 />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
