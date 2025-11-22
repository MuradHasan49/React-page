import React, { useState, useEffect, useRef } from "react";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: "My Account", href: "#" },
    { name: "My Orders", href: "#" },
    { name: "My Reviews", href: "#" },
    { name: "My Cancellations", href: "#" },
    { name: "Logout", href: "#" },
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
      >
        {/* You can replace with an actual profile image */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-600"
          fill="currentColor"
          viewBox="0 0 640 640"
        >
          <path d="M320 320c88.2 0 160-71.8 160-160S408.2 0 320 0 160 71.8 160 160s71.8 160 160 160zm0 32c-105.9 0-320 53.1-320 160v48c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32v-48c0-106.9-214.1-160-320-160z" />
        </svg>
      </button>

      {/* Popup Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
