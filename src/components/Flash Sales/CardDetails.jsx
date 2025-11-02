import React from "react";
import SalesCard from "./SalesCard.jsx";
import FirstBTN from "../button/FirstBTN.jsx";

const CardDetails = () => {
  return (
    <>
      <div className="container xl: mx-auto relative p-5">
        <div className="flex absolute bottom-115 right-15">
          <button
            onClick={() =>
              document.querySelector(".product-slider").scrollBy({
                left: -300,
                behavior: "smooth",
              })
            }
            className="absolute bottom-0 right-0 bg-gray-400 hover:bg-gray-500 text-black rounded-full p-2 shadow-md hover:scale-105 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 640 640"
              className="w-6 h-6"
            >
              <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
            </svg>
          </button>

          <button
            onClick={() =>
              document.querySelector(".product-slider").scrollBy({
                left: 300,
                behavior: "smooth",
              })
            }
            className="absolute bottom-0 right-15 bg-gray-400 hover:bg-gray-500 text-black rounded-full p-2 shadow-md hover:scale-105 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 640 640"
              className="w-6 h-6"
            >
              <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center  overflow-hidden scroll-smooth product-slider">
          <SalesCard
            Discount="-40%"
            img="/Flash/joy.png"
            h2="HAVIT HV-G92 Gamepad"
            price="$120"
            DiscountPrice="$160"
            rating={3}
            totaled={40}
          />
          <SalesCard
            Discount="-35%"
            img="/Flash/keyboard.png"
            h2="AK-900 Wired Keyboard"
            price="$900"
            DiscountPrice="$1160"
            rating={5}
            totaled={99}
          />
          <SalesCard
            Discount="-30%"
            img="/Flash/monitor.png"
            h2="IPS LCD Gaming Monitor"
            price="$370"
            DiscountPrice="$400"
            rating={5}
            totaled={88}
          />
          <SalesCard
            Discount="-40%"
            img="/Flash/joy.png"
            h2="HAVIT HV-G92 Gamepad"
            price="$120"
            DiscountPrice="$160"
            rating={3}
            totaled={40}
          />
          <SalesCard
            Discount="-35%"
            img="/Flash/keyboard.png"
            h2="AK-900 Wired Keyboard"
            price="$900"
            DiscountPrice="$1160"
            rating={5}
            totaled={99}
          />
          <SalesCard
            Discount="-30%"
            img="/Flash/monitor.png"
            h2="IPS LCD Gaming Monitor"
            price="$370"
            DiscountPrice="$400"
            rating={5}
            totaled={88}
          />
          <SalesCard
            Discount="-30%"
            img="/Flash/monitor.png"
            h2="IPS LCD Gaming Monitor"
            price="$370"
            DiscountPrice="$400"
            rating={5}
            totaled={88}
          />
          <SalesCard
            Discount="-25%"
            img="/Flash/chair.png"
            h2="S-Series Comfort Chair "
            price="$375"
            DiscountPrice="$400"
            rating={4}
            totaled={50}
          />
          <SalesCard
            Discount="-40%"
            img="/Flash/joy.png"
            h2="HAVIT HV-G92 Gamepad"
            price="$120"
            DiscountPrice="$160"
            rating={3}
            totaled={40}
          />
          <SalesCard
            Discount="-35%"
            img="/Flash/keyboard.png"
            h2="AK-900 Wired Keyboard"
            price="$900"
            DiscountPrice="$1160"
            rating={5}
            totaled={99}
          />
          <SalesCard
            Discount="-30%"
            img="/Flash/monitor.png"
            h2="IPS LCD Gaming Monitor"
            price="$370"
            DiscountPrice="$400"
            rating={5}
            totaled={88}
          />

          <SalesCard
            Discount="-40%"
            img="/Flash/joy.png"
            h2="HAVIT HV-G92 Gamepad"
            price="$120"
            DiscountPrice="$160"
            rating={3}
            totaled={40}
          />
          <SalesCard
            Discount="-35%"
            img="/Flash/keyboard.png"
            h2="AK-900 Wired Keyboard"
            price="$900"
            DiscountPrice="$1160"
            rating={5}
            totaled={99}
          />
        </div>
      </div>
      <div className="container xl: mx-auto p-5">
        <div className=" flex justify-center text-center">
          <FirstBTN />
        </div>
        <img className="w-full mt-10" src="/Line.png" alt="" />
      </div>
    </>
  );
};

export default CardDetails;
