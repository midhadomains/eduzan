"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './slick.css';
import './slick-theme.css';
import Reviewcard from "./Reviewcard";


function ReviewSection() {
  const [colorIndex, setColorIndex] = useState(0);
  // const colors = ['#BE4E1E', '#C7C7C7'];

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
    <div className="bg-[#F9F6F4]">
      <div className="mx-auto max-w-[1400px] md:px-[50px] px-[20px] overflow-hidden mb-[80px] select-none">
        <div className='mb-[27px] sm:mb-[35px] lg:mb-[52px] md:mt-[170px] mt-[160px] lg:mt-[196px]'>
          <h2 className='lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[1.6rem] font-semibold leading-tight text-[#691D1C]'>Don&apos;t believe us, hear from our <span className='text-[#BE4E1E]'>students</span></h2>
          <hr className='lg:border-b-[5px] border-[3px] rounded-3xl border-[#BE4E1E] md:w-[150px] w-[100px] my-3 mb-7 md:mb-0' />
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((data, index) => (
              <Reviewcard data={data} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>

  );
}

export default ReviewSection;
