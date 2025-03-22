import React from "react";
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import MainFooter from "../components/MainFooter";
import AdminSideBar from "../components/AdminSideBar";

function AdminLayout() {
  return (
    <div>
      <MainNav />
      <div className="flex bg-white">
        <AdminSideBar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default AdminLayout;
