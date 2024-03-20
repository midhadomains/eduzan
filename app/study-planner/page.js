import React from 'react';
import Image from 'next/image'
import Footer from '../../components/SiteFooter';
import Navbar from '../../components/SiteHeader';
export const metadata = {
    title: 'Study Planner',
    description: "Study plan for FRM PRM and CFA,",
    robots:"index,follow",
    keywords: "FRM Study Plan, Best study plan FRM"
}
const MyComponent = () => {
    return (
        <>
            <Navbar />
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200" aria-hidden="true">
                        <defs>
                            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="220" height="220" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-xl">
                                <p className="text-xl  font-semibold leading-7 text-[#842020]">Features</p>
                                <h1 className="mt-2 text-4xl font-bold  text-gray-900 sm:text-5xl tracking-wide">MidhaFin<span className="text-[#842020]">&nbsp;Study</span>  Planner</h1>
                                <p className="mt-6  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6 text-gray-700 tracking-wide">We at MidhaFin are a strong proponent of smart work. Many FRM®, CFA, and PRM students, whom we have taught over the years, have had to juggle their exam preparations with either job or college, which inevitably brought time management and exam strategy to the forefront of their FRM®/CFA/PRM preparation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 sm:p-12 lg:sticky lg:top-4  lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <Image width={400} height={400} className="w-[15rem] max-w-none rounded-xl  shadow-l ring-1 ring-gray-400/10 sm:w-[30rem] mx-auto" src='/Study-planner.png' alt="Study-planner" />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-xl leading-7 text-gray-700 lg:max-w-lg tracking-wide">
                                <p className=' text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6'>After years of successfully guiding students in their FRM®/CFA/PRM study planning, our team has not only been able to identify certain approaches to the FRM®/CFA/PRM preparation but have also learnt to customize the FRM®/CFA/PRM study plans for individual students, based on their time commitments and goals.</p>
                                <p className="mt-8  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6">The relationship between our instructors and our students is not just that of FRM®/CFA/PRM instruction and teaching but also of mentorship. When a FRM®/CFA/PRM student joins, we have a session with him or her, wherein, our instructors understand the student’s goals and the amount of time they have to prepare for the FRM®/CFA/PRM exam. Based on the student’s prior knowledge, his or her strengths & weaknesses and the amount of time they can commit every week, we prepare a customized FRM®/CFA/PRM study plan for the student.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default MyComponent;

