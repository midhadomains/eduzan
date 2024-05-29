import React from "react";
import Image from "next/image";
import { IoMdArrowDropup } from "react-icons/io";

export default function FeaturesSection() {
  return (
    // superparent
    <div className=" max-w-[1400px] md:px-[50px] px-[25px]  mx-auto   bg-white z-10">
      {/* parent */}
      <div className=" shadow-[0px_6px_13.5px_0px_#C4AFA140]     gap-[8px] bg-white border    h-auto flex flex-wrap   justify-center xl:justify-between   mx-auto select-none rounded-[25px] z-10">
        {/* box1 */}
        <div className="bg-white group lg:w-[410px] 2xl:mx-0 mx-auto md:w-[350px]  w-[310px] mt-[8px] md:h-[300px] lg:h-[350px] h-[225px]    shadow-[0px_2px_6.3px_0px_#0000001C] xl:shadow-none sm:h-[270px]  rounded-3xl relative  flex-shrink-0 z-10 ">
          <Image
            src="/ief.svg"
            alt="img"
            width={280}
            height={200}
            className="mx-auto mt-[23px] sm:mt-[33px] md:mt-[45px] lg:mt-[55px] w-[100px] sm:w-[130px] lg:w-[160px]"
          />
          <div className="  md:py-[15px] py-[10px]  mx-auto left-0 right-0 lg:py-[20px] group md:h-[100px] h-[80px] lg:w-[408px] md:w-[348px] w-[308px] text-center bg-white rounded-3xl  absolute  overflow-hidden z-10 bottom-0 lg:group-hover:h-[300px] md:group-hover:h-[280px] group-hover:h-[230px]  transition-height duration-500 ease-in-out ">
            <h1 className=" md:text-[24px] text-[20px] font-[600] md:mb-[10px] mb-[5px] leading-8  hidden md:block text-[#691D1C]">
              Industry Experienced Faculty
            </h1>
            <h1 className=" md:text-[24px] text-[20px] font-[600] md:mb-[10px] mb-[7px] leading-8 md:hidden  text-[#691D1C]">
              Industry Experienced Faculty
            </h1>
            <IoMdArrowDropup className="mx-auto text-3xl leading-0 group-hover:hidden 	duration-500 ease-in-out text-[#691D1C]" />
            <p className="m-3 text-[#6A1C1A]  lg:text-[18px] md:text-[16px] text-[14px]">
              Well trained & have real industry experience, who have taught
              hundreds of students & have prepared thousands of questions over
              the years. Quality of our faculty is something that we take great
              pride in & are often complimented upon by our students.
            </p>
          </div>
        </div>
        {/* box1 end */}

        <div className="h-[180px] hidden xl:block border-l-[1px] border-[#BE4E1E] my-auto "></div>

        {/* box2 */}
        <div className="lg:w-[410px] md:w-[350px] mt-[8px] mx-auto 2xl:mx-0 w-[310px] z-20   xl:shadow-none shadow-[0px_2px_6.3px_0px_#0000001C]   md:h-[300px] lg:h-[350px] sm:h-[270px] h-[225px]  rounded-3xl relative  flex-shrink-0 group">
          <Image
            src="/sds.svg"
            alt="img"
            width={262}
            height={200}
            className="mx-auto  mt-[23px] sm:mt-[33px] md:mt-[45px] lg:mt-[55px] w-[100px] sm:w-[130px] lg:w-[160px]"
          />
          <div className=" md:py-[15px] py-[10px]  mx-auto left-0 right-0 lg:py-[20px] group md:h-[100px] h-[80px] lg:w-[408px] md:w-[348px]   w-[308px] text-center bg-white rounded-3xl  absolute  overflow-hidden  bottom-0 lg:group-hover:h-[300px] md:group-hover:h-[280px] group-hover:h-[230px]  transition-height duration-500 ease-in-out ">
            <h1 className=" md:text-[24px] text-[20px] font-[600] md:mb-[10px]  leading-8 hidden md:block text-[#691D1C]">
              Systematic Doubt Solving
            </h1>
            <h1 className=" md:text-[24px] text-[20px] font-[600] md:mb-[10px] mb-[7px] leading-8 md:hidden text-[#691D1C]">
              Systematic Doubt Solving
            </h1>
            <IoMdArrowDropup className="mx-auto text-3xl leading-0 group-hover:hidden	transition-transform duration-500 ease-in-out text-[#691D1C]" />
            <p className="mx-3  text-[#6A1C1A] mt-2 lg:text-[18px] md:text-[16px] text-[14px]">
              We believe curiosity is the mother of all inventions, so we ensure
              every single relevant doubt of every single student is cleared
              within reasonable time frame. Relevant doubts from other sources
              are also answered by our faculty and we provide in depth and easy
              to understand solutions to our students.
            </p>
          </div>
        </div>
        {/* box2  end*/}

        <div className="h-[180px] hidden gh:block border-l-[1px] border-[#BE4E1E] my-auto"></div>
        {/* box3 */}
        <div className="2xl:mx-0 mx-auto xl:mb-0 mb-[8px] lg:w-[410px] md:w-[350px]  mt-[8px]  w-[310px] md:h-[300px] xl:shadow-none shadow-[0px_2px_6.3px_0px_#0000001C] lg:h-[350px] sm:h-[270px] h-[225px]  rounded-3xl relative    flex-shrink-0 group">
          <Image
            src="/etem.svg"
            alt="img"
            width={210}
            height={200}
            className="mx-auto mt-[23px] sm:mt-[33px] md:mt-[45px] lg:mt-[55px] w-[100px] sm:w-[130px] lg:w-[160px] "
          />
          <div className="md:py-[15px] py-[10px]  mx-auto left-0 right-0 lg:py-[20px] group md:h-[100px] h-[80px] lg:w-[408px] md:w-[348px]   w-[308px] text-center bg-white rounded-3xl  absolute  overflow-hidden  bottom-0 lg:group-hover:h-[300px] md:group-hover:h-[280px] group-hover:h-[220px]  transition-height duration-500 ease-in-out ">
            <h1 className=" md:text-[24px] text-[20px] font-[600] md:mb-[10px] mb-[5px] leading-8 hidden md:block text-[#691D1C]">
              End to End Mentorship
            </h1>
            <h1 className=" md:text-[24px] text-[20px] font-[600] md:mb-[10px] mb-[7px] leading-8  md:hidden text-[#691D1C]">
              End to End Mentorship
            </h1>
            <IoMdArrowDropup className="mx-auto text-3xl leading-0 group-hover:hidden 	transition-transform duration-500 ease-in-out text-[#691D1C]" />
            <p className="m-3 text-[#6A1C1A]  lg:text-[18px] md:text-[16px] text-[14px]">
              We help students throughout the process of learning and even
              beyond. From study planning, to the exam, to the relevant job
              interviews, we are there at every step with our students.
            </p>
          </div>
        </div>
        {/* box3  end*/}
      </div>
    </div>
  );
}
