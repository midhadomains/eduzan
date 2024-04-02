"use client"
import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function PlatformFeatures() {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    // Array of platform features
    const features = [
        {
            title: "Study Planner",
            imageSrc: "/Study-planner.svg",
            link: "/study-planner"
        },
        {
            title: "Questions Bank",
            imageSrc: "/question-bank.svg",
            link: "/question-bank"
        },
        {
            title: "Mock Tests",
            imageSrc: "/mock-test.svg",
            link: "/mock-test"
        },
        {
            title: "Lecture Video",
            imageSrc: "/lecture-video.svg",
            link: "/lecture-video"
        },
        {
            title: "Doubt Solving Forum",
            imageSrc: "/doubt-solving-forum.svg",
            link: "/doubt-solving-forum"
        },
        {
            title: "Industry Expert Faculty",
            imageSrc: "/ief.svg",
            link: "/industry-expert-faculty"
        },
        {
            title: "Complete Study Material",
            imageSrc: "/Complete-study-material.svg",
            link: "/complete-study-material"
        },
        {
            title: "Access Till You Pass",
            imageSrc: "/access-till-you-pass.svg",
            link: "/access-till-you-pass"
        }
    ];

    return (
        <div className='max-w-[1250px] m-1 pb-5 text-center mx-auto'>
            <div className='mx-auto mb-6 text-center my-1'>
                <h1 className='lg:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[1.6rem] font-semibold leading-tight mx-3'>Our Platform<span className='text-[#BE4E1E]'> Features</span> </h1>
                <p className='mt-4 max-w-[650px] mx-auto px-2'>We at MidhaFin, focus on striking a <span className='text-[#BE4E1E]'>careful balance, </span>between Knowledge and Relevance, between theory and analytics & between pure concepts and practical application.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-auto col-auto row-[20px] item-center'>
                {features.map((feature, index) => (
                    <div key={index} data-aos="fade-up" className='h-[285px] transition duration items-center flex flex-col justify-end mx-[10px] my-[20px]'>
                        <Image width={150} height={100} className='mx-auto m-2' src={feature.imageSrc} alt={feature.title} />
                        <div>
                            <h1 className='text-[20px] font-bold my-3'>{feature.title}</h1>
                            <Link href={feature.link}><button className='w-[150px] sm:w-[200px] text-[1.2rem] font-light transition-colors duration-150 bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded-3xl hover:bg-[#BE4E1E]'>Read More</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlatformFeatures;
