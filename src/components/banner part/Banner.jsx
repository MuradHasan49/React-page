import React from "react";
import { useState, useEffect } from "react";

const BannerSlider = () => {
  const slides = [
    "/Banner.png",
    "/Banner.png",
    "/Banner.png",
  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide every 2 seconds (paused when hovered)
  useEffect(() => {
    if (isHovered) return; // stop sliding when hovered

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [slides.length, isHovered]);

  return (
    <>
      <div className="container xl: flex justify-between items-center mx-auto gap-10 p-5">
          <div className=" flex flex-col gap-5 font-medium text-sm text-gray-700">
            <ul className="flex gap-12">
              <li>Woman’s Fashion</li>
              <svg
                className="w-6 h-6  text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M264 88C264 57.1 289.1 32 320 32C350.9 32 376 57.1 376 88C376 118.9 350.9 144 320 144C289.1 144 264 118.9 264 88zM240 448L214.2 448C203.3 448 195.6 437.3 199 426.9L242 297.9L193.7 363C183.2 377.2 163.1 380.2 148.9 369.6C134.7 359 131.7 339 142.3 324.8L212.8 229.8C238 196 277.7 176 320 176C362.3 176 402 196 427.2 229.9L497.7 324.9C508.2 339.1 505.3 359.1 491.1 369.7C476.9 380.3 456.9 377.3 446.3 363.1L398 298L441 426.9C444.5 437.3 436.7 448 425.8 448L400 448L400 576C400 593.7 385.7 608 368 608C350.3 608 336 593.7 336 576L336 448L304 448L304 576C304 593.7 289.7 608 272 608C254.3 608 240 593.7 240 576L240 448z" />
              </svg>
            </ul>
            <ul className="flex gap-17">
              <li>Men’s Fashion</li>
              <svg
                className="w-6 h-6  text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M376 88C376 57.1 350.9 32 320 32C289.1 32 264 57.1 264 88C264 118.9 289.1 144 320 144C350.9 144 376 118.9 376 88zM400 300.7L446.3 363.1C456.8 377.3 476.9 380.3 491.1 369.7C505.3 359.1 508.3 339.1 497.7 324.9L427.2 229.9C402 196 362.3 176 320 176C277.7 176 238 196 212.8 229.9L142.3 324.9C131.8 339.1 134.7 359.1 148.9 369.7C163.1 380.3 183.1 377.3 193.7 363.1L240 300.7L240 576C240 593.7 254.3 608 272 608C289.7 608 304 593.7 304 576L304 416C304 407.2 311.2 400 320 400C328.8 400 336 407.2 336 416L336 576C336 593.7 350.3 608 368 608C385.7 608 400 593.7 400 576L400 300.7z" />
              </svg>
            </ul>
            <ul>
              <li>Electronics</li>
            </ul>
            <ul>
              <li>Home & Lifestyle</li>
            </ul>
            <ul>
              <li>Medicine</li>
            </ul>
            <ul>
              <li>Sports & Outdoor</li>
            </ul>
            <ul>
              <li>Baby’s & Toys</li>
            </ul>
            <ul>
              <li>Groceries & Pets</li>
            </ul>
            <ul>
              <li>Health & Beauty</li>
            </ul>
        </div>

    <div >
      <img src="/Line 4.png" alt="" />
    </div>

        <div className="bannerW overflow-hidden rounded-lg">
          <div
            className="relative  overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((src, index) => (
                <div key={index} className="min-w-full relative">
                  <img
                    src={src}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-auto"
                  />

                  {/* Shop Now Button */}
                  <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md shadow-md">
                    <a
                      href="#"
                      className="text-gray-700 font-semibold no-underline hover:text-black transition-colors"
                    >
                      Shop Now
                    </a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-5 h-5 text-black fill-current"
                    >
                      <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? "bg-blue-600 scale-125" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
