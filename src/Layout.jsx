import React from "react";
import { Outlet } from "react-router-dom";

// Make sure the paths match the folder/file names exactly
import Navbar from "./components/Navbar/Navbar";       // Navbar.jsx inside Navbar folder
import Discount from "./components/Discount/Discount"; // Discount.jsx inside Discount folder
import Footer from "./components/Footer/Footer";       // Footer.jsx inside Footer folder

const Layout = () => {
  return (
    <>
      <Discount />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
