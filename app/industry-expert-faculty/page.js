import React from 'react';
import Image from 'next/image'
import Footer from '../../components/SiteFooter';
import Navbar from '../../components/SiteHeader';
const IndustryExpertFaculty = () => {
  return (
    <>
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-2xl pl-1 font-semibold leading-7 text-[#842020]">Features</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"> Industry <span style={{ color: '#842021' }}>Expert</span> Faculty</h1>
                <p className="mt-6 text-sm lg:text-xl sm:text-sm md:text-lg leading-6 text-gray-700 tracking-wide">We are proud to have industry-expert faculty members who are FRM®/CFA/PRM certified and bring a wealth of experience and knowledge to the classroom. With their extensive industry backgrounds and deep understanding of the FRM® curriculum, our faculty members are well-equipped to guide candidates towards success.</p>
              </div>
            </div>
          </div>
          <div className="ml-4 sm:ml-0 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">

            <Image
              src="/industry-expert-faculty.png"
              alt="industry-expert-faculty"
              className="w-[20rem] max-w-none rounded-xl shadow-l ring-1 ring-gray-400/10 sm:w-[30rem] mx-auto"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-auto text-xl leading-7 text-gray-700 lg:max-w-lg tracking-wide">
                <p className=' text-sm lg:text-xl sm:text-sm md:text-lg leading-6'>Our faculty&apos;s excellent teaching style ensures that complex concepts are presented in a clear and engaging manner. They go beyond textbook explanations, highlighting the intricate connections between theory and practice. By drawing on real-world examples and case studies, they help candidates grasp the practical implications of the concepts they learn.</p>
                <p className="mt-8 text-sm lg:text-xl sm:text-sm md:text-lg leading-6">With their industry experience and expertise, our faculty members provide valuable insights and perspectives that go beyond the syllabus. They inspire and motivate students to think critically and apply their knowledge in real-world scenarios.</p>
                <p className="mt-8 text-sm lg:text-xl sm:text-sm md:text-lg leading-6">When you learn from our industry expert faculty, you can be confident that you are receiving top-quality education that prepared you for the challenges and opportunities in the field of FRM®.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default IndustryExpertFaculty;