import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SalesCard from "./SalesCard.jsx";
import FirstBTN from "../button/FirstBTN.jsx";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

const CardDetails = () => {
  const swiperRef = useRef(null);

  const cards = [
    {
      img: "/Flash/joy.png",
      h2: "HAVIT HV-G92 Gamepad",
      price: "$120",
      DiscountPrice: "$160",
      Discount: "-40%",
      rating: 3,
      totaled: 40,
    },
    {
      img: "/Flash/keyboard.png",
      h2: "AK-900 Wired Keyboard",
      price: "$900",
      DiscountPrice: "$1160",
      Discount: "-35%",
      rating: 5,
      totaled: 99,
    },
    {
      img: "/Flash/monitor.png",
      h2: "IPS LCD Gaming Monitor",
      price: "$370",
      DiscountPrice: "$400",
      Discount: "-30%",
      rating: 5,
      totaled: 88,
    },
    {
      img: "/Flash/chair.png",
      h2: "S-Series Comfort Chair",
      price: "$375",
      DiscountPrice: "$400",
      Discount: "-25%",
      rating: 4,
      totaled: 50,
    },
    {
      img: "/Flash/joy.png",
      h2: "HAVIT HV-G92 Gamepad",
      price: "$120",
      DiscountPrice: "$160",
      Discount: "-40%",
      rating: 3,
      totaled: 40,
    },
    {
      img: "/Flash/keyboard.png",
      h2: "AK-900 Wired Keyboard",
      price: "$900",
      DiscountPrice: "$1160",
      Discount: "-35%",
      rating: 5,
      totaled: 99,
    },
    {
      img: "/Flash/monitor.png",
      h2: "IPS LCD Gaming Monitor",
      price: "$370",
      DiscountPrice: "$400",
      Discount: "-30%",
      rating: 5,
      totaled: 88,
    },
    {
      img: "/Flash/chair.png",
      h2: "S-Series Comfort Chair",
      price: "$375",
      DiscountPrice: "$400",
      Discount: "-25%",
      rating: 4,
      totaled: 50,
    },
    {
      img: "/Flash/joy.png",
      h2: "HAVIT HV-G92 Gamepad",
      price: "$120",
      DiscountPrice: "$160",
      Discount: "-40%",
      rating: 3,
      totaled: 40,
    },
    {
      img: "/Flash/keyboard.png",
      h2: "AK-900 Wired Keyboard",
      price: "$900",
      DiscountPrice: "$1160",
      Discount: "-35%",
      rating: 5,
      totaled: 99,
    },
    {
      img: "/Flash/monitor.png",
      h2: "IPS LCD Gaming Monitor",
      price: "$370",
      DiscountPrice: "$400",
      Discount: "-30%",
      rating: 5,
      totaled: 88,
    },
    {
      img: "/Flash/chair.png",
      h2: "S-Series Comfort Chair",
      price: "$375",
      DiscountPrice: "$400",
      Discount: "-25%",
      rating: 4,
      totaled: 50,
    },
    {
      img: "/Flash/joy.png",
      h2: "HAVIT HV-G92 Gamepad",
      price: "$120",
      DiscountPrice: "$160",
      Discount: "-40%",
      rating: 3,
      totaled: 40,
    },
    {
      img: "/Flash/keyboard.png",
      h2: "AK-900 Wired Keyboard",
      price: "$900",
      DiscountPrice: "$1160",
      Discount: "-35%",
      rating: 5,
      totaled: 99,
    },
    {
      img: "/Flash/monitor.png",
      h2: "IPS LCD Gaming Monitor",
      price: "$370",
      DiscountPrice: "$400",
      Discount: "-30%",
      rating: 5,
      totaled: 88,
    },
    {
      img: "/Flash/chair.png",
      h2: "S-Series Comfort Chair",
      price: "$375",
      DiscountPrice: "$400",
      Discount: "-25%",
      rating: 4,
      totaled: 50,
    },
  ];

  return (
    <>
      <div className="container mx-auto p-5 relative">
        {/* Custom buttons on top */}

        <div className="flex justify-end gap-3 mb-3 absolute -top-3 right-10 z-10">
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="text-3xl w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:scale-110"
          >
            <IoMdArrowBack className="" />
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="text-3xl w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:scale-110"
          >
            <IoMdArrowForward />
          </button>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          navigation={false} // hide default arrows
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 }, // mobile
            480: { slidesPerView: 1, spaceBetween: 5 },
            640: { slidesPerView: 2, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1024: { slidesPerView: 3, spaceBetween: 5 },
            1280: { slidesPerView: 4, spaceBetween: 5 }, // large screens
            1536: { slidesPerView: 4, spaceBetween: 5 }, // extra large
          }}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <SalesCard
                Discount={card.Discount}
                img={card.img}
                h2={card.h2}
                price={card.price}
                DiscountPrice={card.DiscountPrice}
                rating={card.rating}
                totaled={card.totaled}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto p-5">
        <div className="flex justify-center text-center">
          <FirstBTN />
        </div>
        <img className="w-full mt-10" src="/Line.png" alt="" />
      </div>
    </>
  );
};

export default CardDetails;
