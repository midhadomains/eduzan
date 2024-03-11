"use client";
import React, { useState, useEffect } from 'react';
import ReviewCarousel from './card';

export default function HomeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleComponents, setVisibleComponents] = useState(1);

    const images = [
        '/image1.jpg',
        '/image2.jpg',
        '/image3.jpg',
        '/image4.jpg',
        '/image5.jpg',
        '/image6.jpg',
        '/image7.png',
        '/image8.jpg',
        '/image9.jpg'
    ];

    const titles = [
        'Title 1-1',
        'Title 1-2',
        'Title 1-3',
        'Title 2-1',
        'Title 2-2',
        'Title 2-3',
        'Title 3-1',
        'Title 3-2',
        'Title 3-3'
    ];

    const videos = [
        'https://www.youtube.com/embed/AV-wHboWyHM?si=LL0iP-bSqZfpbNQs',
        'https://www.youtube.com/embed/ueE9clrM3HU?si=lX3mFVIosywPxjVh',
        'https://www.youtube.com/embed/vDCpsAzageA?si=COu-GZEGkIp-6z9b',
        'https://www.youtube.com/embed/0QWffj9FvrE?si=FoZXDm54Qd6Y3pGH',
        'https://www.youtube.com/embed/6sTEUkR40uI?si=YLMhaTS5zv1SSF5d',
        'https://www.youtube.com/embed/eQLTzPO1Jt8?si=JzoDgngL26WM6Rd1',
        'https://www.youtube.com/embed/8J6h-J6qNPQ?si=wP-KZN-WBNqNwBFx',
        'https://www.youtube.com/embed/5ILRag3jCp8?si=Bt6BlpjJDsv-8JLH',
        'https://www.youtube.com/embed/iJpSH94_Z7Q?si=CRbX0B0pIXNBeHXk'
    ];

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setVisibleComponents(1);
        } else if (screenWidth < 1024) {
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
    

    return (
        <div className="bg-custom-background bg-repeat min-w-screen min-h-screen flex items-center justify-center px-5 py-5 relative">
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
                className="absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
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
    );
}
