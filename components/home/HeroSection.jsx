"use client"
import React, { useState, useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import Image from 'next/image'
import Link from "next/link";
function HeroSection() {


    return (
        <div className="slider-container">
            <Slide>
                <div key={1} className="flex justify-center bg-[#F9F2DF]  h-[500px]">
                    <div className=" max-w-[800px] my-auto flex flex-col justify-around ">
                        <h1 className="text-[3rem] font-bold leading-tight	 "><span className='text-[#BE4E1E]'>Boost your career</span> in <span className='text-[#BE4E1E]'>Finance</span> with <br /> mentorship you can bank on.</h1>
                        <p className="text-[1.75rem] my-7 font-light tracking-wide">Step up your career by acquiring the desirable<br /> skills and <span className='text-[#BE4E1E]'>leading global certifications in Finance.</span></p>
                        <button className="bg-[#6A1C1A] transition-colors duration-150 hover:bg-[#BE4E1E] py-5 px-10 text-3xl my-3 rounded-[54px] font-semibold tracking-wide text-[#F9F2DF] w-fit">SIGNUP NOW</button>
                    </div >
                    <Image src="/hero-section-001.svg" alt="image" className="w-[500px] mx-5 max-w-[500px]  -ml-[80px]" width={500} height={500} />
                </div>
                <div key={2} className=" h-[500px] tracking-wider bg-bgfrm bg-no-repeat bg-cover bg-center bg-fixed ">
                    <div className=" bg-gradient-to-r from-[#6A1C1A] w-[100%] h-[100%]">
                        <div className=" max-w-[1150px] w-[90%] mx-auto pt-[50px]">
                            <h1 className="text-[3rem] font-semibold text-white">Find Your <span className='text-[#CEAA5A]'>Passion ,</span></h1>
                            <h1 className="text-[3rem] font-semibold text-white">Find Your <span className='text-[#CEAA5A]'>Course</span></h1>
                            <button className="bg-[#6A1C1A] py-5 px-10 transition-colors duration-150 hover:bg-[#BE4E1E] text-3xl my-9 rounded-[5rem] font-semibold tracking-wide text-[#F9F2DF]">EXPLORE COURSES</button>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    )

}

export default HeroSection