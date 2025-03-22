import React, { useEffect } from "react";
import { useCategoryStore } from "../states/useCategoryStore";

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

        <div className="drawer-content">
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

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {Array.isArray(category) &&
              category.map((cat) => <li key={cat.id} className="btn btn-ghost text-[18px] text-yellow-600">{cat.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
