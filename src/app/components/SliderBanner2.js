// import Swiper core and required modules
'use client'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Modal from "./Modal";
import { useState } from "react";
import Image from "next/image";


const SliderBanner2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 15000 }}

        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="container mx-auto px-4  z-20  border-t  bg-gray-50 ">
            <div className="grid lg:grid-cols-2 gap-2 font-raleway  md:p-8 md:pt-0">
            <div className="flex justify-center items-center order-2 pb-8">
                <div className="text-start">
                  <h1 className="text-2xl py-2 md:text-4xl font-raleway font-bold">
                    Easy, Confidential, & Affordable STD Testing
                  </h1>
                  <p className=" text-gray-900 text-[14px] md:text-lg font-medium">
                    Avail our 50% discounted rates NOW for a 100% confidential
                    and reliable test that you can take in three easy steps:
                  </p>
                  <div className=" text-gray-900 text-[14px] md:text-lg font-medium pl-4">
                    <ul className="list-decimal">
                      <li>Book your appointment</li>
                      <li>
                        Present your anonymous reference number to the
                        laboratory
                      </li>
                      <li>
                        Wait while we deliver your results in as fast as 24
                        hours*
                      </li>
                    </ul>
                  </div>
                  <p className=" text-gray-900 text-[14px] md:text-lg font-medium">
                    We care for your peace of mind. Sit back, relax, and rest
                    assured that your privacy is guaranteed.
                  </p>
                  <button
                    onClick={handleOpenModal}
                    className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                  >
                    Book An Appointment
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center md:order-2">
                <Image width={500} height={500} style={{width: "auto", height: "auto"}} priority={true} src="/assets/img/image1.jpg" alt="img1" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto px-4  z-20  border-t  bg-gray-50">
            <div className="grid lg:grid-cols-2 gap-2 font-raleway  md:p-8 md:pt-0">
              <div className="flex justify-center items-center order-2 pb-8">
                <div className="text-start">
                  <h1 className="text-2xl py-2 md:text-4xl font-raleway font-bold">
                    Your Sexual Health Matters. Get Tested Now!
                  </h1>
                  <p className=" text-gray-900 text-[14px] md:text-lg font-medium">
                    Testing for Sexually Transmitted Diseases (STDs) is a
                    guaranteed way to stay safe and protect your health, as well
                    as your partner’s. End your worries and get access to the
                    most trusted, convenient, and affordable comprehensive STD
                    tests available in the country.
                  </p>
                  <p className=" text-gray-900 text-[14px] md:text-lg font-medium">
                    Select from the wide range of qwik solutions we offer, from
                    a single HIV screening test to more comprehensive packages
                    that includes screening for several pathogens.
                  </p>
                  <button
                    onClick={handleOpenModal}
                    className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                  >
                    Book An Appointment
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center md:order-2">
              <Image width={500} height={500} style={{width: "auto", height: "auto"}} priority={true} src="/assets/img/image2.jpg" alt="img2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto px-4  z-20  border-t  bg-gray-50 ">
            <div className="grid lg:grid-cols-2 gap-2 font-raleway  md:p-8 md:pt-0">
              <div className="flex justify-center items-center order-2 pb-8">
                <div className="text-start">
                  <h1 className="text-2xl py-2 md:text-4xl font-raleway font-bold">
                    Let Us Take Care of You
                  </h1>
                  <p className=" text-gray-900 text-[14px] md:text-lg font-medium">
                  Optimize your wellbeing with the wide range of affordable tests and packages that we are offering that will give you an insight to your heart, kidney, liver, thyroid, digestive, and nutritional health.
                  </p>
                  <p className=" text-gray-900 text-[14px] md:text-lg font-medium">
                  Don’t want to leave the comfort of your own house? Don’t worry! We have got a solution for you. With the option of home sample collection, you can wait and relax at home while we deliver your results.
                  </p>
                  
                  <button
                    onClick={handleOpenModal}
                    className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                  >
                    Book An Appointment
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center md:order-2">
              <Image width={500} height={500} priority={true} style={{width: "auto", height: "auto"}} src="/assets/img/image3.jpg" alt="img3" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SliderBanner2;

