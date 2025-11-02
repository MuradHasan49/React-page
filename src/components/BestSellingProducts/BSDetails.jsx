import React from "react";
import All_head from "../Allhead";
import SecondBTN from "../button/SecondBTN";
import SalesCard from "../Flash Sales/SalesCard";

const BSDetails = () => {
  return (
    <>
      <div className="container xl:mx-auto p-5">
        <div className="flex justify-between items-center w-full">
          <div className="flex-1">
            <All_head head={"This Month"} h1={"Best Selling Products"} />
          </div>
          <div>
            <SecondBTN BTNtext={"View All"} />
          </div>
        </div>

        <div className="flex overflow-hidden p-0">
          <SalesCard
            Discount=""
            img="/Sell/Frame605.png"
            h2="The north coat"
            price="$220"
            DiscountPrice="$360"
            rating={4}
            totaled={70}
          />

          <SalesCard
            Discount=""
            img="/Sell/Frame606.png"
            h2="Gucci duffle bag"
            price="$120"
            DiscountPrice="$160"
            rating={3}
            totaled={30}
          />

          <SalesCard
            Discount=""
            img="/Sell/Frame610.png"
            h2="RGB liquid CPU Cooler"
            price="$620"
            DiscountPrice="$860"
            rating={5}
            totaled={140}
          />

          <SalesCard
            Discount=""
            img="/Sell/Frame612.png"
            h2="Small BookSelf"
            price="$120"
            DiscountPrice="$160"
            rating={3}
            totaled={49}
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
    </>
  );
};

export default BSDetails;
