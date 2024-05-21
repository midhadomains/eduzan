import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function SocialMedia() {
  return (
    <div
      target="_blank"
      className="z-50 sm:h-[60px] h-[100px] w-[50px] sm:w-[132px] bg-[#E1E1E1] items-center right-2 bottom-2  fixed flex rounded-[1000px] p-4 text-white"
    >
      <Link
        href=" https://api.whatsapp.com/send/?phone=919155199555&text=Hello+Team+MidhaFin,%0Ai+am+interested+in+learning+more+about+your+courses.+Could+you+provide+me+with+some+information%3F&type=phone_number&app_absent=0 "
        target="_blank"
        className="z-50 border-4 sm:mr-[6px] mr-[3px]  border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#52c95a] items-center right-2 bottom-2  fixed flex rounded-[1000px] mb-[3px] p-2 text-white"
      >
        <FaWhatsapp className="bg-[#52c95a]  sm:text-[30px] text-[20px]" />
      </Link>
      <Link
        href=" https://t.me/midha_fin "
        target="_blank"
        className="z-50 border-4 border-white sm:mr-[68px] mr-[3px] mb-[50px] sm:mb-[3px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#0088cc] items-center right-2 bottom-2  fixed flex rounded-[1000px] p-2 text-white"
      >
        <FaTelegramPlane className=" sm:mr-1 sm:text-[30px] text-[20px]" />
      </Link>
    </div>
  );
}

export default SocialMedia;
