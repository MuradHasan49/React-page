import React from "react";
import All_head from "../Allhead";
import ArrivalButton from "../button/ArrivalButton";

const NewArrivalDetails = () => {
  return (
    <>
      <div className="container mx-auto p-5 ">
        <All_head head={"Featured"} h1={"New Arrival"} />

        <section className="w-full mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-1 md:gap-y-2 ">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute bottom-0 left-0">
                  <ArrivalButton
                    h={"PlayStation 5"}
                    p={"Black and White version of the PS5 coming out on sale."}
                  />
                </div>
                <img
                  src="/NewArrival/Frame1.png"
                  alt="PlayStation 5"
                  className="w-full h-150 object-fill rounded-2xl shadow-lg "
                />
              </div>
            </div>

            <div className="grid grid-rows-2 gap-2 ">
              <div className="relative">
                <img
                  src="/NewArrival/Frame2.png"
                  alt="Fashion Model"
                  className="w-full h-full mt-1 object-cover rounded-2xl shadow-lg"
                />
                                <div className="absolute bottom-0 left-0">
                  <ArrivalButton
                    h={"Women’s Collections"}
                    p={"Featured woman collections that give you another vibe."}
                  />
                </div>
              </div>
              

              <div className="grid grid-cols-2 gap-2">
                <div className="">
                  <div className="relative">
                    <div className="absolute bottom-0 left-0">
                      <ArrivalButton
                        h={"Speakers"}
                        p={"Amazon wireless speakers"}
                      />
                    </div>
                    <img
                      src="/NewArrival/Frame3.png"
                      alt="Amazon Echo"
                      className="w-full h-73 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute bottom-0 left-0">
                    <ArrivalButton h={"Perfume"} p={"GUCCI INTENSE OUD EDP"} />
                  </div>
                  <img
                    src="/NewArrival/Frame4.png"
                    alt="Gucci Perfume"
                    className="w-full h-73 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewArrivalDetails;
