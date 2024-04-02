"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

function Features() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
// *TODO Sujal sahu
  return (
    <>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-4 w-[92%] sm:w-[75%] mx-auto gap-[50px] mt-5 text-center'>
        <div data-aos="fade-right" className=' shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5EE] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
          <Image width={200} height={200} className='mx-auto w-40 sm:w-[220px] h-auto ' src="/ief.svg" alt="Industry Experienced Faculty" />
          <hr className='my-3' />
          <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>Industry Experienced Faculty</h1>
          <p className=' '>Our faculty is extremely well trained and have real industry experience. They have taught hundreds of students and have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in and that we are often complimented upon by our students.</p>
        </div>
        <div data-aos="fade-up" className=' shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5E] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
          <Image width={170} height={170} className=' mx-auto w-30 sm:w-[170px] h-30' src="/sds.svg" alt="Systematic Doubt Solving" />
          <hr className='my-3' />
          <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>Systematic Doubt Solving</h1>
          <p className=' '>We believe curiosity is the mother of all inventions, and so we ensure every single relevant doubt of every single student is cleared within reasonable time frame. Our faculty encourages students to ask doubts and for them no doubt is small or silly. Relevant doubts from other sources are also answered by our faculty and we provide in depth and easy to understand solutions to our students.</p>
        </div>
        <div data-aos="fade-left" className=' shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5EE] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
          <Image width={165} height={165} className=' mx-auto w-25 h-auto' src="/etem.svg" alt="End to End Mentorship" />
          <hr className='my-3' />
          <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>End to End Mentorship</h1>
          <p className=''>The relationship between our instructors and our students is not just that of instruction and teaching but also of mentorship. We help students throughout the process of learning and even beyond. From study planning, to the exam, to the relevant job interviews, we are there at every step with our students.</p>
        </div>
      </div>
    </>
  )
}

export default Features;


