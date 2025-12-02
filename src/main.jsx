import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // Keep App import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx"

import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About/About.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import Error from "./Pages/Error.jsx";
import Wishlist from "./Pages/Wishlist.jsx"

// main.jsx
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, // ← Uses your Layout component
    children: [
      { index: true, Component: App },     
      { path: "contact", Component: Contact },
      { path: "About", Component: About },
      { path: "SignUp", Component: SignUp },
      { path: "Login", Component: Login },
      { path: "Error", Component: Error },
      { path: "Wishlist", Component: Wishlist },
    ],
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

