import React from "react";
import { Outlet } from "react-router-dom";

import Discount from "./components/Discount/Discount"; // Discount.jsx inside Discount folder
import Footer from "./components/Footer/Footer";  
import Navbar from "./components/Nav/Navbar" ;   // Footer.jsx inside Footer folder

const Layout = () => {
  return (
    <>
      <Discount />
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
