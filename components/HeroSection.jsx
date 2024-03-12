'use client'
import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { useTypewriter } from "react-simple-typewriter";


function HeroSection() {
    const [typeEffect] = useTypewriter({
        words: ['Finance','FRM','CFA','PRM'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 50,
    })

    return (
        <div>
            <div className='max-w-full sm:flex justify-center bg-[#FAF4F2] p-5 text-center'>
                <div className='flex flex-col item-center m-5 justify-around sm:w-[60%] lg:w-[45%] w-[100%]  mx-auto '>
                    <h1 className=' text-[27px] sm:text-[28px] text-left md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px;'><span className='text-[#6A1C1A]'>Boost your career </span> in  <span className='text-[#6A1C1A]'>{typeEffect}</span> <br /> with  mentorship you can bank on <span className='text-[#6A1C1A]'>!</span></h1>
                    <p className=' w-[100%] lg:w-[95%] text-left xl:w-[70%] text-[#391601] text-[1rem] sm:text-lg  lg:text-xl mx-auto '>Step up your career by acquiring the desirable skills and leading global certifications in Finance.</p>
                    <div className='flex mt-5 justify-center'>
                        <Link href="https://midhafin.ongraphy.com/s/authenicate" >
                            <button className='text-sm sm:text-md lg:text-xl bg-[#6A1C1A] rounded text-white hover:bg-black py-3 px-2 sm:px-4 md:px-3 lg:px-4 m-2 ease-in duration-300  '>SIGNUP NOW</button>
                        </Link>
                        <Link href="https://midhafin.ongraphy.com/s/store">
                            <button className='text-sm sm:text-md lg:text-xl bg-[#6A1C1A] rounded text-white hover:bg-black py-3 px-2 sm:px-4 md:px-3 lg:px-4 m-2'>EXPLORE COURSES</button>
                        </Link>
                    </div>
                </div>
                <div className='sm:w-[40%] my-auto'>
                    <Image width={500} height={300} className='p-5 h-auto my-auto' src="/Micky-Banner.png" alt="Micky Midha" priority />
                </div>
            </div>
        </div>
    )
}

export default HeroSection