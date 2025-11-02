import React from "react";
import All_head from "../Allhead";
import CategoryBox from "./CategoryBox";

const CategoryDetails = () => {
  return (
    <>
      <div className="container xl:mx-auto flex flex-col p-5">
        <All_head head={"Categories"} h1={"Browse By Category"} />
        <div className=" flex justify-center overflow-hidden scroll-smooth product-slider">
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
        <div className="">
          <img className="w-full my-17" src="/Line.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
