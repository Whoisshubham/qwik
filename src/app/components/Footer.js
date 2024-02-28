import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import Link from "next/link";

export default function Footer (){
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mx-auto  bg-theme1 text-white py-5">
      <div className=" grid md:grid-cols-3 gap-1  lg:px-24 px-5 lg:justify-items-center">

        <div>
          <h1 className="text-2xl font-medium py-1 font-poppins capitalize">
            Contact Us
          </h1>
          <ul className="text-sm lg:text-md">
            <li className="flex items-center mt-1">
              <MdOutlineEmail />
              <span className="ml-1 cursor-pointer hover:border-b">
                qwikhs@gmail.com
              </span>
            </li>
            <li className="flex items-center mt-1">
              <IoCallOutline />
              <span className="ml-1 cursor-pointer hover:border-b">
                +971 526878912
              </span>
            </li>
            <li className="flex items-center mt-1">
              <MdMyLocation />
              <span className="ml-1 cursor-pointer hover:border-b">
                Villa 1065 Opposite of New Union Coop Dubai, UAE
              </span>
            </li>
            <li className="mt-1">
              <div className="flex "><p className="mt-1"><MdMyLocation /></p>
              <p className="ml-1 cursor-pointer hover:border-b ">
              Al Saif Tower - 104, 1st Floor - Tower C Building Electra Street - behind Honda Showroom - Al Danah - Zone 1 - Abu Dhabi, UAE
              </p></div>
            </li>
            
          </ul>
        </div>
      </div>
      <p className="border-white/75 border-b-[1px] py-3"></p>
      <div className="flex justify-center items-center px-5 lg:px-24 text-sm mt-3">
        &copy; {currentYear}, All tests are carried out in ISO and CAP
        accredited, and DOH and DHA licensed laboratories.
      </div>
      
    </div>
  );
};


