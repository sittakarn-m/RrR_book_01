import React from "react";
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import MainFooter from "../components/MainFooter";

function Layout() {
  return (
    <div>
      <MainNav />
      <Outlet />
      <MainFooter />
    </div>
  );
}

export default Layout;
