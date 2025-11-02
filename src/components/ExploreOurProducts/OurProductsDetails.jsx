import React from "react";
import All_head from "../Allhead";
import SalesCard from "../Flash Sales/SalesCard";
import FirstBTN from "../button/FirstBTN";

const OurProductsDetails = () => {
  return (
    <>
      <div className="container xl: mx-auto p-5">
        <All_head head={"Our Products"} h1={"Explore Our Products"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div>
            <SalesCard
              Discount=""
              img="/OurProducts/Frame1.png"
              h2="Breed Dry Dog Food"
              price="$370"
              DiscountPrice="$400"
              rating={5}
              totaled={88}
            />
          </div>
          <div>
            <SalesCard
              Discount=""
              img="/OurProducts/Frame2.png"
              h2="CANON EOS DSLR Camera"
              price="$370"
              DiscountPrice="$400"
              rating={5}
              totaled={88}
            />
          </div>
          <div>
            <SalesCard
              Discount=""
              img="/OurProducts/Frame3.png"
              h2="ASUS FHD Gaming Laptop"
              price="$370"
              DiscountPrice="$400"
              rating={5}
              totaled={88}
            />
          </div>
          <div>
            <SalesCard
              Discount=""
              img="/OurProducts/Frame40.png"
              h2="Curology Product Set "
              price="$370"
              DiscountPrice="$400"
              rating={5}
              totaled={88}
            />
          </div>
          <div>
            <SalesCard
              Discount="NEW"
              img="/OurProducts/New-Mercedes-Benz.png"
              h2="Kids Electric Car"
              price="$370"
              DiscountPrice="$400"
              rating={5}
              totaled={88}
            />
          </div>
          <div>
            <SalesCard
              Discount=""
              img="/OurProducts/Frame4.png"
              h2="Jr. Zoom Soccer Cleats"
              price="$370"
              DiscountPrice="$400"
              rating={5}
              totaled={88}
            />
          </div>
          <div>
            <SalesCard
              Discount="NEW"
              img="/OurProducts/Frame5.png"
              h2="GP11 Shooter USB Gamepad"
              price="$370"
              DiscountPrice="$400"
              rating={5}
              totaled={88}
            />
          </div>
          <div>
            <SalesCard
              Discount=""
              img="/OurProducts/Frame6.png"
              h2="Quilted Satin Jacket"
              price="$370"
              DiscountPrice="$400"
              rating={5}
              totaled={88}
            />
          </div>
        </div>
        <div className=" flex justify-center text-center">
          <FirstBTN />
        </div>
      </div>
    </>
  );
};

export default OurProductsDetails;
