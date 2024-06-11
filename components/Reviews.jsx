
"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import Navbar from "./common/SiteHeader";
import Footer from "./common/SiteFooter";

export const metadata = {
  title: "Reviews",
  description: "Don't believe us, Hear from our students",
  robots: "index,follow",
  keywords: "midhafin reviews, frm reviews",
};

export default function Page() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [course, setCourse] = useState('');
  const [sortOption, setSortOption] = useState('desc');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://utbrbosujyy4c3bmthififoqm40gvnqy.lambda-url.ap-south-1.on.aws/reviews', { next: { revalidate: 604800 } });
      const reviews = await res.json();
      setData(reviews);
      setFilteredData(reviews);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...data];

    if (course) {
      filtered = filtered.filter(review => review.course.toLowerCase().includes(course.toLowerCase()));
    }

    if (sortOption === 'asc') {
      filtered = filtered.sort((a, b) => a.rating - b.rating);
    } else {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredData(filtered);
  }, [course, sortOption, data]);

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }


  function formatName(name) {
    const words = name.trim().split(/\s+/);
    if (words.length >= 2) {
      return `${words[0]} ${words[1]}`;
    } else {
      return `${words[0]}`;
    }
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IoStar key={i} className="text-[#f3c35d]" />);
      } else if (i - rating <= 1) {
        if (rating % 1 <= 0.2) {
          stars.push(<IoStarOutline key={i} className="text-[#f3c35d]" />);
        } else if (rating % 1 > 0.2 && rating % 1 < 0.8) {
          stars.push(<IoStarHalf key={i} className="text-[#f3c35d]" />);
        } else {
          stars.push(<IoStar key={i} className="text-[#f3c35d]" />);
        }
      } else {
        stars.push(<IoStarOutline key={i} className="text-[#f3c35d]" />);
      }
    }
    return stars;
  };

  return (
    <>
      <Navbar />
      <div className="bg-[url('https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Backgrounds/3500background.svg')] max-h-[300px] h-[100%] shadow-xl">
        <div className="max-w-[1200px] px-[20px] mg:px-[50px] mx-auto py-4 mg:py-9">
          <h1 className="text-[30px] md:text-[40px] xl:text-[50px] my-2 mg:my-5 font-semibold text-[#6A1C1A]">
            Student <span className="text-[#BE4E1E]">Reviews</span>
          </h1>
          <p className="text-[16px] lg:text-[20px] max-w-[800px] lg:leading-[32px]">
            Discover what our students are saying about our transformative learning experiences.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] px-[10px] mg:px-[50px] mx-auto mt-[5%]">
        <div className="flex justify-between mb-8 ">
          <select onChange={handleCourseChange} className="p-2 border rounded-3xl bg-[#BF4E1E] text-white px-5 ">
            <option value="">All Courses</option>
            <option value="frm part-1">FRM Part 1</option>
            <option value="frm part-2">FRM Part 2</option>
          </select>

          <div className="flex items-center">
            <label className="mr-2 font-semibold text-[18px]">Sort By Rating  :</label>
            <label className="mr-2">
              <input
                type="radio"
                value="asc"
                checked={sortOption === 'asc'}
                onChange={handleSortChange}
              /> Low to High
            </label>
            <label>
              <input
                type="radio"
                value="desc"
                checked={sortOption === 'desc'}
                onChange={handleSortChange}
              /> High to Low
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {filteredData.map((review, index) => (
            <div
              key={index}
              className="w-[330px] mg:w-[400px] aspect-square text-center flex flex-col justify-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-2 mg:p-4"
            >
              <div className="flex text-left items-center justify-start h-[120px]">
                <Image
                  width={120}
                  height={120}
                  src={review.image}
                  alt={review.name}
                  className="w-[100px] h-[100px] aspect-square flex-shrink-0 border-[#ffffff] rounded-[50%] border shadow-lg"
                />
                <div className="pl-[15px] mg:pl-[30px]">
                  <h1 className="text-[18px] mg:text-[24px] font-[500]">
                    {capitalizeWords(formatName(review.name))}
                  </h1>                  
                  <h1 className="text-[14px] mg:text-[16px] font-[400] text-[#081A31] my-1 max-w-[210px]">
                    {review.job ? `Financial Risk Manager at  ${review.job}` : " "}{" "}
                  </h1>
                  <p>Passing year:&nbsp;{review.year}</p>
                  <p className="text-[#BE4E1E] text-[16px] font-[400] flex text-center">
                    {capitalizeWords(review.country)}{" "}
                    <span className="text-slate-400">&nbsp;|&nbsp;</span>{" "}
                    <Link target="_blank" href={review.l_link}>
                      <FaLinkedin className="text-[25px] text-[#0072b1] hover:cursor-pointer" />
                    </Link>
                  </p>
                </div>
              </div>
              <p className="text-[#BE4E1E] text-[16px] mg:text-[18px] bg-[#F9F8F5] rounded-full my-5 w-fit mx-auto px-7 py-1 flex items-center">
                {capitalizeWords(review.course)}&nbsp; :&nbsp;&nbsp;
                <span className="text-[#f3c35d] flex pb-[3px] gap-1">
                  {/* {Math.floor(review.rating) && review.rating > 0 ? Array(Math.floor(review.rating)).fill(<IoStar key={index} />) : null} */}
                  {renderStars(review.rating)}
                </span>
              </p>
              <h1 className="text-center mg:text-left mx-auto text-[16px] mg:text-[18px] max-w-[350px] leading-[30px]">
                &quot; {`${review.excerpt}`}...
                <Link href={review.p_link} className="underline text-[#BE4E1E]">
                  (Read More)&quot;
                </Link>{" "}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
