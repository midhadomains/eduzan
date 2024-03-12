"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Platform() {

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

  return (
    <>
          <div className='bg-[#FFF5EE] mt-8 m-1 pb-5 text-center'>
                        <div className='max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] mx-auto mb-5 text-center my-3'>
                            <h1 className='text-[40px] md:text-[50px] font-bold my-3'>Our <span className='text-[#6A1C1A]'>Platform</span> Features</h1>
                            <p className='my-4'>We at MidhaFin, focus on striking a careful balance, between Knowledge and Relevance, between theory and analytics & between pure concepts and practical application.</p>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[80%] mx-auto gap-[50px] item-center'>
                            <div data-aos="fade-up" className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto  m-2' src="/Study-planner.png" alt="Study Planner" />
                                <h1 className='text-[20px] font-bold my-3'>Study Planner</h1>
                                <Link href='/study-planner'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px]  sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded  hover:bg-black'>READ MORE</button></Link>
                            </div>
                            <div data-aos="fade-up" className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-5 m-1' src='/question-bank.png' alt="Questions Bank" />
                                <h1 className='text-[20px] font-bold my-3'>Questions Bank</h1>
                                <Link href='/question-bank'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px]] rounded  hover:bg-black'>READ MORE</button></Link>
                            </div>
                            <div data-aos="fade-up" className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-2' src="/mock-test.png" alt="Mock Tests" />
                                <h1 className='text-[20px] font-bold my-3'>Mock Tests</h1>
                                <Link href='/mock-test'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded  hover:bg-black'>READ MORE</button></Link>
                            </div>
                            <div data-aos="fade-up" className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-2' src="/lecture-video.png" alt="Lecture Video" />
                                <h1 className='text-[20px] font-bold text-center my-3'>Lecture Video</h1>
                                <Link href='/lecture-video'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded  hover:bg-black'>READ MORE</button></Link>
                            </div>
                            <div data-aos="fade-up" className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-1' src="/doubt-solving-forum.png" alt="Doubt Solving Forum" />
                                <h1 className='text-[20px] my-3 font-bold'>Doubt Solving Forum</h1>
                                <Link href='/doubt-solving-forum'><button className='w-full mx-auto bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded  hover:bg-black'>READ MORE</button></Link>
                            </div>
                            <div data-aos="fade-up" className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-4' src="/industry-expert-faculty.png" alt="Industry Expert Faculty" />
                                <h1 className='text-[20px] my-3 font-bold'>Industry Expert Faculty</h1>
                                <Link href='/industry-expert-faculty'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px]] rounded  hover:bg-black'>READ MORE</button></Link>
                            </div>
                            <div data-aos="fade-up" className='mx-auto items-center flex flex-col justify-around '>
                                <Image width={150} height={100} className='mx-auto m-2' src="/Complete-study-material.png" alt="Complete Study Material" />
                                <h1 className='text-[20px] my-3 font-bold text-center'>Complete Study Material</h1>
                                <Link href='/complete-study-material'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded  hover:bg-black'>READ MORE</button></Link>
                            </div>
                            <div data-aos="fade-up" className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-4' src="/access-till-you-pass.png" alt="Access Till You P150" />
                                <h1 className='text-[20px] my-3 font-bold'>Access Till You Pass&nbsp;&nbsp;</h1>
                                <Link href='/access-till-you-pass'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded hover:bg-black'>READ MORE</button></Link>
                            </div>

                        </div>
                    </div> 
    </>
  )
}

export default Platform