import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavNav from "../components/NavNav";

const Layout = () => {
  return (
    <div>
      <NavNav />
      <div className="pb-20">

      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
