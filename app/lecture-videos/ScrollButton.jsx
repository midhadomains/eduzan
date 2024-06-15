"use client";
import { useEffect, useRef } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const ScrollButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      document
        .getElementById("more-content")
        .scrollIntoView({ behavior: "smooth" });
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", handleScroll);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("click", handleScroll);
      }
    };
  }, []);

  return (
    <div className="mt-[20px]">
      <button
        ref={buttonRef}
        className="text-[#BE4E1E] mx-auto lg:text-[20px] text-[14px] sm:text-[16px] flex items-center text-center hover:opacity-75"
      >
        Know More
        <MdOutlineArrowDropDown />
      </button>
    </div>
  );
};

export default ScrollButton;
