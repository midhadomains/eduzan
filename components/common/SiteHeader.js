
"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdCall } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [prevScrollPos]);
    return (
        <>
            <nav
                ref={navbarRef}
                className={`mx-auto block sticky top-0 z-30 bg-[#FFFDF6] w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-all duration-300 ease-in-out ${visible ? 'transform translate-y-0' : '-translate-y-full'}`}
            >
                <div className="">
                    <div className="flex items-center justify-between   w-[100%] h-[55px] md:h-[70px] max-w-[1500px] pl-[20px] lg:pl-[50px] pr-[10px] mx-auto overflow:hidden">
                        <Link href='https://www.midhafin.com'>
                            <Image
                                width={250}
                                height={40}
                                className='ml-1 sm:ml-4 md:item-left w-[200px] h-[30px] lg:w-fit lg:h-[40px] '
                                src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/public/Logo-with-garp.svg"
                                alt="MidhaFin Logo"
                            />
                        </Link>
                        <div className='flex'>
                            <Link href="tel:+91 91551 99555" className='m-auto w-fit'>
                                <MdCall className='block mg:hidden m-auto text-[#6A1C1A] text-[25px] ' />
                            </Link>
                            <Link href='https://edu.midhafin.com/s/authenticate' className='block mg:hidden bg-[#6A1C1A] py-1 px-5 rounded-3xl text-[#F9ECC7] mx-4 max-w-[100px] w-fit'>Login</Link>
                            {toggle ? (
                                <IoClose
                                    onClick={() => setToggle(!toggle)}
                                    className="text-3xl mg:hidden block mr-2 text-[#9A391D]"
                                />
                            ) : (
                                <CgMenuLeftAlt
                                    onClick={() => setToggle(!toggle)}
                                    className="text-3xl mg:hidden block mr-2 text-[#9A391D]"
                                />
                            )}
                        </div>

                        <ul className="hidden mg:flex  justify-around flex-nowrap  max-w-[900px] w-[100%]">
                            <NavItem to='/' name='Home' />
                            // <NavItem to="/blog" name="Blog" />
                            {/* <li>
                                <div className="relative inline-block group py-[0.6rem] text-center">
                                    <button className="text-[1.1rem] font-[500] h-[100%] cursor-pointe  px-1 hover:text-[#BE4E1E] my-auto  transition duration-300 ">
                                        <span className=' '>Study Materials</span>
                                    </button>
                                    <div className="absolute -right-4 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 delay-50">
                                        <ul>
                                            <Link href='/frm'><li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">FRM<sup>®</sup> </li></Link>
                                        </ul>
                                    </div>
                                </div>
                            </li> */}
                            <NavItem to="https://edu.midhafin.com/s/store" name="Courses" />
                            <NavItem to="/reviews" name="Reviews" />
                            <NavItem to="/contact-us" name="Contact Us" />
                            <Link href='https://edu.midhafin.com/s/authenticate' className="text-[1.2rem] font-[500] cursor-pointe">
                                <li className="relative group bg-[#6A1C1A] hover:bg-[#BE4E1E] rounded-3xl py-2 px-9 text-white text-[20px] transition duration-300 flex-shrink-0">
                                    Log In
                                </li>
                            </Link>
                        </ul>
                        {/* Responsive */}
                        <ul
                            className={`mg:hidden w-[50%] sm:w-[40%] md-[30%] h-auto fixed bg-white top-[60px]  shadow-2xl
                     ${toggle ? 'right-[0]' : 'hidden'}`}
                        >
                            <SmNavItem to='/' name='Home' />
                            <hr />
                            // <SmNavItem to="/blog" name="Blog" />
                            <hr/>
                            <SmNavItem to="https://edu.midhafin.com/s/store" name="Courses" />
                            <hr />
                            <SmNavItem to="https://frm.midhafin.com/reviews" name="Reviews" />
                            <hr />
                            <SmNavItem to="/contact-us" name="Contact Us" />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

const NavItem = ({ to, name }) => {
    return (
        <li className="relative group  p-4 md:p-0 my-auto">
            <Link
                href={to}
                className="text-[1.1rem] font-[500] cursor-pointer pb-2 px-1 hover:text-[#BE4E1E]  transition duration-300 "
            >
                {name}
            </Link>
        </li>
    );
};
const SmNavItem = ({ to, name }) => {
    return (
        <Link href={to}>
            <li className="text-[1.1rem] font-[500] p-4  px-5 hover:text-[#BE4E1E] ">
                {name}
            </li>
        </Link>
    );
};
export default Navbar;
