"use client"
import Link from 'next/link'
import React, { useState } from "react";
import Image from 'next/image'
import { IoMenu, IoClose } from "react-icons/io5";
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="mx-auto sticky top-0 z-10 bg-[#FFFDF6] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className='max-w-full '>
                <div className="flex items-center justify-between w-[100%] h-[55px] md:h-[70px] max-w-[2500px] mx-auto">
                    <Link href='/'><Image width={250} height={40} className='ml-4  md:ml-9  md:item-left w-[200px] h-[30px] lg:w-fit lg:h-[40px] ' src="/Logo-with-garp.svg" alt="MidhaFin Logo" /></Link>
                    {toggle ?
                        <IoClose onClick={() => setToggle(!toggle)} className="text-3xl md:hidden block mr-2" />
                        : <IoMenu onClick={() => setToggle(!toggle)} className="text-3xl md:hidden block mr-2" />}

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
                        <li className="relative group bg-[#6A1C1A] hover:bg-[#BE4E1E] rounded-3xl py-2 px-9 text-white text-[20px] transition duration-300 flex-shrink-0">
                            <Link href='https://edu.midhafin.com/s/authenticate' className="text-[1.2rem] font-[500] cursor-pointe">Log in</Link>
                        </li>
                    </ul>
                    {/* Responsive */}
                    <ul className={`md:hidden w-[50%] sm:w-[40%] md-[30%] h-auto fixed bg-[#ecebea]  backdrop-filter backdrop-blur-lg bg-opacity-95 top-[60px] 
                     ${toggle ? "right-[0]" : "hidden"}`}>
                        <NavItem to='/' name='Home' />
                        {/* <NavItem to="/blog" name="Blogs" /> */}
                        <NavItem to="https://edu.midhafin.com/s/store" name="Courses" />
                        <NavItem to="/reviews" name="Reviews" />
                        <NavItem to="/contact-us" name="Contact Us" />
                        <NavItem to="https://edu.midhafin.com/s/authenticate" name="Login" />
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
                className="text-[1.1rem] font-[500] cursor-pointe pb-2 px-1 hover:text-[#BE4E1E]  transition duration-300 ">
                {name}
            </Link>
        </li>
    );
};
export default Navbar;

