"use client"
// import Image from "next/image"
// import styles from "./Course.module.css"
// import React, { useState } from 'react';
// import Footer from "../../components/SiteFooter";
// import Navbar from "../../components/SiteHeader";
// import CourseCard from "../../components/CourseCard";

// function Accordion() {
//   const [selectedButton, setSelectedButton] = useState(1);
//   const handleButtonClick = (buttonIndex) => {
//     setSelectedButton((prevSelected) => (prevSelected === buttonIndex ? null : buttonIndex));
//   };

//   const [selectedSubButton, setSelectedSubButton] = useState(null);

//   const handleSubButtonClick = (subButtonIndex) => {
//     setSelectedSubButton((prevSelected) => (prevSelected === subButtonIndex ? null : subButtonIndex));
//   };



//   return (
//     <div>
//       <Navbar />
//       <div id={styles.largescreendiv}>
//         <ul id={styles.largescreendiv_a}>
//           <li >Categories</li>
//           <hr/>
//           <li onClick={() => handleButtonClick(1)}><p>Popular Courses</p></li>
//           <li>FRM
//             {selectedButton === 2 && (
//               <div id={styles.largescreensubbuttondiv}>
//                 <button>Part-1</button>
//                 <button>Part-2</button>
//               </div>
//             )}
//           </li>
//           <li>CFA</li>
//           <li>PRM</li>
//         </ul>


import Image from "next/image"
import styles from "./Course.module.css"
import React, { useState } from 'react';
import Footer from "../../components/SiteFooter";
import Navbar from "../../components/SiteHeader";
import CourseCard from "../../components/CourseCard";

