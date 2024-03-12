"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Features() {

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-4 w-[92%] sm:w-[75%] mx-auto gap-[50px] mt-5 text-center'>
                <div data-aos="fade-right" className=' shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5EE] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
                    <Image width={200} height={200} className='mx-auto w-40 sm:w-[220px] h-auto ' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/Industry-Experienced-Faculty-Graphic-qjjuf83k7rt50cqg3kt9xdovai3nhfwrev0ssglf5s.png" alt="Industry Experienced Faculty" />
                    <hr className='my-3' />
                    <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>Industry Experienced Faculty</h1>
                    <p className=' '>Our faculty is extremely well trained and have real industry experience. They have taught hundreds of students and have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in and that we are often complimented upon by our students.</p>
                </div>
                <div data-aos="fade-up" className=' shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5E] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
                    <Image width={170} height={170} className=' mx-auto w-30 sm:w-[170px] h-30' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/Systematic-Doubt-Solving-Graphic-qjjuf4c7gfnzpwvwpj6rnen0wym6mnhu2ceuvcqzuo.png" alt="Systematic Doubt Solving" />
                    <hr className='my-3' />
                    <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>Systematic Doubt Solving</h1>
                    <p className=' '>We believe curiosity is the mother of all inventions, and so we ensure every single relevant doubt of every single student is cleared within reasonable time frame. Our faculty encourages students to ask doubts and for them no doubt is small or silly. Relevant doubts from other sources are also answered by our faculty and we provide in depth and easy to understand solutions to our students.</p>
                </div>
                <div data-aos="fade-left" className=' shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5EE] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
                    <Image width={165} height={165} className=' mx-auto w-25 h-auto' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/End-to-End-Mentorship-Graphic-qjjuetzzd99u67axdwpvdz8ydq159zcscx8ilb6br4.png" alt="End to End Mentorship" />
                    <hr className='my-3' />
                    <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>End to End Mentorship</h1>
                    <p className=''>The relationship between our instructors and our students is not just that of instruction and teaching but also of mentorship. We help students throughout the process of learning and even beyond. From study planning, to the exam, to the relevant job interviews, we are there at every step with our students.</p>
                </div>
            </div>
        </>
    )
}

export default Features;