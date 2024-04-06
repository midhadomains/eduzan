"use client"
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import Image from 'next/image'
import Link from 'next/link'
function HeroSection() {
    return (
        <div className="slider-container min-h-[644px] sm:min-h-[500px] w-[100%]">
            <Slide >
                <div key={1} className="flex justify-center flex-wrap lg:flex-nowrap bg-[#F9F2DF] overflow-hidden min-h-[500px] h-[100%]   px-2  sm:px-5 sm:pt-8 pt-2 w-[100vw]">
                    <div className="max-w-[800px] my-auto flex flex-col justify-around items-center lg:items-start text-center lg:text-left  p-4">
                        <h1 className="lg:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[1.6rem] font-bold leading-tight  mt-7 md:mt-0"><span className='text-[#BE4E1E]'>Boost your career</span> in <span className='text-[#BE4E1E]'>Finance</span> with  mentorship you can bank on.</h1>
                        <p className="lg:text-[1.75rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1.1rem] lg:my-7  my-3 font-[400] tracking-wide">Step up your career by acquiring the desirable skills and <span className='text-[#BE4E1E]'>leading global certifications in Finance.</span></p>
                        <Link href='https://edu.midhafin.com/s/authenticate'><button className="bg-[#6A1C1A] transition-colors duration-150 hover:bg-[#BE4E1E] md:py-5 py-[.7rem] px-10 md:text-3xl text-[1.1rem] mt-3  rounded-[54px] font-semibold tracking-wide text-[#F9F2DF] w-fit">SIGNUP NOW</button></Link>
                    </div >
                    <Image src="/Banner4.svg" alt="image" className=" min-w-[300px]  max-w-[500px] px-2 sm:flex-shrink-0 -mb-5 " width={500} height={500} priority={true} />  
                </div>
                <div key={2} className="h-[100%] flex justify-center flex-wrap lg:flex-nowrap bg-gradient-to-r from-[#EBD3A3] to-[#F9F2DF] overflow-hidden  px-2  sm:px-5 sm:pt-8 pt-2 ">
                    <div className="max-w-[700px] md:min-w-[413px] w-[100%] sm:h-auto my-auto flex flex-col justify-around items-center lg:items-start text-center lg:text-left min-w-[330px] sm:min-w-[400px] ">
                        <h1 className="lg:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[1.4rem] font-bold leading-tight  mt-7 md:mt-0">Find Your <span className='text-[#BE4E1E]'>Passion , </span><br />Find Your <span className='text-[#BE4E1E]'>Course </span> </h1>
                        <p className="lg:text-[1.75rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1.1rem] md:my-7  my-3 font-[400] tracking-wide lg:pr-10 ">Choose from <span className='text-[#BE4E1E]'> GARP-approved courses </span> offered by Midha FIN to chart your path towards a promising career in finance.</p>
                        <Link href='https://edu.midhafin.com/s/store'><button className="bg-[#6A1C1A] transition-colors duration-150 hover:bg-[#BE4E1E] md:py-5 py-[.7rem] px-10 md:text-3xl text-[1.1rem] mt-3 rounded-[54px] font-semibold tracking-wide text-[#F9F2DF] w-fit mb-4">EXPLORE COURSES</button></Link>
                    </div >
                    <Image src="/banner2.png" alt="image" className="min-w-[340px] my-auto max-w-[600px] w-[100%]  sm:flex-shrink-0 max-h-[450px] aspect-[4/3] " width={500} height={500} />
                </div>
            </Slide>
        </div>

    )

}

export default HeroSection
