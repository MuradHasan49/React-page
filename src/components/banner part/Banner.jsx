import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg from "../../assets/BannerIMG/Banner.png"


const BannerSlider = () => {
  // Static Slider Config
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-5 p-4 md:p-6">
      {/* LEFT CATEGORY LIST */}
      <div className="flex flex-col gap-3 text-gray-700 font-medium w-full md:w-1/4">
        {/* Woman's Fashion */}
        <div className="flex items-center justify-between md:justify-start gap-3 md:gap-5">
          <span>Woman’s Fashion</span>
          <svg
            className="w-4 h-4 md:w-6 md:h-6 fill-current"
            viewBox="0 0 640 640"
          >
            <path d="M264 88C264 57.1 289.1 32 320 32C350.9 32 376 57.1 376 88C376 118.9 350.9 144 320 144C289.1 144 264 118.9 264 88zM240 448L214.2 448C203.3 448 195.6 437.3 199 426.9L242 297.9L193.7 363C183.2 377.2 163.1 380.2 148.9 369.6C134.7 359 131.7 339 142.3 324.8L212.8 229.8C238 196 277.7 176 320 176C362.3 176 402 196 427.2 229.9L497.7 324.9C508.2 339.1 505.3 359.1 491.1 369.7C476.9 380.3 456.9 377.3 446.3 363.1L398 298L441 426.9C444.5 437.3 436.7 448 425.8 448L400 448L400 576C400 593.7 385.7 608 368 608C350.3 608 336 593.7 336 576L336 448L304 448L304 576C304 593.7 289.7 608 272 608C254.3 608 240 593.7 240 576L240 448z" />
          </svg>
        </div>

        {/* Men's Fashion */}
        <div className="flex items-center justify-between md:justify-start gap-3 md:gap-5">
          <span>Men’s Fashion</span>
          <svg
            className="w-4 h-4 md:w-6 md:h-6 fill-current"
            viewBox="0 0 640 640"
          >
            <path d="M376 88C376 57.1 350.9 32 320 32C289.1 32 264 57.1 264 88C264 118.9 289.1 144 320 144C350.9 144 376 118.9 376 88zM400 300.7L446.3 363.1C456.8 377.3 476.9 380.3 491.1 369.7C505.3 359.1 508.3 339.1 497.7 324.9L427.2 229.9C402 196 362.3 176 320 176C277.7 176 238 196 212.8 229.9L142.3 324.9C131.8 339.1 134.7 359.1 148.9 369.7C163.1 380.3 183.1 377.3 193.7 363.1L240 300.7L240 576C240 593.7 254.3 608 272 608C289.7 608 304 593.7 304 576L304 416C304 407.2 311.2 400 320 400C328.8 400 336 407.2 336 416L336 576C336 593.7 350.3 608 368 608C385.7 608 400 593.7 400 576L400 300.7z" />
          </svg>
        </div>

        {/* EXTRA CATEGORY LIST — NO MAP USED */}
        <ul className="space-y-2 mt-1">
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>

      {/* DIVIDER */}
      <div className="hidden md:block w-px bg-gray-300 h-full" />

      {/* SLIDER SECTION */}
      <div className="w-full md:w-3/4 relative  rounded-lg ">
        <Slider {...settings}>
          <div>
            <img className="w-full" src={BannerImg} alt="" />
          </div>
          <div>
            <img className="w-full" src={BannerImg} alt="" />
          </div>
          <div>
            <img className="w-full" src={BannerImg} alt="" />
          </div>
          <div>
            <img className="w-full" src={BannerImg} alt="" />
          </div>
          <div>
            <img className="w-full" src={BannerImg} alt="" />
          </div>
        </Slider>
      </div>

      <style jsx>{`
        .slick-dots {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.8;
        }
        .slick-dots li.slick-active button:before {
          color: #ff0000;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;
