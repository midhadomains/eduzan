"use client"
import Link from 'next/link'
import React, { useState } from "react";
import Image from 'next/image'
import { IoMenu, IoClose } from "react-icons/io5";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="mx-auto  sticky top-0 z-10 bg-[#d8c9c9] backdrop-filter backdrop-blur-[2px] bg-opacity-40 border-b border-gray-100 firefox:bg-opacity-90">
            <div className='max-w-full '>
                <div className="flex items-center justify-between lg:w-[100%] h-[60px] mx-auto">
                    <Link href='/'><Image width={250} height={150} className=' ml-4 lg:ml-6  md:item-left' src="/Logo-with-garp.webp" alt="MidhaFin Logo" /></Link>
                    {toggle ?
                        <IoClose onClick={() => setToggle(!toggle)} className="text-2xl sm:hidden block" />
                        : <IoMenu onClick={() => setToggle(!toggle)} className="text-2xl sm:hidden block" />}

                    <ul className="hidden sm:flex justify-around sm:w-[70%] md:w-[60%] lg:w-[40%] lg:mr-9">
                        <NavItem to="/courses" name="Courses" />
                        <NavItem to="/blog" name="Blogs" />
                        <NavItem to="/reviews" name="Reviews" />
                        <NavItem to="/contact-us" name="Contact Us" />
                        <NavItem to="https://www.midhafin.com/s/authenicate" name="Login" />
                    </ul>
                    {/* Responsive */}
                    <ul className={`sm:hidden w-[70%] h-auto fixed bg-[#faf1ed]  backdrop-filter backdrop-blur-lg bg-opacity-95 top-[80px] 
                     ${toggle ? "left-[0]" : "left-[-100%]"}`}>
                        <NavItem to="/courses" name="Courses" />
                        <NavItem to="/blog" name="Blogs" />
                        <NavItem to="/reviews" name="Reviews" />
                        <NavItem to="/contact-us" name="Contact Us" />
                        <NavItem to="https://www.midhafin.com/s/authenicate" name="Login" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ to, name }) => {
    return (
        <li className="relative group  hover:text-[#f7a787] p-4 sm:p-0 sm:text-lg md:text-xl">
            <Link
                href={to}
                className="font-semibold  cursor-pointe pb-2 px-1 hover:text-[#6A1C1A] hover:border-b-[4px] border-transparent transition duration-300 group-hover:border-[#6A1B1B]">
                {name}
            </Link>
        </li>
    );
};
export default Navbar;

