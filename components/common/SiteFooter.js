"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#F9F6F4] border-t-[#999999] border-[1.5px] z-10 mt-8">
      <div className="max-w-[1400px] px-[25px] pt-12 pb-[18px] sm:pb-[29px] md:px-[50px] mx-auto  ">
        <div className=" max-w-[1300px] mx-auto ">
          <div className="flex lg:mx-0  max-w-[370px] mx-auto sm:max-w-none   lg:flex-row flex-col sm:gap-y-10  lg:justify-between gap-[20px]">
            <div className="flex flex-col sm:gap-[35px] gap-[30px] lg:gap-[41px] w-[100%] max-w-[345px]  lg:mx-0 mx-auto ">
              <div className="flex flex-col gap-[17px]">
                <Link href="/">
                <Image
                  src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/public/midhalogo.svg"
                  width={100}
                  height={100}
                  className="sm:w-[152px] w-[112px] lg:w-[173px] mx-auto "
                  alt="MidhaFin"
                />
                </Link>
                
                <h1 className="font-[700] text-[#6A1C1A] text-[16px]  text-center sm:text-[20px]">
                  Your Gateway to FRM Certification
                </h1>
              </div>

              <div className="flex   justify-center  gap-4">
                <Link
                  href="https://play.google.com/store/search?q=Midhafin&c=apps&hl=en_IN&gl=US"
                  target="_blank"
                  className=" w-[123px] sm:w-[148px]  lg:w-[135px] hover:opacity-[0.75]"
                >
                  <Image
                    width={300}
                    height={100}
                    src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/public/play-store.webp"
                    alt="google play store"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/in/app/midhafin-cfa-frm-prm/id6463192627"
                  target="_blank"
                  className=" w-[123px] sm:w-[148px] lg:w-[135px] hover:opacity-[0.75]"
                >
                  <Image
                    width={300}
                    height={100}
                    src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/public/app-store.webp"
                    alt="app store"
                  />
                </Link>
              </div>
              <p className="lg:-mt-[30px] -mt-[10px]  sm:text-[16px] text-[14px] lg:text-[18px]  text-center text-[#626979]">
                MidhaFin is a free to download app
              </p>
            </div>
            <div className="flex justify-between  lg:w-[62%] sm:flex-row flex-col ">
              <div className=" flex  gap-[18px]   sm:w-[50%] justify-between">
                <div className=" flex-col gap-[13px]  flex">
                  <h1 className="font-[500] lg:text-[20px] sm:text-[18px] text-[14px] leading-[24.2px] ">
                    Quick Links
                  </h1>
                  <ul className="flex flex-col gap-[7px]">
                  <Link
                      href="/blog"
                      className="lg:text-[18px] sm:text-[16px] text-[14px] leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/about-us"
                      className="lg:text-[18px] sm:text-[16px] text-[14px] leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      About Us
                    </Link>
                    <Link
                      href="https://edu.midhafin.com/s/store"
                      className="lg:text-[18px] sm:text-[16px] text-[14px] leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      Courses
                    </Link>
                    <Link
                      href="/faqs"
                      className="lg:text-[18px] sm:text-[16px] text-[14px] leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      FAQs
                    </Link>
                    <Link
                      href="https://edu.midhafin.com/s/mycourses"
                      className="lg:text-[18px] sm:text-[16px] text-[14px] leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      Student Portal
                    </Link>
                    <Link
                      href="/study-groups"
                      className="lg:text-[18px] sm:text-[16px] text-[14px] leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                    Study Groups
                    </Link>
                   
                    {/* <Link href='/' className='lg:text-[18px] sm:text-[16px] text-[14px] leading-[30px] text-[#626979]'>Blog</Link > */}
                    {/* <Link href className='lg:text-[18px] sm:text-[16px] text-[14px] leading-[30px] text-[#626979]'>Community</Link > */}
                  </ul>
                </div>

                <div className=" flex flex-col gap-[13px] ">
                  <h1 className="font-[500] lg:text-[20px] sm:text-[18px] text-[14px] leading-[24.2px]">
                    Company
                  </h1>
                  <ul className="flex flex-col gap-[7px]">
                    <Link
                      href="/privacy-policy"
                      className="lg:text-[18px] sm:text-[16px] text-[14px]  leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/refund-policy"
                      className="lg:text-[18px] sm:text-[16px] text-[14px]  leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      Refund Policy
                    </Link>
                    <Link
                      href="/contact-us"
                      className="lg:text-[18px] sm:text-[16px] text-[14px]  leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/terms-of-use"
                      className="lg:text-[18px] sm:text-[16px] text-[14px] leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      Terms of Use
                    </Link>
                    <Link
                      href="https://www.midha.in/"
                      className="lg:text-[18px] sm:text-[16px] text-[14px]  leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      Midha Education
                    </Link>
                    <Link
                      href="/reviews"
                      className="lg:text-[18px] sm:text-[16px] text-[14px]  leading-[30px] text-[#626979] transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                    >
                      Reviews
                    </Link>
                  </ul>
                </div>
              </div>

              <div className=" flex flex-col gap-[13px] mt-5 md:mt-0 ">
                <h1 className="font-[500] lg:text-[20px] sm:text-[18px] text-[14px] leading-[24.2px]">
                  Contact Us
                </h1>
                <ul className="sm:flex hidden flex-col gap-[7px]">
                  <Link
                    href="tel:+91 91551 99555"
                    className="lg:text-[18px] sm:text-[16px] text-[14px]  leading-[30px] text-[#626979] flex gap-2 items-center transition-colors duration-300 hover:underline hover:text-[#6A1C1A] "
                  >
                    <IoIosCall /> Call: +91 91551 99555
                  </Link>
                  <Link
                    href="mailto:midhafin@gmail.com"
                    className="lg:text-[18px] sm:text-[16px] text-[14px]  leading-[30px] text-[#626979] flex gap-2 items-center transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                  >
                    <IoIosMail />
                    Mail: midhafin@gmail.com
                  </Link>
                 
                </ul>
                <div className="sm:hidden flex justify-between gap-[5px]">
                  <Link  href="tel:+91 91551 99555" className="border w-[100%] max-w-[180px] text-[12px] flex justify-center bg-[#ECECEC] rounded-[4px] items-center  h-[32px] gap-1">
                    <IoIosCall className="text-[14px]" /> Call
                  </Link>
                  <Link  href="mailto:midhafin@gmail.com" className="border w-[100%] max-w-[180px] text-[12px] flex justify-center bg-[#ECECEC] rounded-[4px] items-center gap-1 h-[32px]">
                    <IoIosMail className="text-[14px]" /> Mail
                  </Link>
                 
                </div>
                <h1 className="lg:text-[20px] sm:text-[18px] text-[14px] leading-[30px] text-[#0A142F]">
                  Socials
                </h1>
                <div className="flex gap-[14px] justify-between">
                  <Link
                    href="https://www.instagram.com/midhafin/"
                    target="_blank"
                    className="lg:text-[30px] text-[25px] bg-[#ECECEC] rounded-full h-[27px] flex justify-center items-center"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://www.facebook.com/MidhaFin"
                    target="_blank"
                    className="lg:text-[30px] text-[25px] bg-[#ECECEC] rounded-full h-[27px] flex justify-center items-center"
                  >
                    {" "}
                    <CiFacebook />
                  </Link>
                  <Link
                    href="https://twitter.com/midhafin"
                    target="_blank"
                    className="lg:text-[30px] text-[25px] bg-[#ECECEC] rounded-full h-[27px] flex justify-center items-center"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/midhafin/"
                    target="_blank"
                    className="lg:text-[30px] text-[25px] bg-[#ECECEC] rounded-full h-[27px] flex justify-center items-center"
                  >
                    <CiLinkedin />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@MidhaFin"
                    target="_blank"
                    className="lg:text-[30px] text-[25px] bg-[#ECECEC] rounded-full h-[27px] flex justify-center items-center"
                  >
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-b-[1px]  text-[#626979] mt-[28px] max-w-[1220px]  mb-[24px] mx-auto" />
        <p className="max-w-[1280px] text-center sm:text-[14px] text-[12px] lg:text-[18px] text-[#626979] mb-[30px]">
          GARP does not endorse, promote, review or warrant the accuracy of the
          products or services offered MidhaFin of GARP Exam related
          information, nor does it endorse any pass rates that may be claimed by
          MidhaFin. Further, GARP is not responsible for any fees or costs paid
          by the user to MidhaFin nor is GARP responsible for any fees or costs
          of any person or entity providing any services to MidhaFin. SCR®,
          FRM®, GARP® and Global Association of Risk Professionals™, in standard
          character and/or stylized form, are trademarks owned by the Global
          Association of Risk Professionals, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
