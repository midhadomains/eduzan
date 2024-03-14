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
            <div className='p-5 bg-gradient-to-b from-[#e9e5e3] to-red-100 '>
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
            <Footer />
        </>
    );

}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

export default Reviews;
