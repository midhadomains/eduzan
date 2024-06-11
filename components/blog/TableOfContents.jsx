"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaListOl } from "react-icons/fa";

const TableOfContents = ({ TOC }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [isVisible, setIsVisible] = useState(window.innerWidth > 1370);

    const sections = useMemo(() => TOC || [], [TOC]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1370) {
                setIsVisible(true);
            }
        };

        const handleScroll = () => {
            if (!isVisible) return; // Do nothing if TOC is not visible

            const scrollPosition = window.scrollY;
            const sectionOffsets = sections.map(section => {
                const element = document.getElementById(section.id);
                return element ? {
                    id: section.id,
                    offset: element.offsetTop,
                    height: element.offsetHeight
                } : null;
            }).filter(offset => offset !== null);

            for (let i = 0; i < sectionOffsets.length - 1; i++) {
                const currentSection = sectionOffsets[i];
                const nextSection = sectionOffsets[i + 1];

                if (
                    scrollPosition >= currentSection.offset &&
                    scrollPosition < nextSection.offset &&
                    activeSection !== currentSection.id
                ) {
                    setActiveSection(currentSection.id);
                    break;
                }
            }

            const lastSection = sectionOffsets[sectionOffsets.length - 1];
            if (
                scrollPosition >= lastSection.offset &&
                activeSection !== lastSection.id
            ) {
                setActiveSection(lastSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [sections, activeSection, isVisible]);

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
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={toggleVisibility} className="fixed top-[70px] md:top-[90px] right-1 sm:right-[20px] z-30 bg-[#F6F2E9] text-black sm:text-[25px] p-3 rounded-xl shadow-xl ">
                {isVisible ? <IoClose /> : <FaListOl />}
            </button>
            <div className={`table-of-contents bg-white shadow-2xl z-20 w-[230px] md:w-[280px] fixed right-1 top-[100px] rounded-t-xl m-5 border-l border-r border-[#BE4E1E42] transition-all ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ transform: `translateX(${isVisible ? '0%' : '100%'})` }}>
                <h2 className="md:text-[20px] font-semibold text-center bg-[#BE4E1E] rounded-t-xl py-3 text-[16px] text-[#F7F7E0]">Table of Contents</h2>
                <ul className='px-2 z-20'>
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
