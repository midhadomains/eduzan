"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import CourseCard from "../CourseCard";

export default function CoursesOffered() {
  const Popularcourse = [
    {
      _id: "65df3749d6677fa3f55fbd80",
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
      _id: "65deec862a8308b4a242d3ce",
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
      _id: "65df333e12f6553dad52daeb",
      name: "FRM® Part-1 One-to-One Classes",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_one_on_one_guidance_720.webp",
      price: "",
      other: "custom",
      instructor: "Shubham Swaraj",
      details: [
        "Customizable",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests",
      ],
      link: "https://edu.midhafin.com/courses/FRM-Part-1-One-to-One-Classes-64d38882e4b0b649ba69ba2a",
      rating: 4.5,
      tp: "TP-3",
      category: "frm",
      sub_category: "part-1_one-to-one_classes",
    },
  ];
  const Frm_p1 = [
    {
      _id: "65dee4781c34e4d5d691626d",
      name: "FRM® Part-1 Sample Course",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_1_sample_course_720.webp",
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
    {
      _id: "65deec862a8308b4a242d3ce",
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
      _id: "65df31c3c5e4ac767387dc92",
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
  ];

  const Frm_p2 = [
    {
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
      name: "FRM® Part-2 Self Paced Course",
      image:
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/courses/mf_frm_part_2_self-paced_course_720.webp",
      price: "₹ 14,850",
      other: "₹ 23,364",
      instructor: "Micky Midha",
      details: [
        "250+ Hrs Of Videos",
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
  ];
  const [selectedButton, setSelectedButton] = useState("Popular_Courses");
  const handleButtonClick = (btnIndex) => {
    setSelectedButton(btnIndex);
  };
  return (
    <div className=" bg-[#F9F6F4] z-0">
      <div className="max-w-[1400px] md:px-[50px] px-[25px] py-[161px]  mx-auto flex flex-col">
        <div>
          <h1 className="font-[600] text-[50px] leading-[60.51px] text-[#BE4E1E]">
            Courses <span className="text-[#691D1C]">Offered</span>
          </h1>
          <hr className="w-[94.51px] border-b-[5px] border-[#BE4E1E] rounded-xl mt-[18px] sm:mt-[22px] md:mt-[26px] lg:mt-[31px]" />
        </div>
        <div className=" flex gap-[38px] mt-[48px] ">
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
        <div className="mt-[55px]  ">
          {selectedButton === "Popular_Courses" && (
            <div className="justify-center lg:justify-between gap-[20px] mx-auto flex flex-wrap  ">
              {Popularcourse.map((a) => (
                <CourseCard a={a} key={a._id} />
              ))}
            </div>
          )}
          {selectedButton === "FRM_Part-1" && (
            <div className="justify-center lg:justify-between gap-[20px] mx-auto flex flex-wrap  ">
              {Frm_p1.map((a) => (
                <CourseCard a={a} key={a._id} />
              ))}
            </div>
          )}
          {selectedButton === "FRM_Part-2" && (
            <div className="justify-left gap-[20px] mx-auto flex flex-wrap ">
              {Frm_p2.map((a) => (
                <CourseCard a={a} key={a._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
