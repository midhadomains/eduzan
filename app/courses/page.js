"use client"
import Image from "next/image"
import styles from "./Course.module.css"
import React, { useState } from 'react';

function Accordion() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton((prevSelected) => (prevSelected === buttonIndex ? null : buttonIndex));
  };

  const [selectedSubButton, setSelectedSubButton] = useState(null);

  const handleSubButtonClick = (subButtonIndex) => {
    setSelectedSubButton((prevSelected) => (prevSelected === subButtonIndex ? null : subButtonIndex));
  };

  const Popularcourse = [{ title: "FRM", price: 20000, img: "https://flowbite.com/docs/images/logo.svg", type: "paid" }, { title: "FRM-1", price: 20000, img: "https://flowbite.com/docs/images/logo.svg", type: "paid" }, { title: "FR3", price: 20000, img: "https://flowbite.com/docs/images/logo.svg", type: "paid" }, { title: "FRM", price: 20000, img: "https://flowbite.com/docs/images/logo.svg", type: "paid" }, { title: "FRM-1", price: 20000, img: "https://flowbite.com/docs/images/logo.svg", type: "paid" }, { title: "FR3", price: 20000, img: "https://flowbite.com/docs/images/logo.svg", type: "paid" }]

  return (
    <div>
      <div id={styles.largescreendiv} >
        <ul>
          <li>Popularcourse</li>
          <li onClick={() => handleButtonClick(1)}>FRM
            {selectedButton === 1 && (
              <div id={styles.largescreensubbuttondiv}>
                <button>Part-1</button>
                <button>Part-2</button>
              </div>
            )}
          </li>
          <li>CFA</li>
          <li>PRM</li>
        </ul>
        <div>

        </div>
      </div>

      <div>
        <div id={styles.smallscreendiv}>
          <div id={styles.smhiddenbutton}>
            <button className='w-[300px] min-w-[150px] bg-cyan-300 my-2 p-4' onClick={() => handleButtonClick(1)}>Popular courses</button>
          </div>
          {selectedButton === 1 && (
            <div id={styles.coursediv} >
              {Popularcourse.map((a, index) => (
                <div key={index} id={styles.coursecardparentdiv}>
                  <h1>{a.title}</h1>
                  <Image width={200} height={200} src={a.img} alt={a.title} />
                  <p>{a.price}</p>
                  <p>{a.type}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div id={styles.smhiddenbutton}>
            <button className='w-[300px] min-w-[150px] bg-cyan-300 my-2 p-4' onClick={() => handleButtonClick(2)}>FRM</button>
          </div>
          {selectedButton === 2 && (
            <div>
              <div>
                <button className='w-[150px] bg-cyan-300 my-2 p-4' onClick={() => handleSubButtonClick('C')}>Part-1</button>
                {selectedSubButton === 'C' && <div id={styles.coursediv} >
                  {Popularcourse.map((a, index) => (
                    <div key={index} id={styles.coursecardparentdiv}>
                      <h1>{a.title}</h1>
                      <Image width={200} height={200} src={a.img} alt={a.title} className="w-[200px] min-w-[200px] border p-5 m-4" />
                      <p>{a.price}</p>
                      <p>{a.type}</p>
                    </div>
                  ))}
                </div>}
              </div>
              <div>
                <button className='w-[150px] bg-cyan-300 my-2 p-4' onClick={() => handleSubButtonClick('D')}>Part-2</button>
                {selectedSubButton === 'D' && <div id={styles.coursediv} >
                  {Popularcourse.map((a, index) => (
                    <div key={index} id={styles.coursecardparentdiv}>
                      <h1>{a.title}</h1>
                      <Image width={200} height={200} src={a.img} alt={a.title} className="w-[200px] min-w-[200px] border p-5 m-4" />
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
            <button className='w-[300px] min-w-[150px] bg-cyan-300 my-2 p-4' onClick={() => handleButtonClick(3)}>CFA</button>

          </div>
          {selectedButton === 3 && (
            <div>
              <div>
                <button className='w-[150px] bg-cyan-300 my-2 p-4' onClick={() => handleSubButtonClick('E')}>Part-1</button>
                {selectedSubButton === 'E' &&
                  <div id={styles.coursediv} >
                    {Popularcourse.map((a, index) => (
                      <div key={index} className=" border p-5 m-4">
                        <h1>{a.title}</h1>
                        <Image width={200} height={200} src={a.img} alt={a.title} className="w-[200px] min-w-[200px] border p-5 m-4" />
                        <p>{a.price}</p>
                        <p>{a.type}</p>
                      </div>
                    ))}
                  </div>}
              </div>
              <div>
                <button className='w-[150px] bg-cyan-300 my-2 p-4' onClick={() => handleSubButtonClick('F')}>Part-2</button>
                {selectedSubButton === 'F' &&
                  <div id={styles.coursediv} >
                    {Popularcourse.map((a, index) => (
                      <div key={index} className=" border p-5 m-4">
                        <h1>{a.title}</h1>
                        <Image width={200} height={200} src={a.img} alt={a.title} className="w-[200px] min-w-[200px] border p-5 m-4" />
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
              <div>
                <button className='w-[150px] bg-cyan-300 my-2 p-4' onClick={() => handleSubButtonClick('G')}>Part-1</button>
                {selectedSubButton === 'G' &&
                  <div id={styles.coursediv} >
                    {Popularcourse.map((a, index) => (
                      <div key={index} className=" border p-5 m-4">
                        <h1>{a.title}</h1>
                        <Image width={200} height={200} src={a.img} alt={a.title} className="w-[200px] min-w-[200px] border p-5 m-4" />
                        <p>{a.price}</p>
                        <p>{a.type}</p>
                      </div>
                    ))}
                  </div>}
              </div>
              <div>
                <button className='w-[150px] bg-cyan-300 my-2 p-4' onClick={() => handleSubButtonClick('H')}>Part-2</button>
                {selectedSubButton === 'H' &&
                  <div id={styles.coursediv} >
                    {Popularcourse.map((a, index) => (
                      <div key={index} className=" border p-5 m-4">
                        <h1>{a.title}</h1>
                        <Image width={200} height={200} src={a.img} alt={a.title} className="w-[200px] min-w-[200px] border p-5 m-4" />
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
  );
}

export default Accordion;
