"use client"

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './slick.css';
import './slick-theme.css'
import Reviewcard from "./Reviewcard";

import { FaCircle } from "react-icons/fa6";


function ReviewSection() {
    const [colorIndex, setColorIndex] =useState(0);
    const colors = ['#BE4E1E', '#C7C7C7'];

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 5500);

        return () => clearInterval(interval);
    }, []);
    const data = [
        {
            titles: 'Angella Arora',
            images: 'https://media.licdn.com/dms/image/D4D03AQG6SllSmP2sXA/profile-displayphoto-shrink_800_800/0/1685780083008?e=1715817600&v=beta&t=LGPXgxm1D_Frq7xgTwL8lqpMcSwsyRBkg6ELs0R91HA',
            videos: 'https://www.youtube.com/embed/AV-wHboWyHM?si=LL0iP-bSqZfpbNQs',
        },
        {
            titles: 'Sripriya Iyer',
            images: 'https://media.licdn.com/dms/image/C5103AQHdWGTlHapZyQ/profile-displayphoto-shrink_400_400/0/1551029564102?e=1715817600&v=beta&t=wODqN_KLcNFHen8tNynWc2NEGhWYWIv3atcG-77hbo4',
            videos: 'https://www.youtube.com/embed/ueE9clrM3HU?si=lX3mFVIosywPxjVh',
        },
        {
            titles: 'Aminoritse Adedayo',
            images: 'https://media.licdn.com/dms/image/C4E03AQFvsW00Hunz8A/profile-displayphoto-shrink_200_200/0/1639501049540?e=2147483647&v=beta&t=2eF_uOPx2JrPGBkiQRahIwKPvT6VE9WF-aoEouwRUDI',
            videos: 'https://www.youtube.com/embed/vDCpsAzageA?si=COu-GZEGkIp-6z9b',
        },
        {
            titles: 'Kanika Sikka',
            images: 'https://media.licdn.com/dms/image/C4D03AQGpBZfOtNAjWg/profile-displayphoto-shrink_200_200/0/1642014785390?e=2147483647&v=beta&t=eT0mMwTRZFAClTBg2tFpyjpsdTHkmwbmL39hEBP8-r0',
            videos: 'https://www.youtube.com/embed/0QWffj9FvrE?si=FoZXDm54Qd6Y3pGH',
        },
        {
            titles: 'Savleen Kaur',
            images: 'https://media.licdn.com/dms/image/D5603AQGCzrGRhM1XmQ/profile-displayphoto-shrink_400_400/0/1706592492700?e=1715817600&v=beta&t=FEwoSIA7kv_rpLrA1h9TqQtjAZf6ndW_U9VttNHvTRg',
            videos: 'https://www.youtube.com/embed/5ILRag3jCp8?si=Bt6BlpjJDsv-8JLH',
        },
        {
            titles: 'Namir Younes',
            images: 'https://media.licdn.com/dms/image/D4D03AQFbDumjKWFn_w/profile-displayphoto-shrink_200_200/0/1710131301464?e=2147483647&v=beta&t=KlcbZabUZZ0C_-Ix6hoBL6LFBWPt1FxBMbyjpV4NidQ',
            videos: 'https://www.youtube.com/embed/iJpSH94_Z7Q?si=CRbX0B0pIXNBeHXk'
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    speed: 3000,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,
                    autoplaySpeed: 3000,
                }
            }
        ]
    };
    return (
        <div className="mx-auto max-w-[1350px] md:px-[25px] px-[10px] overflow-hidden mb-[80px]">
            <div className="flex justify-center mx-auto my-2 ">
                <FaCircle className="m-2 md:w-3  w-2  " style={{ color: colors[colorIndex] }} />
                <FaCircle className="m-2 md:w-3 w-2" style={{ color: colors[1 - colorIndex] }} />
            </div>
            <div className=' md:my-[3rem] mt-8 px-2'>
                <h2 className='lg:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[1.6rem] font-semibold leading-tight mx-3'>Don&apos;t  Believe <span className='text-[#BE4E1E]'> Us</span>, Hear From Our <span className='text-[#BE4E1E]'>Students</span></h2>
                <hr className='lg:border-4 border-[3px] rounded-3xl border-[#9A391D]  md:w-[150px] w-[100px] my-3 mx-3 mb-7 md:mb-0' />
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map((data, index) => (
                        <Reviewcard data={data} key={index} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ReviewSection;