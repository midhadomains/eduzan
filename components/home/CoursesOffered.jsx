"use client";
import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import CourseCard from "../common/CourseCard";

export default function CoursesOffered() {
  const Popularcourse = [
    {
      _id: 1,
      name: "FRM® Part-1 Sample Course",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_sample_course_720.webp",
      price: "",
      other: "free",
      instructor: "Micky Midha",
      details: [
        "9 Hrs of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Lecture PDFs ",
        "class notes",
      ],
      link: "https://edu.midhafin.com/courses/MidhaFin-FRM-Part-1-Sample-Course-6305fc9ae4b05c100c2d3a35",
      rating: 4.5,
      tp: "SC-1",
      category: "frm",
      sub_category: "part-1_sample_course",
    },
    {
      _id: 2,
      name: "FRM® Part-2 Sample Course",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_2_sample_course_720.webp",
      price: "",
      other: "free",
      instructor: "Micky Midha",
      details: [
        "12 Hrs of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Lecture PDFs ",
        "class notes",
      ],
      link: "https://edu.midhafin.com/courses/MidhaFin-FRM-Part-2-Sample-Course-6305cfe7e4b0559d1844da2b",
      rating: 4.5,
      tp: "SC-2",
      category: "frm",
      sub_category: "part-2_sample_course",
    },
    {
      _id: 3,
      name: "FRM® Part-1 Self Paced Course",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_self-paced_course_720.webp",
      price: "₹ 14,850",
      other: "₹ 19,800",
      instructor: "Micky Midha",
      details: [
        "257 Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests",
      ],
      link: "https://edu.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f",
      rating: 4.5,
      tp: "TP-1",
      category: "frm",
      sub_category: "part-1_self_paced_course",
    },
    {
      _id: 4,
      name: "FRM® Part-2 Self Paced Course",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_2_self-paced_course_720.webp",
      price: "₹ 14,850",
      other: "₹ 23,364",
      instructor: "Micky Midha",
      details: [
        "240 Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests",
      ],
      link: "https://edu.midhafin.com/courses/FRM-Part-2-Self-Paced-Course-628f55be0cf2d265f3bcb964",
      rating: 4.5,
      tp: "TP-1",
      category: "frm",
      sub_category: "part-2_self_paced_course",
    },
    {
      _id: 5,
      name: "PRM Exam 1",
      image:"https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_prm_exam_1_self_paced_course_720.webp",
      price: "",
      other: "free",
      instructor: "Shubham Swaraj",
      details: [
        "Lecture Videos",
        "Available On Web,IOS & Android",
        "Complete Study Material",
        "Question Bank & Lecture PDFs ",
        "doubt-solving forum",
      ],
      link: "https://edu.midhafin.com/courses/PRM-Exam-1-Self-Paced-Course-62cfb1cf0cf26cb7b9d708cd",
      rating: 4.5,
      tp: "PE-1",
      category: "prm",
      sub_category: "prm_exam_1_self_paced_course",
    },
  ];
  const Frm_p1 = [
    {
      _id: 6,
      name: "FRM® Part-1 Self Paced Course",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_self-paced_course_720.webp",
      price: "₹ 14,850",
      other: "₹ 19,800",
      instructor: "Micky Midha",
      details: [
        "257 Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests",
      ],
      link: "https://edu.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f",
      rating: 4.5,
      tp: "TP-1",
      category: "frm",
      sub_category: "part-1_self_paced_course",
    },
    {
      _id: 7,
      name: "FRM® Part-1 Live Online Classes",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_live_online_class_720.webp",
      price: "₹ 19,800",
      other: "₹ 29,700",
      instructor: "Micky Midha",
      details: [
        "90 Hrs Of Live Class & 200+ Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests",
      ],
      link: "https://edu.midhafin.com/courses/FRM-Part-1-Live-Online-Classes-6297a9960cf2923982ee9e72",
      rating: 4.5,
      tp: "TP-2",
      category: "frm",
      sub_category: "part-1_live_online_classes",
    },
    {
      _id: 8,
      name: "FRM® Part-1 Mock Tests",
      image: "/Mock-Tests.png",
      price: "",
      other: "free",
      instructor: "Micky Midha",
      details: [
        "Targeted performance insights",
        "Available On Web,IOS & Android",
        "Application-oriented learning",
        "5 Full Length Mock Tests",
        "100 Questions in each test",
      ],
      link: "https://edu.midhafin.com/courses/FRM-Part-1-Mock-Tests-6353e9d2e4b0f18ec4f5f154",
      rating: 4.5,
      tp: "MT-1",
      category: "frm",
      sub_category: "part-1_sample_course",
    },



    {
      _id: 9,
      name: "FRM® Part-1 One-to-One Classes",
      image: "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_one_on_one_guidance_720.webp",
      price: "",
      other: "custom",
      instructor: "Shubham Swaraj",
      details: [
        "Customizable",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      link: "https://edu.midhafin.com/courses/FRM-Part-1-One-to-One-Classes-64d38882e4b0b649ba69ba2a",
      rating: 4.5,
      tp: "TP-3",
      category: "frm",
      sub_category: "part-1_one-to-one_classes"
    },
    {
      _id: 10,
      name: "FRM® Part-1 Mock Tests",
      image: "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_sample_course_720.webp",
      price: "",
      other: "free",
      instructor: "Micky Midha",
      details: [
        "12 Hrs of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Lecture PDFs ",
        "class notes",
      ],
      link: "https://edu.midhafin.com/courses/MidhaFin-FRM-Part-1-Sample-Course-6305fc9ae4b05c100c2d3a35",
      rating: 4.5,
      tp: "SC-1",
      category: "frm",
      sub_category: "part-1_sample_course",
    },

  ];

  const Frm_p2 = [
    {
      _id: 11,
      name: "FRM® Part-2 Self Paced Course",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_2_self-paced_course_720.webp",
      price: "₹ 14,850",
      other: "₹ 23,364",
      instructor: "Micky Midha",
      details: [
        "240 Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests",
      ],
      link: "https://edu.midhafin.com/courses/FRM-Part-2-Self-Paced-Course-628f55be0cf2d265f3bcb964",
      rating: 4.5,
      tp: "TP-1",
      category: "frm",
      sub_category: "part-2_self_paced_course",
    },
    {
      _id: 12,
      name: "FRM® Part-1 and Part-2 Combined Package",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_tp2_plus_frm_part_2_tp1_01_720.webp",
      price: "₹ 26,550",
      other: "₹ 41,772",
      instructor: "Micky Midha",
      details: [
        "450+ Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests",
      ],
      link: "https://edu.midhafin.com/courses/FRM-Part-1-and-Part-2-Combined-Self-Paced-Course-62cfe0dd0cf26cb7b9d724dc",
      rating: 4.5,
      tp: "TP-1",
      category: "frm",
      sub_category: "part-1_and_part-2_combined_package",
    },
    {
      _id: 13,
      name: "FRM® Part-2 Sample Course",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_2_sample_course_720.webp",
      price: "",
      other: "free",
      instructor: "Micky Midha",
      details: [
        "12 Hrs of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Lecture PDFs ",
        "class notes",
      ],
      link: "https://edu.midhafin.com/courses/MidhaFin-FRM-Part-2-Sample-Course-6305cfe7e4b0559d1844da2b",
      rating: 4.5,
      tp: "SC-2",
      category: "frm",
      sub_category: "part-2_sample_course",
    },
  ];

  const [selectedButton, setSelectedButton] = useState("Popular_Courses");
  const scrollRef = useRef(null);
  const handleButtonClick = (btnIndex) => {
    setSelectedButton(btnIndex);
  };
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behaviour: "smooth" });
    }
  };
  const handleDropdownChange = (event) => {
    setSelectedButton(event.target.value);

  };
  return (
    <div className=" bg-[#F9F6F4] ">
      <div className="max-w-[1400px] md:px-[50px] px-[25px] pt-[161px] pb-[50px] sm:pb-10  mx-auto flex flex-col">
        <div>
          <h1 className="font-[600] lg:text-[3rem]  md:text-[2.5rem]  sm:text-[2rem] text-[1.6rem]  text-[#BE4E1E]">
            Courses <span className="text-[#691D1C]">Offered</span>
          </h1>
          <hr className="w-[94.51px] border-b-[5px] border-[#BE4E1E] rounded-xl mt-[18px] sm:mt-[22px] md:mt-[26px] lg:mt-[31px]" />
        </div>

        {/* Courses Option buttons */}
        <select
          name=""
          id=""
          className="sm:hidden w-[200px]  rounded-3xl mt-[25px] bg-[#BE4E1E] border-4  border-[#BE4E1E] text-white py-1 px-2 shadow-md   transition duration-300 ease-in-out cursor-pointer text-[14px] lg:text-[18px] "
          value={selectedButton}
          onChange={handleDropdownChange}
        >
          <option
            value="Popular_Courses"
            className=" cursor-pointer bg-[#BE4E1E]"
          >
            Popular Courses
          </option>
          <option value="FRM_Part-1" className="bg-[#BE4E1E] cursor-pointer;">
            FRM Part 1
          </option>
          <option value="FRM_Part-2" className="bg-[#BE4E1E] cursor-pointer;">
            FRM Part 2
          </option>
        </select>
        <div className="hidden sm:flex gap-[38px] mt-[48px] ">
          <p
            onClick={() => handleButtonClick("Popular_Courses")}
            className={`text-[14px] lg:text-[18px] w-[214px] h-[50px] cursor-pointer  rounded-3xl flex justify-around px-[2%] items-center ${selectedButton === "Popular_Courses"
                ? "bg-[#BE4E1E] text-white"
                : "bg-[#EDEAE9]"
              }`}
          >
            Popular Courses
            <IoIosArrowForward />
          </p>
          <p
            onClick={() => handleButtonClick("FRM_Part-1")}
            className={`text-[14px] lg:text-[18px]  w-[214px]  h-[50px] cursor-pointer rounded-3xl flex justify-around px-[2%] items-center ${selectedButton === "FRM_Part-1"
                ? "bg-[#BE4E1E] text-white"
                : "bg-[#EDEAE9]"
              }`}
          >
            FRM Part 1<IoIosArrowForward />
          </p>

          <p
            onClick={() => handleButtonClick("FRM_Part-2")}
            className={`text-[12px] md:text-[14px] lg:text-[18px]  w-[214px] h-[50px] cursor-pointer  rounded-3xl flex justify-around px-[2%] items-center ${selectedButton === "FRM_Part-2"
                ? "bg-[#BE4E1E]  text-white"
                : "bg-[#EDEAE9]"
              }`}
          >
            FRM Part 2<IoIosArrowForward />
          </p>
        </div>
        {/* Courses Option buttons end*/}

        {/* Course box section */}
        <div className="relative mt-[55px] ">
          <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar scroll-smooth" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div>
              {/* 1 */}

              {selectedButton === "Popular_Courses" && (
                <div className="justify-around gap-[40px] mx-auto flex">
                  <button
                    onClick={() => handleScroll("left")}
                    className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#BE4E1E] text-white p-2 rounded-full"
                    style={{ zIndex: 10 }}
                  >
                    <IoIosArrowBack />
                  </button>
                  {Popularcourse.map((a) => (
                    <CourseCard a={a} key={a._id} />
                  ))}
                  <button
                    onClick={() => handleScroll("right")}
                    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#BE4E1E] text-white p-2 rounded-full"
                    style={{ zIndex: 10 }}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              )}
            </div>
            <div>
              {/* 2 */}

              {selectedButton === "FRM_Part-1" && (
                <div className="justify-around gap-[40px] mx-auto flex ">
                  <button
                    onClick={() => handleScroll("left")}
                    className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#BE4E1E] text-white p-2 rounded-full"
                    style={{ zIndex: 10 }}
                  >
                    <IoIosArrowBack />
                  </button>
                  {Frm_p1.map((a) => (
                    <CourseCard a={a} key={a._id} />
                  ))}
                  <button
                    onClick={() => handleScroll("right")}
                    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#BE4E1E] text-white p-2 rounded-full"
                    style={{ zIndex: 10 }}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              )}
            </div>

            <div>
              {/* 3 */}

              {selectedButton === "FRM_Part-2" && (
                <div className="justify-around gap-[40px] mx-auto flex ">
                  <button
                    onClick={() => handleScroll("left")}
                    className="absolute xl:hidden left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#BE4E1E] text-white p-2 rounded-full"
                    style={{ zIndex: 10 }}
                  >
                    <IoIosArrowBack />
                  </button>
                  {Frm_p2.map((a) => (
                    <CourseCard a={a} key={a._id} />
                  ))}
                </div>
              )}
              <button
                onClick={() => handleScroll("right")}
                className="absolute xl:hidden right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#BE4E1E] text-white p-2 rounded-full"
                style={{ zIndex: 10 }}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        {/* Coursebox section ends */}
      </div>
    </div>
  );
}
