"use client";
import React, { useState, useEffect } from 'react';
import ReviewCarousel from '../card';
import { FaCircle } from "react-icons/fa6";

export default function Home() {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['#BE4E1E', '#C7C7C7'];

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 5500);

        return () => clearInterval(interval);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleComponents, setVisibleComponents] = useState(1);
    const [dotCount, setDotCount] = useState(6);
    const [dotColors, setDotColors] = useState(['bg-[#BE4E1E]', 'bg-gray-200']);

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




    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 780) {
                setVisibleComponents(1);
                setDotCount(6);
            } else if (screenWidth < 1250) {
                setVisibleComponents(2);
                setDotCount(3);
            } else {
                setVisibleComponents(3);
                setDotCount(2);
            }
        };

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

    const handleDotClick = (index) => {
        setCurrentIndex(index);
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

    return (
        <div className='max-w-[1300px] mx-auto mb-[80px]'>
            <div className="flex justify-center mx-auto my-2 ">
                <FaCircle className="m-2 md:w-3  w-2  " style={{ color: colors[colorIndex] }} />
                <FaCircle className="m-2 md:w-3 w-2" style={{ color: colors[1 - colorIndex] }} />
            </div>
            <div className=' md:my-[3rem] mt-8 px-2'>
                <h2 className='lg:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[1.6rem] font-semibold leading-tight mx-3'>Don&apos;t  Believe <span className='text-[#BE4E1E]'> Us</span>, Hear From Our <span className='text-[#BE4E1E]'>Students</span></h2>
                <hr className='lg:border-4 border-[3px] rounded-3xl border-[#9A391D]  md:w-[150px] w-[100px] my-3 mx-3 mb-7 md:mb-0' />
            </div>
            <div className="bg-custom-background bg-repeat flex items-center justify-around px-5  relative mx-auto">
                {renderCarousels()}
                <button
                    type="button"
                    className="absolute -top-9 left-0 z-30 justify-center items-center px-1 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={prevSlide}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                        <svg
                            className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-black"
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
                    className="absolute -top-9 right-0 z-30 justify-center items-center px-1 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={nextSlide}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                        <svg
                            className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-black"
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
                <div className="flex justify-center gap-0 absolute -bottom-8 w-[350px] ">
                    {[...Array(dotCount)].map((_, index) => (
                        <span
                            key={index}
                            className={`md:w-3 md:h-3 w-2 h-2 rounded-full mx-3 cursor-pointer ${dotCount === 2
                                ? index % 2 === currentIndex % 2 ? dotColors[0] : dotColors[1]
                                : dotCount === 3
                                    ? index % 3 === currentIndex % 3 ? dotColors[0] : dotColors[1]
                                    : index === currentIndex ? dotColors[0] : dotColors[1]
                                }`}

                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>

    );
}
