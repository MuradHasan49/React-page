import React from "react";

const CategoryBox = ({ src, boxname }) => {
  return (
    <>
      <div className="container xl:mx-auto p-5">
        <div
          className="group w-42 h-36 border-2 border-gray-500/30 flex flex-col justify-center items-center gap-4 
                   transition-all duration-300 hover:bg-red-600 hover:rounded-lg hover:shadow-lg cursor-pointer"
        >
          <img
            className="h-14 w-14 transition-all duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
            src={src}
            alt={boxname}
          />

          <p className="font-medium text-gray-800 group-hover:text-white">
            {boxname}
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryBox;
