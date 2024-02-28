import { FaArrowRightLong } from "react-icons/fa6";
import { TestReport } from "../constants/index";
import Modal from "../components/Modal";
import { useState } from "react";
import Image from "next/image";

const Card = () => {
  // we test for
  const items = [
    "Gonorrhoea",
    "Chlamydia",
    "Syphilis",
    "Trichomonas",
    "Human Papillomavirus (HPV)",
    "Genital Herpes",
    "Hepatitis B and C",
    "Human Immunodeficiency Virus (HIV)",
    "Others",
  ];

  const test = TestReport;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto px-5 lg:pl-12 ">
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 gap-3 lg:mt-14 mt-10">
          <div className="w-full lg:col-span-5 flex items-end">
            <Image
              width={500}
              height={500}
              className="w-full h-full"
              priority={true}
              src="/assets/img/drbackground.png"
              alt="doctor"
            />
          </div>
          <div className=" lg:col-span-7 flex items-end">
            <div className="">
              <div className="text-start">
                <h1 className="text-2xl md:text-4xl font-raleway font-bold my-2">
                  Am I at risk of STDs?
                </h1>
                <p className="font-raleway text-gray-900 text-[14px] md:text-lg font-medium lg:my-2 pr-5 lg:pr-12">
                  Depending on the cause of STD, symptoms may or may not appear
                  and it may even take years before there are noticeable
                  problems. If you’ve had any kind of sexual contact that can
                  spread STDs or if you are experiencing the below symptoms, the
                  only way to know is to get tested. Let our team of specialists
                  assist you.
                </p>
                <div className="bg-theme1 p-8 md:p-10 rounded-sm  mt-10">
                  <h2 className="text-start font-raleway font-bold text-whitecolor text-2xl">
                    What tests do we offer?
                  </h2>
                  <ul className="grid grid-cols-1 lg:grid-cols-3 text-start py-2">
                    {items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="font-medium my-1 font-poppins text-whitecolor"
                        >
                          &bull; {item}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex justify-start">
                    <button
                      onClick={handleOpenModal}
                      className="bg-whitecolor text-black hover:bg-theme1light text-sm rounded-[20px] md:text-sm leading-none font-semibold px-6 py-3 mt-4"
                    >
                      Book An Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== card====  */}
      <div className="container mx-auto px-5 lg:px-12 ">
        <div className="bg-white grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:my-16 my-12">
          {test.map((item) => (
            <div
              key={item.id}
              className="shadow-lg rounded-2xl hover:shadow-slate-400 pb-4 hover:bg-slate-50/50 "
            >
              <div className="bg-theme1 py-10 px-5 border rounded-t-2xl">
                <h2 className="text-center text-xl text-whitecolor font-raleway pb-4 font-bold ">
                  {item.testName}
                </h2>
              </div>
              <div className="flex justify-center items-center">
                <div className="border-[3px] border-theme1 bg-white rounded-full h-20 w-20 -mt-10">
                  <img
                    className="h-full w-full p-5 object-cover"
                    src={item.logo}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="h-fit">
                <h1 className="font-raleway text-[18px] text-center font-bold py-5">
                <span className="">Special Price</span>  <span className="text-theme1 block">{item.offers}</span> 
                </h1>

                {/* ==== 1 ==  */}

                {item && item.testTypeR1 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 ">
                      {item.testTypeR1.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-32 text-right">
                      {item.testTypeR1.testTypeValue
                        ? item.testTypeR1.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 2 ==  */}

                {item && item.testTypeR2 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR2.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR2.testTypeValue
                        ? item.testTypeR2.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 3 ==  */}

                {item && item.testTypeR3 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR3.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR3.testTypeValue
                        ? item.testTypeR3.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 4 ==  */}

                {item && item.testTypeR4 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR4.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR4.testTypeValue
                        ? item.testTypeR4.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 5 ==  */}

                {item && item.testTypeR5 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR5.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR5.testTypeValue
                        ? item.testTypeR5.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 6 ==  */}
                {item && item.testTypeR6 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR6.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR6.testTypeValue
                        ? item.testTypeR6.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 7 ==  */}

                {item.testTypeR7 && item.testTypeR7.testTypeName ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR7.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR7.testTypeValue
                        ? item.testTypeR7.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 8 ==  */}

                {item.testTypeR8 && item.testTypeR8.testTypeName ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR8.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR8.testTypeValue
                        ? item.testTypeR8.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 9 ==  */}

                {item.testTypeR9 && item.testTypeR9.testTypeName ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR9.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR9.testTypeValue
                        ? item.testTypeR9.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 10 ==  */}

                {item && item.testTypeR10 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR10.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR10.testTypeValue
                        ? item.testTypeR10.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 11 ==  */}

                {item && item.testTypeR11 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR11.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR11.testTypeValue
                        ? item.testTypeR11.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 12 ==  */}

                {item && item.testTypeR12 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR12.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR12.testTypeValue
                        ? item.testTypeR12.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 13 ==  */}

                {item && item.testTypeR13 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR13.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR13.testTypeValue
                        ? item.testTypeR13.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 14 ==  */}

                {item && item.testTypeR14 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR14.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR14.testTypeValue
                        ? item.testTypeR14.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 15 ==  */}

                {item && item.testTypeR15 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR15.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR15.testTypeValue
                        ? item.testTypeR15.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 16 ==  */}

                {item && item.testTypeR16 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR16.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR16.testTypeValue
                        ? item.testTypeR16.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 17 ==  */}

                {item && item.testTypeR17 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR17.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR17.testTypeValue
                        ? item.testTypeR17.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 18 ==  */}

                {item && item.testTypeR18 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR18.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR18.testTypeValue
                        ? item.testTypeR18.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 19 ==  */}

                {item && item.testTypeR19 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR19.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR19.testTypeValue
                        ? item.testTypeR19.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 20 ==  */}

                {item.testTypeR20 && item.testTypeR20.testTypeName ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR20.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR20.testTypeValue
                        ? item.testTypeR20.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 21 ==  */}

                {item && item.testTypeR21 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR21.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR6.testTypeValue
                        ? item.testTypeR21.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 22 ==  */}

                {item.testTypeR22 && item.testTypeR22.testTypeName ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR25.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR22.testTypeValue
                        ? item.testTypeR22.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 23 ==  */}

                {item && item.testTypeR23 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR23.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR23.testTypeValue
                        ? item.testTypeR23.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 24 ==  */}

                {item && item.testTypeR24 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR24.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR24.testTypeValue
                        ? item.testTypeR24.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 25 ==  */}

                {item && item.testTypeR25 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR25.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR25.testTypeValue
                        ? item.testTypeR25.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 26 ==  */}

                {item && item.testTypeR26 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR26.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR26.testTypeValue
                        ? item.testTypeR26.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 27 ==  */}

                {item && item.testTypeR27 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR27.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR27.testTypeValue
                        ? item.testTypeR27.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}

                {/* ==== 28 ==  */}

                {item && item.testTypeR28 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR28.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR28.testTypeValue
                        ? item.testTypeR28.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 29 ==  */}

                {item && item.testTypeR29 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR29.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR29.testTypeValue
                        ? item.testTypeR29.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 30 ==  */}

                {item && item.testTypeR30 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR30.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR30.testTypeValue
                        ? item.testTypeR30.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 31 ==  */}

                {item && item.testTypeR31 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR31.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR31.testTypeValue
                        ? item.testTypeR31.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 32 ==  */}

                {item && item.testTypeR32 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR32.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR32.testTypeValue
                        ? item.testTypeR32.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
                {/* ==== 33 ==  */}

                {item && item.testTypeR33 ? (
                  <div className="flex justify-between gap-2 px-6 py-1 border-b">
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 heading">
                      {item.testTypeR33.testTypeName}
                    </p>
                    <p className="font-poppins text-[14px] font-semibold text-gray-900 w-20 text-right">
                      {item.testTypeR33.testTypeValue
                        ? item.testTypeR33.testTypeValue
                        : "✔"}
                    </p>
                  </div>
                ) : null}
              </div>
              <div className=" my-6 mt-8">
                <button
                  onClick={handleOpenModal}
                  className="w-8/12 py-2 px-2 flex justify-center items-center bg-theme1 hover:bg-theme1h text-lg text-white rounded-lg mx-auto"
                >
                  <span>Book Now</span> <FaArrowRightLong className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
