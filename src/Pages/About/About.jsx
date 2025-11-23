import React from "react";
import Img from "../../assets/Pages/Side Image.png";
import AbCard from "./AbCard";

import Photo from "../../assets/Pages/Services.png";
import Photo2 from "../../assets/Pages/Services (1).png";
import Photo3 from "../../assets/Pages/Services (2).png";

const About = () => {
  return (
    <>
      <div className="flex">
        <div className="container w-[525px] flex flex-col gap-10 ">
          <h1 className="text-[54px] font-semibold leading-16 tracking-[6%] ">
            Our Story
          </h1>
          <p className="leading-7">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="leading-7">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div className="py-34">
          <img src={Img} alt="" />
        </div>
      </div>

      <div className="container ">

        <div className="flex justify-between">
          <AbCard Photo={Photo} h1={"10.5k "} p={"Sallers active our site"} />
          <AbCard Photo={Photo} h1={"33k "} p={"Mopnthly Produduct Sale"} />
          <AbCard
            Photo={Photo2}
            h1={"45k "}
            p={"Customer active in our site"}
          />
          <AbCard
            Photo={Photo3}
            h1={"25k "}
            p={"Anual gross sale in our site"}
          />
        </div>

        <div className="">

            
        </div>
      </div>
    </>
  );
};

export default About;
