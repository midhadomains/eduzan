"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import Navbar from '../components/SiteHeader';
import Footer from '../components/SiteFooter';

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

    // {
    //     "_id": "65df26a3752ec27a407d7311",
    //     "name": "Palak Hasija",
    //     "image": "https://www.linkedin.com/in/palak-hasija-94727116b/overlay/photo/",
    //     "country": "India",
    //     "job": "ENO - Counterparty Credit Risk",
    //     "p_link": "https://www.linkedin.com/in/palak-hasija-94727116b/recent-activity/all/",
    //     "l_link": "https://www.linkedin.com/in/palak-hasija-94727116b/",
    //     "v_link": "",
    //     "course": "FRM part-1",
    //     "excerpt": "Extremely happy to share that I have cleared FRM level 1. Thanks alot Micky Midha sir for your constant support and guidance."
    //   },

    return (
        <>
            <Navbar />
            <div className='p-5 bg-[#f6dfd4] mb-5 '>
                <div className="w-[95%]">
                    <h1 className="font-bold text-[40px] text-center">Don&apos;t believe us, Hear from my students</h1>

                </div>
                {data ? (
                    <ul className='grid grid-cols-3 gap-9 w-[90%] mx-auto '>
                        {data.map((review, index) => (
                            <li key={index} className='border border-[3px] border-[#f4eeeb] rounded-2xl p-4 bg-white backdrop-filter backdrop-blur-[2px] bg-opacity-20'>
                                <div className='bg-grey-900'>
                                    <div className=''>
                                        <Image width={100} height={100} src={review.image} alt={review.name} className='w-[100px] mx-auto rounded-[50%] border t-[40px]' />
                                        <div>
                                            <h1 className='text-center'>&quot; {`${review.excerpt}`}...<Link href="#" className=''>Read More</Link> &quot;</h1>
                                        </div>

                                        <h1 className='text-amber-700 text-center'>{capitalizeWords(review.name)}</h1>
                                        <h1 className='text-amber-700 text-center'>{review.course}</h1>
                                        {/* <p>{review.country}</p> */}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
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