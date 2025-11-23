import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg from "../../assets/BannerIMG/Banner.png"
import { IoIosArrowForward } from "react-icons/io";

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
    <div className="container  mx-auto flex flex-col md:flex-row justify-between items-start gap-5 p-4 md:p-6">
      {/* LEFT CATEGORY LIST */}
      <div className="flex flex-col h-[358px] border-r border-gray-300 text-gray-700 font-medium w-full md:w-1/4">

        {/* EXTRA CATEGORY LIST — NO MAP USED */}
        <ul className="space-y-2 mt-1 flex flex-col justify-between h-full text-xl">
          <div className="flex items-center gap-5">
          <li>Woman’s Fashion </li>
            <IoIosArrowForward />
          </div>
          <div className="flex items-center gap-5">
          <li>Men’s Fashion </li>
            <IoIosArrowForward />
          </div>
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
