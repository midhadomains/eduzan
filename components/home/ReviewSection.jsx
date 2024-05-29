"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './slick.css';
import './slick-theme.css';
import Reviewcard from "./Reviewcard";
import { FaCircle } from "react-icons/fa6";

function ReviewSection() {
  const [colorIndex, setColorIndex] = useState(0);
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
      images: 'https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Youtube+carasoul/Angella-Arora.jpeg',
      videoId: 'AV-wHboWyHM',
    },
    {
      titles: 'Sripriya Iyer',
      images: 'https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Youtube+carasoul/Sripriya-Iyer.jpeg',
      videoId: 'ueE9clrM3HU',
    },
    {
      titles: 'Aminoritse Adedayo',
      images: 'https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Youtube+carasoul/Aminoritse-Adedayo.png',
      videoId: 'vDCpsAzageA',
    },
    {
      titles: 'Kanika Sikka',
      images: 'https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Youtube+carasoul/Kanika+Sikka+Chandok.webp',
      videoId: '0QWffj9FvrE',
    },
    {
      titles: 'Savleen Kaur',
      images: 'https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Youtube+carasoul/Savleen-Kaur.jpeg',
      videoId: '5ILRag3jCp8',
    },
    {
      titles: 'Namir Younes',
      images: 'https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Youtube+carasoul/Namir+Younes.jpg',
      videoId: 'iJpSH94_Z7Q'
    }
  ];

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
    <div className="mx-auto max-w-[1350px] md:px-[25px] px-[10px] overflow-hidden mb-[80px] select-none">
      <div className="flex justify-center mx-auto my-2 ">
        <FaCircle className="m-2 md:w-3 w-2" style={{ color: colors[colorIndex] }} />
        <FaCircle className="m-2 md:w-3 w-2" style={{ color: colors[1 - colorIndex] }} />
      </div>
      <div className='md:my-[3rem] mt-8 px-2'>
        <h2 className='lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[1.6rem] font-semibold leading-tight mx-3'>Don&apos;t Believe <span className='text-[#BE4E1E]'> Us</span>, Hear From Our <span className='text-[#BE4E1E]'>Students</span></h2>
        <hr className='lg:border-4 border-[3px] rounded-3xl border-[#9A391D] md:w-[150px] w-[100px] my-3 mx-3 mb-7 md:mb-0' />
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
