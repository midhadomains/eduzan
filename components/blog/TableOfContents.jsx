"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaListOl } from "react-icons/fa";

const TableOfContents = ({ TOC }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
   
    const sections = useMemo(() => TOC, []);

    useEffect(() => {
        if (window.innerWidth !== 0 && window.innerWidth > 800) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sectionOffsets = sections.map(section => {
                const element = document.getElementById(section.id);
                return {
                    id: section.id,
                    offset: element.offsetTop,
                    height: element.offsetHeight
                };
            });

            for (let i = 0; i < sectionOffsets.length - 1; i++) {
                const currentSection = sectionOffsets[i];
                const nextSection = sectionOffsets[i + 1];

                // Check if the bottom of the active section is above the top of the next section
                if (
                    scrollPosition >= currentSection.offset &&
                    scrollPosition < nextSection.offset &&
                    activeSection !== currentSection.id
                ) {
                    setActiveSection(currentSection.id);
                    break;
                }
            }

            // Check if the scroll position is within the last section
            const lastSection = sectionOffsets[sectionOffsets.length - 1];
            if (
                scrollPosition >= lastSection.offset &&
                activeSection !== lastSection.id
            ) {
                setActiveSection(lastSection.id);
            }
        };
       
        window.addEventListener('scroll', handleScroll);
        const handleResize = () => {
            setIsVisible(window.innerWidth > 1300); // Update visibility based on screen width
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [sections, activeSection]);

    const scrollToSection = id => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState); // Toggle visibility state
    };

    return (
        <div>
            <button onClick={toggleVisibility} className="fixed top-[90px] right-[20px] z-10 bg-[#F6F2E9] text-black text-[25px] p-3 rounded-xl shadow-xl ">
                {isVisible ? <IoClose /> : <FaListOl />}
            </button>
            <div className={`table-of-contents bg-white shadow-2xl w-[230px] md:w-[280px] fixed right-6 top-[100px] rounded-t-xl m-5 border-l border-r border-[#BE4E1E42] transition-all ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ transform: `translateX(${isVisible ? '0%' : '100%'})` }}>
                <h2 className=" md:text-[20px] font-semibold  text-center bg-[#BE4E1E] rounded-t-xl py-3 text-[16px] text-[#F7F7E0]">Table of Contents</h2>
                <ul className='px-2 '>
                    {sections.map(section => (
                        <React.Fragment key={section.id}>
                            <li className="py-2 text-[13px] md:text-[16px]">
                                <a
                                    href={`#${section.id}`}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`hover:text-[#BE4E1E] ${activeSection === section.id ? 'text-[#BE4E1E] font-[600] ' : ''}`}
                                >
                                    {section.title}
                                </a>
                            </li>
                            <hr className='w-[80%] mx-auto' />
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TableOfContents;