function Accordion() {
  const Popularcourse = [
    {
      "_id": "65dece50fc4d9b16670b83dd",
      "name": "FRM part-1",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-2-Training-Package-1-Self-Paced-Course.png",
      "price": "₹ 29,999",
      "other": "₹ 30,000",
      "instructor": "Micky Midha",
      "details": [
        "2000hr of Video",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzess,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/MidhaFin-FRM-Part-1-Sample-Course-6305fc9ae4b05c100c2d3a35",
      "rating": 5,
      "tp": "TP-1",
      "category": "FRM",
      "sub_category": "part-1"
    },
    {
      "_id": "65dece50fc4d9b16670b83dd",
      "name": "FRM part-1",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-2-Self-paced-course.png",
      "price": "₹ 29,999",
      "other": "₹ 30,000",
      "instructor": "Micky Midha",
      "details": [
        "2000hr of Video",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzess,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/MidhaFin-FRM-Part-1-Sample-Course-6305fc9ae4b05c100c2d3a35",
      "rating": 5,
      "tp": "TP-1",
      "category": "FRM",
      "sub_category": "part-1"
    },
    {
      "_id": "65dece50fc4d9b16670b83dd",
      "name": "FRM part-1",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-PART-2-Sample-Course.png",
      "price": "₹ 29,999",
      "other": "₹ 30,000",
      "instructor": "Micky Midha",
      "details": [
        "2000hr of Video",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzess,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/MidhaFin-FRM-Part-1-Sample-Course-6305fc9ae4b05c100c2d3a35",
      "rating": 5,
      "tp": "TP-1",
      "category": "FRM",
      "sub_category": "part-1"
    },
    {
      "_id": "65dece50fc4d9b16670b83dd",
      "name": "FRM part-1",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-TP2-plus-FRM-Part-2-TP1.png",
      "price": "₹ 29,999",
      "other": "₹ 30,000",
      "instructor": "Micky Midha",
      "details": [
        "2000hr of Video",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzess,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/MidhaFin-FRM-Part-1-Sample-Course-6305fc9ae4b05c100c2d3a35",
      "rating": 5,
      "tp": "TP-1",
      "category": "FRM",
      "sub_category": "part-1"
    }
  ]
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubButton, setSelectedSubButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton((prevSelected) => (prevSelected === buttonIndex ? null : buttonIndex));
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
      <div >
        <Navbar />
        <div id={styles.largescreendiv}>
          <ul id={styles.largescreendiv_a}>
            <li onClick={() => handleButtonClick(1)} style={{ background: selectedButton === 1 ? 'pink' : '' }}>
              <p>Popular Courses</p>
            </li>
            <li onClick={() => handleCategoryClick("FRM")} style={{ background: selectedCategory === "FRM" ? 'pink' : '' }}>
              FRM
              {selectedCategory === "FRM" && (
                <div id={styles.largescreensubbuttondiv}>
                  <button onClick={() => handleSubButtonClick("Part-1")} style={{ background: selectedSubButton === "Part-1" ? 'pink' : '' }}>Part-1</button>
                  <button onClick={() => handleSubButtonClick("Part-2")} style={{ background: selectedSubButton === "Part-2" ? 'pink' : '' }}>Part-2</button>
                </div>
              )}
            </li>
            <li onClick={() => handleButtonClick("CFA")} style={{ background: selectedButton === "CFA" ? 'pink' : '' }}>CFA</li>
            <li onClick={() => handleButtonClick("PRM")} style={{ background: selectedButton === "PRM" ? 'pink' : '' }}>PRM</li>
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
          </div>
        </div>

        <div>
          <div id={styles.smallscreendiv}>
            <div id={styles.smhiddenbutton}>
              <button className='w-[300px] min-w-[150px] bg-white border my-2 p-4' onClick={() => handleButtonClick(1)}>Popular courses</button>
            </div>
            {selectedButton === 1 && (
              <div id={styles.coursediv} >
                {Popularcourse.map((a, index) => (
                  <div key={index} id={styles.coursecardparentdiv}>
                    <Image width={600} height={400} src={a.img} alt={a.title} className="w-[100%]" />
                    <h1 className=' my-1 font-medium'>{a.title}</h1>
                    <p>{a.type}</p>
                    <p className='my-1 font-medium'>₹ {a.price}</p>
                    <p className='w-100% bg-[#FFF5EE] font-medium  text-xl p-2 hover:bg-[#f6d8c2] hover:cursor-pointer'>ENROLL NOW</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <div id={styles.smhiddenbutton}>
              <button className='w-[300px] min-w-[150px] bg-white my-2 p-4' onClick={() => handleButtonClick(2)}>FRM</button>
            </div>
            {selectedButton === 2 && (
              <div>
                <div className='flex justify-between'>
                  <button className='w-[150px] bg-white border my-2 p-4' onClick={() => handleSubButtonClick('C')}>Part-1</button>
                  <button className='w-[150px] bg-white border my-2 p-4' onClick={() => handleSubButtonClick('D')}>Part-2</button>
                </div>
                <div>
                  {selectedSubButton === 'C' && <div id={styles.coursediv} >
                    {Popularcourse.map((a, index) => (
                      <div key={index} id={styles.coursecardparentdiv}>
                        <div id={styles.coursecarddiva}>
                          <Image width={600} height={400} src={a.img} alt={a.title} className="w-[100%]" />
                          <h1 className=' my-1 font-medium'>{a.title}</h1>
                          <p>{a.type}</p>
                          <p className='my-1 font-medium'>₹ {a.price}</p>
                          <p className='w-100% bg-[#FFF5EE] font-medium  text-xl p-2 hover:bg-[#f6d8c2] hover:cursor-pointer'>ENROLL NOW</p>
                        </div>
                        <div id={styles.coursecarddivb}>
                        </div>
                      </div>
                    ))}
                  </div>}
                </div>
                <div>
                  {selectedSubButton === 'D' && <div id={styles.coursediv} >
                    {Popularcourse.map((a, index) => (
                      <div key={index} id={styles.coursecardparentdiv}>
                        <h1>{a.title}</h1>
                        <Image width={200} height={200} src={a.img} alt={a.title} className="w-[150px] min-w-[150px] border p-5 m-4" />
                        <p>{a.price}</p>
                        <p>{a.type}</p>
                      </div>
                    ))}
                  </div>}
                </div>
              </div>
            )}
          </div>
          <div>
            <div id={styles.smhiddenbutton}>
              <button className='w-[300px] min-w-[150px] bg-white border my-2 p-4' onClick={() => handleButtonClick(3)}>CFA</button>

            </div>
            {selectedButton === 3 && (
              <div>
                <div className='flex justify-between'>
                  <button className='w-[150px] bg-white border my-2 p-4' onClick={() => handleSubButtonClick('E')}>Part-1</button>
                  <button className='w-[150px] bg-white border my-2 p-4' onClick={() => handleSubButtonClick('F')}>Part-2</button>
                </div>
                <div>
                  {selectedSubButton === 'E' &&
                    <div id={styles.coursediv} >
                      {Popularcourse.map((a, index) => (
                        <div key={index} id={styles.coursecardparentdiv}>
                          <h1>{a.title}</h1>
                          <Image width={200} height={200} src={a.img} alt={a.title} className="w-[150px] min-w-[150px] border p-5 m-4" />
                          <p>{a.price}</p>
                          <p>{a.type}</p>
                        </div>
                      ))}
                    </div>}
                </div>
                <div>
                  {selectedSubButton === 'F' &&
                    <div id={styles.coursediv} >
                      {Popularcourse.map((a, index) => (
                        <div key={index} id={styles.coursecardparentdiv}>
                          <h1>{a.title}</h1>
                          <Image width={200} height={200} src={a.img} alt={a.title} className="w-[150px] min-w-[150px] border p-5 m-4" />
                          <p>{a.price}</p>
                          <p>{a.type}</p>
                        </div>
                      ))}
                    </div>}
                </div>
              </div>
            )}
          </div>
          <div>
            <div id={styles.smhiddenbutton}>
              <button id={styles.buttonsmall} onClick={() => handleButtonClick(4)}>PRM</button>
            </div>
            {selectedButton === 4 && (
              <div>
                <div className='flex justify-between'>
                  <button className='w-[150px] bg-white border my-1 p-3' onClick={() => handleSubButtonClick('G')}>Part-1</button>
                  <button className='w-[150px] bg-white border my-1 p-3' onClick={() => handleSubButtonClick('H')}>Part-2</button>
                </div>
                <div>
                  {selectedSubButton === 'G' &&
                    <div id={styles.coursediv} >
                      {Popularcourse.map((a, index) => (
                        <div key={index} id={styles.coursecardparentdiv}>
                          <h1>{a.title}</h1>
                          <Image width={200} height={200} src={a.img} alt={a.title} className="w-[150px] min-w-[150px] border p-5 m-4" />
                          <p>{a.price}</p>
                          <p>{a.type}</p>
                        </div>
                      ))}
                    </div>}
                </div>
                <div>
                  {selectedSubButton === 'H' &&
                    <div id={styles.coursediv} >
                      {Popularcourse.map((a, index) => (
                        <div key={index} id={styles.coursecardparentdiv}>
                          <h1>{a.title}</h1>
                          <Image width={200} height={200} src={a.img} alt={a.title} className="w-[150px] min-w-[150px] border p-5 m-4" />
                          <p>{a.price}</p>
                          <p>{a.type}</p>
                        </div>
                      ))}
                    </div>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accordion;
