import React, { useEffect, useState } from "react";

const FlashHead = () => {
  // Set your countdown target date/time
  const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto p-5 mt-10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-8 bg-red-600 rounded-sm"></div>
        <span className="text-red-600 font-semibold text-lg">Today’s</span>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Flash Sales</h1>

        <div className="flex gap-6 items-center mr-180">
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-600">Days</span>
            <span className="text-3xl font-bold text-black">
              {timeLeft.days} <span className="text-red-600">:</span>
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-600">Hours</span>
            <span className="text-3xl font-bold text-black">
              {timeLeft.hours} <span className="text-red-600">:</span>
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-600">Minutes</span>
            <span className="text-3xl font-bold text-black">
              {timeLeft.minutes} <span className="text-red-600">:</span>
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-600">Seconds</span>
            <span className="text-3xl font-bold text-black">
              {timeLeft.seconds}
            </span>
          </div>
        </div>
        <div className="slider flex gap-3 hover:cursor-pointer  ">
          <svg
            className="p-1 h-10 w-10 rounded-3xl bg-gray-400 text-black fill-current hover:scale-105 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="
            M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8    361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3     64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3     502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
            />
          </svg>

          <svg
            className="hover:scale-105 transition-transform p-1 h-10 w-10 rounded-3xl bg-gray-400 text-black fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FlashHead;
