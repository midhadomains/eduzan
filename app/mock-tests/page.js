import React from 'react';
import Image from 'next/image'
import Footer from '../../components/SiteFooter';
import Navbar from '../../components/SiteHeader';
import Link from 'next/link'
const MyComponents4 = () => {
    return (
        <>
            <Navbar />
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className='block lg:hidden mb-5 py-2 shadow-2xl rounded-2xl w-fit mx-auto '>
                    <Image
                        src="/mocktestcourse.jpg"
                        alt="mock-test"
                        className="w-[15rem] max-w-none rounded-xl shadow-l ring-1 ring-gray-400/10 sm:w-[30rem] mx-auto"
                        width={300}
                        height={300}
                        priority={true}
                    />
                    <Link href='https://edu.midhafin.com/courses/FRM-Part-1-Mock-Tests-6353e9d2e4b0f18ec4f5f154'><p className='w-[150px] bg-[#6A1C1A] text-white font-semibold text xl p-2 text-center mx-auto my-3 rounded-full tracking-wide'>View Details</p></Link>
                </div>
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
                                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"> Mock <span style={{ color: '#842021' }}> Tests</span></h1>
                                <p className="mt-6  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6 text-gray-700 tracking-wide">Our philosophy involves learning through application. Mock test, both sectional and full-length, are important components of the FRM®/CFA/PRM study process at MidhaFin.</p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-4 sm:ml-0 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <div className='hidden lg:block  py-2 shadow-2xl rounded-2xl w-fit mx-auto '>
                            <Image
                                src="/mocktestcourse.jpg"
                                alt="mock-test"
                                className="w-[15rem] max-w-none rounded-xl shadow-l ring-1 ring-gray-400/10 sm:w-[30rem] mx-auto"
                                width={300}
                                height={300}
                                priority={true}
                            />
                            <Link href='https://edu.midhafin.com/courses/FRM-Part-1-Mock-Tests-6353e9d2e4b0f18ec4f5f154'><p className='w-[250px] bg-[#6A1C1A] text-white font-[500] text-2xl p-3 text-center mx-auto my-3 rounded-full tracking-wider'>View Details</p></Link>

                        </div>
                        <Image
                            src="/mock-test.svg"
                            alt="mock-test"
                            className="w-[15rem] max-w-none rounded-xl shadow-l ring-1 ring-gray-400/10 sm:w-[30rem] mx-auto "
                            width={300}
                            height={300}
                            priority={true}

                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-auto text-xl leading-7 text-gray-700 lg:max-w-lg tracking-wide">
                                <p className=' text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6'>During the FRM®/CFA/PRM preparations, we conduct frequent sectional mock papers which ensures that any new information acquired by the student is adequately tested as the FRM®/CFA/PRM course.</p>
                                <p className="mt-8  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6">Starting three weeks before the FRM®/CFA/PRM exam, we conduct weekly full-length mock exams which are based on the pattern seen in actual previous FRM®/CFA/PRM exams.</p>
                                <p className='mt-8  text-[1rem] lg:text-xl sm:text-[1rem] md:text-lg leading-6'>Further, we also provide quartiles for our students to help them understand their strengths and weaknesses in comparison to other FRM®/CFA/PRM students.</p>
                                <p>Our philosophy involves learning through application. Mock tests, both sectional and full-length, are important components of the FRM®/CFA/PRM study process at MidhaFin. Starting three weeks prior to the FRM®, CFA®, or PRM exams, MidhaFin offers weekly full-length mock exams that closely replicate the structure and intensity of the actual tests. These exams are crafted based on patterns observed in previous years exams, ensuring that participants experience the most realistic preparation possible. This approach allows candidates to familiarize themselves with the exam format, manage their time effectively under exam conditions, and identify areas that require further study. Alongside rigorous testing, our course also includes detailed performance comparison metrics. These insights reveal each candidate&apos;s strengths and weaknesses compared to their peers, directing their focus to areas that need strengthening. This strategic guidance is crucial for optimizing study efforts and boosting confidence Exclusive to MidhaFin Candidates: Our mock tests are an integral part of the training package, provided at no extra cost to ensure seamless preparation. Not a MidhaFin candidate? No problem! Access our expertly crafted mock tests for a nominal fee and start preparing with the best.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default MyComponents4;