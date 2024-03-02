
"use client"
import React, { useState } from 'react';
import { FaAngleLeft ,FaChevronRight} from "react-icons/fa6";
import Image from 'next/image'
const CarouselHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Adjust the number based on the number of slides
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    };

    return (
        <div className="relative max-w-screen-xl mx-auto">
            <div className="flex overflow-hidden justify-between">
                <div
                    className="w-full flex transition-transform duration-500 ease-in-out transform"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    <div className="flex-shrink-0 w-full">
                        <div className="flex justify-around	 p-3 rounded-md">
                            <div className='w-[300px] border '>
                                <Image width={50} height={50} alt="image" src="/bigcheck.png"/>
                                <h1>Sujal Sahu</h1>
                                <iframe width="300" height="185" src="https://www.youtube.com/embed/5ILRag3jCp8?si=xbwvI7fsxzzYE98h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                            </div>
                            <div className='w-[300px]'>
                            <Image width={50} height={50} alt="image" src="/bigcheck.png"/>
                                <h1>Sjal Sahu</h1>
                                <iframe width="300" height="185" src="https://www.youtube.com/embed/5ILRag3jCp8?si=xbwvI7fsxzzYE98h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                            </div>
                            <div className='w-[300px]'>
                            <Image width={50} height={50} alt="image" src="/bigcheck.png"/>
                                <h1>Sjal Sahu</h1>
                                <iframe width="300" height="185" src="https://www.youtube.com/embed/5ILRag3jCp8?si=xbwvI7fsxzzYE98h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-full">
                        <div className="flex justify-around	 p-3 rounded-md">
                            <div className='w-[300px]'>
                                <Image width={50} height={50} alt="image" src="/bigcheck.png"/>
                                <h1>Sjal Sahu</h1>
                                <iframe width="300" height="185" src="https://www.youtube.com/embed/5ILRag3jCp8?si=xbwvI7fsxzzYE98h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                            </div>
                            <div className='w-[300px]'>
                            <Image width={50} height={50} alt="image" src="/bigcheck.png"/>
                                <h1>Sjal Sahu</h1>
                                <iframe width="300" height="185" src="https://www.youtube.com/embed/5ILRag3jCp8?si=xbwvI7fsxzzYE98h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                            </div>
                            <div className='w-[300px]'>
                            <Image width={50} height={50} alt="image" src="/bigcheck.png"/>
                                <h1>Sjal Sahu</h1>
                                <iframe width="300" height="185" src="https://www.youtube.com/embed/5ILRag3jCp8?si=xbwvI7fsxzzYE98h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-full">
                        <div className="flex justify-around	 p-3 rounded-md">
                            <div className='w-[300px '>
                                <Image width={50} height={50} alt="image" src="/bigcheck.png"/>
                                <h1>Sjal Sahu</h1>
                                <iframe width="300" height="185" src="https://www.youtube.com/embed/5ILRag3jCp8?si=xbwvI7fsxzzYE98h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                            </div>
                            <div className='w-[300px]'>
                            <Image width={50} height={50} alt="image" src="/bigcheck.png"/>
                                <h1>Sjal Sahu</h1>
                                <iframe width="300" height="185" src="https://www.youtube.com/embed/5ILRag3jCp8?si=xbwvI7fsxzzYE98h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                            </div>
                            <div className='w-[300px]'>
                            <Image width={50} height={50} alt="image" src="/bigcheck.png"/>
                                <h1>Sjal Sahu</h1>
                                <iframe width="300" height="185" src="https://www.youtube.com/embed/5ILRag3jCp8?si=xbwvI7fsxzzYE98h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute -left-[50px] top-1/2 transform -translate-y-1/2 bg-[#6A1C1A] text-white px-4 py-2 rounded"
            >
                <FaAngleLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute -right-[50px] top-1/2 transform -translate-y-1/2 bg-[#6A1C1A] text-white px-4 py-2 rounded"
            >
                <FaChevronRight />

            </button>
        </div>
    );
};

export default CarouselHome;

