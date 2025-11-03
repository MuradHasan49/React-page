import React from "react";
import All_head from "../Allhead";
import SecondBTN from "../button/SecondBTN";
import SalesCard from "../Flash Sales/SalesCard";

const BSDetails = () => {
  return (
    <>
      <div className="container xl: mx-auto p-5">
        <div className="flex flex-col sm:flex-row justify-between  w-full">
          <div className="flex-1">
            <All_head head={"This Month"} h1={"Best Selling Products"} />
          </div>
          <div className="mx-auto">
            <SecondBTN BTNtext={"View All"} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
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
      </div>
    </>
  );
};

export default BSDetails;
