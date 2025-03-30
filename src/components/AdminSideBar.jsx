import React from "react";
import { Link } from "react-router";

function AdminSideBar() {
  return (
    <div>
      <div className="flex flex-col gap-2 w-[240px] h-screen shadow-md text-[18px] cursor-pointer px-2 bg-gray-50 text-base !from-neutral-800 pt-40 ">
        <Link className="btn btn-ghost text-[18px] justify-start " to="/admin">
          Dashboard
        </Link>
        <Link className="btn btn-ghost text-[18px] justify-start" to="/admin/manage-books">
          Book Management
        </Link>
        <Link className="btn btn-ghost text-[18px] justify-start" to="/admin/manage-category">
          Category Management
        </Link>
        <Link className="btn btn-ghost text-[18px] justify-start" to="/admin/manage-users">
          User Management
        </Link>
      </div>
    </div>
  );
}

export default AdminSideBar;
