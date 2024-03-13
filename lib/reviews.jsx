"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import Navbar from '../components/SiteHeader';
import Footer from '../components/SiteFooter';
import { FaLinkedin } from "react-icons/fa";

function Reviews() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://midhareviewapi.vercel.app/reviews');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            <div className='p-5 bg-gradient-to-b from-[#e9e5e3] to-red-100 mb-5 '>
                <div className="w-[95%]">
                    <h1 className="font-bold text-[40px] text-center my-4 ">Don&apos;t believe us, Hear from our students</h1>
                </div>
                {data ? (
                    <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-9 w-[90%] mx-auto'>
                        {data.map((review, index) => (
                            <li key={index} className='border-[3px] border-[#faf4f1] mt-[60px] rounded-2xl p-4 pt-9 bg-white relative backdrop-filter backdrop-blur-[1px] bg-opacity-[50px] shadow-inner'>
                                {/* <Image width={90} height={30} alt='image' src='/MidhaFin-logo.webp' className='fixed bottom-1 right-1' /> */}
                                <h1 className='text-amber-700  fixed top-2 right-3'>{review.course}</h1>

                                <p className='fixed top-2 left-3'>{review.country}</p>
                                <div className='bg-grey-900  h-[100%] '>
                                    <div className=' items-center flex flex-col justify-between  h-[100%] text-center my-1'>
                                        <h1 className='text-[#6A1B1B] text-xl font-semibold m-1 flex'>{capitalizeWords(review.name)} <Link target='_blank' href={review.l_link}><FaLinkedin className='mt-1 ml-1 text-black hover:cursor-pointer' /></Link></h1>
                                        <Image width={120} height={120} src={review.image} alt={review.name} className='w-[100px] absolute  border-[#ffffff] -top-[65px] mx-auto rounded-[50%] border t-[40px] shadow-lg?":' />
                                        <h1 className='text-center'>&quot; {`${review.excerpt}`}...<Link href={review.p_link} className='underline'>Read More</Link> &quot;</h1>
                                        <h1 className='text-amber-700 m-2'>{review.job}</h1>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-center text-xl my-3'>Loading...</p>
                )}
            </div>
            <div className="relative isolate overflow-hidden bg-white px-6 py-2 sm:py-2 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg className="absolute left-[max(50%,25rem)] top-0 h-[250rem] w-[128rem] -translate-x-1/2 stroke-gray-200" aria-hidden="true">
                        <defs>
                            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="160" height="160" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>

            </div>
            <Footer />
        </>
    );

}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

export default Reviews;