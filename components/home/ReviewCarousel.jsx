"use client";
import React, { useState, useEffect } from 'react';
import ReviewCarousel from '../card';
import { FaCircle } from "react-icons/fa6";


export default function HomeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleComponents, setVisibleComponents] = useState(1);

    const images = [
        'https://media.licdn.com/dms/image/D4D03AQG6SllSmP2sXA/profile-displayphoto-shrink_800_800/0/1685780083008?e=1715817600&v=beta&t=LGPXgxm1D_Frq7xgTwL8lqpMcSwsyRBkg6ELs0R91HA',
        'https://media.licdn.com/dms/image/C5103AQHdWGTlHapZyQ/profile-displayphoto-shrink_400_400/0/1551029564102?e=1715817600&v=beta&t=wODqN_KLcNFHen8tNynWc2NEGhWYWIv3atcG-77hbo4',
        'https://media.licdn.com/dms/image/C4E03AQFvsW00Hunz8A/profile-displayphoto-shrink_200_200/0/1639501049540?e=2147483647&v=beta&t=2eF_uOPx2JrPGBkiQRahIwKPvT6VE9WF-aoEouwRUDI',
        'https://media.licdn.com/dms/image/C4D03AQGpBZfOtNAjWg/profile-displayphoto-shrink_200_200/0/1642014785390?e=2147483647&v=beta&t=eT0mMwTRZFAClTBg2tFpyjpsdTHkmwbmL39hEBP8-r0',
        'https://media.licdn.com/dms/image/D5603AQGCzrGRhM1XmQ/profile-displayphoto-shrink_400_400/0/1706592492700?e=1715817600&v=beta&t=FEwoSIA7kv_rpLrA1h9TqQtjAZf6ndW_U9VttNHvTRg',
        'https://media.licdn.com/dms/image/D4D03AQFbDumjKWFn_w/profile-displayphoto-shrink_200_200/0/1710131301464?e=2147483647&v=beta&t=KlcbZabUZZ0C_-Ix6hoBL6LFBWPt1FxBMbyjpV4NidQ'
    ];

    const titles = [
        'Angella Arora',
        'Sripriya Iyer',
        'Aminoritse Adedayo',
        'Kanika Sikka',
        'Savleen Kaur',
        'Namir Younes'
    ];

    const videos = [
        'https://www.youtube.com/embed/AV-wHboWyHM?si=LL0iP-bSqZfpbNQs',
        'https://www.youtube.com/embed/ueE9clrM3HU?si=lX3mFVIosywPxjVh',
        'https://www.youtube.com/embed/vDCpsAzageA?si=COu-GZEGkIp-6z9b',
        'https://www.youtube.com/embed/0QWffj9FvrE?si=FoZXDm54Qd6Y3pGH',
        'https://www.youtube.com/embed/5ILRag3jCp8?si=Bt6BlpjJDsv-8JLH',
        'https://www.youtube.com/embed/iJpSH94_Z7Q?si=CRbX0B0pIXNBeHXk'
    ];

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        console.log(screenWidth)
        if (screenWidth < 640) {
            setVisibleComponents(1);
        } else if (screenWidth < 1100) {
            setVisibleComponents(2);
        } else {
            setVisibleComponents(3);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const renderCarousels = () => {
        const carousels = [];
        const itemsPerCarousel = Math.ceil(images.length / visibleComponents);
        for (let i = 0; i < visibleComponents; i++) {
            const startIndex = i * itemsPerCarousel;
            const endIndex = Math.min(startIndex + itemsPerCarousel, images.length);
            carousels.push(
                <ReviewCarousel
                    key={i}
                    images={images.slice(startIndex, endIndex)}
                    titles={titles.slice(startIndex, endIndex)}
                    videos={videos.slice(startIndex, endIndex)}
                    currentIndex={currentIndex % itemsPerCarousel}
                />
            );
        }
        return carousels;
    };
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['#BE4E1E', '#C7C7C7'];

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 5500);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='max-w-[1300px] mx-auto'>
            <div className="flex justify-center mx-auto my-2">
                <FaCircle className="m-2 w-3 " style={{ color: colors[colorIndex] }} />
                <FaCircle className="m-2 w-3 " style={{ color: colors[1 - colorIndex] }} />
            </div>
            <div className='ml-[60px] mt-[3rem]'>
                <h1 className='text-[3rem] font-semibold leading-tight	'>Don&apos;t  Believe <span className='text-[#BE4E1E]'> Us</span>, Hear From Our <span className='text-[#BE4E1E]'>Students</span></h1>
                <hr className='border-4 rounded-3xl my-5 w-[10%]  border-[#9A391D]' />
            </div>
            <div className="bg-custom-background bg-repeat  flex items-center justify-center  p-5 relative transition-transform duration-300">
                {renderCarousels()}
                <button
                    type="button"
                    className="absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={prevSlide}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0  right-0 sm:right-2 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={nextSlide}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
}
