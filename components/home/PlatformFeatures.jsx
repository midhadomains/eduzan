"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

function PlatformFeatures() {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    // Array of platform features
    const features = [
        {
            title: "Study Planner",
            imageSrc: "/Study-planner.svg",
            link: "/study-planner",
        },
        {
            title: "Question Banks",
            imageSrc: "/question-bank.svg",
            link: "/question-banks",
        },
        {
            title: "Mock Tests",
            imageSrc: "/mock-test.svg",
            link: "/mock-tests",
        },
        {
            title: "Lecture Videos",
            imageSrc: "/lecture-video.svg",
            link: "/lecture-videos",
        },
        {
            title: "Doubt Solving Forum",
            imageSrc: "/doubt-solving-forum.svg",
            link: "/doubt-solving-forum",
        },
        {
            title: "Industry Expert Faculty",
            imageSrc: "/ief.svg",
            link: "/industry-expert-faculty",
        },
        {
            title: "Complete Study Material",
            imageSrc: "/Complete-study-material.svg",
            link: "/complete-study-material",
        },
        {
            title: "Access Till You Pass",
            imageSrc: "/access-till-you-pass.svg",
            link: "/access-till-you-pass",
        },
    ];

    return (
        <div className="max-w-[1400px] px-[25px] md:px-[50px]    pb-5  text-center  mx-auto select-none pt-[41px] lg:pt-[39px] ">
            <div className="lg:flex gap-[30px]   justify-start items-center lg:justify-between text-left     w-[100%] mx-auto  ">
                <div className=" ">
                    <h1 className="lg:text-[3rem]  md:text-[2.5rem]  sm:text-[2rem] text-[1.6rem] font-semibold lg:h-[130px]  leading-tight max-w-[100%]   text-left  text-[#691D1C] tracking-wider lg:max-w-[236px]">
                        Platform <span className="text-[#BE4E1E]">Features</span>
                    </h1>
                    <hr className="block lg:hidden lg:border-4 border-t-[4px] rounded-3xl border-[#BE4E1E]  md:w-[150px] w-[100px] mt-[22px]   md:mb-0 " />
                </div>
                <div className="hidden  lg:block border-[#BE4E1E] h-[156px] border-l-[5px] my-[51px] rounded-3xl "></div>
                <div className=" max-w-[900px]  my-auto    mt-[22px] md:mt-[25px] lg:my-auto mb-2">
                    <p className="leading-[22.84px] tracking-wide  md:leading-[28px] lg:leading-[32.63px] text-[14px] md:text-[16px] lg:text-[20px]">
                        We at MidhaFin, focus on striking a{" "}
                        <span className="text-[#9A391D]">careful balance,</span> between
                        Knowledge and Relevance, between theory and analytics & between pure
                        concepts and practical application.
                    </p>
                </div>
            </div>

            {/* Operation going on */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-auto col-auto  row-[20px] item-center bg-white  z-10 ">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        className="relative h-[153px] sm:h-[220px] lg:h-[290px] transition items-center group flex flex-col justify-end mx-[10px] my-[20px]"
                    >

                        <div>
                            <Link href={feature.link}>
                                <Image
                                    width={170}
                                    height={100}
                                    className="mx-auto my-auto m-2 cursor-pointer group-hover:scale-110 duration-300 lg:w-[170px] sm:w-[120px] w-[88.64px]"
                                    src={feature.imageSrc}
                                    alt={feature.title}
                                    priority={true}
                                />
                                <div className="flex  items-center justify-center group-hover:text-[#BE4E1E] group-hover:scale-110 duration-300">

                                    <h1 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold my-[14px] sm:my-[20px] lg:my-7 group-hover:underline tracking-wide">
                                        {feature.title}
                                    </h1>
                                    <MdKeyboardArrowRight className="sm:text-[25px] text-[20px] lg:text-[30px]" />

                                </div>

                            </Link>
                        </div>
                        {/* Vertical line for grid-cols-2 */}
                        {(index % 2 === 0 && index !== features.length - 1 && index !== features.length - 1) && (
                            <span className="absolute top-0 right-[-10px] max-h-[132px] h-[70%] bottom-0 my-auto w-[1px] bg-[#BE4E1E] block sm:hidden"></span>
                        )}
                        {/* Vertical line for grid-cols-3 */}
                        {(index % 3 !== 2 && index !== features.length - 1 && features.length % 3 !== 1) && (
                            <span className="absolute top-0 right-[-10px] h-[70%] max-h-[132px]  bottom-0 w-[1px] my-auto bg-[#BE4E1E] hidden sm:block  lg:hidden"></span>
                        )}
                        {/* Vertical line for grid-cols-4 */}
                        {(index % 4 !== 3 && index !== features.length - 1 && features.length % 4 !== 1) && (
                            <span className="absolute top-0 right-[-10px] h-[70%] max-h-[132px]  bottom-0 w-[1px] my-auto bg-[#BE4E1E] hidden lg:block"></span>
                        )}
                    </div>
                ))}
            </div>

            {/* Operation going on */}


        </div>
    );
}

export default PlatformFeatures;
