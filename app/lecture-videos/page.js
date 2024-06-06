import React from 'react';
import Image from 'next/image'
import Footer from '../../components/common/SiteFooter';
import Navbar from '../../components/common/SiteHeader';

export const metadata = {
  title: "Lecture Videos",
};

const MyComponents5 = () => {
  return (
    <div className='select-none'>
      <Navbar />
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute left-[max(50%,25rem)] top-0 h-[110rem] w-[128rem] -translate-x-1/2 stroke-gray-200" aria-hidden="true">
            <defs>
              <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
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
              <div className="lg:max-w-lg">
                <p className="text-2xl pl-1 font-semibold leading-7 text-[#842020]">Features</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"> Lecture <span style={{ color: '#842021' }}>Videos</span></h1>
                <p className="mt-6  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6 text-gray-700 tracking-wide">We currently offer around 150 hours of lecture videos for the FRM® Part 1 curriculum and around 140 hours for the FRM® Part 2 curriculum. The videos cover all the Learning Objectives for each topic in the FRM® curriculum, as prescribed by GARP®. The videos are organized in our Learning Management System in the same order as they are in our study planner for FRM®. The concepts are covered completely from scratch, and, even if you have no background in Statistics or Finance, you don&apos;t need to worry about it.</p>
              </div>
            </div>
          </div>
          <div className="ml-4 sm:ml-0 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">


            <Image
              src="/lecture-video.svg"
              alt="lecture-video"
              className="w-[15rem] max-w-none rounded-xl shadow-l ring-1 ring-gray-400/10 sm:w-[30rem] mx-auto"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-auto text-xl leading-7 text-gray-700 lg:max-w-lg tracking-wide">
                <p className=' text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6'>According to Micky - &quot; We have not established MidhaFin only for helping the candidates to pass the FRM® and CFA exams. Shortcuts, tips, and tricks are definitely helpful, but they should not be too much relied upon. The main focus should be on understanding the underlying dynamics behind the concepts and their implementation. Over the years, the popularity of the CFA and FRM® certifications has grown enormously, and there has been a surge in the number of candidates who clear all the levels of these exams. I&apos;ve heard a number of recruiters saying that extremely qualified candidates are not able to answer basic interview questions. From Financial Risk Practitioner&apos;s perspective, and FRM® certification can add value only if the candidate has followed holistic approach to prepare for the exam and crack it. For example, If 1 day 99% VaR changed by 10%, then the candidate should not only be able to identify the cause and risk typically associated with such a change, but also be able to analyze the underlying VaR model and explain this phenomenon, either by mathematically deriving it or through the use of visual aids wherever possible.&quot;</p>
                <p className="mt-8  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6">Micky Midha will help you visualize the difficult quantitative ideas in the FRM® curriculum through his videos, by the extensive use of graphs, figures, and tables. Numerous examples that are aligned to the GARP® FRM® Learning Objectives have been discussed in the videos. This way, your learning experience will be enhanced as you make your way towards passing the FRM® exam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MyComponents5;