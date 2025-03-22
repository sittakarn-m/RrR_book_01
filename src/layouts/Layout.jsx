import React from "react";
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import MainFooter from "../components/MainFooter";

function Layout() {
  return (
    <div className="bg-white">
      <header className="bg-white">
        <MainNav />
      </header>
      <main className="bg-white">
        <Outlet />
      </main>
      <footer className="bg-white">
        <MainFooter />
      </footer>
    </div>
  );
}

export default Layout;
