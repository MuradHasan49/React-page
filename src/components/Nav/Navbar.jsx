import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { HiOutlineEye } from "react-icons/hi";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z" />
        </svg>
      </button>

      {/* Popup Menu */}
      {open && (
        <div className="glass-dropdown ">
          <ul className="glass-list flex flex-col py-2">
            <Link to="/Error">
              {" "}
              <li className="my-list px-4 py-2 text-white hover:bg-black rounded-lg cursor-pointer transition-colors">
                My Account
              </li>
            </Link>
            <Link to="/Error">
              {" "}
              <li className="my-list px-4 py-2 text-white hover:bg-black rounded-lg cursor-pointer transition-colors">
                My Orders
              </li>
            </Link>
            <Link to="/Error">
              {" "}
              <li className="my-list px-4 py-2 text-white hover:bg-black rounded-lg cursor-pointer transition-colors">
                My Cancellations
              </li>
            </Link>
            <Link to="/Error">
              {" "}
              <li className="my-list px-4 py-2 text-white hover:bg-black rounded-lg cursor-pointer transition-colors">
                My Reviews
              </li>
            </Link>
            <Link to="/Error">
              {" "}
              <li className="my-list px-4 py-2 text-white hover:bg-black rounded-lg cursor-pointer transition-colors">
                Logout
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const navRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setShowSearchMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setShowSearchMobile(false);
  }, [window.location.pathname]); // This will close menu on route change

  return (
    <nav className="bg-white border-b border-gray-300 shadow-sm" ref={navRef}>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-2xl font-bold text-red-600 cursor-pointer"
          >
            MHS Exclusive
          </Link>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex gap-8 font-semibold text-gray-700">
          <ul className="flex gap-4 lg:gap-12">
            <li
              className=" py-1 text-gray-700 cursor-pointer 
                    relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[2px] after:bg-gray-600 after:w-0 
                    after:transition-all after:duration-300 
                    hover:after:w-full"
            >
              <Link to="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li
              className="py-1 text-gray-700  cursor-pointer 
                    relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[2px] after:bg-gray-600 after:w-0 
                    after:transition-all after:duration-300 
                    hover:after:w-full"
            >
              <Link to="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
            <li
              className="py-1 text-gray-700  cursor-pointer 
                    relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[2px] after:bg-gray-600 after:w-0 
                    after:transition-all after:duration-300 
                    hover:after:w-full"
            >
              <Link to="/About" className="hover:text-black">
                About
              </Link>
            </li>
            <li
              className="py-1 text-gray-700  cursor-pointer 
                    relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[2px] after:bg-gray-600 after:w-0 
                    after:transition-all after:duration-300 
                    hover:after:w-full"
            >
              <Link to="/SignUp" className="hover:text-black">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <input
              type="text"
              placeholder=" What are you looking for? "
              className="w- h-10 rounded-lg border text-sm border-gray-300 outline-none"
            />
            {/* Search icon as button */}
            <div className="">
              <Link to={"/Error"}>
                {" "}
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <HiOutlineEye className="w-6 h-6 cursor-pointer" />
                </button>
              </Link>
              <Link to={"/Error"}>
                {" "}
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <PiShoppingCartBold className="w-6 h-6 cursor-pointer" />
                </button>
              </Link>
            </div>

            <ProfileMenu />
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setShowSearchMobile(!showSearchMobile)}
              className="p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 640 640"
              >
                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
              </svg>
            </button>
            <ProfileMenu />
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H24C10.7 128 0 117.3 0 104V88zM0 248c0-13.3 10.7-24 24-24H424c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24v-16zM448 408c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24H424c13.3 0 24 10.7 24 24v16z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showSearchMobile && (
        <div className="lg:hidden bg-gray-100 p-4 border-t border-gray-300">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg outline-none"
          />
        </div>
      )}

      {/* Mobile Menu Collapse */}
      {menuOpen && (
        <div className="md:hidden flex flex-col justify-center items-center bg-gray-50 border-t border-gray-300 p-4">
          <Link
            to="/"
            className="block py-2 font-semibold text-gray-700 hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="block py-2 font-semibold text-gray-700 hover:text-black"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="block py-2 font-semibold text-gray-700 hover:text-black"
          >
            About
          </Link>
          <Link
            to="/SignUp"
            className="block py-2 font-semibold text-gray-700 hover:text-black"
          >
            Sign Up
          </Link>
        </div>
      )}
      <style jsx>{`
        /* container (use absolute/right/top as needed in your layout) */
        .glass-dropdown {
          position: absolute;
          right: 0;
          margin-top: 8px; /* mt-2 */
          width: 192px; /* w-48 */
          border-radius: 12px; /* rounded-md */
          overflow: hidden; /* keep glossy/top gradient inside rounded corner */
          z-index: 9999;

          /* dark gradient over blurred background */
          background: rgba(0, 0, 0, 0.2) ;

          /* glass blur (requires a background behind it to be visible) */
          backdrop-filter: blur(34px) saturate(120%);
          -webkit-backdrop-filter: blur(24px) saturate(120%);

          /* thin translucent border */
          border: 1px solid rgba(0, 0, 0, 0.25);

        }

        /* list reset / spacing */
        .glass-list {
          list-style: none;
          margin: 0;
          padding: 10px 0; /* vertical space */
        }

        /* each item */
        .glass-list li {
          padding: 12px 18px;
          color: #ffffff; /* white text */
          font-weight: 500;
          font-size: 14px;
          line-height: 1.1;
          cursor: pointer;
          position: relative;
          transition: background-color 0.18s ease, transform 0.12s ease;
          /* tiny text glow to show against the dark */
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.35),
            0 2px 8px rgba(0, 0, 0, 0.25);
        }

        /* hover effect: faint highlight and slight slide */
        .glass-list li:hover {
          background:  rgba(255, 255, 255, 0.02)
          
          transform: translateX(2px);
        }

        /* optional divider between items */
        .glass-list li + li {
          border-top: 1px solid rgba(255, 255, 255, 0.03);
        }

        /* rounded corner smoothing on first/last items (if needed) */
        .glass-list li:first-child {
          padding-top: 14px;
        }
        .glass-list li:last-child {
          padding-bottom: 14px;
        }

        /* small accessibility: focus state */
        .glass-list li:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
