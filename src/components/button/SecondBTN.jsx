import React from "react";

const SecondBTN = ({ BTNtext }) => {
  return (
    <>
      <div className="container xl: mx-auto p-5">
        <button className=" transition duration-300 transform hover:scale-105 bg-red-500 hover:bg-red-700 text-white font-medium py-4 px-12 rounded">
          {BTNtext}
        </button>
      </div>
    </>
  );
};

export default SecondBTN;
