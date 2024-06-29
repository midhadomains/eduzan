"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaListOl } from "react-icons/fa";
import { Link } from 'react-scroll';

const TableOfContents = ({ TOC }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [isVisible, setIsVisible] = useState(window.innerWidth > 1370);

    const sections = useMemo(() => TOC || [], [TOC]);
    const headerOffset =70; // Adjust this value to match the height of your fixed header

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1370) {
                setIsVisible(true);
            }
        };

        const handleScroll = () => {
            if (!isVisible) return; // Do nothing if TOC is not visible

            const scrollPosition = window.scrollY + headerOffset;
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
        const elementPosition = element ? element.offsetTop : 0;
        const offsetPosition = elementPosition - headerOffset;

        if (window.innerWidth < 1370) {
            setIsVisible(prevState => !prevState);
        }

        if (element) {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };
    return (
        <div>
            <button onClick={toggleVisibility} className="fixed xl:sticky  top-[65px] md:top-[73px] xl:top-[100px] xl:-ml-3 right-4 mg:left-2  z-30 bg-[#F6F2E9] text-black lg:text-[25px] p-3 rounded-xl shadow-sm max-w-[40px] lg:max-w-[50px]">
                {isVisible ? <IoClose /> : <FaListOl />}
            </button>
            <div className={`table-of-contents bg-white shadow-lg z-20 w-[230px] md:w-[260px] fixed xl:sticky mg:left-2 right-1 top-[100px] rounded-t-xl border-l border-r border-[#BE4E1E42] transition-all ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ transform: `translateX(${isVisible ? '0%' : '100%'})` }}>
                <h2 className="md:text-[20px] font-semibold text-center bg-[#BE4E1E] rounded-t-xl py-3 text-[16px] text-[#F7F7E0]">Table of Contents</h2>
                <ul className='px-2 z-20'>
                    {sections.map(section => (
                        <React.Fragment key={section.id}>
                            <li className="py-2 text-[13px] md:text-[16px]">
                                <Link
                                    href={`#${section.id}`}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`hover:text-[#BE4E1E] ${activeSection === section.id ? 'text-[#BE4E1E] font-[600] ' : ''}`}
                                >
                                    {section.title}
                                </Link>
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
