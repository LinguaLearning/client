import React from "react";
import { Navbar, Footer } from "../index";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
