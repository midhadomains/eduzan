"use client"
import Link from 'next/link'
import React, { useState } from "react";
import Image from 'next/image'
import { IoMenu, IoClose } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdCall } from "react-icons/md";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="mx-auto sticky top-0 z-10 bg-[#FFFDF6] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className='max-w-full '>
                <div className="flex items-center justify-between w-[100%] h-[55px] md:h-[70px] max-w-[2500px] mx-auto">
                    <Link href='/'><Image width={250} height={40} className='ml-1 sm:ml-4 md:item-left w-[200px] h-[30px] lg:w-fit lg:h-[40px] ' src="/Logo-with-garp.svg" alt="MidhaFin Logo" /></Link>
                    <div className='flex'>
                        <Link href="tel:+91 91551 99555" className='m-auto w-fit'><MdCall className='block md:hidden m-auto text-[#6A1C1A] text-[25px] ' /></Link>
                        <Link href='https://edu.midhafin.com/s/authenticate' className='block md:hidden bg-[#6A1C1A] py-1 px-5 rounded-3xl text-[#F9ECC7] mx-4 max-w-[100px] w-fit'>Login</Link>
                        {toggle ?
                            <IoClose onClick={() => setToggle(!toggle)} className="text-3xl md:hidden block mr-2 text-[#9A391D]" />
                            : <CgMenuLeftAlt onClick={() => setToggle(!toggle)} className="text-3xl md:hidden block mr-2 text-[#9A391D]" />}
                    </div>

                    <ul className="hidden md:flex  justify-around flex-nowrap  max-w-[1000px] w-[100%]">
                        <NavItem to='/' name='Home' />
                        {/* <NavItem to="/blog" name="Blogs" /> */}
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
                    <ul className={`md:hidden w-[50%] sm:w-[40%] md-[30%] h-auto fixed bg-white top-[60px]  shadow-2xl
                     ${toggle ? "right-[0]" : "hidden"}`}>
                        <SmNavItem to='/' name='Home' />
                        <hr />
                        {/* <NavItem to="/blog" name="Blogs" /> */}
                        <SmNavItem to="https://edu.midhafin.com/s/store" name="Courses" />
                        <hr />
                        <SmNavItem to="/reviews" name="Reviews" />
                        <hr />
                        <SmNavItem to="/contact-us" name="Contact Us" />
                        <hr />
                        <Link href='https://frm.midhafin.com/'>
                            <li className='text-[1.1rem] font-[500] p-4  px-5 bg-[#6A1C1A] text-white '>FRM</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ to, name }) => {
    return (
        <li className="relative group  p-4 md:p-0 my-auto">
            <Link
                href={to}
                className="text-[1.1rem] font-[500] cursor-pointer pb-2 px-1 hover:text-[#BE4E1E]  transition duration-300 ">
                {name}
            </Link>
        </li>
    );
};
const SmNavItem = ({ to, name }) => {
    return (
        <li className="relative group  p-4 md:p-0 my-auto text-[#6A1C1A]">
            <Link
                href={to}
                className="text-[1.1rem] font-[500] cursor-pointer pb-2 px-1 hover:text-[#BE4E1E]  transition duration-300 ">
                {name}
            </Link>
        </li>
    );
};
export default Navbar;


