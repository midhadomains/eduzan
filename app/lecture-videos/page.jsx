"use client";
import React from "react";
import Image from "next/image";
import Footer from "../../components/common/SiteFooter";
import Navbar from "../../components/common/SiteHeader";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";


const MyComponent = () => {
  const handleScroll = () => {
    document
      .getElementById("more-content")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="select-none">
      <Navbar />
      <div className="max-w-[1400px] md:px-[50px] px-[25px] mx-auto">
        <p className="lg:mt-[63px] md:mt-[43px] sm:mt-[28px] mt-[16px] sm:text-left text-center text-[#50535C] sm:text-[20px] text-[16px] md:text-[24px] ">
          Features
        </p>
        <h1 className=" sm:text-[32px] text-[24px] lg:text-[48px] font-[700] text-[#691D1C] tracking-wide sm:text-left text-center">
          Lecture <span className="text-[#BE4E1E]">Videos</span>
        </h1>
        <div className=" flex  flex-wrap mt-[4.5%] shadow-[0px_4px_4px_0px_#0000001F] rounded-[10px]">
          <div className="max-w-[650px]  w-[800px] sm:w-[50%]  min-w-[280px] bg-[#F9F6EB] rounded-[10px_10px_0px_0px] sm:rounded-[10px_0px_0px_10px] flex justify-center items-center md:py-[49px] sm:py-[35px] py-[21px]">
            <Image
              src="/mf_lecvid.svg"
              width={800}
              height={800}
              className="w-[93%]"
            />
          </div>
          <div className="max-w-[650px] sm:w-[50%] min-w-[280px] mx-auto   ">
            <p className=" mt-[7.6%] ml-[8.5%] mr-[12%]  lg:text-[16px] text-[14px] xl:text-[20px] leading-[22px] md:leading-[36px]">
              We currently offer:
            </p>
            <ul className="list-disc text-[#202124] ml-[10%] pl-5 mr-[11%]  lg:text-[16px] text-[14px] xl:text-[20px] leading-[22px] md:leading-[36px] ">
              <li>
                <b>150 hours of lecture videos for the FRM® Part 1 </b>
              </li>
              <li>
                <b>140 hours for the FRM® Part 2 curriculum</b>
              </li>
            </ul>
            <p className="ml-[8.5%] mr-[11%]  lg:text-[16px] text-[14px] xl:text-[20px] leading-[22px] md:leading-[36px]">
              The videos cover all the Learning Objectives for each topic in the
              FRM® curriculum, as prescribed by GARP®. The videos are organized
              in our Learning Management System in the same order as they are in
              our study planner for FRM®.
            </p>
            <div className="ml-[8.5%] mb-[13%] mt-[5%] flex lg:text-[24px] sm:text-[20px]  text-[16px] sm:gap-[18px] gap-[12px] md:gap-[28px] lg:gap-[36px]">
              <Link target="_blank" href="https://www.youtube.com/@MidhaFin" className="flex gap-6 underline items-center ">
                <Image
                  src="/ytplay.svg"
                  height={200}
                  width={200}
                  className="w-[47px]"
                />{" "}
              </Link>{" "}
              <Link
                className="flex gap-6 underline items-center hover:text-[#BE4E1E]"
                href="https://www.youtube.com/@MidhaFin"
                target="_blank"
              >
                <p className="lg:text-[16px] text-[14px] xl:text-[20px]">
                  Visit our Youtube channel
                </p>
                <MdKeyboardArrowRight className="-ml-[18px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* <div>Know More</div>    */}
        <div className=" mt-[20px] ">
          <button
            onClick={handleScroll}
            className="text-[#BE4E1E] mx-auto lg:text-[20px] text-[14px] sm:text-[16px] flex items-center text-center hover:opacity-75"
          >
            Know More
            <MdOutlineArrowDropDown />
          </button>
        </div>
        <p
          id="more-content"
          className="mb-[2%] max-w-[1000px]  mt-[5%] leading-[22px] md:leading-[38.8px] lg:text-[16px] text-[14px] xl:text-[20px] mx-auto"
        >
          According to instructor:
        </p>
        {/* working */}
        <div className="max-w-[1170px] bg-[#F9F8EF] sm:pt-[25px] pt-4 lg:pt-[30px] xl:pt-[40px] mb-5 rounded-[20px] mx-auto shadow-[7px_7px_0px_0px_#BF4E1E] md:shadow-[20px_20px_0px_0px_#BF4E1E] ">
            <p className="xl:max-w-[1000px]  xl:mr-0 md:mr-11 lg:text-[16px]   md:px-0 px-4  md:ml-[50px] xl:ml-[95px] text-[14px] xl:text-[20px] leading-[22px] md:leading-[36px] ">
              &quot;We have not established MidhaFin only for helping the
              candidates to pass the FRM® and CFA exams. Shortcuts, tips, and
              tricks are definitely helpful, but they should not be too much
              relied upon.{" "}
              <span className="font-[600]">
                The main focus should be on understanding the underlying
                dynamics
              </span>{" "}
              behind the concepts and their
            </p>
            <div className="flex flex-wrap  xl:flex-nowrap ">
                
            <p className="xl:max-w-[803px] xl:mr-0 md:mr-11  lg:text-[16px] md:px-0 px-4  md:ml-[50px] xl:ml-[95px] text-[14px] xl:text-[20px] leading-[22px] md:leading-[36px]">
              implementation. Over the years, the popularity of the CFA & FRM®
              certifications has grown enormously, and there has been a surge in
              the number of candidates who clear all the levels of these exams.
              I&apos;ve heard a number of recruiters saying that extremely qualified
              candidates are not able to answer basic interview questions. <span className="font-[600]">From
              Financial Risk Practitioner&apos;s perspective, and FRM® certification
              can add value only if the candidate has followed holistic approach
              to prepare for the exam and crack it.</span> For example, If 1 day 99%
              VaR changed by 10%, then the candidate should not only be able to
              identify the cause and risk typically associated with such a
              change, but also be able to analyze the underlying VaR model and
              explain this phenomenon, either by mathematically deriving it or
              through the use of visual aids wherever possible.&quot; - Micky Midha
            </p>
           
            <div className="lg:w-[328px] md:w-[240px] w-[142px] mx-auto">
            <Image src="/heroImg.png" width={340} height={507} className="  lx:w-[270px] md:w-[240px] sm:w-[200px] w-[152px]"/>

            </div>
          </div>
        </div>
        {/* working */}
        <p className='mb-8  max-w-[1000px]  mt-[6.5%]  leading-[22px] md:leading-[38.8px] lg:text-[16px] text-[14px] xl:text-[20px] mx-auto'>
        Micky Midha will help you visualize the difficult quantitative ideas in the FRM® curriculum through his videos, by the extensive use of graphs, figures, and tables. Numerous examples that are aligned to the GARP® FRM® Learning Objectives have been discussed in the videos. This way, your learning experience will be enhanced as you make your way towards passing the FRM® exam.
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default MyComponent;
