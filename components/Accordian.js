"use client"
import React, { useState } from 'react'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import AOS from "aos";
import "aos/dist/aos.css";

const Accordion = ({ buttonsData }) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const toggleAccordion = (buttonId) => {
        setSelectedButton(selectedButton === buttonId ? null : buttonId);
    };

    return (
        <div className="accordion-container max-w-[1200px] mx-auto my-[4rem]">
            <div className='mx-5 mb-9 text-left my-3'>
                <h1 className='text-[40px] md:text-[50px] font-bold my-3'>Frequently Asked <span className='text-[#BE4E1E]'> Questions</span> </h1>
                <hr className='border-4 rounded-3xl my-5 w-[10%]  border-[#9A391D]' />
            </div>
            {buttonsData.map((button) => (
                <div key={button.id} className="accordion-item">
                    <button
                        className={`accordion flex items-center pl-4 pr-4 mt-1  sm:h-16 lg:h-14 p-4 text-left w-full bg-white text-black hover:bg-[#FFF5EE] transition-all duration-300 ease-in-out ${selectedButton === button.id ? 'bg-gray-700' : ''
                            }`}
                        onClick={() => toggleAccordion(button.id)}
                    >
                        <h1 className="flex-grow pr-2 text-lg font-[400] duration-500">{button.text}</h1>
                        <h1>{selectedButton === button.id ? <IoIosArrowDropupCircle className="text-2xl text-[#6A1C1A]" /> : <IoIosArrowDropdownCircle className="text-2xl text-[#6A1C1A]" />}</h1>
                    </button>
                    {selectedButton === button.id && (
                        <div
                            className={`accordion-content pb-6 bg-[#F9F6F4] p-4  rounded-b-xl mb-2 transition-all duration-1000 delay-75 ease-in-out max-h-96 overflow-y-hidden`}
                        >
                            <p className="accordion-text-with-border text-sm lg:text-base transition-all duration-1000 delay-75	 ease-in-out max-h-96 text-[#50535C]">{button.data}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}


export default Accordion;