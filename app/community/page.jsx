import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "../../components/common/SiteHeader";
import Footer from "../../components/common/SiteFooter";
function page() {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Backgrounds/3500background.svg')] md:py-[28px] py-[22px] lg:py-[43px]">
        <h1 className="text-[#6A1C1A] md:text-[35px] sm:text-[24px] text-[20px] mx-auto lg:text-[50px] font-[600]  text-center   max-w-[1400px] px-[25px] md:px-[50px]">
          MidhaFin <span className="text-[#BE4E1E]">Community</span>
        </h1>
      </div>
      <div className="md:px-[50px] px-[25px] mx-auto  max-w-[1400px] sm:mt-[27px] mt-[21px] lg:mt-[34px]">
        <p className="leading-[23.1px] md:leading-[33px] lg:text-[20px] md:text-[16px] text-[14px]">
          Dear Fellow FRM Candidates,
          <br />
          Are you preparing for the challenging Financial Risk Manager (FRM®)
          exam &{" "}
          <span className="font-[700]">
            looking for a supportive community to share knowledge, insights and
            motivation?
          </span>{" "}
          <br />
          <span className="text-[#BE4E1E]">Look no further! </span>
          <br />
          We are excited to invite you to join dedicated FRM study groups on{" "}
          <span className="font-[700]">Telegram, WhatsApp and Facebook.</span>
        </p>
      </div>
      <div className="max-w-[1400px]  md:px-[50px] px-[25px] sm:mt-[40px] mt-[22px]  mx-auto flex justify-center mh:justify-between gap-[15px] mh:flex-nowrap flex-wrap ">
        <div className="w-[50%] max-w-[617px] min-w-[300px] mh:mx-0 mx-auto ">
          <Image
            src="/community.png"
            width={900}
            height={1000}
            className="w-[100%] max-w-[617px] min-w-[300px]"
          />
        </div>

        <div className=" w-[50%] flex flex-col  gap-[13px] lx:gap-[48px] min-w-[310px]">
          <h1 className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#BE4E1E] leading-[27px] font-[700] tracking-wider mh:text-left text-center lx:mt-[77px]">
            GET CONNECTED
          </h1>
          <div className="flex flex-col lg:gap-[53px] md:gap-[33px] sm:gap-[22px] gap-[43.11px]">
            <div className="flex mh:flex-col gap-[17.13px] lg:gap-[23px] mh:ml-0 ml-[32px]">
              <div className="flex items-center justify-normal gap-[14px]">
                <Image
                  src="/community_wa.png"
                  width={100}
                  height={100}
                  className="min-w-[45px] w-[50px]"
                />
                <span className="mh:block hidden lg:text-[18px] text-[14px]">
                  Whatsapp Links
                </span>{" "}
              </div>
              <div className="flex  lx:flex-row flex-col gap-[20px] lx:gap-[47.5px] xl:gap-[73px]">
                <Link href="" className="hover:text-[#BE4E1E] ">
                  <u className="flex items-center gap-2 sm:text-[16px] text-[14px] xl:text-[20px]">
                    FRM Part 1 Forum 2024 <IoIosArrowForward />
                  </u>
                </Link>
                <Link href="" className="hover:text-[#BE4E1E]">
                  <u className="flex items-center gap-2 hover:text-[#BE4E1] sm:text-[16px] text-[14px] xl:text-[20px]">
                    FRM Part 2 Forum 2024 <IoIosArrowForward />
                  </u>
                </Link>
              </div>
            </div>

            <div className="flex mh:flex-col gap-[17.13px] lg:gap-[23px] mh:ml-0 ml-[32px]">
              <div className="flex items-center justify-normal gap-[14px]">
                <Image
                  src="/community_tg.png"
                  width={100}
                  height={100}
                  className="min-w-[40px] w-[50px]"
                />
                <span className="mh:block hidden lg:text-[18px] text-[14px]">
                  Telegram Links
                </span>{" "}
              </div>
              <div className="flex lx:flex-row flex-col  gap-[20px] xl:gap-[40px]">
                <Link href="" className="hover:text-[#BE4E1E]">
                  <u className="flex items-center gap-2 sm:text-[16px] text-[14px] xl:text-[20px]">
                    FRM Part 1 Forum 2023-24 <IoIosArrowForward />
                  </u>
                </Link>
                <Link href="" className="hover:text-[#BE4E1E]">
                  <u className="flex items-center gap-2 sm:text-[16px] text-[14px] xl:text-[20px]">
                    FRM Part 2 Forum 2023-24 <IoIosArrowForward />
                  </u>
                </Link>
              </div>
            </div>

            <div className="flex mh:flex-col gap-[17.13px] lg:gap-[23px] mh:ml-0 ml-[32px]">
              <div className="flex items-center justify-normal gap-[14px]">
                <Image
                  src="/community_fb.png"
                  width={100}
                  height={100}
                  className="min-w-[40px] w-[50px]"
                />
                <span className="mh:block hidden lg:text-[18px] text-[14px]">
                  Facebook Links
                </span>{" "}
              </div>
              <div className="flex  lx:flex-row flex-col gap-[20px] lx:gap-[90.5px] xl:gap-[124px]">
                <Link href="" className="hover:text-[#BE4E1E] ">
                  <u className="flex items-center gap-2 sm:text-[16px] text-[14px] xl:text-[20px]">
                    FRM Part 1 Forum <IoIosArrowForward />
                  </u>
                </Link>
                <Link href="" className="hover:text-[#BE4E1E]">
                  <u className="flex items-center gap-2 sm:text-[16px] text-[14px] xl:text-[20px]">
                    FRM Part 2 Forum <IoIosArrowForward />
                  </u>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[46.5px] sm:mt-[64px] lx:mt-[111px] bg-[#EEEEEE]">
        <div className="max-w-[1400px]  md:px-[50px] px-[25px] py-[22px] sm:py-[24px] mx-auto lx:py-[43px]">
          <p className="text-[12px] mh:text-[14px] lx:text-[20px] ">
            While these study groups offer numerous benefits, it’s important to
            manage group dynamics, maintain focus on the study objectives & use
            these platforms in a way that complements your learning style and
            preferences. Additionally, respecting the rules and guidelines set
            by the group administrators can contribute to a positive and
            productive learning experience.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
