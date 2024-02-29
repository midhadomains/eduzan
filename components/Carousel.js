"use client"
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css'; // Add your CSS module for styling

const Carousel = () => {
  const slides = [
    {
      name: 'Slide 1',
      videoId: 'YOUR_YOUTUBE_VIDEO_ID_1',
    },
    {
      name: 'Slide 2',
      videoId: 'YOUR_YOUTUBE_VIDEO_ID_2',
    },
    {
      name: 'Slide 3',
      videoId: 'YOUR_YOUTUBE_VIDEO_ID_3',
    },
    {
      name: 'Slide 4',
      videoId: 'YOUR_YOUTUBE_VIDEO_ID_4',
    },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const switchSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        switchSlide();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleVideoClick = () => {
    // You can implement logic to play/pause the YouTube video here
    console.log(`Playing video with ID: ${slides[currentSlide].videoId}`);
  };

  return (
    <div
      className={styles.carouselContainer} // Add your styling class
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.slideWrapper}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              currentSlide === index ? styles.active : ''
            }`}
          >
            <h2>{slide.name}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${slide.videoId}`}
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button onClick={handleVideoClick}>Play Video</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
