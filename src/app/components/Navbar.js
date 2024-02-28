"use client";
import React, { useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

// import image1 from "../../public/asset/image1.jpg";
import Modal from "./Modal";

import Link from "next/link";
export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const phoneNumber = "+971 527211839";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="container mx-auto bg-white sticky top-0  z-50">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className=" lg:px-12 px-4 py-4 flex justify-between items-center ">
        <div>
          <Link href={"/"} >
            <img
              className="lg:w-[120px] w-[100px]"
              src="/assets/img/quickLogo.jpg"
              alt="logo"
            />
          </Link>

        </div>

        <div className="flex gap-3">
          <div className="flex md:gap-2 items-center font-semibold text-[9px] md:text-sm leading-none">
            <div
              onClick={handleCallClick}
              className="flex items-center cursor-pointer gap-1 lg:text-sm text-[10px] "
            >
              <MdOutlinePhoneInTalk />
              <span className=" font-poppins lg:text-sm text-[11px] ">
                {phoneNumber}
              </span>
            </div>
            <div className="hidden  lg:flex items-center gap-1">
              <IoLocationOutline />
              <span className="font-poppins lg:text-sm text-[11px]">UAE</span>
            </div>
          </div>

          <button
            onClick={handleOpenModal}
            className="bg-theme1 hover:bg-theme1h font-poppins text-whitecolor text-[10px] md:text-sm rounded-sm  leading-none font-medium lg:px-3 px-1 py-2.5"
          >
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
