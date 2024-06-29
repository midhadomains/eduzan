import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RightBanners() {
  return (
    <div className='w-[100%] max-w-[315px] sticky top-[120px] left-3  hidden xl:block'>
      <div className='bg-[#f6f0da] rounded-xl flex flex-col items-center justify-center py-5'>
        <h1 className='font-[500] text-[20px] text-center text-[#6A1C1A] ' >Need help with <span className='font-bold'> <br /> FRM preparation ?</span></h1>
        <Link href='/contact-us' className='p-2 text-[20px] font-semibold text-white mt-7 px-8 rounded-full  mx-auto bg-[#BE4E1E]'>Contact Us</Link>
      </div>
      <hr className='my-5 '/>
      <h2 className='text-[25px] text-center text-[#BF4E1E] font-[500] mb-3 '>Check Out Our Sample Courses For <span className='font-bold '>FREE &nbsp;&#10095;</span>  </h2>
      <Link className='mb-5' href='https://edu.midhafin.com/courses/FRM-Part-1-Sample-Course'><Image className='mb-5 shadow-md ' src='https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_sample_course_720.webp' height={200} width={300} alt='Frm Part 1 sample course' /></Link>
      <Link href='https://edu.midhafin.com/courses/FRM-Part-2-Sample-Course'> <Image className='mb-5 shadow-md ' src='https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_2_sample_course_720.webp' height={200} width={300} alt='Frm Part 1 sample course' /></Link>
    </div>
  )
}
