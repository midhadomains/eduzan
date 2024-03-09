"use client"
import styles from "./Course.module.css"
import React, { useState } from 'react';
import Footer from "../../components/SiteFooter";
import Navbar from "../../components/SiteHeader";
import CourseCard from "../../components/CourseCard";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


function Courses() {
  const Popularcourse = [
    {
      "_id": "65df3749d6677fa3f55fbd80",
      "name": "FRM® Part-1 and Part-2 Combined Package",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-TP2-plus-FRM-Part-2-TP1.png",
      "price": "₹ 26,550",
      "other": "₹ 41,772",
      "instructor": "Micky Midha",
      "details": [
        "450+ Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-2-Training-Package-1-Self-Paced-Course.png",
      "rating": 4.5,
      "tp": "TP-1",
      "category": "frm",
      "sub_category": "part-1_and_part-2_combined_package"
    },
    {
      "_id": "65deec862a8308b4a242d3ce",
      "name": "FRM® Part-1 Self Paced Course",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-Self-paced-course.png",
      "price": "₹ 14,850",
      "other": "₹ 19,800",
      "instructor": "Micky Midha",
      "details": [
        "257 Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f",
      "rating": 4.5,
      "tp": "TP-1",
      "category": "frm",
      "sub_category": "part-1_self_paced_course"
    },
    {
      "_id": "65df333e12f6553dad52daeb",
      "name": "FRM® Part-1 One-to-One Classes",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-one-on-one-guidance.png",
      "price": "",
      "other": "custom",
      "instructor": "Shubham Swaraj",
      "details": [
        "Customizable",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/FRM-Part-1-One-to-One-Classes-64d38882e4b0b649ba69ba2a",
      "rating": 4.5,
      "tp": "TP-3",
      "category": "frm",
      "sub_category": "part-1_one-to-one_classes"
    }
  ]
  const Frm_p1 = [
    {
      "_id": "65dee4781c34e4d5d691626d",
      "name": "FRM® Part-1 Sample Course",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-Sample-Course.png",
      "price": "",
      "other": "free",
      "instructor": "Micky Midha",
      "details": [
        "12 Hrs of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Lecture PDFs ",
        "class notes"
      ],
      "link": "https://www.midhafin.com/courses/MidhaFin-FRM-Part-1-Sample-Course-6305fc9ae4b05c100c2d3a35",
      "rating": 4.5,
      "tp": "SC-1",
      "category": "frm",
      "sub_category": "part-1_sample_course"
    },
    {
      "_id": "65deec862a8308b4a242d3ce",
      "name": "FRM® Part-1 Self Paced Course",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-Self-paced-course.png",
      "price": "₹ 14,850",
      "other": "₹ 19,800",
      "instructor": "Micky Midha",
      "details": [
        "257 Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f",
      "rating": 4.5,
      "tp": "TP-1",
      "category": "frm",
      "sub_category": "part-1_self_paced_course"
    },
    {
      "_id": "65df31c3c5e4ac767387dc92",
      "name": "FRM® Part-1 Live Online Classes",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-part-1-live-online-class.png",
      "price": "₹ 19,800",
      "other": "₹ 29,700",
      "instructor": "Micky Midha",
      "details": [
        "90 Hrs Of Live Class & 200+ Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/FRM-Part-1-Live-Online-Classes-6297a9960cf2923982ee9e72",
      "rating": 4.5,
      "tp": "TP-2",
      "category": "frm",
      "sub_category": "part-1_live_online_classes"
    }
  ]
  const Frm_p2 = [
    {
      "name": "FRM® Part-2 Sample Course",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-PART-2-Sample-Course.png",
      "price": "",
      "other": "free",
      "instructor": "Micky Midha",
      "details": [
        "12 Hrs of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Lecture PDFs ",
        "class notes"
      ],
      "link": "https://www.midhafin.com/courses/MidhaFin-FRM-Part-2-Sample-Course-6305cfe7e4b0559d1844da2b",
      "rating": 4.5,
      "tp": "SC-2",
      "category": "frm",
      "sub_category": "part-2_sample_course"
    },
    {
      "name": "FRM® Part-2 Self Paced Course",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-2-Self-paced-course.png",
      "price": "₹ 14,850",
      "other": "₹ 23,364",
      "instructor": "Micky Midha",
      "details": [
        "250+ Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/FRM-Part-2-Self-Paced-Course-628f55be0cf2d265f3bcb964",
      "rating": 4.5,
      "tp": "TP-1",
      "category": "frm",
      "sub_category": "part-2_self_paced_course"
    }

  ]
  const Prm_e1 = [
    {
      "_id": "65df3a146f24c472e08483e3",
      "name": "PRM® Exam-1 Self Paced Course",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_PRM-Exam-1-Self-paced-course.png",
      "price": "₹ 14,850",
      "other": "₹ 19,800",
      "instructor": "Shubham Swaraj",
      "details": [
        "150 Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzess,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/PRM-Exam-1-Self-Paced-Course-62cfb1cf0cf26cb7b9d708cd",
      "rating": 4.5,
      "tp": "",
      "category": "prm",
      "sub_category": "prm_exam-1_self_paced_course"
    }
  ]
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubButton, setSelectedSubButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton((prevSelected) => (prevSelected === buttonIndex ? null : buttonIndex)); //change null to 1 if you dont want space to be empty
    setSelectedCategory(null); // Reset selected category when Popular Courses is clicked
    setSelectedSubButton(null); // Reset selected subcategory when Popular Courses is clicked
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevSelected) => (prevSelected === category ? null : category));
    setSelectedButton(null); // Reset selected button when a category is clicked
    setSelectedSubButton(null); // Reset selected subcategory when a category is clicked
  };

  const handleSubButtonClick = (subButtonIndex) => {
    setSelectedSubButton((prevSelected) => (prevSelected === subButtonIndex ? null : subButtonIndex));
  };

  return (
    <div>
      <div>
        <Navbar />
        <div id={styles.largescreendiv}>
          <ul id={styles.largescreendiv_a}>
            <p id={styles.largescreendiv_a_title}>Courses</p>
            <li onClick={() => handleButtonClick(1)} className={selectedButton === 1 ? styles.activee : ''}>
              <p>Popular Courses {selectedButton === 1 ? <MdArrowForwardIos className="text-2xl" /> : <MdArrowBackIos className="text-2xl" />}</p>
            </li>
            {/* <hr className='w-[90%] mx-auto my-1' />
            <li onClick={() => handleButtonClick("Packages")} className={selectedButton === "Packages" ? styles.activee : ''}>
              <p>Packages{selectedButton === "Packages" ? <MdArrowForwardIos className="text-2xl" /> : < MdArrowBackIos className="text-2xl" />}</p>
            </li> */}
            <hr className='w-[90%] mx-auto my-1' />
            <p className='text-lg m-2 mb-0 mx-3 pl-1 font-semibold text-center'>FRM<sup>®</sup></p>
            <hr className='w-[30%] mx-auto mb-1' />
            <div className='mx-3'>
              <li onClick={() => handleButtonClick("FRM_Part-1")} className={selectedButton === "FRM_Part-1" ? styles.activee : ''}>
                <p>Part-1{selectedButton === "FRM_Part-1" ? <MdArrowForwardIos className="text-2xl" /> : < MdArrowBackIos className="text-2xl" />}</p>
              </li>
              <li onClick={() => handleButtonClick("FRM_Part-2")} className={selectedButton === "FRM_Part-2" ? styles.activee : ''}>
                <p>Part-2 {selectedButton === "FRM_Part-2" ? <MdArrowForwardIos className="text-2xl" /> : < MdArrowBackIos className="text-2xl" />}</p>
              </li>
            </div>
            <hr className='w-[90%] mx-auto my-1' />
            <p className='text-lg m-2 mb-0 mx-3 font-semibold text-center'>PRM</p>
            <hr className='w-[30%] mx-auto mb-1' />
            <div className='mx-3 '>
              <li onClick={() => handleButtonClick("PRM_Exam-1")} className={selectedButton === "PRM_Exam-1" ? styles.activee : ''}>
                <p>Exam-1 {selectedButton === "PRM_Exam-1" ? <MdArrowForwardIos className="text-2xl" /> : < MdArrowBackIos className="text-2xl" />}</p>
              </li>
            </div>
            <hr className='w-[90%] mx-auto my-1' />
            {/* Add similar onClick and background styling for other categories */}
          </ul>
          {/* remove */}
          <div id={styles.largescreendiv_b} >
            {selectedButton === 1 && (
              <div id={styles.largescreencoursediv} >
                {Popularcourse.map((a, index) => (
                  <CourseCard a={a} key={index} />
                ))}
              </div>
            )}
            {/* {selectedButton === "Packages" && (
              <div id={styles.largescreencoursediv} >
                {Popularcourse.map((a, index) => (
                  <CourseCard a={a} key={index} />
                ))}
              </div>
            )} */}
            {selectedButton === "FRM_Part-1" && (
              <div id={styles.largescreencoursediv} >
                {Frm_p1.map((a, index) => (
                  <CourseCard a={a} key={index} />
                ))}
              </div>
            )}
            {selectedButton === "FRM_Part-2" && (
              <div id={styles.largescreencoursediv} >
                {Frm_p2.map((a, index) => (
                  <CourseCard a={a} key={index} />
                ))}
              </div>
            )}
            {selectedButton === "PRM_Exam-1" && (
              <div id={styles.largescreencoursediv} >
                {Prm_e1.map((a, index) => (
                  <CourseCard a={a} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div id={styles.smallscreendiv}>
        <ul>
          <hr className='w-[90%] mx-auto my-2' />
          <li onClick={() => handleButtonClick(1)} className={selectedButton === 1 ? styles.activee : ''}>
            <p>Popular Courses {selectedButton === 1 ? <IoIosArrowDown className="text-2xl" /> : <IoIosArrowUp className="text-2xl" />}</p>
          </li>
          {selectedButton === 1 && (
            <div id={styles.coursediv} >
              {Popularcourse.map((a, index) => (
                <CourseCard a={a} key={index} />
              ))}
            </div>
          )}
          {/* <hr className='w-[90%] mx-auto my-2' />
          <li onClick={() => handleButtonClick("Packages")} className={selectedButton === "Packages" ? styles.activee : ''}>
            <p>Packages{selectedButton === "Packages" ? <IoIosArrowDown className="text-2xl" /> : < IoIosArrowUp className="text-2xl" />}</p>
          </li>
          {selectedButton === "Packages" && (
            <div id={styles.coursediv} >
              {Popularcourse.map((a, index) => (
                <CourseCard a={a} key={index} />
              ))}
            </div>
          )} */}
          <hr className='w-[90%] mx-auto my-2' />
          <h1 className='text-[1.15rem] font-[700] my-[10px]' >FRM<sup>®</sup></h1>
          <hr className='w-[30%] mx-auto mb-1' />
          <div id={styles.subdiv}>
            <li onClick={() => handleButtonClick("FRM_Part-1")} className={selectedButton === "FRM_Part-1" ? styles.activee : ''}>
              <p>Part-1{selectedButton === "FRM_Part-1" ? <IoIosArrowDown className="text-2xl ml-4" /> : < IoIosArrowUp className="text-2xl  ml-4" />}</p>
            </li>
            <li onClick={() => handleButtonClick("FRM_Part-2")} className={selectedButton === "FRM_Part-2" ? styles.activee : ''}>
              <p>Part-2 {selectedButton === "FRM_Part-2" ? <IoIosArrowDown className="text-2xl ml-4" /> : < IoIosArrowUp className="text-2xl ml-4" />}</p>
            </li>
          </div>
          {selectedButton === "FRM_Part-1" && (
            <div id={styles.coursediv} >
              {Frm_p1.map((a, index) => (
                <CourseCard a={a} key={index} />
              ))}
            </div>
          )}
          {selectedButton === "FRM_Part-2" && (
            <div id={styles.coursediv} >
              {Frm_p2.map((a, index) => (
                <CourseCard a={a} key={index} />
              ))}
            </div>
          )}
          <hr className='w-[90%] mx-auto my-2' />
          <h1 className='text-[1.15rem] font-[700] my-[10px]' >PRM</h1>
          <hr className='w-[30%] mx-auto mb-1' />
          <div id={styles.subdiv}>
            <li onClick={() => handleButtonClick("PRM_Exam-1")} className={selectedButton === "PRM_Exam-1" ? styles.activee : ''}>
              <p>Exam-1 {selectedButton === "PRM_Exam-1" ? <IoIosArrowDown className="text-2xl ml-5" /> : < IoIosArrowUp className="text-2xl ml-5" />}</p>
            </li>
          </div>
          {selectedButton === "PRM_Exam-1" && (
            <div id={styles.coursediv} >
              {Prm_e1.map((a, index) => (
                <CourseCard a={a} key={index} />
              ))}
            </div>
          )}
          <hr className='w-[90%] mx-auto my-2' />
        </ul>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Courses;
