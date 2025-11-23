import React from "react";
import Slider from "react-slick";
import Img from "../../assets/Pages/Side Image.png";
import AbCard from "./AbCard";

import Photo from "../../assets/Pages/Services.png";
import Photo2 from "../../assets/Pages/Services (1).png";
import Photo3 from "../../assets/Pages/Services (2).png";

import AbCard2 from "./AbCard2";
import Ph from "../../assets/Pages/Frame 874.png";
import Ph2 from "../../assets/Pages/Frame 875.png";
import Ph3 from "../../assets/Pages/Frame 876.png";
import SupportDetails from "../../components/support/SupportDetails";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

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

        <div className="py-34">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
              </div>
              <div>
                <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
              </div>
              <div>
                <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
              </div>
              <div>
                <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
              </div>
              <div>
                <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
              </div>
              <div>
                <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
              </div>
              <div>
                <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
              </div>
              <div>
                <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
              </div>
              <div>
                <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
              </div>
              <div>
                <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
              </div>
              <div>
                <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
              </div>
              <div>
                <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
              </div>
              <div>
                <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
              </div>
              <div>
                <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
              </div>
              <div>
                <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
              </div>
              <div>
                <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
              </div>
              <div>
                <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
              </div>
              <div>
                <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
              </div>
            </Slider>
          </div>
        </div>


        <div className="">
            <SupportDetails/>
        </div>
      </div>
    </>
  );
};

export default About;
