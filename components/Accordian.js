"use client"
import React, { useState } from 'react'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import AOS from "aos";
import "aos/dist/aos.css";

const Accordion = ({buttonsData}) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const toggleAccordion = (buttonId) => {
        setSelectedButton(selectedButton === buttonId ? null : buttonId);
    };
    
    return (
        <div className="accordion-container pt-12 sm:pl-4 sm:pr-4 md:pl-8 md:pr-8 lg:pl-20 lg:pr-20">
            {buttonsData.map((button) => (
                <div key={button.id} className="accordion-item">
                    <button
                        className={`accordion flex items-center pl-4 pr-4 mt-1 shadow-inner sm:h-16 lg:h-14 p-4 text-left w-full bg-white text-black hover:bg-[#FFF5EE] transition-all duration-300 ease-in-out ${selectedButton === button.id ? 'bg-gray-700' : ''
                            }`}
                        onClick={() => toggleAccordion(button.id)}
                    >
                        <h1 className="flex-grow pr-2 text-lg font-semibold duration-500">{button.text}</h1>
                        <h1>{selectedButton === button.id ? <IoIosArrowDropupCircle className="text-2xl" /> : <IoIosArrowDropdownCircle className="text-2xl" />}</h1>
                    </button>
                    {selectedButton === button.id && (
                        <div
                            className={`accordion-content pb-6 bg-white p-4 border rounded-b-xl mb-2 transition-all duration-1000 delay-75 ease-in-out max-h-96 overflow-y-hidden`}
                        >
                            <p className="accordion-text-with-border text-sm lg:text-base transition-all duration-1000 delay-75	 ease-in-out max-h-96 text-gray-700">{button.data}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}


export default Accordion;