import React from "react";

const Discount = () => {
  return (
    <>
      <div className="bg-black h-12">
        <div className="container xl: h-full mx-auto flex p-4 ">
          <div className=" text-white h-full flex ml-auto text-center items-center gap-5 ">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a
              className="font-bold underline-offset-4 hover:underline transition-all duration-300 ease-in-out"
              href=""
            >
              ShopNow
            </a>
          </div>
          <div className="ml-auto h-full flex justify-end items-center gap-3">
            <select className=" text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-200 cursor-pointer">
              <option className="bg-gray-700 text-white" value="en">
                English
              </option>
              <option className="bg-gray-700 text-white" value="bn">
                Bangla
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
