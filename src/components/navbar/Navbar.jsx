import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* ===== Left Side ===== */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-red-600 cursor-pointer">
            MHS Exclusive
          </div>
        </div>

        {/* ===== Center Links (Desktop Only) ===== */}
        <div className="hidden md:flex gap-8 font-semibold text-gray-700">
          {["Home", "Contact", "About", "Sign Up"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* ===== Right Side ===== */}
        <div className="flex items-center gap-4">
          {/* Desktop: Search + 2 SVG */}
          <div className="hidden md:flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-lg border border-gray-300 outline-none"
            />
          </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
            </svg>

          {/* Mobile: Hamburger + Search */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => setShowSearchMobile(!showSearchMobile)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 640 640"
              >
                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
              </svg>
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {/* Hamburger Icon */}
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

      {/* ===== Mobile Search Bar ===== */}
      {showSearchMobile && (
        <div className="md:hidden bg-gray-100 p-4 border-t border-gray-300">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg outline-none"
          />
        </div>
      )}

      {/* ===== Mobile Menu Collapse ===== */}
      {menuOpen && (
        <div className="md:hidden flex flex-col justify-center items-center bg-gray-50 border-t border-gray-300 p-4">
          {["Home", "Contact", "About", "Sign Up"].map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 font-semibold text-gray-700 hover:text-black"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
