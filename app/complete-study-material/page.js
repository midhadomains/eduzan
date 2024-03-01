import React from 'react';
import Image from 'next/image'
import Footer from '../../components/SiteFooter';
import Navbar from '../../components/SiteHeader';

const MyComponent = () => {
  return (
    <>
      <Navbar />
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute left-[max(50%,25rem)] top-0 h-[94rem] w-[128rem] -translate-x-1/2 stroke-gray-200" aria-hidden="true">
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
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Complete <span style={{ color: '#842021' }}>Study</span> Material</h1>
                <p className="mt-6   text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6 text-gray-700 tracking-wide">Our comprehensive study material for the FRM® curriculum is designed to provide candidates with everything they need for a complete and thorough understanding of the subject. With a range of resources and features, we ensure that our candidates have access to the best tools for their exam preparation.</p>
              </div>
            </div>
          </div>
          <div className="-ml-4 sm:ml-0 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">

            <Image
              src="/Complete-study-material.png"
              alt="Study-planner"
              className="w-[15rem] max-w-none rounded-xl shadow-l ring-1 ring-gray-400/10 sm:w-[30rem] mx-auto"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-auto text-xl leading-7 text-gray-700 lg:max-w-lg tracking-wide">
                <p className=' text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6'>Our study material encompasses various components such as video lectures, lecture PDFs, question banks, mock tests, and past sample paper questions. These resources cover all the essential aspects of the FRM® curriculum, allowing candidates to delve into each topic with confidence.</p>
                <p className="mt-8  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6">The video lectures provide in-depth explanations and visual aids to enhance understanding, while the lecture PDFs serve as comprehensive guides.</p>
                <p className='mt-8  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6'>To ensure clarity and address any doubts, we offer instructor-led doubt sessions, where candidates can interact with experienced instructors and receive personalized guidance. Our unlimited doubt answering feature enables candidates to seek clarification on any topic.</p>
                <p className="mt-8  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6">With our complete study material, candidates can approach the FRM® curriculum with confidence, knowing that they have access to a wealth of resources and expert support to excel in their exams.</p>
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