import React, { useEffect, useState } from "react";
import All_head from "../Allhead";
import SalesCard from "../Flash Sales/SalesCard";
import FirstBTN from "../button/FirstBTN";

const OurProductsDetails = () => {
  const products = [
    {
      Discount: "",
      img: "/OurProducts/Frame1.png",
      h2: "Breed Dry Dog Food",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
    {
      Discount: "",
      img: "/OurProducts/Frame2.png",
      h2: "CANON EOS DSLR Camera",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
    {
      Discount: "",
      img: "/OurProducts/Frame3.png",
      h2: "ASUS FHD Gaming Laptop",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
    {
      Discount: "",
      img: "/OurProducts/Frame40.png",
      h2: "Curology Product Set",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
    {
      Discount: "NEW",
      img: "/OurProducts/New-Mercedes-Benz.png",
      h2: "Kids Electric Car",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
    {
      Discount: "",
      img: "/OurProducts/Frame4.png",
      h2: "Jr. Zoom Soccer Cleats",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
    {
      Discount: "NEW",
      img: "/OurProducts/Frame5.png",
      h2: "GP11 Shooter USB Gamepad",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
    {
      Discount: "",
      img: "/OurProducts/Frame6.png",
      h2: "Quilted Satin Jacket",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
        {
      Discount: "NEW",
      img: "/OurProducts/New-Mercedes-Benz.png",
      h2: "Kids Electric Car",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
        {
      Discount: "NEW",
      img: "/OurProducts/Frame5.png",
      h2: "GP11 Shooter USB Gamepad",
      price: "$370",
      DiscountPrice: "$400",
      rating: 5,
      totaled: 88,
    },
  ];

  // ✅ Control visible products based on screen width
  const [visibleProducts, setVisibleProducts] = useState(products);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        // xl screen or bigger → show all
        setVisibleProducts(products);
      } else if (width >= 1024) {
        // lg screen only → show first 8
        setVisibleProducts(products.slice(0, 9));
      } else if(width >=768){
        // smaller screens → show all
        setVisibleProducts(products.slice(0, 6));
      } else {
        // smaller screens → show all
        setVisibleProducts(products.slice(0,4));
      }
    };

    handleResize(); // Run once when mounted
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [products]);

  return (
    <>
      <div className="container mx-auto p-5">
        <All_head head={"Our Products"} h1={"Explore Our Products"} />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {visibleProducts.map((item, index) => (
              <div key={index}>
                <SalesCard {...item} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center text-center mt-5">
          <FirstBTN />
        </div>
      </div>
    </>
  );
};

export default OurProductsDetails;
