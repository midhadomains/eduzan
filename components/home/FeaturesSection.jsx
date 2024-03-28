import React from 'react'
import Image from 'next/image'

export default function FeaturesSection() {
  
  return (
    <div className='my-[100px] max-w-[1250px] h-auto flex justify-around flex-wrap mx-auto '>
      <div className='w-[350px] h-[350px]  rounded-3xl relative  bg-[#F9F2DF] m-3 flex-shrink-0'>
        <Image src="/ief.svg" alt="img" width={280} height={200} className='mx-auto mt-6' />
        <div className='h-[100px] w-[350px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[260px]  transition-height duration-500 ease-in-out shadow-xl'>
          <h1 className=' text-[1.75rem] font-[700] my-[10px]'>Industry Experienced Faculty</h1>
          <p className='m-3 text-[#6A1C1A] '>Well trained & have real industry experience, who have taught hundreds of students & have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in & are often complimented upon by our students.</p>
        </div>
      </div>
      <div className='w-[350px] h-[350px]  rounded-3xl relative  bg-[#F9F2DF] m-3 flex-shrink-0'>
        <Image src="/sds.svg" alt="img" width={262} height={200} className='mx-auto mt-6' />
        <div className='h-[100px] w-[350px] text-center bg-white rounded-3xl  absolute  overflow-hidden  bottom-0 hover:h-[310px]  transition-height duration-500 ease-in-out shadow-xl'>
          <h1 className=' text-[1.75rem] font-[700] my-[10px]'>Systematic Doubt<br /> Solving</h1>
          <p className='m-3 text-[#6A1C1A] '>We believe curiosity is the mother of all inventions, so we ensure every single relevant doubt of every single student is cleared within reasonable time frame. Relevant doubts from other sources are also answered by our faculty and we provide in depth and easy to understand solutions to our students.</p>
        </div>
      </div>
      <div className='w-[350px] h-[350px]  rounded-3xl relative  bg-[#F9F2DF] m-3 flex-shrink-0'>
        <Image src="/etem.svg" alt="img" width={210} height={200} className='mx-auto mt-6' />
        <div className='h-[100px] w-[350px] bg-white rounded-3xl  absolute  overflow-hidden  text-center bottom-0 hover:h-[240px]  transition-height duration-500 ease-in-out shadow-xl'>
          <h1 className=' text-[1.75rem] font-[700] my-[10px]'>End to End<br/> Mentorship</h1>
          <p className='m-3 text-[#6A1C1A]  '>We help students throughout the process of learning and even beyond. From study planning, to the exam, to the relevant job interviews, we are there at every step with our students.</p>
        </div>
      </div>
    </div>
  )
}

