import React from 'react';
import Image from 'next/image'
import Navbar from '../../components/SiteHeader';
import Footer from '../../components/SiteFooter';
const Page = () => {
    return (
        <>
        <Navbar />
        <div>

        
                <div className="h-40 relative bg-red-950">
                    <h1 className="text-4xl font-style:normal font-bold text-white pt-6 pl-4 md:pl-28">About Us</h1>
                    <p className='text-white pt-6 pl-4 md:pl-28'>
                        <a href="https://www.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f">Home</a> /
                        <a href="https://www.midhafin.com/aboutus"> About Us
                        </a>
                    </p>

                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 px-4">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg ">
                                    <h1 className="mt-20  text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"> About <span style={{ color: '#842021' }}>MidhaFin</span></h1>
                                    <p className="mt-6 text-sm lg:text-xl sm:text-sm md:text-lg  leading-6 text-gray-700 tracking-wide  ">MidhaFin was established in December 2011 (under the brand name FINATEE and later renamed to MidhaFin) with the main goal of providing excellent training for FRM®, CFA®, PRM, and several other courses. We work hard to give our students the finest learning experience possible while maintaining a strong commitment to quality.</p>
                                </div>
                            </div>
                        </div>

                        <div className="ml-1 lg:mt-20 sm:ml-0 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">

                            <Image
                            src='/about-us.png'
                                alt="about us"
                                className="w-[20rem] max-w-none rounded-xl shadow-l ring-1 ring-gray-400/10 sm:w-[35rem] mx-auto"
                                width={500}
                                height={200}
                            />
                        </div>

                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-auto text-xl leading-7 text-gray-700 lg:max-w-lg tracking-wide">
                                    <p className=' text-sm lg:text-xl sm:text-sm md:text-lg leading-6'>One of the hallmarks of MidhaFin is our status as one of the pioneering training providers in India to secure authorization from GARP in 2018. We have taken great effort in creating our own thorough study resources, interesting videos, question banks, and accurate mock exams as authorized partners. These materials have received a great deal of praise for their success since they were carefully created to cater to the unique needs of our students.</p>
                                    <p className="mt-8 text-sm lg:text-xl sm:text-sm md:text-lg leading-6">We understand the importance of staying up-to-date with evolving industry standards and best practices. Therefore, we continually update our study materials and resources to align with the latest learning objectives and trends. By doing so, we guarantee that our students receive the most relevant and comprehensive education available.</p>
                                    <p className="mt-8 text-sm lg:text-xl sm:text-sm md:text-lg leading-6">At MidhaFin, we take great pride in our exceptional passing rate, which ranks among the highest globally. Also, we provide genuine passing rates, as every single candidate&quot;s name can be verified from authentic portals. This impressive accomplishment is a testament to the efficacy of our training methodologies and the dedication of our instructors.</p>
                                    <p className="mt-8 text-sm lg:text-xl sm:text-sm md:text-lg leading-6">One of our key USPs is our robust support system. Our team of experienced professionals is always ready to provide guidance and support to our students, ensuring that their queries are promptly addressed and their learning journey remains smooth.</p>
                                    <p className="mt-8 text-sm lg:text-xl sm:text-sm md:text-lg leading-6">At MidhaFin, we believe that education is a lifelong journey, and we are committed to empowering our students with the knowledge and skills necessary to excel in their chosen fields. With our unwavering dedication to providing best-in-class training, and a track record of success, we invite you to join us at MidhaFin to get an educational experience that will pave the way for a successful career in finance.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                </div>
                {/* <Footer className="fixed bottom-0 w-full" /> */}
            </>

    );
}

export default Page;