import React, { useEffect, useState } from "react";

const FlashHead = () => {
  // Set your countdown target date/time
  const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; 

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
  },[]);

  return (
    <div className="container mx-auto p-5 mt-10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-8 bg-red-600 rounded-sm"></div>
        <span className="text-red-600 font-semibold text-lg">Today’s</span>
      </div>

      <div className="flex flex-wrap items-center xl:gap-20 sm:flex gap-10 pb-5">
        <h1 className="text-3xl font-bold text-gray-900">Flash Sales</h1>

        <div className="">
          <div className="flex gap-6 items-center">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-gray-600  mr-4">
                Days
              </span>
              <span className="text-3xl font-bold text-black">
                {timeLeft.days} <span className="text-red-600">:</span>
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-gray-600 mr-4">
                Hours
              </span>
              <span className="text-3xl font-bold text-black">
                {timeLeft.hours} <span className="text-red-600">:</span>
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-gray-600 mr-4">
                Minutes
              </span>
              <span className="text-3xl font-bold text-black">
                {timeLeft.minutes} <span className="text-red-600">:</span>
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-gray-600 ">
                Seconds
              </span>
              <span className="text-3xl font-bold text-black ">
                {timeLeft.seconds}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashHead;
