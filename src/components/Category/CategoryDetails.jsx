import React from "react";
import All_head from "../Allhead";
import CategoryBox from "./CategoryBox";

const CategoryDetails = () => {
  return (
    <>
      <div className="container xl: mx-auto flex flex-col p-5">
        <div className="">
        <All_head head={"Categories"} h1={"Browse By Category"} />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-5 gap-4">
            <CategoryBox
              src={"/Category/Category-CellPhone.png"}
              boxname={"Phone"}
            />
            <CategoryBox
              src={"/Category/Category-Computer.png"}
              boxname={"Computers"}
            />
            <CategoryBox
              src={"/Category/Category-SmartWatch.png"}
              boxname={"SmartWatch"}
            />
            <CategoryBox
              src={"/Category/Category-Camera.png"}
              boxname={"Camera"}
            />
            <CategoryBox
              src={"/Category/Category-Headphone.png"}
              boxname={"HeadPhones"}
            />
            <CategoryBox
              src={"/Category/Category-Gamepad.png"}
              boxname={"Gaming"}
            />
          </div>
        </div>
        <div className="">
          <img className="w-full my-17" src="/Line.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
