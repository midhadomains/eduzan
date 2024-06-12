'use client'
import React from 'react';
import Image from 'next/image'
import Footer from '../../components/common/SiteFooter';
import Navbar from '../../components/common/SiteHeader';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

// export const metadata = {
//     title: 'Study Planner',
//     description: "Study plan for FRM PRM and CFA,",
//     robots:"index,follow",
//     keywords: "FRM Study Plan, Best study plan FRM"
// }
const MyComponent = () => {
    const handleScroll = () => {
        document.getElementById('more-content').scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='select-none'>
            <Navbar />
            <div className='max-w-[1400px] md:px-[50px] px-[25px] mx-auto'>
                <p className='lg:mt-[63px] md:mt-[43px] sm:mt-[28px] mt-[16px] sm:text-left text-center text-[#50535C] sm:text-[20px] text-[16px] md:text-[24px] '>Features</p>
                <h1 className=' sm:text-[32px] text-[24px] lg:text-[48px] font-[700] text-[#691D1C] tracking-wide sm:text-left text-center'>MidhaFin Study <span className='text-[#BE4E1E]'>Planner</span></h1>
                <div className=' flex  flex-wrap mt-[4.5%] shadow-[0px_4px_4px_0px_#0000001F] rounded-[10px]'>
                    <div className='max-w-[650px]  sm:w-[50%] min-w-[280px] bg-[#F9F6EB] sm:rounded-[10px_0px_0px_10px] flex justify-center items-center md:py-[49px] sm:py-[35px] py-[21px]'>
                        <Image src="/mf_planner.webp" width={800} height={800} className='w-[93%]'/>
                    </div>
                    <div className='max-w-[650px] sm:w-[50%] min-w-[280px] mx-auto   '>
                        <p className=' mt-[13%] ml-[8.5%] mr-[12%]  lg:text-[16px] text-[14px] xl:text-[20px] leading-[22px] md:leading-[36px]'>The study plan has taken care of the sequence in the best possible way, we strongly advice to follow this sequence and the schedule.</p>
                        <h1 className='ml-[8.5%] lg:text-[16px] text-[14px] xl:text-[20px] sm:mt-[18px] mt-[8px] lg:mt-[28px] leading-[36px]'>View Study Plans</h1>
                        <div className='ml-[8.5%] mb-[13%] mt-[5%] flex flex-col lg:text-[24px] sm:text-[20px] text-[16px] text-[#BE4E1E] sm:gap-[18px] gap-[12px] md:gap-[28px] lg:gap-[36px]'>
                        <Link href="https://frm.midhafin.com/part-1/study-plan" className='flex items-center gap-2 '>FRM Part 1<MdKeyboardArrowRight /></Link>
                        <Link href="https://frm.midhafin.com/part-2/study-plan" className='flex items-center gap-1.5'>FRM Part 2<MdKeyboardArrowRight /></Link>
                        </div>
                        
                    </div>
                    
                </div>
                {/* <div>Know More</div>    */}
                <div className=' mt-[20px] '>
                    <button onClick={handleScroll} className='text-[#BE4E1E] mx-auto lg:text-[20px] text-[16px] flex items-center text-center'>Know More<MdOutlineArrowDropDown /></button>
                </div>
                <p id='more-content' className='mb-[4%] max-w-[1000px] sm:mt-[48px] mt-[26px] md:mt-[68px] leading-[22px] md:leading-[38.8px] lg:text-[16px] text-[14px] xl:text-[20px] mx-auto'>We at MidhaFin are a strong proponent of smart work. Many FRM®, CFA & PRM students whom we have taught over the years have had to juggle their exam preparations with either job or college which brought time management & exam strategy to the forefront of their FRM®/CFA/PRM preparation.</p>
                <div className='hidden sm:block'>
                    <Image src="/pf_studyplanner.png" height={700} width={1300} />
                </div>
                <div className='sm:hidden '>
                <Image src="/pf_studyplanner1.png" height={700} width={1300} />
                </div>
                <p className='mb-8  max-w-[1000px] sm:mt-[48px] mt-[4%] md:mt-[68px] leading-[22px] md:leading-[38.8px] lg:text-[16px] text-[14px] xl:text-[20px] mx-auto'>
                After years of successfully guiding students in their FRM®/CFA/PRM study planning, our team has not only been able to identify certain approaches to the FRM®/CFA/PRM preparation but have also learnt to customize the FRM®/CFA/PRM study plans for individual students, based on their time commitments and goals. <br />The relationship between our instructors and our students is not just that of FRM®/CFA/PRM instruction and teaching but also of mentorship. When a FRM®/CFA/PRM student joins, we have a session with him or her, wherein, our instructors understand the student&apos;s goals and the amount of time they have to prepare for the FRM®/CFA/PRM exam. Based on the student&apos;s prior knowledge, his or her strengths & weaknesses and the amount of time they can commit every week, we prepare a customized FRM®/CFA/PRM study plan for the student.
                </p>
            </div>
            <Footer />
        </div>
    );
}
export default MyComponent;