// export default function Features() {
//   useEffect(() => {
//     AOS.init({
//       disable: "phone",
//       duration: 700,
//       easing: "ease-out-cubic",
//     });
//   }, []);
//   return (
//     <div className='overflow-x-scroll w-[100%] flex space-x-5 sm:px-[50px] sm:py-9'>
//     {/* // <div className='flex justify-center flex-wrap my-8'> */}
//       <div data-aos="fade-right" className='mx-4 w-[300px] sm:w-[400px]  my-3  flex-shrink-0 text-center shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5EE] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
//         <Image width={220} height={170} className='mb-3 mx-auto' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/Industry-Experienced-Faculty-Graphic-qjjuf83k7rt50cqg3kt9xdovai3nhfwrev0ssglf5s.png" alt="Industry Experienced Faculty" />
//         <h1 className='text-2xl text-bold  text-white bg-[#6A1C1A] rounded text-center p-1'>Industry Experienced Faculty</h1>
//         <p className='my-3 '>Our faculty is extremely well trained and have real industry experience. They have taught hundreds of students and have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in and that we are often complimented upon by our students.</p>
//       </div>
//       <div data-aos="fade-up" className='flex-shrink-0 mx-4 w-[300px] sm:w-[400px]  my-3 text-center  shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5E] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
//         <Image width={170} height={170} className='mb-3 mx-auto' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/Systematic-Doubt-Solving-Graphic-qjjuf4c7gfnzpwvwpj6rnen0wym6mnhu2ceuvcqzuo.png" alt="Systematic Doubt Solving" />
//         <h1 className='text-2xl text-bold  text-white bg-[#6A1C1A] rounded text-center p-1'>Systematic Doubt Solving</h1>
//         <p className='my-3 '>We believe curiosity is the mother of all inventions, and so we ensure every single relevant doubt of every single student is cleared within reasonable time frame. Our faculty encourages students to ask doubts and for them no doubt is small or silly. Relevant doubts from other sources are also answered by our faculty and we provide in depth and easy to understand solutions to our students.</p>
//       </div>
//       <div data-aos="fade-left" className='flex-shrink-0 mx-4 w-[300px] sm:w-[400px] text-center  my-3  shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5EE] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
//         <Image width={160} height={170} className='sm:my-2 mb-3 mx-auto ' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/End-to-End-Mentorship-Graphic-qjjuetzzd99u67axdwpvdz8ydq159zcscx8ilb6br4.png" alt="End to End Mentorship" />
//         <h1 className='text-2xl text-bold  text-white bg-[#6A1C1A] rounded text-center p-1'>&nbsp;End to End&nbsp; &nbsp;Mentorship&nbsp;</h1>
//         <p className='my-3'>The relationship between our instructors and our students is not just that of instruction and teaching but also of mentorship. We help students throughout the process of learning and even beyond. From study planning, to the exam, to the relevant job interviews, we are there at every step with our students.</p>
//       </div>
//       {/* <div data-aos="fade-right" className='w-[300px] sm:w-[400px]  flex-shrink-0 my-3 shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5E] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
//         <Image width={200} height={200} className='my-5 sm:my-5 mx-auto ' src="/performance-highlights.png" alt="" />
//         <h1 className='text-2xl text-bold text-white text-center bg-[#6A1C1A] rounded p-1'>Recent Performance Highlights</h1>
//         <ul className='p-2 text-left' >
//           <p className='text-xl text-bold text-[#6A1C1A] text-center mt-1'>Nov 2022</p>
//           <hr className='w-[40%] mx-auto my-1' />
//           <li className='flex mb-1'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0 ' />Extraordinary success rate of 76% for FRM Level-I</li>
//           <li className='flex mb-1'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Extraordinary success rate of 78% for FRM Level-II</li>
//           <p className='text-xl text-bold text-[#6A1C1A] text-center my-2'>May 2023</p>
//           <hr className='w-[40%] mx-auto my-1' />
//           <li className='flex mb-1'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Extraordinary success rate of 86% for FRM Level-I</li>
//           <li className='flex mb-1'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Extraordinary success rate of 87.5% for FRM Level-II</li>
//         </ul>
//       </div>
//       <div data-aos="fade-right" className='w-[300px] sm:w-[400px] flex-shrink-0 my-3 shadow-2xl  bg-[#FFF5EE]  rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5E] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
//         <Image width={87} height={87} className='mb-3 my-3 mx-auto ' src="/highly-customised.png" alt="" />
//         <h1 className='text-2xl text-bold text-white text-center bg-[#6A1C1A] rounded p-1'>Highly Customized</h1>
//         <ul className='p-2 text-left mt-2' >
//           <li className='flex my-2'><FaCheckCircle className='mt-1 lg:my-auto mr-2 flex-shrink-0' />Access to 1-to-1 Doubt Session.</li>
//           <li className='flex my-2'><FaCheckCircle className='mt-1 lg:my-auto mr-2 flex-shrink-0' />Customized Study Plan meeting</li>
//           <li className='flex my-2'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Frequent “Personalized Meetings” to ensure progress and vital feedback.</li>
//           <li className='flex my-2'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Personalized Mocks Assessments and related advice to improve the score.</li>
//         </ul>
//       </div>
//       <div data-aos="fade-right" className='w-[300px] sm:w-[400px]  flex-shrink-0 my-3 shadow-2xl    rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5E] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
//         <Image width={183} height={100} className='mb-3 my-3 mx-auto ' src="/Quality-content.png" alt=" "/>
//         <h1 className='text-2xl text-bold text-white text-center bg-[#6A1C1A] rounded p-1'>Quality Content</h1>
//         <ul className='p-2 text-left mt-2' >
//           <li className='flex my-2 '><FaCheckCircle className='mt-1 mr-2  flex-shrink-0'/>Usage of Graphs, Tables, and charts to illustrate the concept.</li>
//           <li className='flex my-2'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0'/>Usage of Simple examples to enhance conceptual clarity.</li>
//           <li className='flex my-2'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Logical flow of Sequencing of chapters to enhance understanding.</li>
//           <li className='flex my-2'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Concepts built from Scratch, ease of understanding for candidates with no Mathematics/Finance Background.</li>
//         </ul>
//       </div>
//       <div data-aos="fade-right" className='w-[300px] sm:w-[400px] flex-shrink-0 my-3 shadow-2xl  bg-[#FFF5EE]  rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5E] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
//         <Image width={178} height={87} className='mb-3 my-3 mx-auto ' src="/garp-related.png" alt="" />
//         <h1 className='text-2xl text-bold text-white text-center bg-[#6A1C1A] rounded p-1'>GARP Related</h1>
//         <ul className='p-2 text-left mt-2' >
//           <li className='flex my-2'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Resolving and addressing GARP-related queries.</li>
//           <li className='flex my-2'><FaCheckCircle className='mt-1 lg:my-auto mr-2 flex-shrink-0' />Related to exam scheduling.</li>
//           <li className='flex my-2'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Best practices to approach the exam.</li>
//           <li className='flex my-2'><FaCheckCircle className='mt-1 mr-2  flex-shrink-0' />Common do&apos;s & don&apos;t, Exam Strategy.</li>
//         </ul>
//       </div> */}
//     </div>
//   )
// }
