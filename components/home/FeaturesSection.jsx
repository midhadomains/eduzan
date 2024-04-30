import React from 'react'
import Image from 'next/image'
import { IoIosArrowUp } from "react-icons/io";

export default function FeaturesSection() {
  
  return (
    <div className='lg:my-[100px] my-[50px] max-w-[1300px] h-auto flex justify-center sm:justify-around flex-wrap mx-auto '>
      <div className='md:w-[350px] md:h-[350px] w-[310px] h-[310px]  rounded-3xl relative  bg-[#F9F2DF] m-3 flex-shrink-0'>
        <Image src="/ief.svg" alt="img" width={280} height={200} className='mx-auto mt-6' />
        <div className='group md:h-[100px] h-[80px] md:w-[350px] w-[310px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[260px]  transition-height duration-500 ease-in-out shadow-xl'>
          <IoIosArrowUp className='mx-auto text-3xl leading-0 group-hover:rotate-180 	transition-transform duration-500 ease-in-out' />
          <h1 className=' md:text-[1.75rem] text-[1.3rem] font-[700] md:mb-[10px] mb-[5px] leading-8 hidden md:block'>Industry Experienced <br/>Faculty</h1>
          <h1 className=' md:text-[1.75rem] text-[1.3rem] font-[700] md:mb-[10px] mb-[7px] leading-8 md:hidden'>Industry Experienced Faculty</h1>
          <p className='m-3 text-[#6A1C1A] '>Well trained & have real industry experience, who have taught hundreds of students & have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in & are often complimented upon by our students.</p>
        </div>
      </div>
      <div className='md:w-[350px] md:h-[350px] w-[310px] h-[310px]  rounded-3xl relative  bg-[#F9F2DF] m-3 flex-shrink-0'>
        <Image src="/sds.svg" alt="img" width={262} height={200} className='mx-auto mt-6' />
        <div className='group md:h-[100px] h-[80px] md:w-[350px] w-[310px] text-center bg-white rounded-3xl  absolute  overflow-hidden  bottom-0 md:hover:h-[305px] hover:h-[295px]   transition-height duration-500 ease-in-out shadow-xl'>
          <IoIosArrowUp className='mx-auto text-3xl leading-0 group-hover:rotate-180 	transition-transform duration-500 ease-in-out' />
          <h1 className=' md:text-[1.75rem] text-[1.3rem] font-[700] md:mb-[10px] mb-[5px] leading-8 hidden md:block'>Systematic Doubt<br /> Solving</h1>
          <h1 className=' md:text-[1.75rem] text-[1.3rem] font-[700] md:mb-[10px] mb-[7px] leading-8 md:hidden'>Systematic Doubt Solving</h1>
          <p className='m-3 my-[5px] text-[#6A1C1A] mt-3 '>We believe curiosity is the mother of all inventions, so we ensure every single relevant doubt of every single student is cleared within reasonable time frame. Relevant doubts from other sources are also answered by our faculty and we provide in depth and easy to understand solutions to our students.</p>
        </div>
      </div>
      <div className='md:w-[350px] md:h-[350px] w-[310px] h-[310px]  rounded-3xl relative  bg-[#F9F2DF] m-3 flex-shrink-0'>
        <Image src="/etem.svg" alt="img" width={210} height={200} className='mx-auto mt-6' />
        <div className=' group md:h-[100px]  h-[80px] md:w-[350px] w-[310px] bg-white rounded-3xl  absolute  overflow-hidden  text-center bottom-0 hover:h-[240px]  transition-height duration-500 ease-in-out shadow-xl'>
          <IoIosArrowUp className='mx-auto text-3xl leading-0 group-hover:rotate-180 	transition-transform duration-500 ease-in-out'/>
          <h1 className=' md:text-[1.75rem] text-[1.3rem] font-[700] md:mb-[10px] mb-[5px] leading-8 hidden md:block'>End to End<br/> Mentorship</h1>
          <h1 className=' md:text-[1.75rem] text-[1.3rem] font-[700] md:mb-[10px] mb-[7px] leading-8  md:hidden'>End to End Mentorship</h1>

          <p className='m-3 text-[#6A1C1A]  '>We help students throughout the process of learning and even beyond. From study planning, to the exam, to the relevant job interviews, we are there at every step with our students.</p>
        </div>
      </div>
    </div>
  )
}

