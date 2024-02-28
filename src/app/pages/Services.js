import Image from "next/image";
import React, { useState } from "react";
export default function Service({ service }) {
  const count = 6;
  const [showAll, setShowAll] = useState(false);
  const handleShow = () => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <div className="container mx-auto lg:px-12 px-5 md:p-5 bg-gray-50 py-5">
        <div className="my-8">
          <h1 className="font-raleway font-bold text-center lg:text-4xl text-3xl">
            Our other services
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">
          {service
            .slice(0, showAll ? service.length : count)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white w-full h-full lg:w-96 lg:h-68 border border-gray-200 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-full h-full border-b-8 border-theme1 overflow-hidden z-0">
                    <Image
                      className="w-full h-64 transform object-cover transition-transform duration-300 scale-105 hover:scale-125"
                      src={item.img}
                      width={500}
                      height={500}
                      alt="service"
                    />
                  </div>
                  <div className="py-6 px-5">
                    <h1 className="font-semibold text-[20px] font-raleway">
                      {item.service}
                    </h1>
                    {/* <p className=" text-[14px] ">{item.description}</p> */}
                    <p className="text-[16px] font-semibold py-1">
                      Starting from:{" "}
                      <span className="font-bold text-theme1">
                        AED {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center my-4  ">
          {service.length > count && (
            <button
              onClick={handleShow}
              className="bg-transparent border  hover:bg-theme1 font-raleway font-bold hover:text-white border-gray-800 md:w-64  text-black text-sm  md:text-sm leading-none  px-6 py-3 mt-5"
            >
              {showAll ? "SEE LESS" : "SEE ALL"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
