"use client"
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import Image from 'next/image'
import Link from 'next/link'
function HeroSection() {
    return (
        <div className="slider-container min-h-[560px] sm:min-h-[500px] w-[100%] select-none ">
            <Slide >
                <div key={1} className="flex justify-center flex-wrap lg:flex-nowrap bg-[#F9F2DF] overflow-hidden min-h-[500px] h-[100%]   md:px-[50px] px-[20px]  pt-5 w-[100vw]">
                    <div className='flex justify-center lg:justify-between max-w-[1300px] w-[100%] flex-wrap lg:flex-nowrap '>
                        <div className="max-w-[800px] my-auto flex flex-col justify-around items-center lg:items-start text-center lg:text-left  ">
                            <h1 className="xl:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[24px] font-semibold leading-tight  mt-5 md:mt-0 text-[#691D1C]"><span className='text-[#BE4E1E]'>Boost your career</span> in <span className='text-[#BE4E1E]'>Finance</span> with  <span className='text-[#BE4E1E]'>mentorship</span> you can bank on.</h1>
                            <p className="lg:text-[20px] md:text-[17px] text-[14px] lg:my-9  my-3 font-[400] tracking-wide max-w-[691px]">Step up your career by acquiring the desirable skills and <span className='text-[#BE4E1E]'>leading global certifications in Finance.</span></p>
                            <Link href='https://edu.midhafin.com/s/store' className='max-w-[395px] min-w-[160px] w-[60%]'><button className="bg-[#6A1C1A] transition-colors duration-150  hover:bg-[#BE4E1E] md:py-4 py-[6px]  max-w-[395px] min-w-[160px] w-[100%] md:text-3xl text-[1.1rem] mt-3 rounded-[54px] font-semibold tracking-wider text-[#F9ECC7]  mb-4">Explore Courses</button></Link>
                        </div >
                        <Image src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/public/Banner4.svg" alt="image" className=" min-w-[300px]  max-w-[500px] lg:w-[50%] px-2 sm:flex-shrink-0 -mb-5 " width={500} height={500} priority={true} />
                    </div>
                </div>
                <div key={2} className="h-[100%] flex justify-center  flex-wrap lg:flex-nowrap bg-gradient-to-r from-[#EBD3A3] to-[#F9F2DF] overflow-hidden  md:px-[50px] px-[20px] pt-5 ">
                    <div className='flex justify-center lg:justify-between max-w-[1300px] w-[100%] flex-wrap lg:flex-nowrap '>
                        <div className="max-w-[576px] my-auto flex flex-col justify-around items-center lg:items-start text-center lg:text-left  ">
                            <h1 className="xl:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[24px] font-semibold leading-tight text-[#6A1C1A]">Find your <span className='text-[#BE4E1E]'>passion, </span><br />find your <span className='text-[#BE4E1E]'>course </span> </h1>
                            <p className="lg:text-[20px] md:text-[17px] text-[14px] lg:my-9  my-3 font-[400] tracking-wide max-w-[691px]">Choose from <span className='text-[#BE4E1E]'> GARP-approved courses </span> offered by Midha FIN to chart your path towards a promising career in finance.</p>
                            <Link href='https://edu.midhafin.com/s/authenticate' className='max-w-[395px] min-w-[160px] w-[60%]'><button className="bg-[#6A1C1A] transition-colors duration-150  hover:bg-[#BE4E1E] md:py-4 py-[6px]  max-w-[395px] min-w-[160px] w-[100%] md:text-3xl text-[1.1rem] mt-3 rounded-[54px] font-semibold tracking-wider text-[#F9ECC7] mb-4 ">Signup Now</button></Link>
                        </div >
                        <Image src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/public/banner2.png" alt="image" className="min-w-[300px] my-auto max-w-[600px] w-[100%] max-h-[450px] aspect-[4/3] " width={500} height={500} />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default HeroSection
